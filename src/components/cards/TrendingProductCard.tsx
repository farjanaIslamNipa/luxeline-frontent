import Image from "next/image";
import assets from '../../assets/index'
import Link from "next/link";
import {TProduct} from "@/types";

const TrendingProductCard = ({product} : {product: TProduct}) => {

  return (
    <div className="flash-sale-card flex flex-col justify-between p-1 relative">
      <Image src={assets.flash.sale1} alt="Flash Sale" className="w-full h-auto" />
      <button className="absolute top-2 right-2">
        <Image src={assets.icons.wishlistBlack} alt="Wishlist" className="h-7 w-7" />
      </button>
      <p className="font-semibold mt-4 mb-1 text-brand leading-4">{product.title}</p>
      <p className="font-bold text-base text-brand">
        Price:&nbsp; 
        <span className="text-lg">2200</span> 
        <span className="text-sm">&nbsp;BDT</span>
        <span className="ml-3 font-medium line-through text-gray-500">2990 <span className="text-xs">BDT</span></span>
        </p>
      <Link href="/view" className="text-center border border-gray-400 mt-4 text-sm font-semibold py-1">Quick View</Link>
    </div>
  );
};

export default TrendingProductCard;