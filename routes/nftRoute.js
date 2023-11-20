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
        const { owner, islisted, isarchived } = req.query;
        const id = req.params.nftid;
        // const {owner} = req.query;
        console.log(owner + typeof(null));
        console.log(id + "is the id")
        const query = { 
            id: id,
        };

        if (owner !== undefined) {
               if (owner === '' || owner === 'null') {   // this works for http://localhost:3002/nft/id456?owner=null or owner = empty space 
                query.owner = null; 
            } else {
                query.owner = owner; 
            }
        }
        if (isarchived !== undefined) {
               if (isarchived == 'false')
                query.isarchived = false
            else query.isarchived = true
        }
        if (islisted !== undefined) {
             if (islisted == 'false')
                query.islisted = false
            else query.islisted = true
        }
        console.log(query);
          const nfts = await nft.find(query);
        res.json(nfts);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



export default router;