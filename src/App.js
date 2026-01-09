import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react'; // Biblioteca para gerar o QR Code
import './App.css'; // Onde colocaremos o estilo responsivo

function App() {
  // 1. Estado para armazenar o link digitado pelo utilizador
  const [url, setUrl] = useState('');

  return (
    <div className="container">
      <h1>Gerador de QR Code</h1>
      <p>Insere o teu link abaixo para gerar o código:</p>

      {/* Campo de Input */}
      <input
        type="text"
        placeholder="https://exemplo.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="input-field"
      />

      {/* Área do QR Code - Só aparece se houver texto no input */}
      <div className="qr-container">
        {url ? (
          <QRCodeCanvas 
            value={url} 
            size={256} 
            level={"H"} // Nível de correção de erro alto
            includeMargin={true}
          />
        ) : (
          <div className="placeholder">O QR Code aparecerá aqui</div>
        )}
      </div>

      {url && <p className="url-preview">Link: {url}</p>}
    </div>
  );
}

export default App;