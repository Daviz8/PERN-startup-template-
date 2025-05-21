import {config} from "dotenv"

config();

const Secret = {
    
  pass: process.env.PASSWORD,
  port: process.env.PORT
};

export default Secret;

