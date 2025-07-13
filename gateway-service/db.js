import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://walmart1:walmart123%23@cluster0.ckaz2rc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("store").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }
  catch(err){
    console.log("Could Not connect to Mongo Error : ",err)
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export default run
