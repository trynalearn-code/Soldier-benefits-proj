import db from "../db/mongodb.js"

const welfareRecord = db.collection("Welfare Record")

async function createRecord(soldierData) {
    return await welfareRecord.insertOne(soldierData)
}

async function getRecord(){
    return await welfareRecord.find()
}

async function updateSoldier(soldierData) {
    return await welfareRecord.insertOne(soldierData)
}

export default {getRecord, createRecord, updateSoldier}