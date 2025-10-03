const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Medicine Schema
const medicineSchema = new mongoose.Schema({
  source_url: { type: String, default: null },
  name: { type: String, default: null },
  images: { type: [String], default: [] },
  price: { type: Number, default: null },
  mrp: { type: Number, default: null },
  manufacturer: { type: String, default: null },
  composition: { type: String, default: null },
  storage: { type: String, default: null },
  preservative: { type: String, default: null },
  description: { type: String, default: null },
  retailer: { type: String, default: null }
}, { timestamps: true });

const Medicine = mongoose.model("Medicine", medicineSchema);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected");
}).catch(err => console.log(err));

// Import JSON into DB (manual trigger)
app.get("/import", async (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("medicines.json", "utf8"));
    await Medicine.deleteMany({});
    await Medicine.insertMany(data);
    res.send("Medicines imported successfully!");
  } catch (err) {
    console.error("Import error:", err);
    res.status(500).json({ error: "Import failed" });
  }
});

app.get("/count", async (req, res) => {
  const count = await Medicine.countDocuments();
  res.json({ count });
});


// Search API
app.get("/search", async (req, res) => {
  try {
    const query = req.query.q || "";
    const results = await Medicine.find({
      name: { $regex: query, $options: "i" },
    });
    res.json(results);
  } catch (err) {
    console.error("Search error:", err);
    res.status(500).json({ error: "Search failed" });
  }
});

app.get("/medicines/:id", async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine) return res.status(404).json({ message: "Medicine not found" });
    res.json(medicine);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


app.listen(process.env.PORT||5000, () => console.log("Server running on port 5000"));
