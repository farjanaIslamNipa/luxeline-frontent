import Gallery from "@/components/products/Gallery";


interface TProductId {
  params: {
    productId: string;
  };
}


const SingleProduct = async({params} : TProductId) => {
  const res = await fetch(`http://localhost:5000/api/v1/products/${params.productId}`, {
  next: {
    revalidate: 30
  }
})

  const { data:product }= await res.json()

  return (
    <div className="custom-container pt-10 pb-10">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="">
          <Gallery images={product.images} />
        </div>
        <div className="space-y-1">
          <p className="text-2xl font-bold text-brandLight">{product?.title}</p>
          <p><span className="font-semibold">Category:</span> <span className="capitalize">{product?.category}</span></p>
          <p><span className="font-semibold">Rating:</span> <span className="capitalize">{product?.rating} Star</span></p>
          <p><span className="font-semibold">Price:</span> <span className="number-font">{product?.currentPrice} BDT</span></p>
          <p><span className="font-semibold">Product Detail:</span> <span>{product?.description}</span></p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;