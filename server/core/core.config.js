import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./core.db.js"; 
import AppLogger from "./core.logs.js";
import appMiddlewares from "./core.middleware.js";


const app = express();
const port = 5000;

export const runAppConfig = () => {

    // Database connection
    db.connect();


    // CORS setup
    const corsOptions = {
        origin: (origin, callback) => {
            if (!origin || whitelist.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        credentials: true,
    };

     appMiddlewares.forEach(middleware=>{
        app.use(middleware)
    })

    app.use(cors(corsOptions));
    app.use(express.static("node_modules"));
    app.use("/css", express.static("dist"));
    app.use(express.static("public"));
    app.use(bodyParser.urlencoded({ extended: true }));

    // Error handling middleware for CORS
    app.use((err, req, res, next) => {
        if (err.message === "Not allowed by CORS") {
            res.status(403).json({ error: "CORS denied" });
        }
        next();
    });

    const startServer = () => {
        app.listen(port, () => {
     AppLogger.logDebug("init", `Server Started and runinng at http://localhost:${port || 3000}/`);
        });
    };

    return { app, startServer };
};