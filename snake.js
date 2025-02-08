const fild = document.querySelector('.game');

// создаём кубы игравого поля через класс
class Filds {
    constructor(coordinatesX, coordinatesY) {
        this.coordinatesX = coordinatesX;
        this.coordinatesY = coordinatesY
    }

    fildSize() {
        let size = this.coordinatesX * this.coordinatesY;
        for (let i = 1; i <= size; i++) {
            const createFildCube = document.createElement('div');
            fild.appendChild(createFildCube);
            createFildCube.classList.add('kube');
            
            
            
        }
    }
}

const gameFilds = new Filds(10, 10);
gameFilds.fildSize()



// присваиваем кубу атрибуты с координатами
const setPosition = (() => {
    const kube = document.querySelectorAll('.kube');
    let x = 1, y = 10;
    for (let i = 0; i < 100; i++) {
        if (x > 10) {
            x = 1;
            y--;
        }
        kube[i].setAttribute('data-X', x);
        kube[i].setAttribute('data-Y', y);
        x++;    
    }
})()

const Random = (max, min) => Math.floor(Math.random() * (max - min) + min);

const min = 1, max = 10;
//выводим рандомно змею
function showRandomSnake() {
let randomPositionX = Random(max, min);
let randomPositionY = Random(max,min);
return [randomPositionX, randomPositionY]
}
//console.log('showRandomSnake(): ', showRandomSnake());

class Coordinate {
    constructor(coordinates, className) { // в параметры добавляем координаты и название добавляемого класса //
        this.coordinates = coordinates;
        this.className = className;
    }
    showRadom() {
        let randomeKube = [document.querySelector(`[data-X = "${this.coordinates[0]}"][data-Y = "${this.coordinates[1]}"]`)];
        //console.log('randomeKube: ', randomeKube);
        for (let i = 0; i < randomeKube.length; i++){
            randomeKube[i].classList.add(this.className);
        }
        randomeKube[0].classList.add(this.className);
    }
}

const showSnake = new Coordinate(showRandomSnake(), 'snakeBody'); 
//console.log('showSnake: ', showSnake.coordinates);
showSnake.showRadom()                                                       //выводим на экран змею

const showFood = new Coordinate(showRandomSnake(), 'food');
//console.log('showFood: ', showFood.coordinates);
showFood.showRadom()                                                        //выводим на экран еду

//сравниваем массивы, если координаты совпадают, еще раз перезапускаем еду
if (JSON.stringify(showSnake.coordinates) == JSON.stringify(showFood)) {
    showFood.showRadom()
}

function assClass() {
    snakeBody[0].classList.add('snakeBody');
    for (let i = 0; i < snakeBody.length; i++) {
        snakeBody[i].classList.add('snakeBody');
    }
}


let direction = "ArrowUp"; // если эту переменную создаем в функции события, тогда она при каждом нажатии перезаписывается заново
    
// управление на стрелках    
window.addEventListener('keydown', function(e) {
console.log('direction: ', direction);
if (e.key == "ArrowUp" && (direction != 'ArrowDown')) {
    console.log('e.key : ', e.key );
    direction = 'ArrowUp';
    console.log('true: ', true);
} else if (e.key == "ArrowDown" && (direction != 'ArrowUp')) {
    console.log('e.key: ', e.key);
    true
    console.log('true: ', true);
    direction = 'ArrowDown';
} else if (e.key == "ArrowLeft" && direction != ('ArrowRight')) {
    console.log('e.key: ', e.key);
    true
    console.log('true: ', true);
    direction = 'ArrowLeft';
} else if (e.key == "ArrowRight"  && direction != ('ArrowLeft')) {
    console.log('e.key: ', e.key);
    true
    console.log('true: ', true);
    direction = 'ArrowRight';
}
})
    
    
function move() {      
    let snakeBody = Array.from(document.querySelectorAll('.snakeBody'));
    const coordinatesSnake = [snakeBody[0].getAttribute('data-X'), snakeBody[0].getAttribute('data-Y')];
    console.log('direction: ', direction);
    // direction.splice(0, 2); // удаляем из массива лишние элементы при каждом нажатии

    console.log('coordinatesSnake: ', coordinatesSnake);
            
    snakeBody[0].classList.toggle('snakeBody');
    // snakeBody[snakeBody.length - 1].remove('snakeBody');
    snakeBody.pop();
                
                
    if (direction == 'ArrowUp') {
        
        if (coordinatesSnake[1] < 10) {
            snakeBody.unshift(document.querySelector('[data-X = "' + coordinatesSnake[0] + '"][data-Y = "' + (+coordinatesSnake[1] + 1) + '"]'));
            console.log('snakeBody2: ', snakeBody);  
        } else {
            snakeBody.unshift(document.querySelector('[data-X = "' + coordinatesSnake[0] + '"][data-Y = "1"]'));
        }   
    } 
    if (direction == 'ArrowDown') {
        
        if (coordinatesSnake[1] > 1) {
            snakeBody.unshift(document.querySelector('[data-X = "' + coordinatesSnake[0] + '"][data-Y = "' + (+coordinatesSnake[1] - 1) + '"]'));
            console.log('snakeBody2: ', snakeBody);  
        } else {
            snakeBody.unshift(document.querySelector('[data-X = "' + coordinatesSnake[0] + '"][data-Y = "10"]'));
        }
    }
    if (direction == 'ArrowLeft') {
        
        if (coordinatesSnake[0] > 1) {
            snakeBody.unshift(document.querySelector('[data-X = "' + (+coordinatesSnake[0] - 1) + '"][data-Y = "' + coordinatesSnake[1] + '"]'));
            console.log('snakeBody2: ', snakeBody);  
        } else {
            snakeBody.unshift(document.querySelector('[data-X = "10"][data-Y = "' + coordinatesSnake[1] + '"]'));
        } 
    } 
    if (direction == 'ArrowRight') {
        
        if (coordinatesSnake[0] < 10) {
            snakeBody.unshift(document.querySelector('[data-X = "' + (+coordinatesSnake[0] + 1) + '"][data-Y = "' + coordinatesSnake[1] + '"]'));
            console.log('snakeBody2: ', snakeBody);  
        } else {
            snakeBody.unshift(document.querySelector('[data-X = "1"][data-Y = "' + coordinatesSnake[1] + '"]'));
        }
    }

    snakeBody[0].classList.add('snakeBody');
    for (let i = 0; i < snakeBody.length; i++) {
    snakeBody[i].classList.add('snakeBody');
    }
}


let interval = setInterval(move, 300)