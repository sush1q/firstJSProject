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
    expensesItem = document.querySelector(".expenses-item"),
    expensesItemBtn = document.getElementsByTagName("expenses-item-btn"),
    optionalExpensesBtn = document.getElementsByTagName("optionalexpenses-btn"),
    countBudgetBtn = document.getElementsByTagName("count-budget-btn"),
    optionalExpensesItem = document.querySelector(".optionalexpenses-item"),
    chooseIncome = document.querySelector(".choose-income"),
    savingsCheckbox = document.querySelector("#savings"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");


function start(){
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY:MM:DD", "");
    while(isNaN(money) || money == '' || money == null){
        money = +prompt("Ваш бюджет на месяц?", "");
    } 
};

start()

let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income:[],
    savings: false,
    chooseExpences: function(){
        for(let i = 0; i < 2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", ""); 
        
            if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
                appData.expences[a] = b;
                console.log('done cycle');
            } else{
                i--;
                console.log('bad result');
            }
        }
    },
    checkSavings: function(){
        if (appData.savings == true){
            let save = prompt("Какова сумма накоплений? ", ""),
                percent = prompt("Под какой процент? ", "");
            appData.monthIncome = save/100/12*percent;
            alert("Ежемесячный доход с накоплений: " + appData.monthIncome);
        }
    },
    detectDayBudget:function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function(){
        if(appData.moneyPerDay < 100){
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000){
            console.log("Высокий уровень достатка");
        } else{
            console.log("Произошла ошибка");
        }
    },
    chooseOptExpences: function(){
        let i = 1;
        while (i < 4){
        let optionalExpencesA = prompt("Статья необязательных расходов? ", "");
        appData.optionalExpences[i] = optionalExpencesA;
        console.log("done cycle");
        i++;
        }
    },
    chooseIncome(){
        let items = prompt("Что принесет дополнительный доход? (перечислите черз запятую)", "");
        if (typeof(items) != string || items == null || items == ""){
            alert("Вы ввели некорректные данные или невели их вовсе")
        } else{
            appData.income = items.split(', ');
            appData.income.push(prompt("Может что-то еще? "));
            appData.income.sort();
        }
        
        appData.income.forEach(function(mass, i){
            alert("Способы доп. заработка: " + (i+1) + mass)
        });
    },
};



for (let key in appData){
   console.log("Наша программа содержит значения: " + key + " : " + appData[key]);
};





    
    











// let i = 0;
// while(i < 2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
    
//     if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
//         appData.expences[a] = b;
//         console.log('done cycle');
//     } else{
//         i--;
//         console.log('bad result');
//     }
//     i++;
// }


// let i = 0;
// do{
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", ""); 

//     if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
//         appData.expences[a] = b;
//         console.log('done cycle');
//     } else{
//         i--;
//         console.log('bad result');
//     } 
//     i++;
// }
// while(i < 2)



