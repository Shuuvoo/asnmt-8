import './Bannar.css'
const Bannar = () => {
    return (
        
        <div className=" mt-8 mb-10 bg_image h-[40vh]">
          <div className="pt-5">
            <h1 className="text-3xl font-bold text-center pt-10">I Grow By Helping People In Need</h1>
          </div>
          <div className="flex justify-center items-center mt-12">
          <input className="px-3 py-1 border-lime-800 rounded" type="search" name="" id="" placeholder="Search Here" />
          <button className="bg-red-500 px-4 py-1 text-white rounded">Search</button>
          </div>
        </div>
    );
};

export default Bannar;