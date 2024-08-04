import express from 'express';
const router = express.Router();
import translateQuery from '../openai.js';


// Your MongoDB models here
import Client from '../models/Client.js';

router.post('/', async (req, res) => {

    const { query } = req.body;

    console.log(query);



    try {

        // Use OpenAI to translate the query to a MongoDB query
        const mongoQuery = await translateQuery(query);
        //console.log(mongoQuery);

        //console.log('Translated MongoDB query:', mongoQuery);

        // Execute the MongoDB query
        const link = JSON.parse(JSON.parse(mongoQuery));
        console.log(link);

        const result = await Client.aggregate(link);

        res.json({ status: "Success", data: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
