# Development
Steps for run the app in dev env

1. Boot up the database
```
docker compose up -d
```

2. Rename .env.templ to .env and set up the string connection with real values

3. Make a get request to (localhost:3000/api/seed) to [get the db filled with data]

# Prisma commands
```
npx prisma init
npx prisma migrate
npx prisma generate
````

# Production

# Stage