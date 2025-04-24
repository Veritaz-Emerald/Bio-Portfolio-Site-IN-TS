import { useState } from 'react';
import { FaRegEyeSlash, FaEye } from 'react-icons/fa';
import type { SocialLink, Song } from './types';
import SocialLinks from './components/SocialLinks';
import MusicPlayer from './components/MusicPlayer';

const initialLinks: SocialLink[] = [ 
  { id: '1', name: 'Instagram', url: 'https://instagram.com/seu_user', icon: 'instagram', enabled: true },
  { id: '2', name: 'Discord', url: 'https://discord.gg/seu_server', icon: 'discord', enabled: true },
  { id: '3', name: 'Twitter', url: 'https://twitter.com/seu_user', icon: 'twitter', enabled: true },
  { id: '4', name: 'LinkedIn', url: 'https://linkedin.com/in/seu_user', icon: 'linkedin', enabled: true },
  { id: '5', name: 'YouTube', url: 'https://youtube.com/@seu_canal', icon: 'youtube', enabled: true },
  { id: '6', name: 'Twitch', url: 'https://twitch.tv/seu_user', icon: 'twitch', enabled: true },
  { id: '7', name: 'GitHub', url: 'https://github.com/seu_user', icon: 'github', enabled: true },
  { id: '8', name: 'TikTok', url: 'https://tiktok.com/@seu_user', icon: 'tiktok', enabled: true } // se coloca false esconde o simbolo
];

const song: Song = {
  title: "Roses",
  artist: "Kanye West",
  url: "https://files.catbox.moe/pix157.mp3"
};

function App() {
  const [links] = useState(initialLinks);
  const [showBackground, setShowBackground] = useState(true);
  const [canToggleBackground] = useState(true); // coloca false pra não deixar o user mudar o background no olhinho

  const backgroundStyle = showBackground ? {
    backgroundImage: 'url(https://media.discordapp.net/attachments/1363421405236166666/1364814148541878383/1745264046414.png?ex=680b09ba&is=6809b83a&hm=e8d961e499d7bc4eca93b4ace214fa7e03379369fa98c5e078224320f8fa0d4b&=&format=webp&quality=lossless)', // aq muda o fundo
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {};

  return (
    <div 
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative"
      style={backgroundStyle}
    >
      {/* toggle botão fundo */}
      {canToggleBackground && (
        <button
          onClick={() => setShowBackground(!showBackground)}
          className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
          title={showBackground ? 'Hide Background' : 'Show Background'}
        >
          {showBackground ? <FaRegEyeSlash size={15} /> : <FaEye size={15} />}
        </button>
      )}

      {/* Profile content with glass effect */}
      <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-6">
          <img
            src="https://images-ext-1.discordapp.net/external/ifA1uXQpxqoz68F3sdVtSN914hOPeF3PJ_B_wFRue6k/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1348861023502733455/519cfb2d4dd843d0831c778da92d7780.png?format=webp&quality=lossless&width=575&height=575"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-2xl font-bold mb-2">fragilizado</h1>
        <p className="text-gray-400 text-sm mb-8">eu quero é veritaz mano, entra na veritaz</p>

        <div className="flex justify-center gap-4 mb-8 flex-wrap max-w-sm">
          {links.map(link => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-gray-300 transition-colors"
            >
              <SocialLinks link={link} />
            </a>
          ))}
        </div>
      </div>

      <MusicPlayer song={song} />
    </div>
  );
}

export default App;

/* CBV Signature; VmVyaXRheg */