let P1R1 = document.getElementById('P1R1');
let P1R2 = document.getElementById('P1R2');
let P1R3 = document.getElementById('P1R3');
let P1R4 = document.getElementById('P1R4');
let P1R5 = document.getElementById('P1R5');
let P1R6 = document.getElementById('P1R6');
let P1R7 = document.getElementById('P1R7');
let P1R8 = document.getElementById('P1R8');
let P1R9 = document.getElementById('P1R9');
let P1R10 = document.getElementById('P1R10');
let P1R11 = document.getElementById('P1R11');
let P1R12 = document.getElementById('P1R12');
let P1R13 = document.getElementById('P1R13');
let P1R14 = document.getElementById('P1R14');
let P1R15 = document.getElementById('P1R15');
P1R1.value = '';
P1R2.value = '';
P1R3.value = '';
P1R4.value = '';
P1R5.value = '';
P1R6.value = '';
P1R7.value = '';
P1R8.value = '';
P1R9.value = '';
P1R10.value = '';
P1R11.value = '';
P1R12.value = '';
P1R13.value = '';
P1R14.value = '';
P1R15.value = '';

let P2R1 = document.getElementById('P2R1');
let P2R2 = document.getElementById('P2R2');
let P2R3 = document.getElementById('P2R3');
let P2R4 = document.getElementById('P2R4');
let P2R5 = document.getElementById('P2R5');
let P2R6 = document.getElementById('P2R6');
let P2R7 = document.getElementById('P2R7');
let P2R8 = document.getElementById('P2R8');
let P2R9 = document.getElementById('P2R9');
let P2R10 = document.getElementById('P2R10');
let P2R11 = document.getElementById('P2R11');
let P2R12 = document.getElementById('P2R12');
let P2R13 = document.getElementById('P2R13');
let P2R14 = document.getElementById('P2R14');
let P2R15 = document.getElementById('P2R15');
P2R1.value = '';
P2R2.value = '';
P2R3.value = '';
P2R4.value = '';
P2R5.value = '';
P2R6.value = '';
P2R7.value = '';
P2R8.value = '';
P2R9.value = '';
P2R10.value = '';
P2R11.value = '';
P2R12.value = '';
P2R13.value = '';
P2R14.value = '';
P2R15.value = '';

let p2score = [];
let p2nokoriscore = [];
let Player2ScoreShoki = 501;
let player2Score = document.getElementById('player2Score');
let player2Leg = document.getElementById('player2Leg');
let player2Average = document.getElementById('player2Average');
let p2Leg = 0;
let p2average = [];
let player2LegShoki = "LEG:" + p2Leg;
let player2AverageShoki = "AVG" + p2average;
player2Leg.innerText = player2LegShoki;
player2Score.innerText = Player2ScoreShoki;
player2Average.innerText = "AVG:" + 0; 
let button1 = document.getElementById('button1');
button1.addEventListener('click', r2p2);

let p1score = [];
let p1nokoriscore = [];
let Player1ScoreShoki = 501;
let player1Score = document.getElementById('player1Score');
let player1Leg = document.getElementById('player1Leg');
let player1Average = document.getElementById('player1Average');
let p1Leg = 0;
let p1average = [];
let player1LegShoki = "LEG:" + p1Leg;
let player1AverageShoki = "AVG:" + p1average;　
player1Leg.innerText = player1LegShoki;
player1Score.innerText = Player1ScoreShoki;
player1Average.innerText = "AVG:" + 0;
let button = document.getElementById('button');
button.addEventListener('click', r1p1);
let Senkous = ["赤の先行です。", "青の先行です。"];
let Senkou = Math.floor(Math.random () * 2);
alert(Senkous[Senkou]);


