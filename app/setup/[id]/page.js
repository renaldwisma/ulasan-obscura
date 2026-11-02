'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/app/lib/supabase';

export default function SetupPage({ params }) {
  const { id } = params;
  const router = useRouter();

  const [placeId, setPlaceId] = useState('');
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from('cards')
      .update({
        place_id: placeId,
        pin: pin,
        is_setup: true,
      })
      .eq('id', id);

    if (!error) {
      alert('Setup berhasil! Kartu sudah aktif.');
      router.push(`/tap/${id}`);
    } else {
      alert('Gagal menyimpan data: ' + error.message);
    }
    setLoading(false);
  };

  const openGooglePlaceFinder = () => {
    window.open('https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder', '_blank');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '40px auto', fontFamily: 'sans-serif', textAlign: 'center' }}>
      
      {/* Logo */}
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
        <img 
          src="/logo.png" 
          alt="UlasanObscura Logo" 
          style={{ width: '100%', maxHeight: '80px', objectFit: 'contain' }} 
        />
      </div>

      <h2 style={{ marginBottom: '20px', fontSize: '18px', color: '#fff', fontWeight: 'normal' }}>
        Setup Kartu NFC ({id})
      </h2>

      <form onSubmit={handleSave} style={{ textAlign: 'left' }}>
        
        {/* Input Place ID + Tombol Cari Terintegrasi */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#ccc', fontSize: '14px' }}>
            Place ID Google Maps:
          </label>
          <input
            type="text"
            placeholder="Contoh: ChIJo00ZeQBH8C0RBNrOLmWTDdk"
            value={placeId}
            onChange={(e) => setPlaceId(e.target.value)}
            required
            style={{ 
              width: '100%', 
              padding: '12px', 
              boxSizing: 'border-box',
              backgroundColor: '#ffffff',
              color: '#000000',
              border: '1px solid #ccc',
              borderRadius: '6px',
              fontSize: '14px',
              marginBottom: '8px'
            }}
          />
          <button
            type="button"
            onClick={openGooglePlaceFinder}
            style={{
              width: '100%',
              padding: '8px',
              backgroundColor: '#1e1e1e',
              color: '#4dabf7',
              border: '1px solid #4dabf7',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 'bold'
            }}
          >
            🔍 Cari Nama Bisnismu di Sini
          </button>
        </div>

        {/* Input PIN */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#ccc', fontSize: '14px' }}>
            Buat PIN (4-6 Angka):
          </label>
          <input
            type="password"
            placeholder="Masukkan PIN pengaman"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
            style={{ 
              width: '100%', 
              padding: '12px', 
              boxSizing: 'border-box',
              backgroundColor: '#ffffff',
              color: '#000000',
              border: '1px solid #ccc',
              borderRadius: '6px',
              fontSize: '14px'
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '15px'
          }}
        >
          {loading ? 'Menyimpan...' : 'Simpan & Aktifkan Kartu'}
        </button>
      </form>
    </div>
  );
}