import type { NextConfig } from "next";
import os from "os";

// Fungsi untuk membaca semua IP address di komputer/laptop kamu
const getNetworkIPs = () => {
  const interfaces = os.networkInterfaces();
  const ips: string[] = [];
  
  for (const name of Object.keys(interfaces)) {
    const ifaceList = interfaces[name];
    if (ifaceList) {
      for (const iface of ifaceList) {
        // Ambil hanya IPv4 dan abaikan localhost (127.0.0.1)
        if (iface.family === 'IPv4' && !iface.internal) {
          ips.push(iface.address);
        }
      }
    }
  }
  return ips;
};

const nextConfig: NextConfig = {
  // 1. Masukkan semua IP yang terdeteksi secara otomatis
  // (Menggunakan ts-ignore jika TypeScript belum mengenali properti ini di versimu)
  // @ts-ignore
  allowedDevOrigins: getNetworkIPs(),

  // 2. Mendaftarkan domain penyedia gambar (Image Optimization)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
  },
};

export default nextConfig;