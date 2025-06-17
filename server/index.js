const express = require('express'); //web server
const cors = require('cors'); //error config
const fs = require('fs'); //local file file system(default)
const path = require('path'); //pth

const app = express();  //store expree in app variable
const PORT = 5000;
const DATA_PATH=path.join(__dirname,"data","product.json")  //it convert to proper path  (__dirname curent path)

app.use(cors());
app.use(express.json()); //return type will be JSON

const readProduct =() => JSON.parse(fs.readFileSync(DATA_PATH)); //get item and convert to JSON
const writeProduct = (data) =>{
    fs.writeFileSync(DATA_PATH,JSON.stringify(data,null,2));
}


app.get('/',(req,res)=>{
    res.send('API is running!');
});

app.get('/api/products',(req,res)=>{
    try{
        const products = readProduct();
        res.json(products);
    }catch(error){
        res.status(500).json({message:"ERROR reading product data"});
    }
});

app.get('/api/products/:id',(req,res)=>{
    const products = readProduct();
    const product= products.find(s => s.id === parseInt(req.params.id));
    if(product){
        res.json(product);
    }else{
        res.status(404).json({message:"Student not found"});
    }
});

app.post("/api/products",(req,res)=>{
    const products = readProduct();
    const newProduct ={...req.body,id:Date.now()};
    products.push(newProduct);
    writeProduct(products);
    res.status(201).json(newProduct);
});

app.put("/api/products/:id",(req,res)=>{
    let products = readProduct();
    const id =parseInt(req.params.id);
    products = products.map((s)=>(s.id === id?{...s,...req.body}:s));
    writeProduct(products);
    res.json({message:"student update successfully"});
});

app.delete("/api/products/:id",(req,res)=>{
    let products=readProduct();
    products = products.filter(s => s.id !== parseInt(req.params.id));
    writeProduct(products);
    res.json({message:"Student deleted successfully"});
});

app.use((req,res)=>{
    res.status(404).json({message:"Route not found"});
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});