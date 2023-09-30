import Swal from "sweetalert2";
import "./CategoryCard.css";

const CategoryCard = ({ category }) => {
  const { id, picture, title, description } = category || {};
  // console.log(title,id, category)

  const handleAddToDonations = () => {
    // console.log("btn click");

    const addedDonationsArray = [];

    const donationItems = JSON.parse(localStorage.getItem("donations"));

    if (!donationItems) {
      addedDonationsArray.push(category);
      localStorage.setItem("donations", JSON.stringify(addedDonationsArray));
      Swal.fire("Good job!", "Donation Added Successfully done!", "success");
    } else {
      const isExists = donationItems.find((category) => category.id == id);
     
      if (!isExists) {
        addedDonationsArray.push(...donationItems, category);
        localStorage.setItem("donations", JSON.stringify(addedDonationsArray));
        Swal.fire("Good Job!",  "Donation Added Successfully done!", "success");
      } else {
       
        // addedDonationsArray.push( ...donationItems, category);
        // localStorage.setItem('donations', JSON.stringify(addedDonationsArray));
        Swal.fire("Error!", "Not Available for Double!", "Errror");
      }
    }
  };

  return (
    <div>
      <div className="card card-compact h-[60vh] p-10 max-w-fit bg-orange-100 shadow-xl">
        <figure className="donate_img">
          <img src={picture} alt="Image" />
        </figure>

        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="donate_btn">
          <button onClick={handleAddToDonations} className="btn btn-primary ">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
