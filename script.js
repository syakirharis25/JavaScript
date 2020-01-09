// Membuat Object
// Object Literal
var mhs1 = {
	nama : 'Sandhika Galih',
	nrp : '043040023',
	email : 'sandhikagalih@unpas.ac.id',
	jurusan : 'Teknik Informatika'
}

var mhs2 = {
	nama : 'Doddy',
	nrp : '033040007',
	email : 'doddy@gmail.com',
	jurusan : 'Teknik Industri'
}

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
	var mhs = {};
	mhs.nama = nama;
	mhs.nrp = nrp;
	mhs.email = email;
	mhs.jurusan = jurusan;
	return mhs; 
}

var mhs3 = buatObjectMahasiswa('Nofariza', '023040123', 
	'nofa@yahoo.com', 'Teknik Pangan')

// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
	// var this = {};
	this.nama = nama;
	this.nrp = nrp;
	this.email = email;
	this.jurusan = jurusan;
	// return this;
}

var mhs4 = new Mahasiswa('Erik', '013040321', 
	'erik@cloud.com', 'Teknik Mesin');