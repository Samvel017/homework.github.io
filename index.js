let answer = prompt('Какой цвет у светофора?: Красный: 1, Желтый: 2, Зеленый: 3. Введите число:');
if(+answer == 1) {
  console.log('Пешеходы проходят.')
  console.log('Машины стоят.')
}
else if(+answer == 2) {
  console.log('Машины готовятся.')
  console.log('Пешеходы стоят.')
}
else if(+answer == 3) {
  console.log('Машины едут.')
  console.log('Пешеходы ждут.')
}
else {
  console.log('Неверный ввод!')
}