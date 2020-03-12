const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const layout = require('./views/layout.js')
const { db } = require('./models');
db.authenticate().
then(() => {
  console.log('connected to the database');
})

const PORT = 3000;
const syncDb= async()=>{
  await db.sync({force: true})
  // await db.Page.sync()
  // await db.User.sync()
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  })
}
syncDb();

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}))


app.get('/',(req,res)=>{
    res.send(layout('!!!hello world!!!!'));
});


