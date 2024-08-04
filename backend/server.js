import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import queryRoute from './routes/query.js';
import cors from 'cors';
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const mongoURI = 'My Database URL';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));


app.use('/api/queries', queryRoute);
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
