var express = require('express');
var cors = require('cors');
const axios = require('axios');

var app = express();

app.use(cors());

const API_KEY = "RGAPI-3cbaae20-6ecf-4011-8bb7-f6876d77545e";

// Get UUID function
function getPlayerPUUID(playerName){
    return axios.get("https://na1.api.riotgames.com" + "/lol/summoner/v4/summoners/by-name/" + playerName + "?api_key=" + API_KEY)
    .then(response => {
        return response.data.puuid;
    }).catch(err=>err);
}

// Get request past5games
// localhost:4000/past5games
app.get('/past5Games',async(req,res)=>{

    // Name
    const playerName = "FastAsFudg";
    // PUUID
    const PUUID = await getPlayerPUUID(playerName);
    const API_CALL = "https://americas.api.riotgames.com" + "/lol/match/v5/matches/by-puuid/" + PUUID + "/ids" + "?api_key=" + API_KEY;
    
    // get API_CALL
    // will return list of game ids
    const gameIDS = await axios.get(API_CALL)
        .then(response => response.data)
        .catch(err => err)


    //list of game ids  
    console.log(gameIDS);

    // loop through game ids
    // at each loop, get the information based off the id
    var matchArray = [];
    for(var i=0; i<gameIDS.length;i++){
        const matchID = gameIDS[i];
        
    }

    // save information into an array. give array as JSON

});

app.listen(4000,function(){
    console.log("Server started on port 4000");
}); //local host:4000