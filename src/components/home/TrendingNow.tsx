import Image from "next/image";
import Link from "next/link";
import assets from '../../assets/index'

const TrendingNow = () => {
  return (
    <div className="custom-container mt-10 md:mt-14 mb-14">
      <div className="flex justify-between items-end">
        <h4 className="section-title">Trending Now</h4>
        <Link href="/flash-sale" className="bg-brand text-brandLighter px-4 py-2 rounded-full text-sm">View All</Link>
      </div>
      <div className="mt-5 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3">
        <div className="trending-product-card">
          <Image src={assets.flash.sale5} alt="Flash Sale" className="w-full h-auto" />
          <button className="absolute top-2 right-2">
            <Image src={assets.icons.wishlistBlack} alt="Wishlist" className="h-7 w-7" />
          </button>
          <p className="font-semibold mt-4 mb-1 text-brand leading-4">MARCO CAPELLI Oxford Stripe Shirt</p>
        </div>
        <div className="trending-product-card">
          <Image src={assets.flash.sale6} alt="Flash Sale" className="w-full h-auto" />
          <button className="absolute top-2 right-2">
            <Image src={assets.icons.wishlistBlack} alt="Wishlist" className="h-7 w-7" />
          </button>
          <p className="font-semibold mt-4 mb-1 text-brand leading-4">MARCO CAPELLI Structured Honeycomb Polo</p>
        </div>
        <div className="trending-product-card">
          <Image src={assets.flash.sale1} alt="Flash Sale" className="w-full h-auto" />
          <button className="absolute top-2 right-2">
            <Image src={assets.icons.wishlistBlack} alt="Wishlist" className="h-7 w-7" />
          </button>
          <p className="font-semibold mt-4 mb-1 text-brand leading-4">MARCO CAPELLI Half Zip Sweatshirt</p>
        </div>
        <div className="trending-product-card">
          <Image src={assets.flash.sale4} alt="Flash Sale" className="w-full h-auto" />
          <button className="absolute top-2 right-2">
            <Image src={assets.icons.wishlistBlack} alt="Wishlist" className="h-7 w-7" />
          </button>
          <p className="font-semibold mt-4 mb-1 text-brand leading-4">MARCO CAPELLI Soft Cotton Tipping Polo</p>
        </div>
        <div className="trending-product-card">
          <Image src={assets.flash.sale1} alt="Flash Sale" className="w-full h-auto" />
          <button className="absolute top-2 right-2">
            <Image src={assets.icons.wishlistBlack} alt="Wishlist" className="h-7 w-7" />
          </button>
          <p className="font-semibold mt-4 mb-1 text-brand leading-4">MARCO CAPELLI Oxford Stripe Shirt</p>
        </div>
        <div className="trending-product-card">
          <Image src={assets.flash.sale2} alt="Flash Sale" className="w-full h-auto" />
          <button className="absolute top-2 right-2">
            <Image src={assets.icons.wishlistBlack} alt="Wishlist" className="h-7 w-7" />
          </button>
          <p className="font-semibold mt-4 mb-1 text-brand leading-4">MARCO CAPELLI Structured Honeycomb Polo</p>
        </div>
        <div className="trending-product-card">
          <Image src={assets.flash.sale3} alt="Flash Sale" className="w-full h-auto" />
          <button className="absolute top-2 right-2">
            <Image src={assets.icons.wishlistBlack} alt="Wishlist" className="h-7 w-7" />
          </button>
          <p className="font-semibold mt-4 mb-1 text-brand leading-4">MARCO CAPELLI Half Zip Sweatshirt</p>
        </div>
        <div className="trending-product-card">
          <Image src={assets.flash.sale4} alt="Flash Sale" className="w-full h-auto" />
          <button className="absolute top-2 right-2">
            <Image src={assets.icons.wishlistBlack} alt="Wishlist" className="h-7 w-7" />
          </button>
          <p className="font-semibold mt-4 mb-1 text-brand leading-4">MARCO CAPELLI Soft Cotton Tipping Polo</p>
        </div>

      </div>
    </div>
  );
};

export default TrendingNow;