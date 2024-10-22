// Fungsi untuk validasi form (hanya jika ada di halaman Kontak)
if (document.getElementById('submitButton')) {
    document.getElementById('submitButton').addEventListener('click', function() {
        validateForm();
    });
}

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var result = document.getElementById('result');

    // Cek apakah form diisi dengan benar
    if (name === "" || email === "" || message === "") {
        result.innerHTML = "Semua kolom harus diisi!";
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

    result.innerHTML = "Pesan berhasil dikirim!";
    result.style.color = "green";
    return true;
}

// Fungsi untuk menambahkan animasi hover pada menu navigasi
document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('mouseover', function() {
        link.style.transition = "0.3s"; // Animasi selama 0.3 detik
        link.style.transform = "scale(1.1)"; // Membuat efek zoom-in
        link.style.backgroundColor = "#FFD700"; // Ubah background menjadi emas saat hover
        link.style.color = "#000"; // Teks menjadi hitam
    });

    link.addEventListener('mouseout', function() {
        link.style.transform = "scale(1)";
        link.style.backgroundColor = ""; // Kembali ke warna background semula
        link.style.color = "white"; // Kembali ke warna teks putih
    });
});

// Pesan selamat datang hanya di halaman index.html (Beranda)
window.onload = function() {
    // Cek apakah halaman ini adalah index.html
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === "/") {
        alert("Selamat datang di halaman beranda kami!");
    }
}
