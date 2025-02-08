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
    // console.log('e.key : ', e.key );
    direction = 'ArrowUp';
    console.log('true: ', true);
} else if (e.key == "ArrowDown" && (direction != 'ArrowUp')) {
    console.log('e.key: ', e.key);
    true
    // console.log('true: ', true);
    direction = 'ArrowDown';
} else if (e.key == "ArrowLeft" && direction != ('ArrowRight')) {
    console.log('e.key: ', e.key);
    true
    // console.log('true: ', true);
    direction = 'ArrowLeft';
} else if (e.key == "ArrowRight"  && direction != ('ArrowLeft')) {
    console.log('e.key: ', e.key);
    true
    // console.log('true: ', true);
    direction = 'ArrowRight';
}
})
    
let snakeBody = Array.from(document.querySelectorAll('.snakeBody')); 

function move() {      
    const coordinatesSnake = [snakeBody[0].getAttribute('data-X'), snakeBody[0].getAttribute('data-Y')];   
    // console.log('direction: ', direction);
    // direction.splice(0, 2); // удаляем из массива лишние элементы при каждом нажатии

    console.log('coordinatesSnake: ', coordinatesSnake);
            
    snakeBody[0].classList.toggle('snakeBody');
    // snakeBody[snakeBody.length - 1].remove('snakeBody');
    snakeBody.pop();
                
                
    if (direction == 'ArrowUp') {
        
        if (coordinatesSnake[1] < 10) {
            snakeBody.unshift(document.querySelector('[data-X = "' + coordinatesSnake[0] + '"][data-Y = "' + (+coordinatesSnake[1] + 1) + '"]'));
            // console.log('snakeBody2: ', snakeBody);  
        } else {
            snakeBody.unshift(document.querySelector('[data-X = "' + coordinatesSnake[0] + '"][data-Y = "1"]'));
        }   
    } 
    if (direction == 'ArrowDown') {
        
        if (coordinatesSnake[1] > 1) {
            snakeBody.unshift(document.querySelector('[data-X = "' + coordinatesSnake[0] + '"][data-Y = "' + (+coordinatesSnake[1] - 1) + '"]'));
            // console.log('snakeBody2: ', snakeBody);  
        } else {
            snakeBody.unshift(document.querySelector('[data-X = "' + coordinatesSnake[0] + '"][data-Y = "10"]'));
        }
    }
    if (direction == 'ArrowLeft') {
        
        if (coordinatesSnake[0] > 1) {
            snakeBody.unshift(document.querySelector('[data-X = "' + (+coordinatesSnake[0] - 1) + '"][data-Y = "' + coordinatesSnake[1] + '"]'));
            // console.log('snakeBody2: ', snakeBody);  
        } else {
            snakeBody.unshift(document.querySelector('[data-X = "10"][data-Y = "' + coordinatesSnake[1] + '"]'));
        } 
    } 
    if (direction == 'ArrowRight') {
        
        if (coordinatesSnake[0] < 10) {
            snakeBody.unshift(document.querySelector('[data-X = "' + (+coordinatesSnake[0] + 1) + '"][data-Y = "' + coordinatesSnake[1] + '"]'));
            // console.log('snakeBody2: ', snakeBody);  
        } else {
            snakeBody.unshift(document.querySelector('[data-X = "1"][data-Y = "' + coordinatesSnake[1] + '"]'));
        }
    }

    snakeBody[0].classList.add('snakeBody');
    for (let i = 0; i < snakeBody.length; i++) {
    snakeBody[i].classList.add('snakeBody');
    }
    ateFood()
}


let interval = setInterval(move, 300)

function ateFood() {
    const coordinatesSnake = [snakeBody[0].getAttribute('data-X'), snakeBody[0].getAttribute('data-Y')];
    // console.log('coordinatesSnake!!!: ', coordinatesSnake);
    const food = Array.from(document.getElementsByClassName('food'));
    console.log('food!!: ', food);
    const coordinatesFood = [food[0].getAttribute('data-X'), food[0].getAttribute('data-Y')];
    console.log('coordinatesFood!!!!!!!!!!!!! : ', coordinatesFood );
    // console.log('JSON.stringify(coordinatesFood): ', JSON.stringify(coordinatesFood));
    // console.log('stringify(coordinatesSnake): ', JSON.stringify(coordinatesSnake));
    let newFood = new Coordinate(showRandomSnake(), 'food');
    let coordinat = [ ];
    if (JSON.stringify(coordinatesSnake) == JSON.stringify(coordinatesFood)) {
        // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!");
        food[0].classList.remove('food');
        
        newFood.showRadom()
        addinfBodeSnake()
        console.log('coordinat%%%%%%%%%%%%%%%%%%%%%%%: ', coordinat);
        let newCoordinatesFood = [food[0].getAttribute('data-X'), food[0].getAttribute('data-Y')];
        coordinat.unshift(newCoordinatesFood);  
        food.splice(2, 4);
    } 
}

// ф-ция сработает, когда змея съест еду
function addinfBodeSnake() {
    let newSnakeItemBody = [ ];
    
    let addingLeft = [snakeBody[0].getAttribute('data-X'), snakeBody[0].getAttribute('data-Y')];
    if (direction == "ArrowUp") {
        
        console.log('addingLeft)))))))))))((((((((((((())))))))))))): ', addingLeft);
        newSnakeItemBody.push(document.querySelector('[data-X = "' + addingLeft[0] + '"][data-Y = "' + (+addingLeft[1] - 1) + '"]'));
        newSnakeItemBody[newSnakeItemBody.length - 1].classList.add('snakeBody')
    }
}
