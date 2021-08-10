const slideValue = document.querySelector("#range-top");
const inputSlider = document.querySelector('#input_field');
const output=document.getElementById('value-price')
function range(){
    const maxValue=inputSlider.max/100
        inputSlider.oninput = (() => {
            let value = inputSlider.value;
            output.innerHTML='£' +(value==0?'':value);
            slideValue.textContent = value;
            slideValue.style.left = (value / 2) + '%';
            slideValue.classList.add('show')
        
        })
        inputSlider.onblur = (() => {
            slideValue.classList.remove("show")
        })
        inputSlider.addEventListener('mousemove',()=>{
            var x=(inputSlider.value)/maxValue;
            var color='linear-gradient(90deg,#ff7012 ' + x + '%,rgb(214,214,214) '+ x +'%)';
            inputSlider.style.background=color
        }) 
}
range()