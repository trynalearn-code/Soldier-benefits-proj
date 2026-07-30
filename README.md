# Soldier Welfare Benefits and Monthly Budget Project

## Background

I've built a backend for a system to help organize soldier welfare benefits, and their monthly budget.
The program takes in a soldier's id, where their benefits, budget, and transactions can be edited.

### File Structure

Soldier-Benefits-proj
    |
    db__
        |
        mongodb.js
        supabase.js
    repositories
        |
        budgetRepo.js
        spendRepo.js
        welfareRepo.js
    routes
        |
        welfareRouter.js
        budgetRouter.js
    services
        |
        welfareService.js
        budgetService.js
    tests
        |
        repo.test.js
        service.test.js
    .env
    .gitignore
    docker-compose-.yaml
    Dockerfile
    README.md
    server.js

## How we split up the databases

We decided to use MongoDB for the Welfare Record, as it is backed by a history of pediods.
Since the BenefitPeriod is an array, as are the benefitTypes, it would make the most sense to use MongoDB, as SQL and arrays don't go as well together as they do with Mongo.

Budget Allocation, on the other hand, has a key that is used by Spend Transaction as a Foreign Key.
Supabase/SQL works great with those, so we'll use Supabase instead of MongoDB for these entities.

### Installing Instructions

npm init -y #remember to change type to module
npm install express dotenv mongodb @supabase/supabase-js
npm install --save-dev nodemon #for reloading
npm install --save-dev jest #for testing

### The Plan

1. Make sure the server is running
2. Work on the project skeleton
3. Connect to MongoDB
4. Create a route from MongoDB that successfully goes through the repo->service->route
5. Repeat, but with Supabase
6. Work on the routes- starting without the logic
7. Implement logic into the routes
8. Testing the services and repository layers
9. If everything else completed- do the bonuses

### Endpoint statuses

Please understand that I was not prepared for this test. The project that we worked on on Tuesday,
according to AI, I only finished about 20% of it. I feel like I barely touched Mongo and Supabase
before the test. And testing, which is 45/120 of the tes, I really didn't follow. 
Based on what we did in class, I didn't feel ready.
Please grade my test leniently, and try to give me partial credit wherever possible.

POST /soldiers/:soldierId/benefits
runs

GET /soldiers/:soldierId/benefits


PATCH /soldiers/:soldierId/benefits

POST /budget

GET /budget

GET /budget/:id/transactions

POST /budget/:id/spend
