let modalClose = Array.from(document.getElementsByClassName("modal__close"));
let modalMain = document.getElementById("modal_main");
let modalSuccess = document.getElementById("modal_success");

let button = Array.from(document.getElementsByClassName("show-success"));



modalMain.classList.add("modal_active");

if(modalClose){
    for(e of modalClose){
        e.onclick = function() {
            modalMain.classList.remove("modal_active");
            modalSuccess.classList.remove("modal_active");
        }; 
    }
    
}

if(button){
    for(e of button){
        e.onclick = function() {
            modalMain.classList.remove("modal_active");
            modalSuccess.classList.add("modal_active");
        }; 
    }
}



