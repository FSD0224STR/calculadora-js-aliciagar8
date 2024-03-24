const display= document.querySelector('.display');
const buttons= document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        const buttonpushed= button.textContent;

     
        if (button.className === "clear"){
            display.textContent = "0";
            return;
        }

        if (button.className === "solution"){ 
           try{
            display.textContent = eval(display.textContent);
           } catch{
                display.textContent = "Error"
           }
            return;
        }

        if (display.textContent === "0"){
            display.textContent = buttonpushed;
        } else {
            display.textContent += buttonpushed;
        }
        

        
    })
})

