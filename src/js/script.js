'use strict';

let money, time;
let startBtn = document.querySelector('#start'),
    budgetValue = document.querySelector(".budget-value"),
    dayBudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalExpensesValue = document.querySelector(".optionalexpenses-value"),
    incomeValue = document.querySelector(".income-value"),
    yearSavingsValue = document.querySelector(".yearsavings-value"),
    monthSavingsValue = document.querySelector(".monthsavings-value"),
    expensesItem = document.querySelectorAll(".expenses-item"),
    expensesItemBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBudgetBtn = document.getElementsByTagName("button")[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome = document.querySelector(".choose-income"),
    savingsCheckbox = document.querySelector("#savings"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpences: {},
    income:[],
    savings: false,
    };
countBudgetBtn.disabled = true;
optionalExpensesBtn.disabled = true;
expensesItemBtn.disabled = true;

startBtn.addEventListener('click', function(){
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY:MM:DD", "");
    
    while(isNaN(money) || money == '' || money == null){
        money = +prompt("Ваш бюджет на месяц?", "");
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed(0);
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    countBudgetBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    expensesItemBtn.disabled = false;
});

expensesItemBtn.addEventListener('click', function(){
    let sum = 0;

    for(let i = 0; i < expensesItem.length; i++){
        let a = expensesItem[i].value,
            b = expensesItem[++i].value; 
    
        if((typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
            appData.expenses[a] = b;
            sum += +b;
        } else{
            i = i - 1;
        }
    expensesValue.textContent = sum;
    }
});





countBudgetBtn.addEventListener('click', function(){
    if(appData.budget != undefined){
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if(appData.moneyPerDay < 100){
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000){
            levelValue.textContent = "Высокий уровень достатка";
        } else{
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }   
});

optionalExpensesBtn.addEventListener('click', function(){
    for(let i = 0; i < optionalExpensesItem.length; i++){
        let opt = optionalExpensesItem[i].value;
            appData.optionalExpences[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpences[i] + " ";
    }
});

chooseIncome.addEventListener('input', function(){
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savingsCheckbox.addEventListener('click', function(){
    if(appData.savings == true){
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

choosePercent.addEventListener('click', function(){
    if(appData.savings == true){
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
}); 






// for (let key in appData){
//    console.log("Наша программа содержит значения: " + key + " : " + appData[key]);
// };
