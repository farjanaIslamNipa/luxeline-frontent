import FilteringSidebar from "@/components/products/FilteringSidebar";
import ProductCard from "@/components/cards/ProductCard";
import {TProduct} from "@/types";

const MensClothing = async({searchParams} : {searchParams: Record<string, unknown>}) => {
  const category = searchParams.category;

  let url;

  if(category){
    url = `http://localhost:5000/api/v1/products?category=${category}`
  }else {
    url = 'http://localhost:5000/api/v1/products'
  }

  const res = await fetch(url, {
    next: {
      revalidate: 30
    }
  })
  const { data:products }= await res.json()

  return (
    <div className="custom-container pt-5 pb-10">
      <div className="flex">
        <div className="bg-gray-100 min-w-[300px] p-5">
          <FilteringSidebar />
        </div>

        {/* Product section */}
        <div className="p-4 flex-1 bg-gray-100">
        {
        products.length > 0 ?
        <div className="grid grid-cols-3 gap-4">
          {
            products.map((product : TProduct) => <ProductCard product={product} key={product._id} />)
          }
        </div>
        :
        <div className="h-[40vh] flex justify-center items-center">
          <p className="text-center py-5 font-bold text-3xl text-red-700">No item found !</p>
        </div>
      }
        </div>
      </div>
    </div>
  );
};

export default MensClothing;