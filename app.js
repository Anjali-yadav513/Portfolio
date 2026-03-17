// Load environment variables
require ("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// Import routes
const portfolioRoutes = require("./routes/portfolioRoutes.js");

// Middleware

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Static files

app.use(express.static(path.join(__dirname, "public")));

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

// Database connection
mongoose.connect(process.env.MONGO_URI).then(()=> console.log("MongoDB Connected"))
.catch((err)=> console.log("DB ERROR", err));

// Routes
app.use("/", portfolioRoutes);

// 404 Handler
app.use((req,res) =>{
    res.status(404).send("Page not found");

});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

});
