// Линейные алгоритмы

// Поменять местами значения двух переменных.
let x = 5;
let y = 32;
let z = x;
x = y;
y = z;

// Найти длину гипотенузы прямоугольного треугольника (по двум введенным пользователем катетам вычислить длину гипотенузы.)
let firstLeg = prompt('Введите длину первого катета');
let secondLeg = prompt('Введите длину второго катета');
let hypotenuse = Math.hypot(firstLeg,secondLeg);
console.log(hypotenuse);

// Вывести уравнение прямой по координатам двух точек (в виде y = k*x + b)
let x1 = prompt('Введите x первой точки');
let y1 = prompt('Введите y первой точки');
let x2 = prompt('Введите x второй точки');
let y2 = prompt('Введите y второй точки');
let k = (y1 - y2)/(x1-x2);
let b = y2 - k * x2;
console.log(`y=${k}*x+${b}`)

// Условия

// Посчитать выражение (max(a*b*c, a+b+c) + 3). a, b и c - рандом от -10 до 10. Меняю a,b,c на  d,e,f
let d = -10 + Math.floor(21*Math.random());
let e = -10 + Math.floor(21*Math.random());
let f = -10 + Math.floor(21*Math.random());
let g = Math.max(d,e,f);

// Вводятся два целых числа h и i. Проверить, делится ли первое на второе. Вывести на экран сообщение об этом, а также остаток (если он есть) и частное (в любом случае). 
//(рандом от -100 до 100)
let h = -100 + Math.floor(Math.random()*201);
let i = -100 + Math.floor(Math.random()*201);
console.log(h);
console.log(i);
 if (h % i === 0) {
     console.log('Первое число делится на второе число нацело');
 }
 else {
    console.log(`Первое число не делится на второе число нацело.Остаток равен ${h % i}`);
 }
 console.log(`Частное от деления равно ${Math.floor(h/i)}`);

// Определить, какой четверти принадлежит точка с координатами (x, y). x это m, y это n
//x и y - рандом от -10 до 10
let m = -10 + Math.floor(Math.random()*21);
let n = -10 + Math.floor(Math.random()*21);
let quarter;
if (m > 0 && n > 0) {
    quarter = 1;
}
else if (m < 0 && n > 0) {
    quarter = 2;
}

else if (m < 0 && n < 0) {
    quarter = 3;
}

else if (m > 0 && n < 0) {
    quarter = 4;
}

//Определение принадлежности точки кругу с центром в начале координат: вводятся координаты (x;y) точки и радиус круга (r), определить, принадлежит ли данная точка кругу, если его центр находится в начале координат. 
//x и y - рандом от -15 до 15, r - рандом от -10 до 10
//x это o, y это p, r это r
let o = -15 + Math.floor(Math.random()*31);
let p = -15 + Math.floor(Math.random()*31);
let r = -10 + Math.floor(Math.random()*21);
let s = Math.hypot(o,p);
let result = "Точка лежит не в круге";
if ( s <= r) {
    result = "Точка лежит в круге";
}

// Вычислить корни квадратного уравнения. а заменила на t, b на u, c на w. 
let t = prompt('Введите a');
let u = prompt('Введите b');
let w = prompt('Введите c');
let discriminant = Math.pow(u, 2) - 4 * t * w;
let firstRoot;
let secondRoot;
if (discriminant < 0 ) {
    console.log("корней нет");
}

else {
    firstRoot = (-u + Math.sqrt(discriminant)) / 2* t;
    secondRoot = (-u - Math.sqrt(discriminant)) / 2* t;
}