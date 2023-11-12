

function superbowlWin(record) {
    const winningGame = record.find(function(game) {
       return game.result === "W";
    });
    if (winningGame) {
       return winningGame.year;
    }
 }
 
 const record = [
    { year: 2014, result: "L" },
    { year: 2015, result: "W" },
    { year: 2016, result: "L" }
 ];
 