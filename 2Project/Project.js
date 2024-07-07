const From=document.querySelector('form')/// form ko issliye slect kiye hai iske andar submit button hai


From.addEventListener('submit',function(e){

  e.preventDefault()
 const height= parseInt(document.querySelector('#height').value) /// parseInt se wrap karne matlab jo bhi value string me milegi oh ab integer me pass ho jaye gi

 const weight= parseInt(document.querySelector('#weight').value)

 const results= document.querySelector('#results')

 if(height==='' || height<0 || isNaN(height)){
  results.innerHTML=`please give a valid height ${height}`
 }

 else if(weight==='' || weight < 0 || isNaN(weight)){
  results.innerHTML=`please give a valid height ${weight}`
 } else{
  const bmi= (weight / ((height*height)/1000)).toFixed(2) 

  results.innerHTML=`<span> ${bmi}`
 }
})