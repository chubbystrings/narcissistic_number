
 const narcissistic = (number) => {
        //validate the input
       if(typeof(number) === 'undefined'){
           return "Invalid input";
       }
       //covert number to string and sum up
       const newNumber = number.split('');
       let arrSum = newNumber.reduce((a,b) => a + b, 0);
       arrSum = Number.parseInt(arrSum);
       //console.log(arrSum);
    
       let num = 0;
       //Loop through string and raise each value to the power of length of string
       for( let i = 0; i < newNumber.length; i++){
         num += Math.pow(newNumber[i], newNumber.length); 
               
       }
       //console.log(num);
       //condition to validate narcissistic number
       if(num === arrSum){
           return "Nice, Number is a Narcissistic Number!!";
       }
       return "Oops, Number is not a Narcissistic Number!!"
        
    };


export default narcissistic;