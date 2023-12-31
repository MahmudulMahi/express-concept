const express = require('express')
const cors=require("cors")
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
const app = express()

app.use(cors())
app.use(express.json())

// mdmahmudulislam00
// KQ9s2DY86VWtGLbP


const port = process.env.PORT || 5000

// database code


const uri = "mongodb+srv://mdmahmudulislam00:KQ9s2DY86VWtGLbP@cluster0.cjna7hf.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const userCollection =client.db("userDB").collection("users")

    app.post("/users",async(req,res)=>{
      const user =req.body
      const result =await userCollection.insertOne(user)
      console.log(result)
      res.send(result)
    })

    // delete single user
    app.delete("/users/:id",async(req,res)=>{
      const id =req.params.id
      console.log("id",id)
      const query ={_id:new ObjectId(id)}
      const result =await userCollection.deleteOne(query)
      res.send(result)
    })

    // get single data using id
    app.get("/users/:id",async(req,res)=>{
      const id =req.params.id
      console.log("id",id)
      const query ={_id:new ObjectId(id)}
      const result =await userCollection.findOne(query)
      res.send(result)
    })

    // update single data

    app.put("/users/:id",async(req,res)=>{
      const id =req.params.id
      const data=req.body
      
      const filter ={_id:new ObjectId(id)}
      const options={upsert:true}
      const updatedData={
        $set:{
          name:data.name,
          email:data.email,
          password:data.password,
        }
      }
      const result=await userCollection.updateOne(filter,updatedData,options)
      res.send(result)
    })

    app.get("/users",async(req,res)=>{
      const result =await userCollection.find().toArray()
      console.log(result)
      res.send(result)
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello Worsssddddssssssss')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})