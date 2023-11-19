function button_click(button_number){
    let button_list = document.querySelectorAll(".thebutton");
    button_list.forEach(button => {
        button.className = "";
        button.classList.toggle("thebutton");
        button.classList.toggle("button-noclick");
    });

    button_list[button_number].classList.toggle("button-noclick");
    button_list[button_number].classList.toggle("button-click");

    let button_value = parseInt(button_list[button_number].value,10);
    document.querySelector("#showtext").innerHTML = button_value*2;
}