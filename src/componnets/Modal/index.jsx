import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { modalFunc } from "../../redux/modalSlice";

const Modal = ({ title, content }) => {
  const dispatch = useDispatch();
  return (
    <div className="fixed top-20 right-0 w-full h-screen flex items-center justify-center border bg-emerald-100  ">
      <div className=" w-10/12 max-w-3xl bg-white shadow-lg rounded-md p-4">
        <div className="border-b py-3 flex justify-between items-center">
          <div className="text-2xl">{title}</div>
          <GrClose
            onClick={() => dispatch(modalFunc())}
            size={24}
            className="cursor-pointer hover:scale-90"
          />
        </div>
        {content}
      </div>
    </div>
  );
};

export default Modal;
