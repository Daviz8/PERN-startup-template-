import Secret from "./core.secrets";
import pg from "pg";



const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Url",
    password: Secret.pass ,
    port: Secret.port ,
});




export default db;
