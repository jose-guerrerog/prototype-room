"use client";

import { useState } from 'react';

interface PropertyImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

export default function PropertyImage({ src, alt, fallbackSrc = "https://via.placeholder.com/500x300?text=Noosa+Property" }: PropertyImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  
  return (
    <img 
      src={imgSrc} 
      alt={alt}
      className="w-full h-full object-cover"
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
}