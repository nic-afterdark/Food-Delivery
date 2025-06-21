import mongoose from "mongoose";

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://iamnischay007:1234@cluster1.r8fpv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1').then(()=>console.log("DB Connected"))
}