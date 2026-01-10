import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  // 1. Criamos a referência para o QR Code
  const qrRef = useRef();

  const downloadQRCode = () => {
    // 2. Acedemos ao elemento canvas através da ref
    const canvas = qrRef.current.querySelector('canvas');
    const image = canvas.toDataURL("image/png");
    
    // 3. Criamos um link temporário para o download
    const anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code.png`; // Nome do ficheiro
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div className="container">
      <h1>Gerador de QR Code</h1>
      
      <input
        type="text"
        placeholder="Cola aqui o Seu link..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="input-field"
      />

      <div className="qr-container" ref={qrRef}>
        {url ? (
          <>
            <QRCodeCanvas 
              value={url} 
              size={256} 
              level={"H"} 
              includeMargin={true}
            />
            {/* Botão de Download aparece apenas quando há um QR Code */}
            <button onClick={downloadQRCode} className="download-btn">
              Descarregar PNG
            </button>
          </>
        ) : (
          <div className="placeholder">Insira um link para gerar</div>
        )}
      </div>
    </div>
  );
}

export default App;