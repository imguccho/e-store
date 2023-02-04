export interface Album {
  albumId: number;
  title: string;
  thumbnailUrl: string;
  price: number;
  type: string;
  popular: boolean;
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  thumbnailUrl: string;
  url: string;
}
