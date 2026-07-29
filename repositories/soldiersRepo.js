import db from "../db/mongodb.js"

const soldiers = db.collection("soldiers")

async function createSoldier(soldier) {
    return await soldiers.insertOne(soldier)
}

async function gets(){
    return await soldiers.find()
}

export default {gets, createSoldier}