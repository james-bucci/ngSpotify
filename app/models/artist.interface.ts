import { TAlbum } from './album.interface';

export class TArtist {
  id: number;
  name: string;
  genres: any;
  albums : TAlbum[];
}