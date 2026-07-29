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
        welfareRepo.js
    routes
        |
        welfareRouter.js
    services
        |
        welfareService.js
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
Since the BenefitPeriod is an array, it would make the most sense to use MongoDB, as SQL isn't fitting with arrays.

Budget Allocation, on the other hand, has a key that is used by Spend Transaction as a Foreign Key.
Supabase/SQL works great with those, so we'll use Supabase instead of MongoDB for these entities.

### Installing Instructions

npm init -y #remember to change type to module
npm install express dotenv mongodb @supabase/supabase-js
npm install --save-dev nodemon #for reloading
npm install --save-dev jest #for testing
