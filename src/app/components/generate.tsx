'use client'
import { useState } from "react";
import { useQRCode } from 'next-qrcode'

export default function Generate() {

  const [contents, setContents] = useState('')
  const { Image } = useQRCode();

  const download = () => {
    let qr = document.getElementById('qrcode')?.firstChild as HTMLImageElement;
    let url = qr.src.replace("image/jpeg", "image/octet-stream");;
    if (!qr) return;
    let aEl = document.createElement("a");
    aEl.href = url;
    aEl.download = "QRCode.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  }

  return (
    <>
      <div id="qrcode">
        <Image
          text={contents ? contents : 'https://ivanchen.dev'}
          options={{
            type: 'image/jpeg',
            quality: 1,
            level: 'H',
            margin: 3,
            scale: 24,
            width: 384,
            color: {
            dark: '#000000',
            light: '#FFFFFF',
            },
          }}
        />
      </div>
      <input
        className="m-8 pb-2 bg-black text-white outline-none border-b-2 border-teal-400"
        style={{width: "100%", maxWidth: "384px"}}
        placeholder="QR Content..."
        onChange={(e) => setContents(e.target.value)}
      />
      <button
        className="m-4 p-4 bg-teal-400 text-black rounded-lg hover:bg-teal-500 active:bg-teal-700"
        onClick={download}>Download</button>
    </>
  )
}
