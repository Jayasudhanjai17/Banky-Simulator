/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES OF BANK FUNCTIONS

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],

// ]);
const account1 = {
  owner: "Shiva Guru",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Luffy",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Gugan",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Itachi Uchiha",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: "Roronoa Zoro",
  movements: [430, 1000, 700, 50, 90, 89, 56],
  interestRate: 1,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// displayMovements(account1.movements);
///Lecture 153 adding the movements

// calcPrintBal(account1.movements);

// console.log(calcDisplaySummary(account1.movements));

/////////////////////////////////////////////////

let arr = ["a", "b", "c", "d", "e"];
const f = arr.slice(1, 3);
// console.log(f);
const j = function (ar) {
  return function (from, n) {
    console.log(ar.slice(from, n));
  };
};

const p = ["l", "k", "n", "j", " b"];

const lici = j(p);
lici(0, 2);

j(["u", "c", "h", "i", "a"])(0, 2);
//Splice opertaion

p.splice(-1);
console.log(p);
p.splice(3, 2); //splice(the position: , number of elements deleted)
console.log(p);
//Reverse
const r2 = ["e", "d", "c", "d", "b", "a"];
console.log(r2.reverse()); // mutates the original one
//Concat
const nam = ["jai"];
const clan = ["uchiha"];
const ltrs = nam.concat(clan);
console.log(ltrs);
// join
console.log(ltrs.join("-"));

//Lec The new at method 143
// to get the last element
const yuchi = ["d", "a", "c", "b", "f"];
console.log(yuchi[yuchi.length - 2]); //b
console.log(yuchi.slice(2)[0]); //c //  using square brackets to  take  the value out of the array
console.log(yuchi.at(-1)); //l

console.log("luffy".at(0)); //l
//Lec 144 Looping array for each
// for(const movement of movements){
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`you deposited ${movement}`);
  } else {
    console.log(`${Math.abs(movement)}`); // returns the absolute value
  }
}

console.log(`ANOTHER  WAY FOR EACH  `);
movements.forEach(function (movement, i, arr) {
  //  continue and break doesnt work here
  // console.log(movement);
  console.log(`${arr}`);
  // console.log(i);
  if (movement > 0) {
    console.log(` moves ${i + 1} : You deposited ${movement}`);
  } else {
    console.log(` Movement ${i + 1}:You  withdraw ${Math.abs(movement)} `);
  }
});

//0:function  (200)
//1:function (450 )
//2:function (400)
//For each  in  maps and sets   LEC Number 145
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});
//set
const currenciesunique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(`${currenciesunique}`); //  gives unique  value
currenciesunique.forEach(function (key, value, map) {
  console.log(`${key} : ${value}`);
});

//Coding challenge  -lec 148

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, 
and stored the data into an array (one array for each). 
For now, they are just interested in knowing whether a dog is an adult or a puppy. 
A dog is an adult if it is at least 3 years old, 
and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'),
 and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! 
So create a shallow copy of Julia's array, and remove the cat ages from that copied array 
(because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const jul = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];
const checkDogs = function (arr1, arr2) {
  const juli = arr1;
  const kate = arr2;
  juli.splice(0, 1);
  juli.splice(arr.length - 3, arr.length);
  // console.log(juli.slice(1,3));
  const dogs = juli.concat(kate);

  dogs.forEach((dog, i, arr) => {
    if (dog <= 3) {
      console.log(`Dog number is ${i + 1} is a puppy and is ${dog} years old`);
    } else {
      console.log(
        `Dog number is ${i + 1} is a adult and it is ${dog} years old`
      );
    }
  });
  // console.log('Kates array');
  // kate.forEach((dog,i,arr)=>{
  //   if(dog<=3){
  //     console.log(`Dog number is ${i+1} is a puppy and is ${dog} years old`);
  //   }
  //   else{
  //     console.log(`Dog number is ${i+1} is a adult and it is ${dog} years old`);
  //   }
  // });

  // console.log(juli,kate);
};
// checkDogs(jul,kate);

//Lecture  150  the Map Method
const eurtoUsd = 88.7;
const movementsUSd = movements.map((mov) => mov * eurtoUsd);

console.log(movementsUSd);
const movementDesc = movements.map(function (mov, i, arr) {
  return `Movement ${
    i + 1
  }: You Deposited ${mov > 0 ? "deposited" : "Withdrew"} ${Math.abs(mov)} `;
});
console.log(movementDesc); // returns as an array while we use return

