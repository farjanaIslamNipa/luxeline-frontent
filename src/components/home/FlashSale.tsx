import Link from "next/link";
import assets from '../../assets/index'
import Image from "next/image";


const FlashSale = () => {
  return (
    <div className="custom-container mt-10 md:mt-14 ">
      <div className="flex justify-between items-end">
        <h4 className="section-title">Flash Sale</h4>
        <Link href="/flash-sale" className="bg-brand text-brandLighter px-4 py-2 rounded-full text-sm hover:opacity-85">View All</Link>
      </div>
      <div className="mt-5 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3">
        <div className="flash-sale-card flex flex-col justify-between p-1 relative">
          <Image src={assets.flash.sale1} alt="Flash Sale" className="w-full h-auto" />
          <button className="absolute top-2 right-2">
            <Image src={assets.icons.wishlistBlack} alt="Wishlist" className="h-7 w-7" />
          </button>
          <p className="font-semibold mt-4 mb-1 text-brand leading-4">MARCO CAPELLI Oxford Stripe Shirt</p>
          <p className="font-bold text-base text-brand">
            Price:&nbsp; 
            <span className="text-lg">2200</span> 
            <span className="text-sm">&nbsp;BDT</span>
            <span className="ml-3 font-medium line-through text-gray-500">2990 <span className="text-xs">BDT</span></span>
            </p>
          <Link href="/view" className="text-center border border-gray-400 mt-4 text-sm font-semibold py-1">Quick View</Link>
        </div>
        <div className="flash-sale-card flex flex-col justify-between p-1 relative">
          <Image src={assets.flash.sale2} alt="Flash Sale" className="w-full h-auto" />
          <button className="absolute top-2 right-2">
            <Image src={assets.icons.wishlistBlack} alt="Wishlist" className="h-7 w-7" />
          </button>
          <p className="font-semibold mt-4 mb-1 text-brand leading-4">MARCO CAPELLI Structured Honeycomb Polo</p>
          <p className="font-bold text-base text-brand">
            Price:&nbsp; 
            <span className="text-lg">2200</span> 
            <span className="text-sm">&nbsp;BDT</span>
            <span className="ml-3 font-medium line-through text-gray-500">2990 <span className="text-xs">BDT</span></span>
            </p>
          <Link href="/view" className="text-center border border-gray-400 mt-4 text-sm font-semibold py-1">Quick View</Link>
        </div>
        <div className="flash-sale-card flex flex-col justify-between p-1 relative">
          <Image src={assets.flash.sale3} alt="Flash Sale" className="w-full h-auto" />
          <button className="absolute top-2 right-2">
            <Image src={assets.icons.wishlistBlack} alt="Wishlist" className="h-7 w-7" />
          </button>
          <p className="font-semibold mt-4 mb-1 text-brand leading-4">MARCO CAPELLI Half Zip Sweatshirt</p>
          <p className="font-bold text-base text-brand">
            Price:&nbsp; 
            <span className="text-lg">2200</span> 
            <span className="text-sm">&nbsp;BDT</span>
            <span className="ml-3 font-medium line-through text-gray-500">2990 <span className="text-xs">BDT</span></span>
            </p>
          <Link href="/view" className="text-center border border-gray-400 mt-4 text-sm font-semibold py-1">Quick View</Link>
        </div>
        <div className="flash-sale-card flex flex-col justify-between p-1 relative">
          <Image src={assets.flash.sale4} alt="Flash Sale" className="w-full h-auto" />
          <button className="absolute top-2 right-2">
            <Image src={assets.icons.wishlistBlack} alt="Wishlist" className="h-7 w-7" />
          </button>
          <p className="font-semibold mt-4 mb-1 text-brand leading-4">MARCO CAPELLI Soft Cotton Tipping Polo</p>
          <p className="font-bold text-base text-brand">
            Price:&nbsp; 
            <span className="text-lg">3450</span> 
            <span className="text-sm">&nbsp;BDT</span>
            <span className="ml-3 font-medium line-through text-gray-500">2990 <span className="text-xs">BDT</span></span>
            </p>
          <Link href="/view" className="text-center border border-gray-400 mt-4 text-sm font-semibold py-1">Quick View</Link>
        </div>

      </div>
    </div>
  );
};

export default FlashSale;