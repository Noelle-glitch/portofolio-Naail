"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("/audio/latinlovers.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <button
      onClick={toggleAudio}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-[#7A2E3A]/40 backdrop-blur shadow-lg hover:scale-110 transition cursor-hover"
    >
      {playing ? <Volume2 size={22} /> : <VolumeX size={22} />}
    </button>
  );
}