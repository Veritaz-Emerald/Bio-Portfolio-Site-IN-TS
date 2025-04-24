import { useState, useRef } from 'react';
import type { Song } from '../types';

interface MusicPlayerProps {
  song: Song;
}

export default function MusicPlayer({ song }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 bg-transparent text-white flex items-center gap-4">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
          <img
            src="https://media.discordapp.net/attachments/1363308757970583774/1364830588204220416/https3A2F2Fimages.png?ex=680b1909&is=6809c789&hm=59bb439571e86d57b2e62ae14856856208d291f57be95ed2bab8d37619888b3c&=&format=webp&quality=lossless"
            alt="Album Cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-sm font-medium">{song.title}</h3>
          <p className="text-xs text-gray-400">{song.artist}</p>
        </div>
      </div>
      <button
        onClick={togglePlay}
        className="text-white hover:text-gray-300 transition-colors"
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
      <audio
        ref={audioRef}
        src={song.url}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}

/* CBV Signature; VmVyaXRheg */