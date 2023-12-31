import mongoose from "mongoose";
const nftSchema = mongoose.Schema(
    {
        id : {
            type : String,
            required : true,
        },
        name : {
            type : String,
            required : true,
        },
        description : {
            type : String,
            required : true,
        },
        price: {
        type : Number,
        required : true,
        },
        collections: {
            type : String,
            default : "Art",
        },
        artist: {
            type : String,
            default : "artist_default",
        },
        
        imgurl : {
        type : String,
        required : true,
        },
        owner : {
            type : String,
            default : null,
        },
        creator: {
            type: String,
            default : null,
        },
        createdDate: {
            type: Date,  
            default: Date.now,  
        },
        updated: {
            type: Boolean,  
            default: false,  
        },
        updatedDate: {
            type: Date,
            default: null,
        },
        isarchived: {
            type: Boolean,  
            default: false,  
        },
        islisted: {
            type: Boolean,  
            default: false,  
        },
    },
{
    timestamps : true,
}
);

export const nft = mongoose.model('nft', nftSchema);