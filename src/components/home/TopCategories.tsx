import Image from "next/image";
import assets from '../../assets/index'

const TopCategories = () => {
  return (
    <div className="custom-container mt-20">
      <h4 className="text-brand font-bold text-center text-4xl">Top Categories</h4>
      <p className="max-w-[60%] mx-auto text-center mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam architecto cumque consequatur qui voluptas, eos dignissimos distinctio libero obcaecati nesciunt saepe</p>
      <div className="max-w-[70%] mx-auto">
        <div className="mt-14 grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <Image src={assets.home.everydayEssential} alt="" className="w-full h-auto" />
            Everyday Essentials
          </div>
          <div className="col-span-4 bg-red-400 h-64">Weekend Heroes</div>
          <div className="col-span-4 bg-red-600 h-64">Jeans</div>
          <div className="col-span-4 bg-red-800 h-64">Shorts</div>
          <div className="col-span-12 bg-red-500 h-60">
          <Image src={assets.home.pants} alt="" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;