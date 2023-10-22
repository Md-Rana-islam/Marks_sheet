let btn = document.querySelector('button'),
    take = document.querySelector('input'),
    results = document.querySelector('h4');

btn.addEventListener('click', function(){

if(take.value > 100 || take.value < 0){
    results.innerHTML = 'Please Enter Right Number. Such as ( 0 - 100 )';
}
else if(take.value >= 80 && take.value <= 100){
    results.innerHTML = 'You Have Got A+';
}
else if(take.value >= 70){
    results.innerHTML = 'You Have Got A';
}
else if(take.value >= 60){
    results.innerHTML = 'You Have Got A-';
}
else if(take.value >= 50){
    results.innerHTML = 'You Have Got B';
}
else if(take.value >= 40){
    results.innerHTML = 'You Have Got C';
}
else if(take.value >= 33){
    results.innerHTML = 'You Have Got D';
}

else{
    results.innerHTML = 'Valo kore study koro pass korte parba next year...';
}


});
