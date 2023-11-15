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
 
router.get('/', async (req, res) => {
    try {
        console.log("req.params is" + req.params)
        console.log("req.query is" +req.query)
        const { owner, listed, archived } = req.query;

        const query = {};
        if (owner !== undefined) {
            query.owner = owner;
        }
        if (listed !== undefined) {
            query.listed = listed === 'true';
        }
        if (archived !== undefined) {
            query.archived = archived === 'false'; 
        }
        console.log(query, typeof (query));
        const nfts = await nft.find(query);
        res.json(nfts);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;