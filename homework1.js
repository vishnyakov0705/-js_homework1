// Приклад 1: 'number' + 3 + 3
// 'number' + 3 -> 'number3' (конкатенація строки і числа)
// 'number3' + 3 -> 'number33' (конкатенація строки і числа)
console.log('number' + 3 + 3); // 'number33'

// Приклад 2: null + 3
// null перетворюється на 0
// 0 + 3 -> 3
console.log(null + 3); // 3

// Приклад 3: 5 && "qwerty"
// 5 є true, тому повертається останній операнд "qwerty"
console.log(5 && "qwerty"); // "qwerty"

// Приклад 4: +'40' + +'2' + "hillel"
// +'40' -> 40 (унарний плюс перетворює строку в число)
// +'2' -> 2 (унарний плюс перетворює строку в число)
// 40 + 2 -> 42
// 42 + "hillel" -> "42hillel" (конкатенація числа і строки)
console.log(+'40' + +'2' + "hillel"); // "42hillel"

// Приклад 5: '10' - 5 === 6
// '10' перетворюється на 10
// 10 - 5 -> 5
// 5 === 6 -> false
console.log('10' - 5 === 6); // false

// Приклад 6: true + false
// true перетворюється на 1
// false перетворюється на 0
// 1 + 0 -> 1
console.log(true + false); // 1

// Приклад 7: '4px' - 3
// '4px' не може бути перетворене на число, результат NaN
// NaN - 3 -> NaN
console.log('4px' - 3); // NaN

// Приклад 8: '4' - 3
// '4' перетворюється на 4
// 4 - 3 -> 1
console.log('4' - 3); // 1

// Приклад 9: '6' + 3 ** 0
// 3 ** 0 -> 1 (степінь нуля)
// '6' + 1 -> '61' ('6' + 1 конкатенація строки)
console.log('6' + 3 ** 0); // 61

// Приклад 10: 12 / '6'
// '6' перетворюється на 6
// 12 / 6 -> 2
console.log(12 / '6'); // 2

// Приклад 11: '10' + (5 === 6)
// 5 === 6 -> false
// '10' + false -> '10false' (конкатенація строки і булевого значення)
console.log('10' + (5 === 6)); // '10false'

// Приклад 12: null == ''
// null дорівнює тільки undefined
console.log(null == ''); // false

// Приклад 13: 3 ** (9 / 3)
// 9 / 3 -> 3
// 3 ** 3 -> 27
console.log(3 ** (9 / 3)); // 27

// Приклад 14: !!'false' == !!'true'
// 'false' перетворюється на true
// 'true' перетворюється на true
// true == true -> true
console.log(!!'false' == !!'true'); // true

// Приклад 15: 0 || '0' && 1
// 0 є false
// '0' є true
// '0' && 1 -> 1 (остання true операція)
// 0 || 1 -> 1 (остання true операція)
console.log(0 || '0' && 1); // 1

// Приклад 16: (+null == false) < 1
// +null -> 0
// 0 == false -> true (false завжди 0)
// true < 1 -> true (true завжди 1)
console.log((+null == false) < 1); // true

// Приклад 17: false && true || true
// false && true -> false
// false || true -> true
console.log(false && true || true); // true

// Приклад 18: false && (false || true)
// false || true -> true
// false && true -> false
console.log(false && (false || true)); // false

// Приклад 19: (+null == false) < 1 ** 5
// +null -> 0
// 0 == false -> true (false завжди 0)
// 1 ** 5 -> 1
// true < 1 -> true (true завжди 1)
// 1 < 1 (строге нерівність, тому false)
console.log((+null == false) < 1 ** 5); // false

