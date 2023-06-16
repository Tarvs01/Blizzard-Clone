export interface SlideData {
  id: number;
  bgImage: string;
  image: string;
  mainHeading: string;
  subHeading?: string;
  mainButtonText: string;
  secondaryButtonText?: string;
  top: number;
  imageWidth: number;
  hasOverlay: boolean;
  overlayColor?: string;
}

export interface gameCardData {
  id: number;
  name: string;
  genre: string;
  isNew: boolean;
  image: string;
  video: string;
  bgImage: string;
  platforms: string[];
  generalPlatforms: string[];
}

export interface navGames{
  id: number;
  imgType: string;
  img: string;
  name: string;
  genre: string;
  isNew: boolean;
}
