import mongoose from "mongoose";
let isConnected = false

export const connectToDB = async ()=>{
    mongoose.set("strictQuery",true);

    if(isConnected){
       
        return  console.log('MongoDb is already connected');
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName:"ShareScape",
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        isConnected = true;
        console.log('mongodb is connected');
    } catch (error) {
        console.log(error);
    }
}
