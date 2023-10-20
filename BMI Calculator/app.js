window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBMI)
} 
function calculateBMI(){
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');
    if(!height || isNaN(height) || height<0){
        result.innerHTML = "Please provide a valid Height";
        return;
    }
    else if(!weight || isNaN(weight) || weight<0){
        result.innerHTML = "Please provide a vakid Weight";
        return;
    }
    const bmi=(weight/((height*height)/1000)).toFixed(2);
    if(bmi < 18.5){
        result.innerHTML = `Under Weight: ${bmi}`;
    }
    else if(bmi>=18.5 && bmi<24.9){
        result.innerHTML = `Normal Weight: ${bmi}`;
    }
    else if(bmi>=25 && bmi<29.9){
        result.innerHTML = `Over Weight: ${bmi}`;
    }
    else if(bmi>=30 && bmi<34.9){
        result.innerHTML = `Obesity class 1: ${bmi}`;
    }
    else if(bmi>=35 && bmi<39.9){
        result.innerHTML = `Obesity class 2: ${bmi}`;
    }
    else{
        result.innerHTML = `Extreme Obesity: ${bmi}`;
    }
}