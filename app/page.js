import Image from "next/image";

export default function Home() {
  // Ganti dengan nomor WhatsApp agen (gunakan format 62 tanpa angka 0)
  const whatsappNumber = "62881080194444"; 
  const whatsappMessage = encodeURIComponent("Halo Admin Obscura, saya tertarik untuk memesan Kartu NFC & QR Code Google Review.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-black text-white p-6 font-[family-name:var(--font-geist-sans)]">
      <div />

      <main className="flex flex-col items-center text-center gap-6 max-w-md w-full my-auto">
        {/* Logo OBSCURA */}
        <div className="relative w-64 h-20 flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="OBSCURA Logo"
            width={240}
            height={80}
            priority
            className="object-contain"
          />
        </div>

        {/* Teks Soft Selling */}
        <div className="space-y-3">
          <h1 className="text-xl font-semibold tracking-wide text-zinc-100">
            Smart Google Review NFC Card
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Tingkatkan reputasi bisnis dan jumlah ulasan bintang 5 di Google Maps secara instan hanya dengan satu kali tap.
          </p>
        </div>

        {/* Tombol Kontak WhatsApp Agent */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all transform active:scale-95 shadow-lg shadow-white/10"
        >
          <svg className="w-5 h-5 fill-current text-emerald-600" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.999 1.589-1.152 4.208 4.318-1.132 1.578.992z"/>
          </svg>
          Pesan Kartu NFC Sekarang
        </a>
      </main>

      {/* Footer */}
      <footer className="text-xs text-zinc-600 pb-2">
        &copy; {new Date().getFullYear()} OBSCURA. All rights reserved.
      </footer>
    </div>
  );
}