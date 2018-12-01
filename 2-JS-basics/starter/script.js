console.log('Hello World!!!');

let johnTeamScore = (97 + 134 + 105)/3;
let mikeTeamScore = (97 + 134 + 105)/3;
let maryTeamScore = (97 + 134 + 105)/3;

switch (true) {
    case johnTeamScore > mikeTeamScore && johnTeamScore > maryTeamScore:
        console.log(`john is the winner with score of ${johnTeamScore}`);
        break;
    case mikeTeamScore > maryTeamScore && mikeTeamScore > johnTeamScore:
        console.log(`mike is the winner with score of ${mikeTeamScore}`);
        break;
    case maryTeamScore > johnTeamScore && maryTeamScore > mikeTeamScore:
        console.log(`mary is the winner with socre of ${maryTeamScore}`);
        break;
    case johnTeamScore === mikeTeamScore && mikeTeamScore > maryTeamScore:
        console.log(`mike and john are winners with the same score of ${mikeTeamScore}`);
        break;
    case johnTeamScore === maryTeamScore && maryTeamScore > mikeTeamScore:
        console.log(`mary and john are winners with the same score of ${maryTeamScore}`);
        break;
    case maryTeamScore === mikeTeamScore && mikeTeamScore > johnTeamScore:
        console.log(`mary and mike are winners with the same score of ${maryTeamScore}`);
        break;
    case maryTeamScore === mikeTeamScore && mikeTeamScore === johnTeamScore:
        console.log(`john, mike and marry have the same score of ${maryTeamScore}`);
        break;
}