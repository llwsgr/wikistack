const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const layout = require('/Users/linweiliu/Desktop/wikistack/views/layout.js')
const app = express();
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}))

app.get('/',(req,res)=>{
    res.send(console.log('hello world!!!!'))
    res.send(layout());
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
