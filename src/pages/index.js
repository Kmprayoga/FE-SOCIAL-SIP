import { useEffect, useState } from 'react';

export default function Home() {
  const [stats, setStats] = useState({ qrCode1: 0, qrCode2: 0, qrCode3: 0, total: 0 });

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('https://social-sip-production.up.railway.app/stats');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    }

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8 text-blue-400">Statistik Scan QR Code</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm">
        <div className="mb-4">
          <p className="text-lg font-semibold">Jumlah Scan QR Code Baliho :</p>
          <p className="text-2xl text-blue-300">{stats.qrCode1}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Jumlah Scan QR Code Brosur :</p>
          <p className="text-2xl text-green-300">{stats.qrCode2}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Jumlah Scan QR Code OTS :</p>
          <p className="text-2xl text-red-300">{stats.qrCode3}</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Total Scan:</p>
          <p className="text-3xl text-yellow-300">{stats.total}</p>
        </div>
      </div>
    </div>
  );
}
