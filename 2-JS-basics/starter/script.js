// console.log('Hello World!!!');

// let johnTeamScore = (97 + 134 + 105)/3;
// let mikeTeamScore = (97 + 134 + 105)/3;
// let maryTeamScore = (97 + 134 + 105)/3;

// switch (true) {
//     case johnTeamScore > mikeTeamScore && johnTeamScore > maryTeamScore:
//         console.log(`john is the winner with score of ${johnTeamScore}`);
//         break;
//     case mikeTeamScore > maryTeamScore && mikeTeamScore > johnTeamScore:
//         console.log(`mike is the winner with score of ${mikeTeamScore}`);
//         break;
//     case maryTeamScore > johnTeamScore && maryTeamScore > mikeTeamScore:
//         console.log(`mary is the winner with socre of ${maryTeamScore}`);
//         break;
//     case johnTeamScore === mikeTeamScore && mikeTeamScore > maryTeamScore:
//         console.log(`mike and john are winners with the same score of ${mikeTeamScore}`);
//         break;
//     case johnTeamScore === maryTeamScore && maryTeamScore > mikeTeamScore:
//         console.log(`mary and john are winners with the same score of ${maryTeamScore}`);
//         break;
//     case maryTeamScore === mikeTeamScore && mikeTeamScore > johnTeamScore:
//         console.log(`mary and mike are winners with the same score of ${maryTeamScore}`);
//         break;
//     case maryTeamScore === mikeTeamScore && mikeTeamScore === johnTeamScore:
//         console.log(`john, mike and marry have the same score of ${maryTeamScore}`);
//         break;
// }

// console.log('coding challenge 3');
// function tipCalculator(bill) {
//     if(bill < 50){
//         return bill*0.2;
//     }
//     else if(bill >= 50 && bill <= 200){
//         return bill*0.15;
//     }
//     else{
//         return bill*0.1;
//     }
// }
// let bill1 = prompt('What is the value of the first bill?');   // here bill1 is a string not number because it comes from prompt
// let bill2 = prompt('What is the value of the second bill?');
// let bill3 = prompt('What is the value of the third bill?');

// let tipArray = [tipCalculator(bill1), tipCalculator(bill2), tipCalculator(bill3)];
// console.log(typeof(tipCalculator(bill1)));
// bill1 = Number(bill1) + tipCalculator(bill1);
// bill2 = Number(bill2) + tipCalculator(bill2);
// bill3 = Number(bill3) + tipCalculator(bill3);

// let billArray = [bill1, bill2, bill3];
// console.log(`tip array is ${tipArray}`);
// console.log(`bill array is ${billArray}`);


// console.log('object and method');
// john = {
//     birthYear : 1990,
//     occupation : 'teacher',
//     isMarried : true,
//     family : ['mary','mike','amy'],
//     calAge : function() {
//         this.age = 2018 - this.birthYear;
//     }
// };

// john.calAge();
// console.log(john);

// console.log('coding challenge 4');
// John = {
//     fullName : 'JohnSmith',
//     mass : 76,
//     height : 1.8,
//     calcBMI : function(){
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI
//     }
// };

// Mark = {
//     fullName : 'MarkDon',
//     mass : 80,
//     height : 1.9,
//     calcBMI : function(){
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     }
// };

// John.calcBMI();
// Mark.calcBMI();
// console.log(John,Mark);
// if(John.BMI>Mark.BMI) {
//     console.log(`${John.fullName} has the heighest BMI of ${John.BMI}`);
// }else if(John.BMI<Mark.BMI) {
//     console.log(`${Mark.fullName} has the heighest BMI of ${Mark.BMI}`);
// }else {
//     console.log(`${John.fullName} and ${Mark.fullName} have the same BMI of ${John.BMI}`);
// }

// console.log('for loop');
// let john = ['John', 'Smith', 1990, 'designer', false, 'bule'];
// for(let i = 0; i < john.length; i++){
//     console.log(john[i]);
// }
// //looping backwards
// for (let i = john.length - 1; i >= 0; i--){
//     console.log(john[i]);
// }




console.log('coding challenge 4');

let john = {
    billValues : [124, 48, 268, 180, 42],
    percentage : function(bill){
        if(bill < 50){
            return 0.2;
        }else if(bill >= 50 && bill <= 200){
            return 0.15;
        }else{
            return 0.1;
        }
    },
    calcTip: function(){
        this.tipArray = [];
        for(i = 0; i < this.billValues.length; i++){
            bill = this.billValues[i]
            this.tipArray[i] = this.billValues[i] * this.percentage(bill);
        }
    },
}

john.calcTip();
console.log(john);
let finalBills = [];
for(i = 0; i < john.tipArray.length; i++){
    finalBills[i] = john.billValues[i] + john.tipArray[i];
}
john.finalBills = finalBills
console.log(`john's tips and final bills are ${john.tipArray} and ${john.finalBills}`);


let mark = {
    billValues : [77, 375, 110, 45],
    percentage : function(bill){
        if(bill < 100){
            return 0.2;
        }else if(bill >= 100 && bill <= 300){
            return 0.1;
        }else{
            return 0.25;
        }
    },
    calcTip: function(){
        this.tipArray = [];
        for(i = 0; i < this.billValues.length; i++){
            bill = this.billValues[i]
            this.tipArray[i] = this.billValues[i] * this.percentage(bill);
        }
    },
}
mark.calcTip()

function calcAverageTips(tips){
    sum = 0;
    for(i = 0; i < tips.length; i++){
        sum += tips[i];
    }
    return sum/tips.length;
}

let markAverageTips = calcAverageTips(mark.tipArray);
let johnAverageTips = calcAverageTips(john.tipArray);
if(markAverageTips > johnAverageTips){
    console.log('mark paid higher average tip');
}else if(markAverageTips < johnAverageTips){
    console.log('john paid heigher average tip');
}else{
    console.log('john and mark paid the same aveage tip');
}