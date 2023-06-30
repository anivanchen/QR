'use client'
import { useState } from "react";
import { QrScanner } from '@yudiel/react-qr-scanner';

export default function Scan() {

  const [contents, setContents] = useState('Try scanning a QR code!');

  const copyToClipboard = () => { 
    const text = document.getElementById('text') as HTMLElement;
    navigator.clipboard.writeText(contents);
    const button = document.getElementById('copy') as HTMLButtonElement;
    button.className = "m-4 p-4 bg-green-400 text-black rounded-lg";
    button.innerText = "Copied!";
    setTimeout(() => {
      button.className = "m-4 p-4 bg-teal-400 text-black rounded-lg";
      button.innerText = "Copy";
    }, 500);
  }

  return (
    <>
      <div style={{height: "100%", maxHeight: "384px", width: "100%", maxWidth: "384px"}}>
        <QrScanner
          onDecode={(e) => setContents(e)}
          onError={() => {}}
          containerStyle={{}}
        />
      </div>
      
      <p id="text" className="m-4">{contents}</p>
      <button
        id="copy"
        className="m-4 p-4 bg-teal-400 text-black rounded-lg hover:bg-teal-500 active:bg-teal-700"
        onClick={copyToClipboard}>Copy</button>
    </>
  )
}
