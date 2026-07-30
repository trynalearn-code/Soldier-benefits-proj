import { MongoClient } from "mongodb";
import "dotenv/config"

const client = new MongoClient(process.env.MONGO_URI)

await client.connect()

const db = client.db("soldiers")

console.log("We've connected to MongoDb!")

export default db