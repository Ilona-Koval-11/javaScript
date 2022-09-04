/*  Задача 1

порахуй загальну суму покупок в корзині*/


/*посдідовність дій для вирішення задачі*/

/*1 перебрати масив*/

/*2 зробити перемінну total  до циклу*/

/*3 кожен елемент додати до total */

/*СПОСІБ ВИРІШЕННЯ ЧЕРЕЗ FOR*/

/*const cart = [54, 28, 105, 70, 92, 17, 120 ];*/
/*2 зробити перемінну total  до циклу*/
/*let total = 0;*/

/*1 перебрати масив*/
/*for (let i = 0; i < cart.length; i +=1){*/
/*console.log(cart[i]);*/
    /*3 кожен елемент додати до total */
    /*total += cart [i];
}
console.log('Total:', total)*/

/*СПОСІБ ВИРІШЕННЯ ЧЕРЕЗ FOR OF*/
/*const cart = [54, 28, 105, 70, 92, 17, 120 ];

let total = 0;
for (const value of cart){
    total +=value;
}
console.log('Total:', total);*/

/*  Задача 2

напиши скрипт, який підраховує суму всіх парних чисел в масиві*/
 /*const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
let total = 0;*/
 /*порядок дій*/
 /*1 перемінна total*/
 /*2 перебрати масив*/
 /*for (let i = 0; i < numbers.length; i += 1) {
console.log(numbers[i]);*/

 /*3 на кожній ітераційї перевірити число на парність*/
 /*if(numbers [i]%2 ===0){
console.log("парне!");*/
 
 /*4 якщо парний додаємо до total */
 /*total += numbers[i];
 }
 }
 console.log('Total:', total);*/


 /*напиши скрипт, який підраховує суму всіх парних чисел в масивіта виріши долю непарних чисел*/
 /*const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
let total = 0;*/

 /*порядок дій*/
 /*1 перемінна total*/
 /*2 перебрати масив*/
 /*for (const number of numbers){
    console.log(number);*/

 /*3 на кожній ітерації перевірити число на парність*/
 /*if(number % 2 !==0) {
console.log("таку ітерацію треба пропустити!", number);
continue;
}

console.log("${number} - парне!");*/
 /*4 якщо парний додаємо до total */
 /*total += number;
 }
 console.log('Total:', total);*/

 /*Задача 3
 
 Напиши скрипт пошуку логіна
 - якщо логіна не має вивксти повідомлення "користувач [логін] не знайдено"
 якщо знайшли логічне, вивести повідомлення "користувач [логін] знайдено" 
  спершу виконуємо через for*/

 /*const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
  const loginToFind =  'poly1scute';*/
  /*let message ='';*/

  /* for(let i = 0; i < logins.length; i += 1){
    const login  =  logins[i];

    console.log('Login: ', login);
    console.log('${Login} === ${loginToFind}:', login === loginToFind );
  
  if (login === loginToFind){
    console.log('Ура, співпали!')
    message = `Користувач ${loginToFind}  знайдений`;
    break;
  }
    message = `Користувач ${loginToFind}  не знайдений`;
  }

  console.log(message);*/

  /*робимо через for...of*/

  /*for (const login of logins){
    console.log('Login: ', login);
    console.log('${Login} === ${loginToFind}:', login === loginToFind );
  
   if (login === loginToFind){
    console.log('Ура, співпали!')
    message = `Користувач ${loginToFind}  знайдений`;
    break;
   }
  }
  console.log(message);*/

  /* робимо через includes*/

 /*console.log(logins.includes(loginToFind));*/

  /* робимо через тернарний оператор*/
  
  /*const message = logins.includes(loginToFind) ? `Користувач ${loginToFind}  знайдений`: message = `Користувач ${loginToFind}  не знайдений`;
  console.log(message);*/

  /* Задача 4
  Напиши скрипт пошуку найменшого числа в масиві, за умови, що число унікальне (не повторюється)*/

  /*const numbers = [51, 18, 13, 24, 7, 85, 19];
  let smallestNumber = numbers[0];

  for (const number of numbers){
    

    if (number < smallestNumber){
    smallestNumber = number
  
  }
  }
  console.log('smallestNumber:', smallestNumber);*/

  /*Задача 5
  Напиши скрипт, який обєднує всі елементи масиву в однострічне знаення.
  Елементів може бути довільна кількістью
  Нехай елекнти масиву в стрічці будуть розділені комою
  спершу черех for
  потім через join*/

   /*розвязання через for */
  /*const friends =[ 'Mango', 'Poly', 'Kiwi', 'Ajax'];
  let string ='';
   for(const friend of friends){string += friend + ','}
   string = string.slice(0, string.length - 1);
   console.log(string);*/

   /*розвязання через join */
/*const friends =[ 'Mango', 'Poly', 'Kiwi', 'Ajax'];
    const string = friends.join(', ');
    console.log(string);*/

    /*Задача 6
    Напиши скрипт, який заміняє реєстр кожного символу в стрічці на протилежний.
    Наприклад, якщо стрічка JavaScript    , то на виході повинна бути стрічка  jAVAsCRIPT      */

    /*const string = "JavaScript";
    const letters = string.split('');
    let invertedString = '';

    console.log (letters);

    for(const letter of letters){
      console.log(letter);*/

     /* if (letter === letter.toLowerCase()) {
        console.log('Ця буква в нижньому регістрі! -', letter);

        invertedString += letter.toUpperCase();
      
      }else{
        invertedString += letter.toLowerCase();
      }*/

/*invertedString += 
    letter === letter.toLowerCase()
    ? letter.toUpperCase()
    : letter.toLowerCase();

    }
    console.log(invertedString);*/

    /*Задача 7
     Робимо slug в URL з назви статті , наприклад на dev.to . 
     Заголовок статті складається лише з букв і пробілів.
     - нормалізуємо стрічкуж
     розбираємо по словах;
     зшиваємо в стрічку з розілителями.
     повинно в результаті вийти 
     top-10-benefits-of-react-framework*/

     /*const title = 'Top 10 benefits of React Framework';

     const normalizedTitle = title.toLowerCase();
     console.log(normalizedTitle);

    const words = normalizedTitle.split(' ');
    console.log(words);

     const slug = words.join('-');
     console.log(slug);*/



     /*const title = 'Top 10 benefits of React Framework';

     const normalizedTitle = title.toLowerCase();
     

    const words = normalizedTitle.split(' ');
    

     const slug = words.join('-');
     

     const slug1 = title.toLowerCase().split(' ').join('-');
     console.log(slug1);*/

     





   
    