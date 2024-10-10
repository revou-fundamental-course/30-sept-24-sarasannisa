// ini JavaScript

const inputAngka = document.querySelector("#input-suhu");
const pilihUnit = document.querySelector(".pilih-unit");

const submitButton = document.querySelector(".konversi-btn");
const resetButton = document.querySelector(".reset-btn");
const tukarButton = document.querySelector(".reverse-btn");

const shortResult = document.querySelector('.result-temp-short')
const longResult = document.querySelector('.result-temp-long')

let pilihTipeUnit = "C";
let pilihHasilSuhu = "F";

pilihUnit.addEventListener("change", function() {
    pilihTipeUnit = pilihUnit.value;
    console.log("test");
})

inputAngka.addEventListener("submit", function () {
    a.preventDefault();
        console.log("test");
})

// untuk tombol konversi yang hasil dan cara kalkulasi nya seharusnya muncul di kolom yang sudah disediakan

submitButton.addEventListener("click", function () {
    if (inputAngka == '') {
        alert('Isilah dengan angka yang ingin Anda hitung')
    } else (
        calculate (inputAngka)
    )
})


// fungsi tombol reset menghapus input suhu dan hasil
resetButton.addEventListener("click", function () {
    inputAngka.value = "";
        console.log("test");
})

// fungsi tombol reverse untuk menukar konversi suhu yang otomatis merubah rumusnya
tukarButton.addEventListener("click", function () {
        console.log("test");
})


shortResult.addEventListener()
function calculate(value) {
    let result = parseInt(value) * 1.8 + 32;

}

// masih harus banyak belajar logic kak huhu maaf tidak selesai