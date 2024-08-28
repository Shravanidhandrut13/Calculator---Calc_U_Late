let buttons = document.querySelectorAll('.buttons');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function () {
        if(this.innerHTML === "="){
            try {
                value.innerHTML = eval(value.innerHTML) || "0";
            } catch (e) {
                value.innerHTML = "Error";
            }
        } else if(this.innerHTML === "Clear"){
            value.innerHTML = "0";
        } else if(this.innerHTML === "⌫"){ // Backspace functionality
            value.innerHTML = value.innerHTML.slice(0, -1) || "0";
        } else {
            if (value.innerHTML === "0" || value.innerHTML === "Error") {
                value.innerHTML = this.innerHTML;
            } else {
                value.innerHTML += this.innerHTML;
            }
        }
    });
}
