const mongoose = require("mongoose");

const dburl = "mongodb+srv://aryanrajpoot27:Jhansi123@cluster0.setwt3r.mongodb.net/?retryWrites=true&w=majority"

// const connectionParams = {
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
  
// }
mongoose.connect(dburl).then(() =>{
    console.log(`connection successful`);
}).catch ((e) => {
    console.log(`no connection`);
})
