const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle bug report submission
app.post("/submit-bug", (req, res) => {
    const { id, status, platform, severity, module, fromDate, toDate } = req.body;

    // Validate the incoming data
    if (!id || !status || !platform || !severity || !module || !fromDate || !toDate) {
        return res.status(400).send({ error: "All fields are required!" });
    }

    // Simulate saving to a database (for demonstration purposes)
    console.log("Bug Report Received:", req.body);

    // Send success response
    res.status(200).send({
        message: "Bug report submitted successfully!",
        data: req.body,
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
 
