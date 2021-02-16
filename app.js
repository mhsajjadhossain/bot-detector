const express = require('express')
const ejs = require('ejs');
// Import the bot detection middleware
const isBot = require('isbot')
const app = express()
const path = require('path');
const { Script } = require('vm');
const port = 3000

// isBot.extend([
//     'istat',
//     '\^mozilla/\\d.\d\gi'
// ])


// app.use(isBot);
app.set('view engine', 'ejs');
app.use( express.static( "public" ) );

// routes
app.get('/altr', (req, res) => {
    
    console.log(req.botInfo);

    res.render('pages/altr',{
        title: "Backup Altr",
        btnLink:"https://patrading.xyz/free-channel"
    })
})


app.get('/', (req, res) => {
    if(isBot(req.get('user-agent'))){
        res.render('pages/index',{
            title: "safe page"
        })
    }else{
        console.log(req.get('user-agent'))
        res.render('pages/altr',{
            title: "Altr Page"
        })
    }
    
})


app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))