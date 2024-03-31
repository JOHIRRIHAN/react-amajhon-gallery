import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const notify = () => toast("Your product Added by card✅");

  const product = useLoaderData();
  //   console.log(product);
  
  const { title, description, thumbnail, price,  brand } = product || {};

  return (
    <div className="h-screen mt-10 px-20">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={thumbnail} alt="Movie" />
        </figure>
        <div className="card-body">
          <p>{brand}</p>
          <h2 className="card-title font-semibold text-2xl">{title}</h2>
          <p>{description}</p>
          <p className="py-9 cursor-pointer">
            color{" "}
            <span className="bg-white border-2 border-zinc-500 ml-5 px-2  rounded-[50%]"></span>
            <span className="bg-zinc-800  ml-5 px-2  rounded-[50%]"></span>
            <span className="bg-orange-600  ml-5 px-2  rounded-[50%] mr-20"></span> Size: 
            <select className="select select-bordered w-36 ml-3">
              <option disabled selected>
                M
              </option>
              <option>S</option>
              <option>M</option>
              <option>Large</option>
              <option>XLarge</option>
              <option>XXLarge</option>
            </select>
          </p>
          <hr />
          <h4 className="text-2xl font-semibold">Price: ${price}</h4>
          <div className="card-actions ">
            <button onClick={notify} className="btn bg-orange-500 text-white  w-full ">
              Add to Card
            </button>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Product;
