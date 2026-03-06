const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

const moodRest_API = require('./routes/mood');
app.use('/mood', moodRest_API);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});