// if dan else
let angka = 60;

if (angka >= 90) {
  console.log("angka Anda A");
} else if (angka >= 80) {
  console.log("angka Anda B");
} else if (angka >= 70) {
  console.log("angka Anda C");
} else {
  console.log("angka Anda D");
}

// nested if
let nama = "Marsel";
let usia = 20;

if (usia >= 17) {
    console.log(nama + "sudah memiliki SIM.");
    if (usia >= 18) {
        console.log("Dia juga dapat mengendarai motor");
    }
} else {
    console.log(nama + " adalah seorang anak-anak.");
}

// switch
let hari = 6;

switch (hari) {
  case 1:
    console.log("Minggu");
    break;
  case 2:
    console.log("Senin");
    break;
  case 3:
    console.log("Selasa");
    break;
  case 4:
    console.log("Rabu");
    break;
  case 5:
    console.log("Kamis");
    break;
  case 6:
    console.log("Jumat");
    break;
  case 7:
    console.log("Sabtu");
    break;
  default:
    console.log("Angka yang dimasukkan tidak valid");
}

// for statement
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }  

// while
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

// do while
let userInput;

do {
  userInput = prompt("Masukkan nomor (angka >= 1):");
} while (isNaN(userInput) || Number(userInput) < 1);

console.log("Anda memasukkan nomor yang valid:", userInput);

// function
function sapaPengguna(nama) {
    console.log("Halo, " + nama + "! Selamat datang.");
  }
    
  sapaPengguna("John");
  sapaPengguna("Alice");
  