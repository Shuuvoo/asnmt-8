import CategoriesCard from "./CategoriesCard";

const Categories = ({categories}) => {
    console.log(categories)
    return (
        <div>
            

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {
                    categories.map(category=> <CategoriesCard key={category.id} category={category}></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;