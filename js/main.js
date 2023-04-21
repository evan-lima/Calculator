function createCalculator(){
    return{
        display: document.querySelector('.display'),



        inicia(){
            this.clickBtn();
            this.enterPress();
        },

        clickBtn(){
            document.addEventListener('click', function(event){
                const element = event.target;
                if(element.classList.contains('num')){
                    this.btnForDisplay(element.innerText);
                }
                if(element.classList.contains('clear')){
                    this.clearDisplay();
                }
                if(element.classList.contains('del')){
                    this.delet();
                }
                if(element.classList.contains('equal')){
                    this.equal();
                }
            }.bind(this) );
        },

        enterPress(){
            this.display.addEventListener('keyup', event => {
                if(event.keyCode === 13){
                    this.equal();
                }
            });
        },

        btnForDisplay(valor){
            this.display.value += valor;
        },

        clearDisplay(){
            this.display.value = '';
        },

        delet(){
            this.display.value = this.display.value.slice(0, -1);
           
        },

        equal(){
            let result = this.display.value;
            try { 
                result = eval(result);

                if(!result){
                    alert('Invalid');
                    return;
                }

            this.display.value = result;

            }

            catch(e){
                alert('Invalid');
                return;
            }
        }
    }
}

const calculadora = createCalculator();
calculadora.inicia();