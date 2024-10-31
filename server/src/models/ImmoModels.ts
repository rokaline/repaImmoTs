import mongoose, { Document, Schema } from 'mongoose';

export type TImmo={
    name:string;
    price:number;
    description:string;
    image:string;
};

export interface IImmo extends TImmo, Document{}

const ImmoSchema:Schema=new Schema({
    name:{type:String, required:true},
    price:{type:Number, required:true},
    description:{type: String, required:true},
    image:{type: String, required:true}
}, {collection:'biensImmo'});

const Immo=mongoose.model<IImmo>('Immo',ImmoSchema);

export default Immo;