import axios from "axios";
const config = {headers: {"Content-Type": "application/json"}};
export const getGameRecords = (callback) => {
    
const config = {headers: {"content-type": "application/json"}};
    axios.get('/gameRecords', config ).then((response) => {
        
        const records = response.data;
        const rankedRecords = records.sort((a,b) => {
            const aWinRatio = (a.wins - a.losses);
            const bWinRatio = (b.wins - b.losses);
            return bWinRatio - aWinRatio;
        }).map((record, index) => {
            record.rank = (index + 1);
            return record;
        })
        callback(rankedRecords);
    });
}

export const updateGameRecord = (gameRecord, callback) => {

    axios.put(`/gameRecords/${gameRecord.player}`, gameRecord, config).then((response) => {
        if (callback){
            callback();
        };
    })
}
