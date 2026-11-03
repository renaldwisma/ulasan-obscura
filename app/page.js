import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center text-center gap-6 max-w-md w-full">
        {/* Logo OBSCURA */}
        <div className="relative w-64 h-24 flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="OBSCURA Logo"
            width={240}
            height={80}
            priority
            className="object-contain"
          />
        </div>

        {/* Subtitle / Deskripsi Singkat */}
        <div className="space-y-2">
          <h1 className="text-xl font-semibold tracking-wide text-zinc-200">
            Google Review NFC System
          </h1>
          <p className="text-sm text-zinc-400">
            Platform pintar untuk mengarahkan ulasan pelanggan secara langsung ke Google Maps.
          </p>
        </div>
      </main>

      <footer className="mt-12 text-xs text-zinc-600">
        &copy; {new Date().getFullYear()} OBSCURA. All rights reserved.
      </footer>
    </div>
  );
}