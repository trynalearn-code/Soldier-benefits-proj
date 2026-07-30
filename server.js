import express from "express";
import "dotenv/config";
import db from "./db/mongodb.js"
import router from "./routes/welfareRouter.js"
import supabase from "./db/supabase.js";
import budgetrouter from "./routes/budgetRouter.js"

const app = express();

app.use(express.json());
app.use(router)

app.listen(process.env.PORT, ()=> console.log(`listening on port ${process.env.PORT}...`));