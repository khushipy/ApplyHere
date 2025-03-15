const express = require('express');
const mongoose = require('mongoose');
const appRoutes = require('./routes/applicationRoutes');
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/applyhere', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api', appRoutes);
app.listen(5000, () => console.log('Server running on port 5000'));