function r1p1() {
    if (P1R1.value != '' && p1score.length == 0) {
           p1score.push(P1R1.value);
           p1average.push(P1R1.value);
           console.log(p1score);
           p1nokoriscore.push(Player1ScoreShoki - p1score[0]);
           player1Score.innerText = p1nokoriscore[0];
           player1Average.innerText = "AVG:" + p1average[0];
           console.log(p1average);
           console.log(p1nokoriscore);
           console.log(player1Score);
    }
       if (P1R2.value != '' && p1score.length == 1) {
           p1score.push(P1R2.value);
           p1average.push(P1R2.value);
           p1nokoriscore.push(p1nokoriscore[0] - p1score[1]);
           player1Score.innerText = p1nokoriscore[1];
           console.log(p1average[0] + p1average[1]);
           player1Average.innerText = `AVG:${(p1average[0]) / 2  + (p1average[1]) / 2}`;
     }
     if (P1R3.value != '' && p1score.length == 2) {
        p1score.push(P1R3.value);
        p1average.push(P1R3.value);
        p1nokoriscore.push(p1nokoriscore[1] - p1score[2]);
        player1Score.innerText = p1nokoriscore[2];
        console.log(p1nokoriscore[2]);
        player1Average.innerText = `AVG:${(p1average[0]) / 3  + (p1average[1]) / 3 + (p1average[2]) / 3}`;
        if (p1nokoriscore[2] === 0) {
            alert("Game Short Player1");
            p1Leg++;
            console.log(p1Leg);
            player1Score.innerText = Player1ScoreShoki;
            player1Leg.innerText = "LEG:" + p1Leg;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';

            player2Score.innerText = Player2ScoreShoki;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';
        
        }
    }
    if (P1R4.value != '' && p1score.length == 3) {
        p1score.push(P1R4.value);
        p1average.push(P1R4.value);
        p1nokoriscore.push(p1nokoriscore[2] - p1score[3]);
        player1Score.innerText = p1nokoriscore[3];
        player1Average.innerText = `AVG:${(p1average[0]) / 4  + (p1average[1]) / 4 + (p1average[2]) / 4 + (p1average[3]) / 4}`;
        if (p1nokoriscore[3] === 0) {
            alert("Game Short Player1");
            p1Win = true;
            player1Score.innerText = Player1ScoreShoki;
            p1Leg++;
            player1Leg.innerText = "LEG:" + p1Leg;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';

            player2Score.innerText = Player2ScoreShoki;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';
        }
    }
    if (P1R5.value != '' && p1score.length == 4) {
        p1score.push(P1R5.value);
        p1average.push(P1R5.value);
        p1nokoriscore.push(p1nokoriscore[3] - p1score[4]);
        player1Score.innerText = p1nokoriscore[4];
        player1Average.innerText = `AVG:${(p1average[0]) / 5  + (p1average[1]) / 5 + (p1average[2]) / 5 + (p1average[3]) / 5 + (p1average[4]) / 5}`;
        if (p1nokoriscore[4] === 0) {
            alert("Game Short Player1");
            p1Win = true;
            player1Score.innerText = Player1ScoreShoki;
            p1Leg++;
            player1Leg.innerText = "LEG:" + p1Leg;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';

            player2Score.innerText = Player2ScoreShoki;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';
        }
    }
    if (P1R6.value != '' && p1score.length == 5) {
        p1score.push(P1R6.value);
        p1average.push(P1R6.value);
        p1nokoriscore.push(p1nokoriscore[4] - p1score[5]);
        player1Score.innerText = p1nokoriscore[5];
        player1Average.innerText = `AVG:${(p1average[0]) / 6  + (p1average[1]) / 6 + (p1average[2]) / 6 + (p1average[3]) / 6 + (p1average[4]) / 6 + (p1average[5]) / 6}`;
        if (p1nokoriscore[5] === 0) {
            alert("Game Short Player1");
            p1Win = true;
            player1Score.innerText = Player1ScoreShoki;
            p1Leg++;
            player1Leg.innerText = "LEG:" + p1Leg;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';

            player2Score.innerText = Player2ScoreShoki;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';
        }
    } 
    if (P1R7.value != '' && p1score.length == 6) {
        p1score.push(P1R7.value);
        p1average.push(P1R7.value);
        p1nokoriscore.push(p1nokoriscore[5] - p1score[6]);
        player1Score.innerText = p1nokoriscore[6];
        player1Average.innerText = `AVG:${(p1average[0]) / 7  + (p1average[1]) / 7 + (p1average[2]) / 7 + (p1average[3]) / 7 + (p1average[4]) / 7 + (p1average[5]) / 7 + (p1average[6]) / 7}`;
        if (p1nokoriscore[6] === 0) {
            alert("Game Short Player1");
            p1Win = true;
            player1Score.innerText = Player1ScoreShoki;
            p1Leg++;
            player1Leg.innerText = "LEG:" + p1Leg;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';

            player2Score.innerText = Player2ScoreShoki;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';
        }
    } 
    if (P1R8.value != '' && p1score.length == 7) {
        p1score.push(P1R8.value);
        p1average.push(P1R8.value);
        p1nokoriscore.push(p1nokoriscore[6] - p1score[7]);
        player1Score.innerText = p1nokoriscore[7];
        player1Average.innerText = `AVG:${(p1average[0]) / 8  + (p1average[1]) / 8 + (p1average[2]) / 8 + (p1average[3]) / 8 + (p1average[4]) / 8 + (p1average[5]) / 8 + (p1average[6]) / 8 + (p1average[7]) / 8}`;
        if (p1nokoriscore[7] === 0) {
            alert("Game Short Player1");
            p1Win = true;
            player1Score.innerText = Player1ScoreShoki;
            p1Leg++;
            player1Leg.innerText = "LEG:" + p1Leg;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';

            player2Score.innerText = Player2ScoreShoki;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';
        }
    } 
    if (P1R9.value != '' && p1score.length == 8) {
        p1score.push(P1R9.value);
        p1average.push(P1R9.value);
        p1nokoriscore.push(p1nokoriscore[7] - p1score[8]);
        player1Score.innerText = p1nokoriscore[8];
        player1Average.innerText = `AVG:${(p1average[0]) / 9  + (p1average[1]) / 9 + (p1average[2]) / 9 + (p1average[3]) / 9 + (p1average[4]) / 9 + (p1average[5]) / 9 + (p1average[6]) / 9 + (p1average[7]) / 9 + (p1average[8]) / 9}`;
        if (p1nokoriscore[8] === 0) {
            alert("Game Short Player1");
            p1Win = true;
            player1Score.innerText = Player1ScoreShoki;
            p1Leg++;
            player1Leg.innerText = "LEG:" + p1Leg;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';

            player2Score.innerText = Player2ScoreShoki;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';
        }
    } 
    if (P1R10.value != '' && p1score.length == 9) {
        p1score.push(P1R10.value);
        p1average.push(P1R10.value);
        p1nokoriscore.push(p1nokoriscore[8] - p1score[9]);
        player1Score.innerText = p1nokoriscore[9];
        player1Average.innerText = `AVG:${(p1average[0]) / 10  + (p1average[1]) / 10 + (p1average[2]) / 10 + (p1average[3]) / 10 + (p1average[4]) / 10 + (p1average[5]) / 10 + (p1average[6]) / 10 + (p1average[7]) / 10 + (p1average[8]) / 10 + (p1average[9]) / 10}`;
        if (p1nokoriscore[9] === 0) {
            alert("Game Short Player1");
            p1Win = true;
            player1Score.innerText = Player1ScoreShoki;
            p1Leg++;
            player1Leg.innerText = "LEG:" + p1Leg;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';

            player2Score.innerText = Player2ScoreShoki;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';
        }
    }
    if (P1R11.value != '' && p1score.length == 10) {
        p1score.push(P1R11.value);
        p1average.push(P1R11.value);
        p1nokoriscore.push(p1nokoriscore[9] - p1score[10]);
        player1Score.innerText = p1nokoriscore[10];
        player1Average.innerText = `AVG:${(p1average[0]) / 11  + (p1average[1]) / 11 + (p1average[2]) / 11 + (p1average[3]) / 11 + (p1average[4]) / 11 + (p1average[5]) / 11 + (p1average[6]) / 11 + (p1average[7]) / 11 + (p1average[8]) / 11 + (p1average[9]) / 11 + (p1average[10]) / 11}`;
        if (p1nokoriscore[10] === 0) {
            alert("Game Short Player1");
            p1Win = true;
            player1Score.innerText = Player1ScoreShoki;
            p1Leg++;
            player1Leg.innerText = "LEG:" + p1Leg;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';

            player2Score.innerText = Player2ScoreShoki;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';
        }
    } 
    if (P1R12.value != '' && p1score.length == 11) {
        p1score.push(P1R12.value);
        p1average.push(P1R12.value);
        p1nokoriscore.push(p1nokoriscore[10] - p1score[11]);
        player1Score.innerText = p1nokoriscore[11];
        player1Average.innerText = `AVG:${(p1average[0]) / 12  + (p1average[1]) / 12 + (p1average[2]) / 12 + (p1average[3]) / 12 + (p1average[4]) / 12 + (p1average[5]) / 12 + (p1average[6]) / 12 + (p1average[7]) / 12 + (p1average[8]) / 12 + (p1average[9]) / 12 + (p1average[10]) / 12 + (p1average[11]) / 12}`;
        if (p1nokoriscore[11] === 0) {
            alert("Game Short Player1");
            p1Win = true;
            player1Score.innerText = Player1ScoreShoki;
            p1Leg++;
            player1Leg.innerText = "LEG:" + p1Leg;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';

            player2Score.innerText = Player2ScoreShoki;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';
        }
    } 
    if (P1R13.value != '' && p1score.length == 12) {
        p1score.push(P1R13.value)
        p1average.push(P1R13.value);
        p1nokoriscore.push(p1nokoriscore[11] - p1score[12]);
        player1Score.innerText = p1nokoriscore[12];
        player1Average.innerText = `AVG:${(p1average[0]) / 13  + (p1average[1]) / 13 + (p1average[2]) / 13 + (p1average[3]) / 13 + (p1average[4]) / 13 + (p1average[5]) / 13 + (p1average[6]) / 13 + (p1average[7]) / 13 + (p1average[8]) / 13 + (p1average[9]) / 13 + (p1average[10]) / 13 + (p1average[11]) / 13 + (p1average[12]) /13}`;
        if (p1nokoriscore[12] === 0) {
            alert("Game Short Player1");
            p1Win = true;
            player1Score.innerText = Player1ScoreShoki;
            p1Leg++;
            player1Leg.innerText = "LEG:" + p1Leg;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';

            player2Score.innerText = Player2ScoreShoki;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';
        }
    }  
    if (P1R14.value != '' && p1score.length == 13) {
        p1score.push(P1R14.value);
        p1average.push(P1R14.value);
        p1nokoriscore.push(p1nokoriscore[12] - p1score[13]);
        player1Score.innerText = p1nokoriscore[13];
        player1Average.innerText = `AVG:${(p1average[0]) / 14  + (p1average[1]) / 14 + (p1average[2]) / 14 + (p1average[3]) / 14 + (p1average[4]) / 14 + (p1average[5]) / 14 + (p1average[6]) / 14 + (p1average[7]) / 14 + (p1average[8]) / 14 + (p1average[9]) / 14 + (p1average[10]) / 14 + (p1average[11]) / 14 + (p1average[12]) / 14 + (p1average[13]) / 14}`;
        if (p1nokoriscore[13] === 0) {
            alert("Game Short Player1");
            p1Win = true;
            player1Score.innerText = Player1ScoreShoki;
            p1Leg++;
            player1Leg.innerText = "LEG:" + p1Leg;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';

            player2Score.innerText = Player2ScoreShoki;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';
        }
    }
    if (P1R15.value != '' && p1score.length == 14) {
        p1score.push(P1R15.value);
        p1average.push(P1R15.value);
        p1nokoriscore.push(p1nokoriscore[13] - p1score[14]);
        player1Score.innerText = p1nokoriscore[14];
        player1Average.innerText = `AVG:${(p1average[0]) / 15  + (p1average[1]) / 15 + (p1average[2]) / 15 + (p1average[3]) / 15 + (p1average[4]) / 15 + (p1average[5]) / 15 + (p1average[6]) / 15 + (p1average[7]) / 15 + (p1average[8]) / 15 + (p1average[9]) / 15 + (p1average[10]) / 15 + (p1average[11]) / 15 + (p1average[12]) / 15 + (p1average[13]) / 15 + (p1average[14] / 15)}`;
        if (p1nokoriscore[14] > 0 && p2nokoriscore[14] > 0) {
            if(p1nokoriscore[14] < p2nokoriscore[14]) {
                alert("Game Shot Player1");
                player1Score.innerText = Player1ScoreShoki;
                p1Leg++;
                player1Leg.innerText = "LEG:" + p1Leg;
                p1average.length = 0;
                player1Average.innerText = "AVG:"　+ 0;
                p1nokoriscore.length = 0;
                p1score.length = 0;
                P1R1.value = '';
                P1R2.value = '';
                P1R3.value = '';
                P1R4.value = '';
                P1R5.value = '';
                P1R6.value = '';
                P1R7.value = '';
                P1R8.value = '';
                P1R9.value = '';
                P1R10.value = '';
                P1R11.value = '';
                P1R12.value = '';
                P1R13.value = '';
                P1R14.value = '';
                P1R15.value = '';

                player2Score.innerText = Player2ScoreShoki;
                player2Leg.innerText = "LEG:" + p2Leg;
                p2average.length = 0;
                player2Average.innerText = "AVG:" + 0;
                p2nokoriscore.length = 0;
                p2score.length = 0;
                P2R1.value = '';
                P2R2.value = '';
                P2R3.value = '';
                P2R4.value = '';
                P2R5.value = '';
                P2R6.value = '';
                P2R7.value = '';
                P2R8.value = '';
                P2R9.value = '';
                P2R10.value = '';
                P2R11.value = '';
                P2R12.value = '';
                P2R13.value = '';
                P2R14.value = '';
                P2R15.value = '';
            }
        
    }

    if (p1nokoriscore[14] > 0 && p2nokoriscore[14] > 0) {
        if(p1nokoriscore[14] > p2nokoriscore[14]) {
            alert("Game Shot Player2");
            player2Score.innerText = Player2ScoreShoki;
            p2Leg++;
            player2Leg.innerText = "LEG:" + p2Leg;
            p2average.length = 0;
            player2Average.innerText = "AVG:"　+ 0;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';

            player1Score.innerText = Player1ScoreShoki;
            player1Leg.innerText = "LEG:" + p1Leg;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';
        }
}   

        if (p1nokoriscore[14] === 0) {
            alert("Game Short Player1");
            p1Win = true;
            player1Score.innerText = Player1ScoreShoki;
            p1Leg++;
            player1Leg.innerText = "LEG:" + p1Leg;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';

            player2Score.innerText = Player2ScoreShoki;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';
        }
    }
}


