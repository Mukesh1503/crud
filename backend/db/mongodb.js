const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://mukesh150327:mukesh1503@cluster0.ebv7poz.mongodb.net/Library")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("failed")
})

const schema =new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        required:true
    }

})

const collection = new mongoose.model("Feedback", schema)

module.exports = collection
