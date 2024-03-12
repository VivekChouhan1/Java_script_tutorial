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