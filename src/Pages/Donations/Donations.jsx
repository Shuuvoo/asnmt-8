import { useEffect } from "react";
import { useState } from "react";
// import CategoryCard from "../Category/CategoryCard";
import DonateRoute from "./DonateRoute";


const Donations = ({category}) => {
    

    const [donations,setDonations] = useState([])

    const [noFound, setNoFound] = useState(false)

    const [showAll, setShowAll] = useState(false)

    const [totalDonation, setTotalDonation] = useState(0)

    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem("donations"))

        if(donationItems){
            setDonations(donationItems)

            const total = donationItems.reduce((preValue,currenrItem)=> preValue + currenrItem.idd,0)

            setTotalDonation(total)


        }
        else{
            setNoFound('No Data Found')
        }

    },[])
console.log(donations)
   

    return (
        <div>

        <div><h1>{totalDonation}</h1></div>

            { noFound ? <p className="h-[60vh] flex justify-center items-center">{noFound}</p> :  <div>
           
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 ">
                   
                    
                     {
                        showAll ? donations.map(category => (<DonateRoute key={category.id} category={category}></DonateRoute>))
                        : donations.slice(0,4).map((category) => (<DonateRoute key={category.id} category={category}></DonateRoute>))
                     }
                </div>
                {/* {donations.length >= 4 &&  <button  className=" mb-3 px-5 bg-green-600 block mx-auto"
                     > See All</button>} */}
                    { donations.length >= 4 && <button  onClick={() => setShowAll(!showAll)}  className="mt-10 px-5 bg-green-600 block mx-auto" > {showAll ? "See Less" : "Show All" }</button>} 

            </div> }

        </div>
    );
};

export default Donations;