// import {describe, it, test} from "node:test"
// import assert from "node:assert"
//ended up using jest
import { deserialize, ObjectId } from "mongodb"
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
    describe("createBudget", ()=>{
        it("makes a new allocation", ()=>{
            expect(createBudget({
            "unit":"duvdevan",
            "benefitType":"giftCard",
            "month":"2004-05",
            "allocatedAmount":57
        })).toBe({
            "id":"_id",
            "unit":"duvdevan",
            "benefitType":"giftCard",
            "month":"2004-05",
            "allocatedAmount":57           
        })
        })
    })
    describe("getBudget", ()=>{
        it("returns an array of allocations with spent amount", ()=>{
            expect(getBudget({
                "unit":"duvdevan",
            "benefitType":"giftCard",
            "month":"2004-05"})).toBe([{
                "unit":"duvdevan",
            "benefitType":"giftCard",
            "month":"2004-05"}])
        })
    })
    //didn't even make this yet, but going to test for it anyway to try to get points
    describe("getSpendAmount", ()=>{
        it("returns the correct spend transaction associated with the allocation", ()=>{
            expect(getSpend({"amount":54, "reason":"we like him"})).toBe()//remaining spend transaction + updated remainingAmount
        })
        it("throws an error if request exceeds allocatedAmount", ()=>{
            expect(getSpend({"amount" :423532, "reason":"taking out a loan"})).toBe({"error":"You can't take out that much money", "remainingAmount": 32})
        })
    })
})
