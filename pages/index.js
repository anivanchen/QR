import QRCode from 'qrcode.react'
import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [QRValue, setQRValue] = useState("")

  const downloadQRCode = () => {
    const qrCodeURL = document.getElementById('qrcode')
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(qrCodeURL)
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QRCode.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  }

  return (
    <div className={styles.container}>
      <p className={styles.link}><Link href="/scan" className={styles.link}>Scanner</Link></p>
      <QRCode id="qrcode" value={QRValue} size={256} />
      <a onClick={downloadQRCode} className={styles.mt10px}>Download QR</a>
      <input type="text" value={QRValue} onChange={e => setQRValue(e.target.value)} placeholder="QR Code Value" />
      <a href="https://github.com/anivanchen/qr/issues"><p>Report A Bug</p></a>
    </div>
  )
}
