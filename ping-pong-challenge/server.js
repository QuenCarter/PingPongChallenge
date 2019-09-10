//Express set up
const express = require('express');
const bodyParser = require('body-parser');
const myServer = express();
myServer.use(bodyParser.json());

//connection information provided by MongoDB Atlas
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://quencarter:S*D%253LAia6C@qcode-xy9yt.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

let collection;

client.connect(err => {
  collection = client.db("ping_pong_challenge").collection("game_records");  
});

myServer.get("/gameRecords", (req, res) =>{
    collection.find().toArray((err, result) => {
        return res.send(result);
    })
});

myServer.put("/gameRecords/:playerName", (req, res) =>{
  const req_player = req.params.playerName;
  const query = {player: req_player};  
  const requested_player = collection.find(query).toArray((err, result) => {

    const req_win = req.body.wins;
    const req_loss = req.body.losses;
    if(result.length > 0){
      const gameRecord = result[0];
      const new_win = req_win + gameRecord.wins;
      const new_loss = req_loss + gameRecord.losses;
      gameRecord.wins = new_win;
      gameRecord.losses = new_loss;

      collection.replaceOne(query, gameRecord, (err, result) => {
          return res.send(gameRecord);
      })
    }else{
      collection.insertOne({player : req_player, wins : req_win, losses : req_loss}, (err, result) => {
        return res.send(result);
      })
    }
  }
  )
});

myServer.listen(process.env.PORT || 5000);