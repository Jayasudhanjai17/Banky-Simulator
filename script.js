const account1 = {
    owner: 'Shiva Guru',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
    movementsDates: [
      '2019-11-17T21:31:17.178Z',
      '2019-12-23T07:42:02.383Z',
      '2020-01-28T09:15:04.904Z',
      '2020-04-01T10:17:24.185Z',
      '2020-05-08T14:11:59.604Z',
      '2020-05-27T17:01:17.194Z',
      '2020-07-11T23:36:17.929Z',
      '2020-07-12T10:51:36.790Z',
    ],
  };
  
  const account2 = {
    owner: 'Luffy',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2020-06-25T18:49:59.371Z',
      '2020-07-26T12:01:20.894Z',
    ],
  };
  
  const account3 = {
    owner: 'Gugan',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2020-06-25T18:49:59.371Z',
      '2020-07-26T12:01:20.894Z',
    ],
  };
  
  const account4 = {
    owner: 'Itachi Uchiha',
    movements: [430, 1000, 700, 90,67,89,-90,-100],
    interestRate: 1,
    pin: 4444,
    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2020-06-25T18:49:59.371Z',
      '2020-07-26T12:01:20.894Z',
    ],
  };

  const account5 = {
    owner: 'Roronoa Zoro',
    movements: [430, 1000, 700, 50, 90,89,-56,-110],
    interestRate: 1,
    pin:5555,
    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2020-06-25T18:49:59.371Z',
      '2020-07-26T12:01:20.894Z',
    ],
  };
  
  const accounts = [account1, account2, account3, account4,account5];
  
  /////////////////////////////////////////////////
  // Elements
  const labelWelcome = document.querySelector('.welcome');
  const labelDate = document.querySelector('.date');
  const labelBalance = document.querySelector('.balance__value');
  const labelSumIn = document.querySelector('.summary__value--in');
  const labelSumOut = document.querySelector('.summary__value--out');
  const labelSumInterest = document.querySelector('.summary__value--interest');
  const labelTimer = document.querySelector('.timer');
  
  const containerApp = document.querySelector('.app');
  const containerMovements = document.querySelector('.movements');
  
  const btnLogin = document.querySelector('.login__btn');
  const btnTransfer = document.querySelector('.form__btn--transfer');
  const btnLoan = document.querySelector('.form__btn--loan');
  const btnClose = document.querySelector('.form__btn--close');
  const btnSort = document.querySelector('.btn--sort');
  
  const inputLoginUsername = document.querySelector('.login__input--user');
  const inputLoginPin = document.querySelector('.login__input--pin');
  const inputTransferTo = document.querySelector('.form__input--to');
  const inputTransferAmount = document.querySelector('.form__input--amount');
  const inputLoanAmount = document.querySelector('.form__input--loan-amount');
  const inputCloseUsername = document.querySelector('.form__input--user');
  const inputClosePin = document.querySelector('.form__input--pin');
  
  /////////////////////////////////////////////////
  // Functions
  //---------------Display  Movemts --------------------
  const displayMovements = function (acc,sort=false ) {

    containerMovements.innerHTML = '';
    const movs= sort ?acc.movements.slice().sort((a,b)=>a-b):acc.movements;

  
   
  
    movs.forEach(function (mov, i) {
      const date =new Date(acc.movementsDates[i]);
      const  dayy=`${date.getDate()}`.padStart(2,0);
    const  monn=`${date.getMonth()+1}`.padStart(2,0);
    const dispDate=`${dayy}/${monn}/${date.getFullYear()}`;
      const type = mov > 0 ? 'deposit' : 'withdrawal';
  
      const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
        i + 1
      } ${type}</div>
      <div class="movements__date">${dispDate}</div>
          <div class="movements__value">${mov.toFixed(2)}€</div>
        </div>
      `;
  
      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
  };
  
  const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
  };
  //-----------Display Summary ---------------
  const calcDisplaySummary = function (acc) {
    //--------------------Incomes-------------------------
    const incomes = acc.movements
      .filter(mov => mov > 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes.toFixed(2)}€`;
  //-------------------Withdrawals-------------------------
    const out = acc.movements
      .filter(mov => mov < 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out.toFixed(2))}€`;
  // -------------------Interest--------------------------
    const interest = acc.movements
      .filter(mov => mov > 0)
      .map(deposit => (deposit * acc.interestRate) / 100)
      .filter((int, i, arr) => {
        // console.log(arr);
        return int >= 1;
      })
      .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest.toFixed(2)}€`;
  };
  //-----------------User name------------------------------
  
  const createUsernames = function (accs) {
    accs.forEach(function (acc) {
      acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join('');
    });
  };
  createUsernames(accounts);
  
  const updateUI = function (acc) {
    // Display movements
    displayMovements(acc);
  
    // Display balance
    calcDisplayBalance(acc);
  
    // Display summary
    calcDisplaySummary(acc);
  };
  
  ///////////////////////////////////////
  // Event handlers
  let currentAccount;
  //Fake Always Logged in
  currentAccount=account1;
  updateUI(currentAccount);
  containerApp.style.opacity=100;
  
  btnLogin.addEventListener('click', function (e) {
    // Prevent form from submitting
    e.preventDefault();
  
    currentAccount = accounts.find(
      acc => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);
  
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
      // ----------------Display UI and message
      labelWelcome.textContent = `Welcome back, ${
        currentAccount.owner.split(' ')[0]
      }`;
      containerApp.style.opacity = 100;
  

//Current Date creation
      const now =new Date();
const  day=`${now.getDate()}`.padStart(2,0);
const  mon=`${now.getMonth()+1}`.padStart(2,0);
const hr=`${now.getHours()}`.padStart(2,0);
const min=`${now.getMinutes()}`.padStart(2,0);

const modi=`${day}/${mon}/${now.getFullYear()},${hr}:${min}`;
labelDate.textContent=modi;
      // Clear input fields
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginPin.blur();
  
      // Update UI
      updateUI(currentAccount);
    }
  });
  //--------------Button Transfer ----------------------
  btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(
      acc => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = '';
  
    if (
      amount > 0 &&
      receiverAcc &&
      currentAccount.balance >= amount &&
      receiverAcc?.username !== currentAccount.username
    ) {
      // Doing the transfer
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);
  
      //Add Transfer Date 
      currentAccount.movementsDates.push(new Date().toISOString());
      receiverAcc.movementsDates.push(new Date().toISOString());
      // Update UI
      updateUI(currentAccount);
    }
  });
  //----------Transfer End---------------------------------

  //--------------Loan Button Function------------------
  btnLoan.addEventListener('click',function(e){
     e.preventDefault();
     const amount=Math.floor(inputLoanAmount.value);
     //Loan should be processed when deposit >= 10 percent of amount
     if(amount>0 && currentAccount.movements.some(mov=>mov>=amount/10)){
      currentAccount.movements.push(amount);
      //Add the Loan Date 
      currentAccount.movementsDates.push(new Date().toISOString());
   updateUI(currentAccount);

     }//end of if
     inputLoanAmount.value='';
  });

  
  //--------------Close account function ----------------
  
  btnClose.addEventListener('click', function (e) {
    e.preventDefault();
  
    if (
      inputCloseUsername.value === currentAccount.username &&
      Number(inputClosePin.value) === currentAccount.pin
    ) {
      const index = accounts.findIndex(
        acc => acc.username === currentAccount.username
      );
      console.log(index);
      // .indexOf(23)
  
      // Delete account
      accounts.splice(index, 1);
  
      // Hide UI
      containerApp.style.opacity = 0;
    }
  
    inputCloseUsername.value = inputClosePin.value = '';
  });
  //Code For Sorting the Transactions Function
  let sorted=true;
  btnSort.addEventListener('click', function (e)
  {
    e.preventDefault();
    displayMovements(currentAccount.movements,!sorted);
    sorted=!sorted;

  })
  ////..Lecture 164
  //Array.form has two psrameters 

  document.querySelector('.balance__value').addEventListener('click',function(e){
    const moveui=Array.from(document.querySelectorAll('.movements__value'))
    console.log(moveui.map(el=>el.textContent.replace('€','')));
   });

   
//Lecture 176 -------------Dates Bankist App----------------------
// Date creation

//------------------------------------------------------------------------

