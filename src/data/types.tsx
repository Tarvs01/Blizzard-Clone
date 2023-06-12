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
