'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NabBar } from '@/components/Nab-bar';

export default function Home() {
  const [resolution, setResolution] = useState<string>("144");
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // This code runs only in the browser
    const audioElement = new Audio('/audio/chand_baliya.mp3');
    setAudio(audioElement);
  }, []);

  const handleResolutionChange = (value: string) => {
    setResolution(value);
  };

  useEffect(() => {
    if (audio) {
      if (resolution === "1080") {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0; // Reset the audio to start
      }
    }
  }, [resolution, audio]);

  return (
    <div>
    <NabBar/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-slate-600 font-bold text-2xl dark:text-slate-200">{resolution === '1080' ? 'My Moon 🤭' : 'Increase resolution'}</h1>
        <div className='w-[200px] h-[300px]'>
          <Image 
            src={`/images/${resolution}.jpg`} 
            alt="moon image" 
            width={200} 
            height={100} 
            className="rounded-lg my-4" 
          />
        </div>
        <div className="">
          <Select onValueChange={handleResolutionChange} >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a resolution" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Pixel</SelectLabel>
                <SelectItem value="144">144p</SelectItem>
                <SelectItem value="240">240p</SelectItem>
                <SelectItem value="360">360p</SelectItem>
                <SelectItem value="480">480p</SelectItem>
                <SelectItem value="720">720p</SelectItem>
                <SelectItem value="1080">1080p</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </main>
    </div>
  );
}
