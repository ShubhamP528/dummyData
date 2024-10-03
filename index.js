const express = require("express");
const app = express();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max, decimals) {
  const random = Math.random() * (max - min + 1) + min;
  return random.toFixed(decimals);
}

function generateRandomData() {
  const paymentGateway = {
    paypal: getRandomInt(-3000, 3000),
    craditcard: getRandomInt(-3000, 3000),
    paytm: getRandomInt(-3000, 3000),
  };

  const activeUser = {
    total: getRandomInt(20000, 25000),
    growth: getRandomFloat(0, 10, 2), // Generates a random float with 2 decimal places
  };

  return { paymentGateway, activeUser };
}

app.get("/getdata", (req, res) => {
  const data = {
    saleDistribution: {
      totalSale: 34343.0,
      byWebsite: 4.5,
      byMobile: 2.8,
      byMarket: 2.2,
      byAgent: 1.7,
    },

    salesOverview: {
      profit: 23450,
      expanse: 23450,
    },

    revenveUpdate: [35, 55, 35, 80, 50, 60],
    yearlySales: {
      2023: 5476,
      2022: 4476,
    },

    ...generateRandomData(),
  };

  res.status(200).json(data);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
