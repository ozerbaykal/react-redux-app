import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDataFunc } from "../../redux/dataSlice";

const ProductCard = ({ item }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="w-[250px] h-[250px] relative m-2 ">
      <img src={item?.url} className="w-full h-full bg-indigo-300 rounded-md" />
      <div className="absolute left-0 bottom-0 bg-emerald-600 text-white w-full px-2 rounded-md font-semibold text-lg">
        <div>{item?.name}</div>
        <div>{item?.price}</div>
      </div>
      <div
        onClick={() => setOpenEdit(!openEdit)}
        className="absolute top-0 right-1"
      >
        <BsThreeDots color="white" size={30} />
      </div>
      {openEdit && (
        <div className="bg-emerald-800 border border-white text-white absolute top-3 right-3 px-3 py-2 ">
          <div
            onClick={() => dispatch(deleteDataFunc(item?.id))}
            className="cursor-pointer hover:bg-emerald-300 px-2 rounded-md hover:text-emerald-900 transition"
          >
            Sil
          </div>
          <div
            onClick={() => dispatch(updateDataFunc(item))}
            className="cursor-pointer hover:bg-emerald-300 px-2 rounded-md hover:text-emerald-900 transition"
          >
            Güncelle
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
