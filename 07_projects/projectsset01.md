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