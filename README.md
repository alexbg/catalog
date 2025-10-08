# Steps to install

1. Clone the github repository
2. `npm install`

# Steps to run the web
1. `npm run dev`
2. Go to http://localhost:5173/

# Used Technologies
**React Router**
I have used React Router in Framework mode because it give the features like navigate between pages, split code (lazy), Loading pages, etc

**React Query**
I have used React Query to save the products in the cache, so it doesn't make more request to the api, only one

# Notes
The Detail Component do a fetch to get the product even when all the products are already in cache before when Catalog got all of them (data is the same).
I did it to simulate two cases.
1. When The user got directly to detail
2. Usually the data in the Catalog and in the detail are different.