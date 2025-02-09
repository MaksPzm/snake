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
let randomPositionY = Random(max, 2);
return [randomPositionX, randomPositionY]
}
//console.log('showRandomSnake(): ', showRandomSnake());

class Coordinate {
    constructor(coordinates, className) { // в параметры добавляем координаты и название добавляемого класса //
        this.coordinates = coordinates;
        this.className = className;
    }
    showRadomSnake() {
        let randomeKube = [document.querySelector(`[data-X = "${this.coordinates[0]}"][data-Y = "${this.coordinates[1]}"]`), document.querySelector(`[data-X = "${this.coordinates[0]}"][data-Y = "${this.coordinates[1] - 1}"]`)];
        //console.log('randomeKube: ', randomeKube);
        for (let i = 0; i < randomeKube.length; i++){
            randomeKube[i].classList.add(this.className);
        }
        randomeKube[0].classList.add('snakeHead');
    }
    showRadomFood() {
        let randomeKube = [document.querySelector(`[data-X = "${this.coordinates[0]}"][data-Y = "${this.coordinates[1]}"]`)];
        //console.log('randomeKube: ', randomeKube);
        for (let i = 0; i < randomeKube.length; i++){
            randomeKube[i].classList.add(this.className);
        }
        randomeKube[0].classList.add('snakeHead');
    }
}

const showSnake = new Coordinate(showRandomSnake(), 'snakeBody'); 
//console.log('showSnake: ', showSnake.coordinates);
showSnake.showRadomSnake()                                                       //выводим на экран змею
// console.log('showSnake.showRadomSnake()  : ', showSnake.showRadomSnake()  );



function assClass() {
    snakeBody[0].classList.add('snakeHead');
    for (let i = 0; i < snakeBody.length - 1; i++) {
        snakeBody[i].classList.add('snakeBody');
    }
}

const showFood = new Coordinate(showRandomSnake(), 'food');
//console.log('showFood: ', showFood.coordinates);
showFood.showRadomFood()                                                        //выводим на экран еду


let snakeBody = Array.from(document.querySelectorAll('.snakeBody'));
let snakeHead = document.querySelector('.snakeHead'); 
let food = document.querySelector('.food');

//сравниваваем координаты классов еды и змеи, если координаты совпадают, еще раз перезапускаем еду
while (food.classList.contains('snakeBody')) {
    showFood.showRadomFood()
}

let direction = "ArrowUp"; // если эту переменную создаем в функции события, тогда она при каждом нажатии перезаписывается заново
    
// управление на стрелках    

  let stop = false;  


console.log(snakeBody);
function move() {    
    const coordinatesSnake = [snakeBody[0].getAttribute('data-X'), snakeBody[0].getAttribute('data-Y')];   
    // console.log('direction: ', direction);
    // direction.splice(0, 2); // удаляем из массива лишние элементы при каждом нажатии
    
    // console.log('coordinatesSnake: ', coordinatesSnake);
    
    snakeBody[0].classList.remove('snakeHead');
    snakeBody[snakeBody.length-1].classList.remove('snakeBody');  
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

    //устанавливаем, что должно произойти если змея коснется саму себя
    if (snakeBody[0].classList.contains('snakeBody')) {
        
        console.log('CFAGKJSLD;gLJGLB');
        clearInterval(interval);
        snakeBody[0].classList.add('gameOver');
        setTimeout(() => {
        fild.innerHTML = `<p class="gameOverText">Игра ОКОНЧЕНА!!!</p>`;    
        }, 3000);
        
        
    }

    snakeBody[0].classList.add('snakeHead');
    for (let i = 0; i < snakeBody.length; i++) {
    snakeBody[i].classList.add('snakeBody');
    }
    addinfBodeSnake()
    
    ateFood()
    stop = true;
}
let interval = setInterval(move, 300)
// move()

window.addEventListener('keydown', function(e) {
console.log('direction: ', direction);
    if (stop == true) {
        if (e.key == "ArrowUp" && (direction != 'ArrowDown')) {
            // console.log('e.key : ', e.key );
            direction = 'ArrowUp';
            stop = false;
            // console.log('true: ', true);
        } else if (e.key == "ArrowDown" && (direction != 'ArrowUp')) {
            // console.log('e.key: ', e.key);
            
            // console.log('true: ', true);
            direction = 'ArrowDown';
            stop = false;
        } else if (e.key == "ArrowLeft" && direction != ('ArrowRight')) {
            // console.log('e.key: ', e.key);
            
            // console.log('true: ', true);
            direction = 'ArrowLeft';
            stop = false;
        } else if (e.key == "ArrowRight"  && direction != ('ArrowLeft')) {
            // console.log('e.key: ', e.key);
            
            // console.log('true: ', true);
            direction = 'ArrowRight';
            stop = false;
        }
    }    
})


function ateFood() {
    const coordinatesSnake = [snakeBody[0].getAttribute('data-X'), snakeBody[0].getAttribute('data-Y')];
    // console.log('coordinatesSnake!!!: ', coordinatesSnake);
    const food = document.querySelector('.food');
    // console.log('food!!: ', food);
    const coordinatesFood = [food.getAttribute('data-X'), food.getAttribute('data-Y')];
    // console.log('coordinatesFood!!!!!!!!!!!!! : ', coordinatesFood );
    // console.log('JSON.stringify(coordinatesFood): ', JSON.stringify(coordinatesFood));
    // console.log('stringify(coordinatesSnake): ', JSON.stringify(coordinatesSnake));
    let newFood = new Coordinate(showRandomSnake(), 'food');
    let coordinat = [ ];

    if ((snakeBody[0].getAttribute('data-X') == food.getAttribute('data-X')) && (snakeBody[0].getAttribute('data-Y') == food.getAttribute('data-Y'))) {
        // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!");
        food.classList.remove('food');
       
        newFood.showRadomFood()
        // snakeBody[snakeBody.length-1].remove('snakeBody'); 
        addinfBodeSnake()
        // console.log('coordinat%%%%%%%%%%%%%%%%%%%%%%%: ', coordinat);
        // let newCoordinatesFood = [food[0].getAttribute('data-X'), food[0].getAttribute('data-Y')];
        // coordinat.unshift(newCoordinatesFood);  
        // food.splice(2, 4);
    } 
}

// ф-ция сработает, когда змея съест еду
function addinfBodeSnake() {
    const food = document.querySelector('.food');
    if ((snakeBody[0].getAttribute('data-X') == food.getAttribute('data-X')) && (snakeBody[0].getAttribute('data-Y') == food.getAttribute('data-Y'))) {
        let a = snakeBody[snakeBody.length - 1].getAttribute('data-X');
        let b = snakeBody[snakeBody.length - 1].getAttribute('data-Y');
        snakeBody.push(document.querySelector('[data-X = "' + a + '"][data-Y = "' + b + '"]'));
        console.log('ПРОВЕРЬ!!!!!!!!: ', snakeBody);
        
         
    }
}
console.log('ПРОВЕРЬ!!!!!!!!222222: ', snakeBody);

