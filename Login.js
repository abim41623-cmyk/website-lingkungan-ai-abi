import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Di sini Anda bisa menyambungkan ke API Backend
    if (email && password) {
      onLogin(email);
    } else {
      alert("Silakan isi email dan password");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>EcoAI - Masuk</h2>
        <p>Mari berkontribusi untuk bumi yang lebih hijau.</p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input 
            type="email" 
            placeholder="Email Lingkungan Anda" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Masuk Sekarang</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f4f0' },
  card: { padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', textAlign: 'center', width: '350px' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' },
  input: { padding: '12px', borderRadius: '6px', border: '1px solid #ddd', outline: 'none' },
  button: { padding: '12px', backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }
};

export default Login;
