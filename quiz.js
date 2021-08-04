var readlineSync = require('readline-sync');

const chalk = require('chalk');

console.log(chalk.bold.magentaBright("HOW WELL DO YOU KNOW B99?"));

var user = readlineSync.question(chalk.cyanBright("ENTER YOUR NAME: "));
var score = 0;

var highscore= [
  {name: "Saranya",
   score: "5" } ,
  {name: "Kishore",
   score: "4"},
  {name: "Mirtula",
   score: "2"}
]

function qNA(quest) {
  console.log(chalk.blueBright(quest.question));
  console.log(chalk.yellow(quest.op1));
  console.log(chalk.yellow(quest.op2));
  console.log(chalk.yellow(quest.op3));
  console.log(chalk.yellow(quest.op4));
  userAns = readlineSync.question(chalk.blueBright.italic("Answer:"));

  if (userAns === quest.ans) {
    console.log(chalk.green.bold("CORRECT!"));
    score++;
  }
  else {
    console.log(chalk.red.bold("WRONG!"));
  }
}

var questions = [
  {
    question: "What is Jake's favourite movie?",
    op1: '1. The Terminator',
    op2: "2. Die Hard",
    op3: "3. Rocky",
    op4: "4. Transformers",
    ans: "2"
  },
  {
    question: "Who plays the role of Gina Linetti?",
    op1: "1. Reese Witherspoon",
    op2: "2. Melissa Fumero",
    op3: "3. Chelsea Peretti",
    op4: "4. Jennifer Aniston",
    ans: "3"
  },
  {
    question: "Who did Amy get married to?",
    op1: "1. Teddy",
    op2: "2. Doug Judy",
    op3: "3. Jake",
    op4: "4. Charles",
    ans: "3"
  },
  {
    question: "Who disappeared after the pilot of the show?",
    op1: "1. Marcus",
    op2: "2. Detective Daniels",
    op3: "3. Mlepclaynos",
    op4: "4. Gina",
    ans: "2"
  },
  {
    question: "Who is the Pontiac Bandit?",
    op1: "1. Doug Judy",
    op2: "2. Ernest Zumowski",
    op3: "3. Adrian Pimento",
    op4: "4. Trudy Judy",
    ans: "1"
  },
]

for (var i = 0; i < questions.length; i++)
  qNA(questions[i]);

console.log(chalk.cyan.bold("GAME OVER!"));

var j=0;
console.log(chalk.red.bold("HIGH SCORES"))
console.log(chalk.yellow("NAME          SCORE"))
for(var i=0; i<3; i++)
{ 
  console.log(chalk.magenta(highscore[i].name, "      " , highscore[i].score));

 if(highscore[i].score<=score)
  j++;
}
console.log(chalk.blue.bold("Your Score: " + score));
if(j>0)
  console.log(chalk.cyan("CONGRATULATIONS! YOU HAVE A NEW HIGH SCORE! SEND ME A SCREENSHOT AND I WILL UPDATE IT :D"))