function r2p2 () {
    if (P2R1.value != '' && p2score.length == 0) {
        p2score.push(P2R1.value);
        p2average.push(P2R1.value);
        p2nokoriscore.push(Player2ScoreShoki - p2score[0]);
        player2Score.innerText = p2nokoriscore[0];
        player2Average.innerText = "AVG:" + p2average[0];
        console.log(p2nokoriscore);
        console.log(player2Score);
    }
    if (P2R2.value != '' && p2score.length == 1) {
        p2score.push(P2R2.value);
        console.log(p2score);
        p2average.push(P2R2.value);
        p2nokoriscore.push(p2nokoriscore[0] - p2score[1]);
        player2Score.innerText = p2nokoriscore[1];
        player2Average.innerText = `AVG:${(p2average[0]) / 2  + (p2average[1]) / 2}`;

    }
    if (P2R3.value != '' && p2score.length == 2) {
        p2score.push(P2R3.value);
        p2average.push(P2R3.value);
        console.log(p2score);
        p2nokoriscore.push(p2nokoriscore[1] - p2score[2]);
        player2Score.innerText = p2nokoriscore[2];
        player2Average.innerText = `AVG:${(p2average[0]) / 3  + (p2average[1]) / 3 + (p2average[2]) / 3}`;
        if (p2nokoriscore[2] === 0) {
            p2Win = true;
            console.log(p2Win);
            alert("Game Shot Player2");
            player2Score.innerText = Player2ScoreShoki;
            p2Leg++;
            console.log(p2Leg);
            player2Leg.innerText = "LEG:" + p2Leg;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';

            player1Score.innerText = Player1ScoreShoki;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';
        }
    }
    if (P2R4.value != '' && p2score.length == 3) {
        p2score.push(P2R4.value);
        p2average.push(P2R4.value);
        console.log(p2score);
        p2nokoriscore.push(p2nokoriscore[2] - p2score[3]);
        player2Score.innerText = p2nokoriscore[3];
        player2Average.innerText = `AVG:${(p2average[0]) / 4  + (p2average[1]) / 4 + (p2average[2]) / 4 + (p2average[3]) / 4}`;
        if (p2nokoriscore[3] === 0) {
            alert("Game Shot Player2");
            p2Win = true;
            player2Score.innerText = Player2ScoreShoki;
            p2Leg++;
            console.log(p2Leg);
            player2Leg.innerText = "LEG:" + p2Leg;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';

            player1Score.innerText = Player1ScoreShoki;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';
        }
    }
    if (P2R5.value != '' && p2score.length == 4) {
        p2score.push(P2R5.value);
        p2average.push(P2R5.value);
        console.log(p2score);
        p2nokoriscore.push(p2nokoriscore[3] - p2score[4]);
        player2Score.innerText = p2nokoriscore[4];
        player2Average.innerText = `AVG:${(p2average[0]) / 5  + (p2average[1]) / 5 + (p2average[2]) / 5 + (p2average[3]) / 5 + (p2average[4]) / 5}`;
        if (p2nokoriscore[4] === 0) {
            alert("Game Shot Player2");
            p2Win = true;
            player2Score.innerText = Player2ScoreShoki;
            p2Leg++;
            console.log(p2Leg);
            player2Leg.innerText = "LEG:" + p2Leg;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';

            player1Score.innerText = Player1ScoreShoki;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';
        }
    }
    if (P2R6.value != '' && p2score.length == 5) {
        p2score.push(P2R6.value);
        console.log(p2score);
        p2average.push(P2R6.value);
        p2nokoriscore.push(p2nokoriscore[4] - p2score[5]);
        player2Score.innerText = p2nokoriscore[5];
        player2Average.innerText = `AVG:${(p2average[0]) / 6  + (p2average[1]) / 6 + (p2average[2]) / 6 + (p2average[3]) / 6 + (p2average[4]) / 6 + (p2average[5]) / 6}`;
        if (p2nokoriscore[5] === 0) {
            alert("Game Shot Player2");
            p2Win = true;
            player2Score.innerText = Player2ScoreShoki;
            p2Leg++;
            console.log(p2Leg);
            player2Leg.innerText = "LEG:" + p2Leg;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';

            player1Score.innerText = Player1ScoreShoki;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';
        }
    }
    if (P2R7.value != '' && p2score.length == 6) {
        p2score.push(P2R7.value);
        p2average.push(P2R7.value);
        console.log(p2score);
        p2nokoriscore.push(p2nokoriscore[5] - p2score[6]);
        player2Score.innerText = p2nokoriscore[6];
        player2Average.innerText = `AVG:${(p2average[0]) / 7  + (p2average[1]) / 7 + (p2average[2]) / 7 + (p2average[3]) / 7 + (p2average[4]) / 7 + (p2average[5]) / 7 + (p2average[6]) / 7}`;
        if (p2nokoriscore[6] === 0) {
            alert("Game Shot Player2");
            p2Win = true;
            player2Score.innerText = Player2ScoreShoki;
            p2Leg++;
            console.log(p2Leg);
            player2Leg.innerText = "LEG:" + p2Leg;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';

            player1Score.innerText = Player1ScoreShoki;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';
        }
    }
    if (P2R8.value != '' && p2score.length == 7) {
        p2score.push(P2R8.value);
        p2average.push(P2R8.value);
        console.log(p2score);
        p2nokoriscore.push(p2nokoriscore[6] - p2score[7]);
        player2Score.innerText = p2nokoriscore[7];
        player2Average.innerText = `AVG:${(p2average[0]) / 8  + (p2average[1]) / 8 + (p2average[2]) / 8 + (p2average[3]) / 8 + (p2average[4]) / 8 + (p2average[5]) / 8 + (p2average[6]) / 8 + (p2average[7]) / 8}`;
        if (p2nokoriscore[7] === 0) {
            alert("Game Shot Player2");
            p2Win = true;
            player2Score.innerText = Player2ScoreShoki;
            p2Leg++;
            console.log(p2Leg);
            player2Leg.innerText = "LEG:" + p2Leg;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';

            player1Score.innerText = Player1ScoreShoki;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';
        }
    }
    if (P2R9.value != '' && p2score.length == 8) {
        p2score.push(P2R9.value);
        p2average.push(P2R9.value);
        console.log(p2score);
        p2nokoriscore.push(p2nokoriscore[7] - p2score[8]);
        player2Score.innerText = p2nokoriscore[8];
        player2Average.innerText = `AVG:${(p2average[0]) / 9  + (p2average[1]) / 9 + (p2average[2]) / 9 + (p2average[3]) / 9 + (p2average[4]) / 9 + (p2average[5]) / 9 + (p2average[6]) / 9 + (p2average[7]) / 9 + (p2average[8]) / 9}`;
        if (p2nokoriscore[8] === 0) {
            alert("Game Shot Player2");
            p2Win = true;
            player2Score.innerText = Player2ScoreShoki;
            p2Leg++;
            console.log(p2Leg);
            player2Leg.innerText = "LEG:" + p2Leg;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';

            player1Score.innerText = Player1ScoreShoki;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';
        }
    }
    if (P2R10.value != '' && p2score.length == 9) {
        p2score.push(P2R10.value);
        p2average.push(P2R10.value);
        console.log(p2score);
        p2nokoriscore.push(p2nokoriscore[8] - p2score[9]);
        player2Score.innerText = p2nokoriscore[9];
        player2Average.innerText = `AVG:${(p2average[0]) / 10  + (p2average[1]) / 10 + (p2average[2]) / 10 + (p2average[3]) / 10 + (p2average[4]) / 10 + (p2average[5]) / 10 + (p2average[6]) / 10 + (p2average[7]) / 10 + (p2average[8]) / 10 + (p2average[9]) / 10}`;
        if (p2nokoriscore[9] === 0) {
            alert("Game Shot Player2");
            p2Win = true;
            player2Score.innerText = Player2ScoreShoki;
            p2Leg++;
            console.log(p2Leg);
            player2Leg.innerText = "LEG:" + p2Leg;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';

            player1Score.innerText = Player1ScoreShoki;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';
        }
    }
    if (P2R11.value != '' && p2score.length == 10) {
        p2score.push(P2R11.value);
        p2average.push(P2R11.value);
        console.log(p2score);
        p2nokoriscore.push(p2nokoriscore[9] - p2score[10]);
        player2Score.innerText = p2nokoriscore[10];
        player2Average.innerText = `AVG:${(p2average[0]) / 11  + (p2average[1]) / 11 + (p2average[2]) / 11 + (p2average[3]) / 11 + (p2average[4]) / 11 + (p2average[5]) / 11 + (p2average[6]) / 11 + (p2average[7]) / 11 + (p2average[8]) / 11 + (p2average[9]) / 11 + (p2average[10]) / 11}`;
        if (p2nokoriscore[10] === 0) {
            alert("Game Shot Player2");
            p2Win = true;
            player2Score.innerText = Player2ScoreShoki;
            p2Leg++;
            console.log(p2Leg);
            player2Leg.innerText = "LEG:" + p2Leg;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';

            player1Score.innerText = Player1ScoreShoki;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';
        }
    }
    if (P2R12.value != '' && p2score.length == 11) {
        p2score.push(P2R12.value);
        p2average.push(P2R12.value);
        console.log(p2score);
        p2nokoriscore.push(p2nokoriscore[10] - p2score[11]);
        player2Score.innerText = p2nokoriscore[11];
        player2Average.innerText = `AVG:${(p2average[0]) / 12  + (p2average[1]) / 12 + (p2average[2]) / 12 + (p2average[3]) / 12 + (p2average[4]) / 12 + (p2average[5]) / 12 + (p2average[6]) / 12 + (p2average[7]) / 12 + (p2average[8]) / 12 + (p2average[9]) / 12 + (p2average[10]) / 12 + (p2average[11]) / 12}`;
        if (p2nokoriscore[11] === 0) {
            alert("Game Shot Player2");
            p2Win = true;
            player2Score.innerText = Player2ScoreShoki;
            p2Leg++;
            console.log(p2Leg);
            player2Leg.innerText = "LEG:" + p2Leg;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';

            player1Score.innerText = Player1ScoreShoki;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';
        }
    }
    if (P2R13.value != '' && p2score.length == 12) {
        p2score.push(P2R13.value);
        p2average.push(P2R13.value);
        console.log(p2score);
        p2nokoriscore.push(p2nokoriscore[11] - p2score[12]);
        player2Score.innerText = p2nokoriscore[12];
        player2Average.innerText = `AVG:${(p2average[0]) / 13  + (p2average[1]) / 13 + (p2average[2]) / 13 + (p2average[3]) / 13 + (p2average[4]) / 13 + (p2average[5]) / 13 + (p2average[6]) / 13 + (p2average[7]) / 13 + (p2average[8]) / 13 + (p2average[9]) / 13 + (p2average[10]) / 13 + (p2average[11]) / 13 + (p2average[12]) /13}`;
        if (p2nokoriscore[12] === 0) {
            alert("Game Shot Player2");
            p2Win = true;
            player2Score.innerText = Player2ScoreShoki;
            p2Leg++;
            console.log(p2Leg);
            player2Leg.innerText = "LEG:" + p2Leg;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';

            player1Score.innerText = Player1ScoreShoki;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';
        }
    }
    if (P2R14.value != '' && p2score.length == 13) {
        p2score.push(P2R14.value);
        p2average.push(P2R14.value);
        console.log(p2score);
        p2nokoriscore.push(p2nokoriscore[12] - p2score[13]);
        player2Score.innerText = p2nokoriscore[13];
        player2Average.innerText = `AVG:${(p2average[0]) / 14  + (p2average[1]) / 14 + (p2average[2]) / 14 + (p2average[3]) / 14 + (p2average[4]) / 14 + (p2average[5]) / 14 + (p2average[6]) / 14 + (p2average[7]) / 14 + (p2average[8]) / 14 + (p2average[9]) / 14 + (p2average[10]) / 14 + (p2average[11]) / 14 + (p2average[12]) / 14 + (p2average[13]) / 14}`;
        if (p2nokoriscore[13] === 0) {
            alert("Game Shot Player2");
            p2Win = true;
            player2Score.innerText = Player2ScoreShoki;
            p2Leg++;
            console.log(p2Leg);
            player2Leg.innerText = "LEG:" + p2Leg;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';

            player1Score.innerText = Player1ScoreShoki;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';
        }
    }
    if (P2R15.value != '' && p2score.length == 14) {
        p2score.push(P2R15.value);
        p2average.push(P2R15.value);
        console.log(p2score);
        p2nokoriscore.push(p2nokoriscore[13] - p2score[14]);
        player2Score.innerText = p2nokoriscore[14];
        player2Average.innerText = `AVG:${(p2average[0]) / 15  + (p2average[1]) / 15 + (p2average[2]) / 15 + (p2average[3]) / 15 + (p2average[4]) / 15 + (p2average[5]) / 15 + (p2average[6]) / 15 + (p2average[7]) / 15 + (p2average[8]) / 15 + (p2average[9]) / 15 + (p2average[10]) / 15 + (p2average[11]) / 15 + (p2average[12]) / 15 + (p2average[13]) / 15 + (p2average[14] / 15)}`;
        if (p1nokoriscore[14] > 0 && p2nokoriscore[14] > 0) {
                if(p1nokoriscore[14] < p2nokoriscore[14]) {
                    alert("Game Shot Player1");
                    player1Score.innerText = Player1ScoreShoki;
                    p1Leg++;
                    player1Leg.innerText = "LEG:" + p1Leg;
                    p1average.length = 0;
                    player1Average.innerText = "AVG:"　+ 0;
                    p1nokoriscore.length = 0;
                    p1score.length = 0;
                    P1R1.value = '';
                    P1R2.value = '';
                    P1R3.value = '';
                    P1R4.value = '';
                    P1R5.value = '';
                    P1R6.value = '';
                    P1R7.value = '';
                    P1R8.value = '';
                    P1R9.value = '';
                    P1R10.value = '';
                    P1R11.value = '';
                    P1R12.value = '';
                    P1R13.value = '';
                    P1R14.value = '';
                    P1R15.value = '';

                    player2Score.innerText = Player2ScoreShoki;
                    player2Leg.innerText = "LEG:" + p2Leg;
                    p2average.length = 0;
                    player2Average.innerText = "AVG:" + 0;
                    p2nokoriscore.length = 0;
                    p2score.length = 0;
                    P2R1.value = '';
                    P2R2.value = '';
                    P2R3.value = '';
                    P2R4.value = '';
                    P2R5.value = '';
                    P2R6.value = '';
                    P2R7.value = '';
                    P2R8.value = '';
                    P2R9.value = '';
                    P2R10.value = '';
                    P2R11.value = '';
                    P2R12.value = '';
                    P2R13.value = '';
                    P2R14.value = '';
                    P2R15.value = '';
                }
            
        }

        if (p1nokoriscore[14] > 0 && p2nokoriscore[14] > 0) {
            if(p1nokoriscore[14] > p2nokoriscore[14]) {
                alert("Game Shot Player2");
                player2Score.innerText = Player2ScoreShoki;
                p2Leg++;
                player2Leg.innerText = "LEG:" + p2Leg;
                p2average.length = 0;
                player2Average.innerText = "AVG:"　+ 0;
                p2nokoriscore.length = 0;
                p2score.length = 0;
                P2R1.value = '';
                P2R2.value = '';
                P2R3.value = '';
                P2R4.value = '';
                P2R5.value = '';
                P2R6.value = '';
                P2R7.value = '';
                P2R8.value = '';
                P2R9.value = '';
                P2R10.value = '';
                P2R11.value = '';
                P2R12.value = '';
                P2R13.value = '';
                P2R14.value = '';
                P2R15.value = '';

                player1Score.innerText = Player1ScoreShoki;
                player1Leg.innerText = "LEG:" + p1Leg;
                p1average.length = 0;
                player1Average.innerText = "AVG:" + 0;
                p1nokoriscore.length = 0;
                p1score.length = 0;
                P1R1.value = '';
                P1R2.value = '';
                P1R3.value = '';
                P1R4.value = '';
                P1R5.value = '';
                P1R6.value = '';
                P1R7.value = '';
                P1R8.value = '';
                P1R9.value = '';
                P1R10.value = '';
                P1R11.value = '';
                P1R12.value = '';
                P1R13.value = '';
                P1R14.value = '';
                P1R15.value = '';
            }
        
    }
        if (p2nokoriscore[14] === 0) {
            alert("Game Shot Player2");
            p2Win = true;
            player2Score.innerText = Player2ScoreShoki;
            p2Leg++;
            console.log(p2Leg);
            player2Leg.innerText = "LEG:" + p2Leg;
            p2average.length = 0;
            player2Average.innerText = "AVG:" + 0;
            p2nokoriscore.length = 0;
            p2score.length = 0;
            P2R1.value = '';
            P2R2.value = '';
            P2R3.value = '';
            P2R4.value = '';
            P2R5.value = '';
            P2R6.value = '';
            P2R7.value = '';
            P2R8.value = '';
            P2R9.value = '';
            P2R10.value = '';
            P2R11.value = '';
            P2R12.value = '';
            P2R13.value = '';
            P2R14.value = '';
            P2R15.value = '';

            player1Score.innerText = Player1ScoreShoki;
            p1nokoriscore.length = 0;
            p1score.length = 0;
            p1average.length = 0;
            player1Average.innerText = "AVG:" + 0;
            P1R1.value = '';
            P1R2.value = '';
            P1R3.value = '';
            P1R4.value = '';
            P1R5.value = '';
            P1R6.value = '';
            P1R7.value = '';
            P1R8.value = '';
            P1R9.value = '';
            P1R10.value = '';
            P1R11.value = '';
            P1R12.value = '';
            P1R13.value = '';
            P1R14.value = '';
            P1R15.value = '';
        }
    }
}
