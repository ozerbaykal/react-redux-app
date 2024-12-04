import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../componnets/ProductCard";
import Modal from "../../componnets/Modal";
import Input from "../../componnets/Input";
import Button from "../../componnets/Button";
import { useState } from "react";
import { createDataFunc } from "../../redux/dataSlice";
import { modalFunc } from "../../redux/modalSlice";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "",
  });

  const onChangeFunc = (e, type) => {
    if (type == "url") {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const buttonFunc = () => {
    dispatch(createDataFunc({ ...productInfo, id: data?.length + 1 }));
    dispatch(modalFunc());
  };

  const contentModal = (
    <>
      <Input
        type={"text"}
        placeholder={"Ürün Ekle"}
        name={"name"}
        id={"name"}
        onChange={(e) => onChangeFunc(e, "name")}
      />
      <Input
        type={"text"}
        placeholder={"Fiyat Ekle"}
        name={"price"}
        id={"price"}
        onChange={(e) => onChangeFunc(e, "price")}
      />
      <Input
        type={"file"}
        placeholder={"Resim seç"}
        name={"url"}
        id={"url"}
        onChange={(e) => onChangeFunc(e, "url")}
      />
      <Button btnText={"Ürün Oluştur"} onClick={buttonFunc} />
    </>
  );

  return (
    <div>
      <div className="flex items-center flex-wrap">
        {data?.map((item, key) => (
          <ProductCard key={key} item={item} />
        ))}
      </div>
      {modal && <Modal title={"Ürün Oluştur"} content={contentModal} />}
    </div>
  );
};

export default Product;
