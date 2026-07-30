import {describe, it, test} from "node:test"
import assert from "node:assert"
import { ObjectId } from "mongodb"
import {getRecord, createRecord, updateSoldier} from "./repositories/welfareRepo.js"

const mockDatabase = {
  findById: async (id) => {
    if (id === 1) {
      return { id: 1, name: 'Alice', email: 'alice@example.com' };
    }
    return null;
  }
};









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
        it("should return the full record", ()=>{
            expect(getRecord(1).toBe({
                id:ObjectId,
                "soldierId":1,
                "unit":"shiryon",

            }))
        })
    })
})
