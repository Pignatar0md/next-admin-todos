# Development
Steps for run the app in dev env

1. Boot up the database
```
docker compose up -d
```

2. Rename .env.templ to .env and set up the string connection with real values
3. Run ``` npm install ````
4. Run ``` npm run dev ```
5. Run ``` npx prisma migrate dev ``` and then ``` npx prisma generate ```
6. Make a get request to (localhost:3000/api/seed) to [get the db filled with data]

# Prisma commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
npx prisma db pull
````

# Production

# Stage