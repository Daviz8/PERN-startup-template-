
import pg from "pg";



const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Url",
    password: "Money123" ,
    port: 5423 ,
});




export default db;