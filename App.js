import React, { useState } from 'react';
import Login from './Login';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email) => {
    setUser({ email, name: email.split('@')[0] });
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Apakah Anda yakin ingin keluar? Semua data klasifikasi tersimpan aman.");
    if (confirmLogout) {
      setUser(null);
    }
  };

  return (
    <div>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div style={styles.dashboard}>
          <nav style={styles.navbar}>
            <h1 style={{ color: '#2e7d32' }}>EcoAI Dashboard</h1>
            <button onClick={handleLogout} style={styles.logoutBtn}>Log Out</button>
          </nav>
          
          <main style={styles.mainContent}>
            <h2>Selamat Datang, {user.name}! 🌱</h2>
            <div style={styles.aiBox}>
              <p>Klik di sini untuk mulai klasifikasi lingkungan dengan AI</p>
              <button style={styles.scanBtn}>Buka Kamera / Unggah Foto</button>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

const styles = {
  navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', background: '#fff', borderBottom: '2px solid #e0e0e0' },
  logoutBtn: { padding: '8px 16px', backgroundColor: '#d32f2f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  mainContent: { padding: '2rem', textAlign: 'center' },
  aiBox: { marginTop: '50px', padding: '40px', border: '2px dashed #2e7d32', borderRadius: '15px', backgroundColor: '#f9fff9' },
  scanBtn: { marginTop: '20px', padding: '15px 30px', backgroundColor: '#2e7d32', color: 'white', borderRadius: '30px', border: 'none', fontSize: '1.1rem', cursor: 'pointer' }
};

export default App;
