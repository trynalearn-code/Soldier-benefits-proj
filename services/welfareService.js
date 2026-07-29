import welfareRepo from "../repositories/welfareRepo.js";

async function createRecord(soldierData){
    const newSoldier = {
        unit:soldierData.unit,
        benefitType:soldierData.benefitType,
        details:soldierData.details,
        decisionReason:soldierData.decisionReason,
        budgetApproved:soldierData.budgetApproved,
        startDate:soldierData.startDate
    }
    const result = await welfareRepo.createSoldier(newSoldier)
    return result.tostring()
}

async function getRecord(soldierId){
    return await welfareRepo.getRecord(soldierId)
}

async function updateSoldier(soldierData) {
    return await welfareRepo.updateSoldier()
}

export default {createRecord, getRecord, updateSoldier}