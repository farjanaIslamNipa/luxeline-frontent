interface TProductId {
  params: {
    productId: string;
  };
}
const SingleProduct = ({params} : TProductId) => {
  return (
    <div className="custom-container">
      single product {params.productId}
    </div>
  );
};

export default SingleProduct;