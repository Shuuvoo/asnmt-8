import { useEffect } from "react";
import { useState } from "react";
import CategoryCard from "../Category/CategoryCard";


const Donations = () => {

    const [donations,setDonations] = useState([])

    const [noFound, setNoFound] = useState(false)

    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem("donations"))

        if(donationItems){
            setDonations(donationItems)
        }
        else{
            setNoFound('No Data Found')
        }

    },[])
console.log(donations)
   

    return (
        <div>
            { noFound ? <p className="h-[60vh] flex justify-center items-center">{noFound}</p> :  <div>
                <div>
                    {donations.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)}
                </div>

            </div> }

        </div>
    );
};

export default Donations;