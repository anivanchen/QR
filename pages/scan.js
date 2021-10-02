import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const QrReader = dynamic(() => import('react-qr-reader'), {
  ssr: false
})

export default function Home() {

  const [scanResult, setScanResult] = useState("Output")

  const handleError = (error) => {
    console.error(error)
  }
  const handleScan = (result) => {
    if (result) {
      setScanResult(result)
    }
  }

  return (
    <div className={styles.container}>
      <p className={styles.link}><Link href="/qr">Generator</Link></p>
      <QrReader
        delay={100}
        style={{ width: "256px"}}
        onError={handleError}
        onScan={handleScan}
      />
      <h2>{scanResult}</h2>
      <a href="https://github.com/anivanchen/qr/issues"><p>Report A Bug</p></a>
    </div>
  )
}
