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

console.log('coding challenge 3');
function tipCalculator(bill) {
    if(bill < 50){
        return bill*0.2;
    }
    else if(bill >= 50 && bill <= 200){
        return bill*0.15;
    }
    else{
        return bill*0.1;
    }
}
let bill1 = prompt('What is the value of the first bill?');   // here bill1 is a string not number because it comes from prompt
let bill2 = prompt('What is the value of the second bill?');
let bill3 = prompt('What is the value of the third bill?');

let tipArray = [tipCalculator(bill1), tipCalculator(bill2), tipCalculator(bill3)];
console.log(typeof(tipCalculator(bill1)));
bill1 = Number(bill1) + tipCalculator(bill1);
bill2 = Number(bill2) + tipCalculator(bill2);
bill3 = Number(bill3) + tipCalculator(bill3);

let billArray = [bill1, bill2, bill3];
console.log(`tip array is ${tipArray}`);
console.log(`bill array is ${billArray}`);