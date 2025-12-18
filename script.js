/**
 * ECO-AI JAVASCRIPT LOGIC
 * Mengatur: Login, Logout, Simulasi AI, dan Edukasi
 */

// 1. Inisialisasi Element
const loginForm = document.getElementById('loginForm');
const loginPage = document.getElementById('login-page');
const mainPage = document.getElementById('main-page');
const userDisplay = document.getElementById('user-display');
const imageInput = document.getElementById('imageUpload');
const predictionText = document.getElementById('prediction-text');
const aiResultBox = document.getElementById('ai-result');

// 2. Fungsi Login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Mencegah reload halaman

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validasi Sederhana
    if (email && password) {
        // Simpan sesi user sederhana di localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);

        showDashboard(email);
    } else {
        alert("Mohon isi semua kolom!");
    }
});

// 3. Fungsi Menampilkan Dashboard
function showDashboard(email) {
    const username = email.split('@')[0];
    userDisplay.innerText = `Halo, ${username} 🌱`;
    
    loginPage.style.display = 'none';
    mainPage.style.display = 'block';
}

// 4. Fungsi Logout
function handleLogout() {
    const yakin = confirm("Apakah Anda ingin keluar dari sistem EcoAI?");
    
    if (yakin) {
        // Hapus data sesi
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');

        // Reset tampilan
        mainPage.style.display = 'none';
        loginPage.style.display = 'flex';
        
        // Reset form
        loginForm.reset();
        aiResultBox.style.display = 'none';
    }
}

// 5. Logika Simulasi Klasifikasi AI
imageInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    
    if (file) {
        // Tampilkan kotak hasil dengan loading
        aiResultBox.style.display = 'block';
        predictionText.innerHTML = `<span class="loading">⏳ Menganalisis gambar menggunakan AI...</span>`;

        // Simulasi delay proses AI (2.5 detik)
        setTimeout(() => {
            const analisisData = [
                {
                    kategori: "Sampah Plastik (Anorganik)",
                    saran: "Masukkan ke tempat sampah kuning. Botol ini bisa didaur ulang menjadi serat kain!",
                    skor: "98.5%"
                },
                {
                    kategori: "Limbah Organik (Sisa Makanan)",
                    saran: "Gunakan untuk bahan kompos di rumah Anda untuk mengurangi emisi gas metana.",
                    skor: "95.2%"
                },
                {
                    kategori: "Lingkungan Tercemar (Polusi Air)",
                    saran: "Segera laporkan ke dinas lingkungan hidup melalui tombol laporan sosial di bawah.",
                    skor: "92.0%"
                }
            ];

            // Ambil hasil acak untuk simulasi
            const hasil = analisisData[Math.floor(Math.random() * analisisData.length)];

            // Tampilkan hasil ke UI
            predictionText.innerHTML = `
                <div style="color: var(--primary-green); font-weight: bold; font-size: 1.1rem;">
                    ${hasil.kategori}
                </div>
                <p style="margin: 5px 0;">${hasil.saran}</p>
                <small>Tingkat Akurasi AI: ${hasil.skor}</small>
            `;
        }, 2500);
    }
});

// 6. Cek Sesi Saat Halaman Diakses (Auto-Login jika belum logout)
window.onload = () => {
    const savedLogin = localStorage.getItem('isLoggedIn');
    const savedEmail = localStorage.getItem('userEmail');

    if (savedLogin === 'true' && savedEmail) {
        showDashboard(savedEmail);
    }
};
