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
router.get('/:nftid', async (req, res) => {     // the param , query are all optional you can exclude any of it
    try {
        const { owner, islisted, isarchived } = req.query;
        const id = req.params.nftid;
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

router.patch('/:nftid', async (req, res) => {
    try {
        // const id = req.params.nftid;
        const id = req.params.nftid.trim();

        const updates = {
            ...req.body,
            updated : true,
            updatedDate : new Date()

        } 
        console.log("req.body is" ,req.body , "\n updates is" , updates)
        // updates.updated = true;
        // updates.updatedDate = new Date();
        const updatedNFT = await nft.findByIdAndUpdate(id, updates, { new: true });
        res.json(updatedNFT);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
export default router;