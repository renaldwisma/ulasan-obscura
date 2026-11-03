import { supabase } from '@/app/lib/supabase';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Memaksa Next.js untuk tidak nge-cache halaman ini sama sekali
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function TapPage({ params }) {
  // Await params untuk memastikan ID terbaca sempurna di Next.js 14/15
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // Ambil data kartu langsung dari Supabase
  const { data: card, error } = await supabase
    .from('cards')
    .select('*')
    .eq('id', id)
    .single();

  // Jika kartu tidak ditemukan atau ada error pada database
  if (error || !card) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col items-center text-center gap-6 max-w-md w-full">
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

          {/* Pesan Error */}
          <div className="space-y-2">
            <h1 className="text-xl font-semibold tracking-wide text-red-500">
              Kartu Tidak Ditemukan / ID Invalid!
            </h1>
            <p className="text-sm text-zinc-400">
              ID kartu <code className="text-zinc-200 bg-zinc-800 px-1.5 py-0.5 rounded">{id}</code> tidak terdaftar dalam sistem.
            </p>
          </div>

          {/* Tombol Kembali */}
          <Link
            href="/"
            className="mt-4 px-6 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all"
          >
            Kembali ke Beranda
          </Link>
        </main>

        <footer className="mt-12 text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} OBSCURA. All rights reserved.
        </footer>
      </div>
    );
  }

  // Jika is_setup masih false, lempar ke setup
  if (!card.is_setup) {
    redirect(`/setup/${id}`);
  }

  // Tentukan URL tujuan ulasan Google
  const targetUrl = card.place_id.startsWith('http')
    ? card.place_id
    : `https://search.google.com/local/writereview?placeid=${card.place_id}`;

  redirect(targetUrl);
}