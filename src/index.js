module.exports = function toReadable (number) {
  //Задаю массивы с прописными числами
  const fromOneToNinteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const fromTwenty = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']; 
//Задаю строку для получения результата
  let result = '';
  let unit; //единицы number % 10;
  let decade; //десятки ~~(number%100/10);
  let hundred; //сотни ~~(number/100);
  const strNumber = String(number); //Преобразую число в строку
  if (number === 0) {
    result = 'zero'; //Проверяю равно ли число 0, если да, вывожу результат 'zero'
  } else if (strNumber.length <= 2 && ~~(number/10) <= 1){
      result = fromOneToNinteen[number]; //Проверяю, что число от 1 до 19, присваиваю результат по номеру элемента массива от 1 до 19
  } else if (strNumber.length === 2 && ~~(number/10) >= 2) { //Проверяю условие что число двухзначное и больше либо равно 20
      if (number%10 === 0) { //Проверяю условие что число принадлежит массиву fromTwelve
        result = fromTwenty[number/10]; //Присваиваю результат по номеру элемента массива от 20. Номер элемента равен числу от деления на 10
      } else if (number%10 > 0) { //число не делится без остатка на 10
          unit = fromOneToNinteen[number%10]; //Присваиваю единице значение из первого массива
          decade = fromTwenty[~~(number/10)]; //Присваиваю десяткам значение из второго массива
          result = `${decade} ${unit}`; // Присваиваю результат сложение decade и unit
      }
  } else if (strNumber.length === 3 && number%100 === 0) { //Проверяю условие что число трехзначное и делится на 100 без остатка
      result = `${fromOneToNinteen[number/100]} hundred`; //Присваиваю результат по номеру эл-та массива 1, который равен делению числа на 100
    } else if (strNumber.length === 3 && number%100 < 20) { //Проверяю условиче трехзначности и остаток от деления на 100 в 1 массиве
        unit = fromOneToNinteen[number%100];
        hundred = fromOneToNinteen[~~(number/100)];
        result = `${hundred} hundred ${unit}`;
    } else if (strNumber.length === 3 && number%100 >= 20 && number%10 === 0) { //Проверяю условие трехзначности и остаток от деления больше 20, единицы равны 0
        decade = fromTwenty[number%100/10];
        hundred = fromOneToNinteen[~~(number/100)];
        result = `${hundred} hundred ${decade}`;
    } else if (strNumber.length === 3 && number%100 >= 20 && number%10 > 0) {//Число трехзначное и все цифры отличны от 0
        unit = fromOneToNinteen[number%10];
        decade = fromTwenty[~~(number%100/10)];
        hundred = fromOneToNinteen[~~(number/100)];
        result = `${hundred} hundred ${decade} ${unit}`;
    }
  return result;
}
