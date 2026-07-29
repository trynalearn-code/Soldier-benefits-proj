import db from "../db/mongodb.js"

const welfareRecord = db.collection("Welfare Record")

async function createRecord(soldierData) {
    return await welfareRecord.insertOne(soldierData)
}

async function getRecord(){
    return await soldiers.find()
}

export default {getRecord, createRecord}