import FilteringSidebar from "@/components/all-products/FilteringSidebar";

const MensClothing = () => {
  return (
    <div className="custom-container pt-5 pb-10">
      <div className="flex">
        <div className="bg-gray-100 min-w-[300px] p-5">
          <FilteringSidebar />
        </div>
        <div className="p-4 flex-1"></div>
      </div>
    </div>
  );
};

export default MensClothing;