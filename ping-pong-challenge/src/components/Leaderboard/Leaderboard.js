import React, { useState, useEffect } from "react";
import {getGameRecords} from "../../services/game-service";
import "./Leaderboard.css"
import { Paper, Table, TableHead, TableRow, TableBody, TableCell } from "@material-ui/core"

const Leaderboard = () => {
    const [gameRecords, setGameRecords] = useState([]);
    
    getGameRecords(setGameRecords);    


    return (
        <div>
            <Paper className="leaderboard">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Rank</TableCell>
                            <TableCell>Player</TableCell>
                            <TableCell>Wins</TableCell>
                            <TableCell>Losses</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            gameRecords.map(gameRecord => (
                                <TableRow key={gameRecord._id}>
                                    <TableCell>{gameRecord.rank}</TableCell>
                                    <TableCell>{gameRecord.player}</TableCell>
                                    <TableCell>{gameRecord.wins}</TableCell>
                                    <TableCell>{gameRecord.losses}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}
export default Leaderboard;