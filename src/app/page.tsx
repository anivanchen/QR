'use client'
import { useState } from "react";
import Generate from "./components/generate";
import Scan from "./components/scan";

export default function Home() {

  const [mode, setMode] = useState('generate')

  return (
    <main>
      <link rel="icon" href="https://ivanchen.dev/favicon.ico" sizes="any" />
      <div className="flex flex-col items-center p-24" style={{height: "90vh"}}>
        <h1 className="text-4xl">QR Tools</h1>
        <div>
          <label className="rounded-lg">Mode</label>
          <select
            className="m-8 p-4 bg-black text-white rounded-lg outline-none border-2 border-white appearance-none"
            onChange={(e) => setMode(e.target.value)}
          >
            <option value="generate">Generate</option>
            <option value="scan">Scan</option>
          </select>
        </div>
        {mode === 'generate' ? <Generate /> : <Scan />}
      </div>
      <footer className="flex flex-col items-center p-4" style={{height: "10vh"}}>
        <p className="text-sm">Made with ❤️ by <a href="https://ivanchen.dev" className="underline hover:text-gray-300 active:text-gray-500">Ivan Chen</a></p>
      </footer>
    </main>
  )
}
