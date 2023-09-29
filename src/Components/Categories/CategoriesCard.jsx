import { Link } from "react-router-dom";

const CategoriesCard = ({category}) => {

    const {id, picture, title, category_name, category_bg, card_bg } = category || {}; 
    // console.log(category_bg)
    
  return (
    <div className={`bg-[${category_bg}] p-4 shadow-md`}>
        <Link to={`/categories/${id}`}>
      <div className="relative flex h-80  my-3 flex-col rounded-xl  bg-clip-border text-gray-700 ">
        <div className="relative  overflow-hidden rounded-xl bg-clip-border text-gray-700">
          <img className="w-72 h-60"
            src={picture}
          />
        </div>
        <div className={`text-[${card_bg}]  p-6`}>
          <div className=" flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed antialiased">
             {category_name}
            </p>
          </div>
          <p className={`block font-sans text-sm font-normal leading-normal antialiased opacity-75`}>
            {title}
          </p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default CategoriesCard;
