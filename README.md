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
    routes
    services
    tests
    .env
    .gitignore
    docker-compose-.yaml
    README.md
    server.js

## How we split up the databases

We decided to use MongoDB for the Welfare Record, as it is backed by a history of pediods.
Since the BenefitPeriod is an array, it would make the most sense to use MongoDB, as SQL doesn't take arrays well.

### Installing Instructions

npm init -y #remember to change type to module
npm install express dotenv mongodb @supabase/supabase-js
npm install --save-dev nodemon #for reloading
npm install --save-dev jest #for testing