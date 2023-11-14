import express from 'express';
import { nft } from '../models/nftmodel.js';

const router = express.Router();

router.post('/submit', async (req, res) => {
    try {
        const { id, name, description, price, artist, imgurl } = req.body;

        const newNFT = new nft({
            id,
            name,
            description,
            price,
            imgurl,
        });

        const savedNFT = await newNFT.save();

        res.json(savedNFT);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    } 
 })

export default router;