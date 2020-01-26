// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// var nama = 'Sandhika';
// console.log(nama);

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution <phase></phase>

// console.log(sayHello());

// var nama = 'Sandhika';
// var umur = 33;

// function sayHello() {
// 	return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting



// var nama = 'Sandhika Galih';
// var username = '@sandhikagalih';

// function cetakURL() {
// 	console.log(arguments);
// 	var instagramURL = 'http://instagram.com/';
// 	return instagramURL + username;
// }

// console.log(cetakURL('@doddyferdiansyah', '@erik'));

// function a() {
// 		console.log('ini a');

// 		function b() {
// 			console.log('ini b');

// 		function c() {
// 			console.log('ini c');
// 		}

// 	c();

// 	}

// 	b();
// }

// a();


function satu() {
	var nama = 'Sandhika';
	console.log(nama);
}

function dua() {
	console.log(nama);
}

console.log(nama);
var nama = 'Erik';
satu();
dua('Doddy');
console.log(nama);