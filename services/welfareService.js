import welfareRepo from "./repositories/xrepo";

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

async function getRecord(){
    return await soldiersRepo.getRecord()
}