import { useLoaderData } from "react-router-dom";
import Categories from "../../Components/Categories/Categories";
import Bannar from "../../Components/Header/Banner/Bannar";


const Home = () => {
    const categories = useLoaderData()
    // console.log(categories)
    return (
        <div>
            <Bannar></Bannar>
            <Categories categories={categories}></Categories>
        </div>
    );
};

export default Home;
