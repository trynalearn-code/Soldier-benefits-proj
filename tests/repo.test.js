// import {describe, it, test} from "node:test"
// import assert from "node:assert"
//ended up using jest
import { ObjectId } from "mongodb"
import {getRecord, createRecord, updateSoldier} from "./repositories/welfareRepo.js"
import {createBudget, getBudget} from "./repositories/budgetRepo.js"
import getSpend from "./repositories/spendRepo.js"

//using jest (npm in readme):
describe("Welfare Benefits", ()=>{
    describe("createRecord", ()=>{
        it("should create a soldier successfully",()=>{
            expect(createRecord({    "unit":"duvdevani",
        "benefitType":"giftCard",
        "details":"something",
        "decisionReason":"just cuz",
        "budgetApproved":true,
        "startDate":2025}).toBe({
    "success": true,
    "data": {
        "unit": "duvdevani",
        "currentbenefitType": "giftCard",
        "history": [
            {
                "startDate": 2025,
                "endDate": null,
                "decisionReason": "just cuz",
                "budgetApproved": true
            }
        ]
    }
}))
        })
    })
        it("should return 409 if an active welfare record already exists for soldierId", ()=>{
            expect(createRecord({    "unit":"duvdevani",
            "benefitType":"giftCard",
            "details":"something",
            "decisionReason":"just cuz",
            "budgetApproved":true,
            "startDate":2025}).toBe({success:false,
                message:"an active welfare record already exists for the soldier"
        }))

    })
    describe("getRecord", ()=>{
        //testing with manual id 1
        it("should return the full record", ()=>{
            expect(getRecord(1).toBe({
                id:ObjectId,
                "soldierId":1,
                "unit":"shiryon",
                "currentBenefitType":'giftCard',
                "history":`BenefitPeriod["startDate":"2015-04-27T19:06:35.000Z", 
                "endDate":"null", "decisonReason":"cuz", "budgetApproved":true,
                "benefitType":"giftCard", "details":"stuff", "cardProvider":"MAX",
                 "monthlyValue":54, "validMerchants":["Goldy's"]`
            }))
        })
        it("should return 404 if no record", ()=>{
            expect(getRecord(4933).toBe(status(404)))
        })
    })
        it("should successfully update the soldier", ()=>{
            expect(updateSoldier({
        "benefitType":"diningHall",
        "details":"some detail",
        "decisionReason":"cuzzz",
        "budgetApproved":false,
        "decisionDate":new Date().toISOString()
}))
        })
})

describe("Budget Entity", ()=>{
    describe("create budget", ()=>{
        it("makes a new allocation", ()=>{
            expect(createBudget())
        })
    })
})
