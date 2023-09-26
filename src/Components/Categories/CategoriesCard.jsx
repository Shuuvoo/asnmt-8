import { Link } from "react-router-dom";

const CategoriesCard = ({category}) => {

    const {id, picture, title, category_name} = category || {}; 
  return (
    <div>
        <Link to={`/categories/${id}`}>
      <div className="relative flex h-80 w-72  my-3 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img className="w-72 h-60"
            src={picture}
          />
        </div>
        <div className="p-6">
          <div className=" flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
             {category_name}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {title}
          </p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default CategoriesCard;
