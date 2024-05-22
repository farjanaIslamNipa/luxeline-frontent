'use client'
import {TProduct} from "@/types";
import {Checkbox} from "../ui/checkbox";
import ProductCard from "../cards/ProductCard";
import {useEffect, useState} from "react";
import RatingCheckbox from "../ui/RatingCheckbox";

const AllProducts = ({productData} : {productData: TProduct[]}) => {
  const [products, setProducts] = useState<TProduct[] | null>()
  const [filterPrice, setFilterPrice] = useState<string | null>()
  const [filterCategory, setFilterCategory] = useState<string | null>()
  const [rating, setRating] = useState<number | null>()
  const [filterRating, setFilterRating] = useState<boolean>(false)

  const handleFilterRating = (ratingValue: number) => {
    setFilterRating(prev => !prev)
    if(ratingValue === rating){
      setRating(null)
    }else{
      setRating(ratingValue)
      
    }
  }

  useEffect(() => {
    setProducts(productData)
  }, [productData])

  useEffect(() => {
    if(rating){
      const ratingFilteredProducts = productData?.filter(product => product?.rating === rating)
      setProducts(ratingFilteredProducts)
    }else{
      setProducts(productData)
    }
  }, [productData, rating])



  return (
    <div className="flex">
    <div className="bg-gray-100 min-w-[300px] p-5">
    <div className="space-y-5">
      <div className="bg-white p-4 rounded-lg">
        <p className="text-lg font-semibold">Price Range <span className="text-sm">(BDT)</span></p>
        <div className="space-y-3">
          <div className="mt-3 flex items-center gap-3">
            <p className="number-font">500 - 1000</p>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Checkbox />
            <p className="number-font">1001 - 2000</p>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Checkbox />
            <p className="number-font">2001 - 3000</p>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Checkbox />
            <p className="number-font">500 - 1000</p>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Checkbox />
            <p className="number-font">500 - 1000</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg">
        <p className="text-lg font-semibold">Category</p>
        <div className="space-y-3">
          <div className="mt-3 flex items-center gap-3">
            <Checkbox />
            <p className="font-medium text-sm">Shirts</p>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Checkbox />
            <p className="font-medium text-sm">Pants</p>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Checkbox />
            <p className="font-medium text-sm">Shirts</p>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Checkbox />
            <p className="font-medium text-sm">Hoodies</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg">
        <p className="text-lg font-semibold">Rating</p>
        <div className="space-y-3">
          <RatingCheckbox rating={rating} ratingCount={5} handleFilterRating={handleFilterRating} />
          <RatingCheckbox rating={rating} ratingCount={4} handleFilterRating={handleFilterRating} />
          <RatingCheckbox rating={rating} ratingCount={3} handleFilterRating={handleFilterRating} />
          <RatingCheckbox rating={rating} ratingCount={2} handleFilterRating={handleFilterRating} />
          <RatingCheckbox rating={rating} ratingCount={1} handleFilterRating={handleFilterRating} />
        </div>
      </div>
    </div>
    </div>

    {/* Product section */}
    <div className="p-4 flex-1 bg-gray-100">
    {
        products?.length! > 0 ?
        <div className="grid grid-cols-3 gap-4">
          {
            products?.map((product : TProduct) => <ProductCard product={product} key={product._id} />)
          }
        </div>
        :
        <div className="h-[40vh] flex justify-center items-center">
          <p className="text-center py-5 font-bold text-3xl text-red-700">No item found !</p>
        </div>
      }
    </div>
  </div>
  );
};

export default AllProducts;