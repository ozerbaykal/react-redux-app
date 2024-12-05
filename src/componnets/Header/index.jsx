import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../../redux/modalSlice";
import {
  cleanDataFunc,
  searchDataFunc,
  sortingDataFunc,
} from "../../redux/dataSlice";

const Header = () => {
  const dispatch = useDispatch();

  const modalButton = () => {
    //dispatch(cleanDataFunc());
    dispatch(modalFunc());
  };
  return (
    <div className="flex justify-between items-center bg-emerald-600  px-3 py-5">
      <div className="text-2xl md:text-3xl lg:text-4xl text-white">
        <span className="text-3xl md:text-4xl lg:text-5xl text-emerald-200 font-semibold">
          R
        </span>
        EDUX APPLICATION
      </div>
      <div className="flex items-center gap-4 mr-4 ">
        <div className="max-sm:hidden ">
          <select
            onChange={(e) => dispatch(sortingDataFunc(e.target.value))}
            className="px-3 py-2 rounded-md"
            name=""
            id=""
          >
            <option value="asc">Artan</option>
            <option value="desc">Azalan</option>
          </select>
        </div>

        <input
          onChange={(e) => dispatch(searchDataFunc(e.target.value))}
          className="px-2 py-1 rounded-md outline-none  shadow-slate-300 shadow-md md:min-w-64 lg:min-w-80 h-10"
          type="text"
          placeholder="arama yapınız."
        />

        <div
          onClick={modalButton}
          className="bg-emerald-400 bg-opacity-75 rounded-full p-2 flex items-center cursor-pointer justify-center hover:bg-emerald-300 transition hover:scale-105 hover:bg-opacity-100 "
        >
          <MdPostAdd size={28} className="text-emerald-900" />
        </div>
      </div>
    </div>
  );
};

export default Header;
