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
        collection: {
            type : String,
            required : true,
            },
        artist: {
            type : String,
            required : true,
        },
        
        imgurl : {
        type : String,
        required : true,
        },
        owner : {
            type : String,
            required : true,
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
            default: Date.now,
        },
        archived: {
            type: Boolean,  
            default: false,  
        },
        listed: {
            type: Boolean,  
            default: false,  
        },
    },
{
    timestamps : true,
}
);

export const nft = mongoose.model('nft', nftSchema);