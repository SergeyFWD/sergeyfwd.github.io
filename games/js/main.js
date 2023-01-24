function game1() {
    let numberMonth = +prompt('Введите номер месяца');
    function seasons(number) {
        if (number <= 0 || number >= 13) {
            alert('Вы ввели неправильное число!');
        }else if (number === 1 || number === 2 || number === 12){
            alert('Зима');
        } else if (number >= 3 && number <= 5){
            alert('Весна');
        }else if (number >= 6 && number <= 8){
            alert('Лето');
        }else if (number >= 9 && number <= 11){
            alert('Осень');
        }else {
            alert('Вы ввели не число!!!!');
        }
    }
    seasons(numberMonth);    
}

function game2() {
    const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    
    fruits.sort(() => Math.random() - 0.5);
    alert(fruits.join(' '));
    let ask = prompt('Чему равнялся первый элемент ?');
    let askEnd = prompt('Чему равнялся второй элемент ?');
    
        if (ask === fruits[0] && askEnd === fruits[6]) {
            alert('Поздравляю все правильно!!!');
        } else if(ask === fruits[0] || askEnd === fruits[6]){
            alert('Вы были близки к ПОБЕДЕ!!!');
        }else {
            alert('Вы ответили не верно(((');
        }         
}
