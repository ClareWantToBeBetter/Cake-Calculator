const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const nav6 = document.getElementById('nav-6');
const nav7 = document.getElementById('nav-7');
const navItems = [nav1, nav2, nav3, nav4, nav5, nav6, nav7];


function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
    });
}

function toggleNav() {
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        navAnimation('out', 'in');
    } else {
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        navAnimation('in', 'out');
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});
//For cake calculator
// .value
const flourAm = document.getElementById("flour").value;
const sugarAm = document.getElementById("sugar").value;
const eggsAm = document.getElementById("eggs").value;
const milkAm = document.getElementById("milk").value;
const cakeAmount = document.getElementById("cake-result-output").value;
let CakeRecipe = {
    flour: 500,
    sugar:100,
    eggs:5,
    milk:1
}
let availableForCake= {
    flour: flourAm,
    sugar: sugarAm,
    eggs:eggsAm,
    milk:milkAm
}

function howManyCakes(recipe, available) {
    let result;
//   Проверяет,есть ли у нас всё по списку
    for (let keyR in recipe) {
        if (!available.hasOwnProperty(keyR)) {
            console.log("You miss something");
        }
    }
    result = available.flour/recipe.flour;//Берём первое значение за основное
//   Теперь просматриваем все ингредиенты
    for (let key in recipe) {
        //    Пишем, что опять чего-то не хватает
        let tempResult = available[key]/recipe[key];
        if(tempResult < result){
            result = tempResult;
        }
    }
   console.log(result);
}
