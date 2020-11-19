var team1={
    name:"CSK",
    score: 0,
    runs:[]
};
var team2={
    name:"MI",
    score: 0,
    runs:[]
};

var scores=[0,1,2,3,4,6];

var toss;

window.onload=()=>{
    selectToss();
    updateButton();
}

function selectToss(){
    toss = Math.round(Math.random())+1;
}

function updateTeam(){
    console.log("Team 1 name = "+team1.name);
}

function updateButton(){
    if(toss===1)
        console.log(team1.name+ " Batting");
    else
        console.log(team2.name+ " Batting");
}

handleStrike=()=>{
    var runs = scores[Math.floor(Math.random()*scores.length)];
    if(toss===1)
    {
        team1.runs.push(runs);
        team1.score=calculateScore(team1.runs);
    }
    else
    {
        team2.runs.push(runs);
        team2.score=calculateScore(team2.runs);
    }
    if(team1.runs.length===6 && team2.runs.length===0)
    {
        toss = 2;
        updateScore();
        updateButton();
    }
    if(team2.runs.length===6 && team1.runs.length===0)
    {
        toss = 1;
        updateScore();
        updateButton();
    }
    if((toss===1 && team1.runs.length!=6)||(toss===2 && team2.runs.length!=6))
        updateScore();
    if(team1.runs.length===6 && team2.runs.length===6)
    {
        if(team1.score>team2.score)
            console.log(team1.name + " Wins");
        else if(team1.score < team2.score)
            console.log(team2.name + " wins");
        else
            console.log("Draw");
    }
}

function updateScore(){
    console.log("team1 score = "+team1.score);
    console.log("team2 score = "+team2.score);

}

var calculateScore=(runs)=>{
    return runs.map(num=>{
        return num;
    }).reduce((total,num)=>total+num);
}

