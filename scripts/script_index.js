const options = {
    strings: ["доступно", "легко"],  // менять будем только эти слова
    typeSpeed: 50,         // скорость набора
    backSpeed: 25,         // скорость стирания
    backDelay: 500,        // задержка перед стиранием текста
    startDelay: 500,       // задержка перед началом
    loop: true,            // повторение анимации
    showCursor: false,     // скрыть курсор
};

const typed = new Typed("#typed-output", options);