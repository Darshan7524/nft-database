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
        const nfts = await nft.find()
        res.send(nfts);
        console.log(json(nfts))  
    }
    catch (error) {
        console.log(error)
    }
 })
router.get('/:nftid', async (req, res) => {
    try {
        // const { owner, listed, archived } = req.query;
        const id = req.params.nftid;
        console.log(id + "is the id")
        const nfts = await nft.find({ id: id });
        res.json(nfts);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;