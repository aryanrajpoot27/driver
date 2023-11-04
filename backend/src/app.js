const express = require("express");
const path = require("path")
const app = express();
const hbs = require("hbs");
require("./db/conn")

const Register = require("./models/users");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public" );
const template_path = path.join(__dirname, "../templates/views" );
const partials_path = path.join(__dirname, "../templates/partials" );

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(express.static(static_path));

app.set("view engine", "hbs");

app.set("views", template_path);
hbs.registerPartials(partials_path); 

app.get("/" , (req, res) => {
    res.render("index");
});
app.get("/register", (req,res) => {
    res.render("register");
})

app.get("/timeline", (req,res) => {
    res.render("timeline");
})
app.get("/adminpanel", (req,res) => {
    res.render("adminpanel");
})

app.post("/register", async (req,res) => {
   try {

    const registerAdmin = new Register({
        name : req.body.name,
        email:req.body.email,
        password:req.body.password

    })

    const registered  = await registerAdmin.save();
    res.status(201).render("index");

   } catch (error) {
     res.status(400).send(error);
   }
})


app.post("/login", async (req,res) => {
     try {
        const email = req.body.email;
        const password = req.body.password;

       const useremail =  await Register.findOne({email:email})
       
       if(useremail.password === password){
        res.status(201).render("adminpanel");
       }
       else{
        res.send("Invalid Login Details")
       }

     } catch (error) {
        res.status(400).send("Invalid Login Details")
     }
})


app.listen(port, () => {
    console.log(`server is running at port number ${port}`);
})