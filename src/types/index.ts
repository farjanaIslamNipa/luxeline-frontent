export type TProduct = {
  _id: string;
  title: string;
  images: string[];
  oldPrice: number;
  currentPrice: number;
  description: string;
  isFlashSale: boolean;
  isTrending: boolean;
  rating: number;
  isDeleted: boolean;
}