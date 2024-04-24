'use client'
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css'; 

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];


interface TProductId {
  params: {
    productId: string;
  };
}
const SingleProduct = ({params} : TProductId) => {
  return (
    <div className="custom-container pt-10 pb-10">
      single product {params.productId}
      <div className="grid grid-cols-2">
        <div className="">
          <ImageGallery
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
            thumbnailPosition='left'
            items={images} />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;