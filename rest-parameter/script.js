// Rest Parameter

// function myFunc(...myArgs) {
//     // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//     // return myArgs;
//     // return Array.from(arguments);
//     return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
// let total = 0;
// for (const a of angka) {
//     total += a;
// }

//     return total;
//     return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));
// const kelompok1 = ['Sandhika', 'Doddy', 'Erik', 'Fajar', 'Hendra'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// object destructuring
// const team = {
//     pm: 'Sandhika',
//     frontEnd1: 'Doddy',
//     frontEnd2: 'Erik',
//     backEnd: 'Fajar',
//     ux: 'Hendra',
//     dev0ps: 'Ferry'
// }

// const { pm, ...myTeam } = team;
// console.log(myTeam);






// filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('boolean', 1, 2, 'Sandhika', false, 10, true, 'Doddy'));