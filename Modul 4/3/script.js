// Fungsi untuk validasi form
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var result = document.getElementById('result');
    
    // Cek apakah form diisi dengan benar
    if (name === "" || email === "") {
        result.innerHTML = "Nama dan email harus diisi!";
        result.style.color = "red";
        return false;
    }

    // Validasi format email sederhana
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        result.innerHTML = "Masukkan email yang valid!";
        result.style.color = "red";
        return false;
    }

    result.innerHTML = "Data berhasil ditambahkan!";
    result.style.color = "green";
    return true;
}

// Event listener untuk tombol tambah data
document.getElementById('submitButton').addEventListener('click', function() {
    validateForm();
});
