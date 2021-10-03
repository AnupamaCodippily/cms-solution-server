import makeConfigTable from "./config-db";
import dotenv from 'dotenv'

// if (process.env.NODE_ENV == "development") {
  dotenv.config();
// }

// database drivers
import { Client } from "pg"
const client = new Client();

async function connectToDB() {
  await client.connect();
  return client;
}

const url = process.env.DM_COMMENTS_DB_URL;
const dbName = process.env.DM_COMMENTS_DB_NAME;

const connection = connectToDB();
const db = makeConfigTable({connection})

export default db;