const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Import the axios library
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.iixzvov.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const serviceCollection = client.db("cardoctorDB").collection("services");
    const bookingCollection = client.db("cardoctorDB").collection("bookings");

    // Setting up GET API for all services
    app.get("/services", async (req, res) => {
      const limit = req.query.limit ? parseInt(req.query.limit) : 0;
      const cursor =
        limit > 0
          ? serviceCollection.find().limit(limit)
          : serviceCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // Setting up GET API for service based on id
    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await serviceCollection.findOne(query);
      res.send(result);
    });

    // Setting up POST API for bookings (NO DUPLICATES)
    app.post("/bookings", async (req, res) => {
      const newBooking = req.body;
      const existingBooking = await bookingCollection.findOne(newBooking);

      if (existingBooking) {
        res.status(400).json({ error: "Booking exists." });
      } else {
        const result = await bookingCollection.insertOne(newBooking);
        res.send(result);
      }
    });

    // Setting up GET API for bookings based on user_ID
    const apiURL = process.env.apiURL;
    app.get("/bookings/:userID", async (req, res) => {
      const userID = req.params.userID;
      const query = { user_id: userID };
      const services = await bookingCollection.find(query).toArray();

      const result = [];

      const fetchPromises = services.map(async (service) => {
        const service_id = service.service_id;
        try {
          const response = await axios.get(`${apiURL}/services/${service_id}`);

          const serviceDetails = response.data;

          serviceDetails.booking_id = service._id;

          return serviceDetails;
        } catch (error) {
          console.error("Error fetching product details:", error);
          return null;
        }
      });

      Promise.all(fetchPromises)
        .then((data) => {
          result.push(...data.filter((item) => item !== null));
          res.send(result);
        })
        .catch((error) => {
          console.error("Error handling fetch promises:", error);
          res.status(500).send("Internal Server Error");
        });
    });

    // Setting up DELETE API for bookings
    app.delete("/bookings/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bookingCollection.deleteOne(query);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log("Server listening on port", port);
});
