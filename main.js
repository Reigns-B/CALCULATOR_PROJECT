let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let clearBtn = document.querySelector(".btn-3");
let evaluate = document.querySelector(".eval");


buttons.forEach(btn => btn.addEventListener("click", () => {
    screen.value += btn.innerText;
    btn.classList.remove("shadow");
    setTimeout(() => {
        btn.classList.add("shadow");
    }, 100);
}));

clearBtn.addEventListener("click", () => {
    screen.value = "";
});

evaluate.addEventListener("click", () => {
    try {
        let result = eval(screen.value);
        screen.value = result;
        if (screen.value == 'undefined') {
            screen.value = "Syntax Error";
        }
     } catch (error) {
         screen.value = "Syntax Error";
     }
    evaluate.classList.remove("shadow");
    setTimeout(() => {
        evaluate.classList.add("shadow");
    }, 100);
});

