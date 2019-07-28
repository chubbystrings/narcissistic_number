   //Element selectors from DOM
   const input = document.querySelector('input');
   const form = document.querySelector('form');
   const p1 = document.querySelector('#p1');
   const p2 = document.querySelector('#p2');

   //form validation and Event listening for form submission
   form.addEventListener('submit', (e) => {
       const char = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
       e.preventDefault();
       let inputValue = input.value
       console.log(inputValue);
       if(!inputValue || char.test(inputValue)=== true ){
           p2.textContent = "Please fill in a valid number";
           return false;
       }
       //call narcissistic function if form validation pulls through
       const narcNumberValidation = narcissistic(input.value);
       p2.textContent = narcNumberValidation;
      

   });


   //narcissistic function
   const narcissistic = (number) => {
       //validate the input
      if(typeof(number) === 'undefined'){
          return "Invalid input";
      }
      //covert number to object and sum up
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
          return `Nice, ${number} is a Narcissistic Number!!`;
      }
      return `Oops, ${number} is not a Narcissistic Number!!`
       
   }