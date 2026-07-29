// import {describe, it, test} from "node:test"
// import assert from "node:assert"
// using jest. installing instructions in readme
import createSoldier from "./repositories/xrepo.js"

describe("createSoldier", ()=>{
    it("should create a soldier successfully",()=>{
        expect(createSoldier({    "unit":"duvdevani",
    "benefitType":"giftCard",
    "details":"something",
    "decisionReason":"just cuz",
    "budgetApproved":true,
    "startDate":2025}).toBe)
    })
})