//Lecture 152 Filter method

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);
const depositsfor = [];
for (const add of movements) {
  if (add > 0) {
    depositsfor.push(add);
  }
}
// console.log(depositsfor);
const withdrawal = movements.filter(function (mov) {
  // const  withdrew=mov<0? Math.abs(mov):mov
  return mov < 0;
});
// Lecture 153 Reduce method
//Accumulator is like a snowball its keep on  adding or getings changed
// initiall accumulator value is set to 0
const balance = movements.reduce(function (acc, curr, i, arr) {
  return acc + curr;
}, 0);
// console.log(balance);
//  maximum  value in array
const max = movements.reduce(function (acc, crr) {
  if (acc > crr) {
    return acc;
  } else {
    return crr;
  }
}, movements[0]);
console.log(max);
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (arr1) {
  // const hage=[];
  // arr1.forEach(function(arr){

  //   if(arr<=2){
  //     const age=2*arr;
  //     hage.push(age);
  //     }
  //     else if(arr>2){
  //       const age=16+arr*4;
  //       hage.push(age);
  //     }

  // });

  // console.log(hage);
  const hmnAge = arr1.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const exdog = hmnAge.filter(function (ages) {
    return ages >= 18;
  });
  console.log(exdog);
  const avrg = exdog.reduce((acc, cur, i, arr) => acc + cur / exdog.length, 0);
  console.log(avrg);
};
calcAverageHumanAge(data1);
calcAverageHumanAge(data2);

// Lecture  155  Chaining Methods
//Pipline
const TotalDepositsInd = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurtoUsd)
  .reduce((acc, cur) => acc + cur, 0);
console.log(TotalDepositsInd);

//Lecture 156  Coding  Challenge
/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const test1 = [5, 2, 4, 1, 15, 8, 3];
const calcAverageHumanAg = function (movement) {
  const age = movement
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  return age;
};
console.log(calcAverageHumanAg(test1));

//Lecture 157 Find Method
const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawal);
//Another Example
// const accountsdata=accounts.find((acc)=>acc.owner="js");
// console.log(accountsdata);

//----------------- Lecture 161 Sum and Every-----------------
//Incluses //=== check like this
console.log(movements);
console.log(movements.includes(-30)); //Testing for equality

//Some  call back function
//Condition
const move = movements.some((mov) => mov > 100);
console.log(move); //Is 100 above is present inside the array ? //True
//---------Every  -----   returns true if all the elements in ths array undergoes the condition
console.log(`Every Method checks every element int the array`);
const movement = [12, 34, 56, 699, 78, 789];
const ever = movements.every((mov) => mov > 0); // false
const ever2 = movement.every((mov) => mov > 10); // true
console.log(ever);
console.log(ever2);

//Seprate call back
const deposit = (mov) => mov > 20;
console.log(movement.some(deposit)); //true check any one element
console.log(movement.every(deposit)); //false checks all the element
console.log(movement.filter(deposit)); //  gives the number greater than 20

// To remove the Nested  Arrays in Java Script Use Flat method
// Flat
const ar = [1, 2, 3, [1, 2, 3], 5, [7]];
const change = ar.flat();
console.log(change); // output[1,2,3,1,2,3,5,7]
const arDeep = [[1, 2, 3, 4, [12, 4]], 4, 6];
const dep1 = arDeep.flat(1);
const dep2 = arDeep.flat(2);
console.log(dep1); //1,2,3,4,[12,4],6
console.log(dep2); // 1,2,3,4,12,4,6

// Practice with Bank  example
const Allmovements = accounts.map((acc) => acc.movements);
const allmov = Allmovements.flat();
console.log(allmov);
const overall = allmov.reduce(function (acc, mov, arr) {
  let total = acc + mov;
  return total;
}, 0);
const tot = allmov.reduce((acc, mov) => acc + mov, 0);
console.log(tot);
console.log(overall);
// Using the object Chaining
const ovrt = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(ovrt);
// Flat Map  is used to do Flat and Map in array at Same time
const flatMp = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(flatMp);
//Lecture Number 163 Sorting Arrays 163
const owners = ["j", "H", "H", "K"];

console.log(owners.sort()); // It mutates the orginal Array
console.log(owners);
//Numbers
//Sort method does Sorting in basis of Strings
const num = [15, 6, 7, 8, 4, 2, 3, 1];

//if  A is before B when <0 return A,B (keep order)
//if A is afetr B when >0  return B,A(switch order)

//Switching   places, this happens in js sort method until the array is sorted
//Ascending order
num.sort((a, b) => {
  // a current vakue
  // b next value
  if (a > b) {
    //(Switch order)
    return 1;
  }
  if (a < b) {
    //(keep order)
    return -1;
  }
});

console.log(num);
//Decending Order
num.sort((a, b) => {
  // a current vakue
  // b next value
  if (a > b) {
    //(Switch order)
    return -1;
  }
  if (a < b) {
    //(keep order)
    return 1;
  }
});
//For ascending
// a-b =positive switch order
// b-a =negative keep order\
//simplified version {Since arrow function doesnt needs return function}
num.sort((a, b) => a - b);
console.log(num);

//For descending
// a-b = negative keep order
//  a-b = psitive swirch order
num.sort((a, b) => b - a);
console.log(num);

