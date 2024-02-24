'use client';

import { Movie } from '@/types';
import { PresentationControls, RoundedBox } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { memo, useMemo } from 'react';
import { TextureLoader } from 'three';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

interface DVDBoxProps {
  movie: Movie;
  aspectRatio: number;
}

const DVDBox = memo(function DVDBox({ movie, aspectRatio }: DVDBoxProps) {
  const texture = useLoader(TextureLoader, movie.image);

  const { scaleWidth, scaleHeight } = useMemo(() => {
    const scaleWidth = 2.5;
    const scaleHeight = scaleWidth / aspectRatio;
    return { scaleWidth, scaleHeight };
  }, [aspectRatio]);

  return (
    <RoundedBox args={[1, 1, 0.15]} scale={[scaleWidth, scaleHeight, 1]} radius={0.02}>
      <meshBasicMaterial attach='material-0' map={texture} />
      <meshBasicMaterial attach='material-1' color='#F8F8F8' />
      <meshBasicMaterial attach='material-2' color='#F8F8F8' />
      <meshBasicMaterial attach='material-3' color='#F8F8F8' />
      <meshBasicMaterial attach='material-4' color='#F8F8F8' />
    </RoundedBox>
  );
});

interface MovieListItemProps {
  movie: Movie;
  width: number;
  height: number;
}

const MovieListItem = memo(function MovieListItem({ movie, width, height }: MovieListItemProps) {
  return (
    <>
      <div className='flex flex-col'>
        {/* TODO: Remove this hardcode */}
        <div className='h-poster-height w-poster-width'>
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 50,
              far: 800,
            }}
          >
            <PresentationControls enabled snap rotation={[0, 0.2, 0]} cursor={false}>
              <ambientLight intensity={0.5} />
              <DVDBox movie={movie} aspectRatio={width / height} />
            </PresentationControls>
          </Canvas>
        </div>
        <div className='flex items-center justify-evenly'>
          {/* <Label className='text-md' htmlFor={`${movie.title}-detail`}>
            {movie.title}
          </Label> */}
          <Button id={`${movie.title}-detail`} variant='ghost' asChild>
            <Link href={`/${movie.slug}`}>
              {movie.title}
              <ChevronRight className='h-4 w-4 ml-2' />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
});

export { MovieListItem };
