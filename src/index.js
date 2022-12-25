const express=require('express');
const route = require('./router/router');
const { default: mongoose }=require('mongoose');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://userProject1:WlhZV1CHyTcTiSlZ@blog.osplkog.mongodb.net/project1", {
    useNewUrlParser: true,
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/',route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});


