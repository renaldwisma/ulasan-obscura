import { supabase } from '@/app/lib/supabase';
import { redirect } from 'next/navigation';

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

  if (error || !card) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif', color: '#fff' }}>
        <h2>Kartu tidak ditemukan / ID invalid!</h2>
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