//  Array creation  ..empty array creation
const ary = new Array(8);
ary.fill(2);
console.log(ary);
const state = "Loves u";
const naruto = ["_", "_", `${state}`];
naruto.fill("❤️", 0, 1);
naruto.fill("Jai", 1, 2);

console.log(naruto);

// Array .form
const x = Array.from({ length: 7 }, () => 1);
const y = Array.from({ length: 8 }, (cur, i) => i + 1);
console.log(x);
console.log(y);

//  document.querySelector('.balance_value').addEventListener('click',function(e){
//   const moveui=Array.from(document.querySelectorAll('.movements_value'))
//   console.log(moveui.map(el=>el.textContent.replace('€','')));
//  });

//  Lectute 166
const bankdepo = accounts
  .flatMap((acc) => acc.movements)
  .filter((acc) => acc > 0)
  .reduce((acc, cur, arr) => acc + cur, 0);
console.log(bankdepo);
//2.
//Count depo 1000$
const numdeposit1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov >= 1000).length;
console.log(numdeposit1000);
//Second method using the reduce method counting using the reduce
const numdepored = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, cur) => (cur >= 1000 ? ++acc : acc), 0);
console.log(numdepored);

// 3.Advance reduce  creation of new object

const { deposis, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (acc, cur) => {
      cur > 0 ? (acc.deposis += cur) : (acc.withdrawals += cur);
      return acc;
    },
    { deposis: 0, withdrawals: 0 }
  );
console.log(deposis, withdrawals);

//4.
//convert a string to Title Case..an apple -> An Apple
const convTitlecase = function (title) {
  const exception = ["a", "an", "the", "but", "or", "on", "in", "with"];
  const titlecase = title
    .toLowerCase()
    .split(" ")
    .map((word) =>
      exception.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    );
  return titlecase;
};
console.log(convTitlecase("this is a titlLe"));
console.log(convTitlecase("this is a LONG titlLe"));
console.log(convTitlecase("this is an APple titlLe"));

//
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28.
 (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.Recommended Food
dogs.forEach((dog) => {
  dog.RecFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);

//2.Find the Sarh dog
dogs.forEach((dog) => {
  const own = dog.owners.flatMap((ownr) => {
    ownr == "Sarah"
      ? dog.curFood > dog.RecFood
        ? console.log("Sarah Dog Eating high")
        : console.log("Sarah dog Eating low")
      : console.log(ownr);
  });
  //  console.log(own);
});
const sarahdog = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(sarahdog);
console.log(
  ` Sarah dog is eating ${sarahdog.curFood > sarahdog.RecFood ? "much" : "Low"}`
);
// console.log();
//3. Create a array of owners  whos dogs eat the more
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.RecFood)
  .map((dog) => dog.owners)
  .flat();
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.RecFood)
  .map((dog) => dog.owners)
  .flat();
//NOTE
// const owns=ownersEatTooMuch.owners.flat();
// console.log('j');
//4."Sarah and John and Michael's dogs eat too little!"
console.log(` ${ownersEatTooMuch.join(" and ")} dogs eat too much`);
console.log(`${ownersEatTooLittle.join(" and ")} dogs eat too Less`);
//5 .
console.log(dogs.some((dog) => dog.curFood === dog.RecFood));
//6.Okay amount of food
console.log(dogs);
// console.log(
//   dogs.some((dog)=>(dog.curFood>=dog.RecFood*0.90 &&dog.curFood<dog.RecFood*1.10)));
//7. Check eating Okay
//function
// const checkeating=function(dog){
const CheckEating = (dog) =>
  dog.curFood > dog.RecFood * 0.9 && dog.curFood < dog.RecFood * 1.1;

// }

// dogs.forEach((dog)=>{
//   let dogie=dog.some((dog)=>(dog.curFood>=dog.RecFood*0.90&&dog.curFood<dog.RecFood <1.10));
//   if(dogie==true){
//     ++count;
//   }
// });
console.log(dogs.some(CheckEating));
const dogEatOk = dogs.filter(CheckEating).length;

console.log(dogEatOk);
//Shallow copy  of dogs array
const reqfoodary = dogs.map((dog) => dog.RecFood);
const dogsCopy = reqfoodary.sort((a, b) => {
  if (a > b) {
    return 1; //Switch cases
  } else {
    return -1; //dont switch cases
  }
});
console.log(dogsCopy);
//NOTE - METHOD setInterval
const  now =new Date();

// const  time=setInterval(()=>{
//   const  now =new Date();
//   const hr= now.getHours();
//   const ts=hr>12?'pm':'am';
//   let ac=hr%12;
//   ac=ac?ac:12;
//   const min=now.getMinutes();
//   const sec=now.getSeconds();
//   console.log(`Clock ${ac}hr:${min}min:${sec}:${ts}`);
//   if(now.getMinutes()===52){clearTimeout(time)
//     console.log('Happy Birthday Gugan');};
// },5000);