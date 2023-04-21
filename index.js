// Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim
const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

const moreThan10000 = salaries.filter((s) => s >= 10000);
console.log(moreThan10000);

const range = salaries.filter((s) => s >= 6000 && s <= 20000);
console.log(range);
