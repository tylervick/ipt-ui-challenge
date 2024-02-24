import { Movie } from '@/types';
import { atom } from 'jotai';

const sortPropertyAtom = atom<keyof Movie>('title');

const sortOrderAscendingAtom = atom<boolean>(true);

const moviesAtom = atom<Movie[]>([]);

export { moviesAtom, sortPropertyAtom, sortOrderAscendingAtom };
