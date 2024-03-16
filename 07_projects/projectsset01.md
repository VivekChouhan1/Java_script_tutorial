# projects ralated to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code 

## project 1

```javascript
const buttons=document.querySelectorAll('.button')
const body= document.querySelectorAll("body")

buttons.forEach(function(button){
  button.addEventListener('click',function(e){
    // console.log(e)
    // console.log(e.target)
    if(e.target.id == 'blue')
    {
      document.body.style.backgroundColor ="blue";
    }
    if(e.target.id == 'grey')
    {
      document.body.style.backgroundColor ="grey";
    }
    if(e.target.id == 'yellow')
    {
      document.body.style.backgroundColor =e.target.id;
    }
    if(e.target.id == 'white')
    {
      document.body.style.backgroundColor =e.target.id;
    }
    if(e.target.id == 'purple')
    {
      document.body.style.backgroundColor =e.target.id;
    }
  })
});
```


## project 2

```javascript
const form=document.querySelector('form');

form.addEventListener('submit',function(e){
  e.preventDefault()
  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const results=document.querySelector('#results');

  if(height===""|| height<0|| isNaN(height)){
    results.innerHTML=`please give a valid height ${height}`  }
  else if(weight===""|| weight<0|| isNaN(weight)){
      results.innerHTML=`please give a valid weight ${weight}`  }

    else{
     const BMI=(weight/((height*height)/10000)).toFixed(2);
     //show the result
     if(BMI<18.6)
     {
       results.innerHTML=`${BMI}, under weight`
     }
     else if(BMI === 18.6 || BMI > 18.6 ||BMI < 24.9 || BMI === 24.9){
      results.innerHTML = `${BMI}, which is Normal Weight`;
      }
     if(BMI > 24.9) {
      results.innerHTML = `${BMI}, which is Over Weight`;
   }
  }
})
```


## project 4

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## project 5
```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```

## project 5
```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```

## project 6
```javascript
//random color change
const randomColor=function(){
const hex='0123456789ABCDEF';
let color='#';
for(i=0;i<6;i++)
{
  color+=hex[Math.floor(Math.random()*16)];
}
return color;
};

const startChangingColor=function()
{
  document.body.style.backgroundColor=randomColor();
};
let copyse;
const interval= function()
{
  copyse=setInterval(startChangingColor,1000);
}


const stopChangingColor=function()
{
  clearInterval(copyse);
};





document.querySelector('#start').addEventListener('click',interval);

document.querySelector('#stop').addEventListener('click',stopChangingColor);
```