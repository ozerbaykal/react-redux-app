import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../componnets/ProductCard";
import Modal from "../../componnets/Modal";
import Input from "../../componnets/Input";
import Button from "../../componnets/Button";
import { useEffect, useState } from "react";
import { createDataFunc, updateDataFunc } from "../../redux/dataSlice";
import { modalFunc } from "../../redux/modalSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data, keyword } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

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
  //search parametresini aldık loc değişkenine atatık
  let loc = location?.search.split("=")[1];

  useEffect(() => {
    if (loc) {
      const foundProduct = data.find((dt) => dt.id == loc);
      setProductInfo(foundProduct || { name: "", price: "", url: "" });
    }
  }, [loc]);

  const buttonFunc = () => {
    dispatch(createDataFunc({ ...productInfo, id: data?.length + 1 }));
    dispatch(modalFunc());
  };
  const buttonUpdateFunc = () => {
    dispatch(updateDataFunc({ ...productInfo, id: loc }));
    dispatch(modalFunc());
    navigate("/");
  };

  const contentModal = (
    <>
      <Input
        value={productInfo.name || ""}
        type={"text"}
        placeholder={"Ürün Ekle"}
        name={"name"}
        id={"name"}
        onChange={(e) => onChangeFunc(e, "name")}
      />
      <Input
        value={productInfo.price || ""}
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
      <Button
        btnText={loc ? "Ürün Güncelle" : "Ürün Oluştur"}
        onClick={loc ? buttonUpdateFunc : buttonFunc}
      />
    </>
  );
  const filtredItems = data.filter((dt) =>
    dt.name.toLowerCase().includes(keyword)
  );

  return (
    <div>
      <div className="flex items-center flex-wrap">
        {filtredItems?.map((item, key) => (
          <ProductCard key={key} item={item} />
        ))}
      </div>
      {modal && (
        <Modal
          title={loc ? "Ürün Güncelle" : "Ürün Oluştur"}
          content={contentModal}
        />
      )}
    </div>
  );
};

export default Product;
