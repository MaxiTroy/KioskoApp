import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const KioscoContext = createContext();

const KioscoProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);
  const router = useRouter();

  const getCategories = async () => {
    try {
      const { data } = await axios("/api/category");
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    setCurrentCategory(categories[0]);
  }, [categories]);

  const handleClickCategory = (id) => {
    const category = categories.find((item) => item.id === id);
    setCurrentCategory(category);
    router.push("/");
  };

  const hanldeSetProduct = (product) => {
    setProduct(product);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleAddOrder = (product) => {
    if (order.some((productState) => productState.id === product.id)) {
      const updateOrder = order.map((productState) =>
        productState.id === product.id ? product : productState
      );
      setOrder(updateOrder);
      toast.success("Pedido actualizado");
    } else {
      setOrder([...order, product]);
      toast.success("Agregado al pedido");
    }
    setModal(false);
  };

  const handleUpdateAmount = (id) => {
    const updateProduct = order.find((item) => item.id === id);
    setProduct(updateProduct);
    setModal(!modal);
  };

  const handleDeleteProduct = (id) => {
    const updateOrder = order.filter((item) => item.id !== id);
    setOrder(updateOrder);
  };

  return (
    <KioscoContext.Provider
      value={{
        categories,
        currentCategory,
        handleClickCategory,
        product,
        hanldeSetProduct,
        modal,
        handleChangeModal,
        order,
        handleAddOrder,
        handleUpdateAmount,
        handleDeleteProduct,
      }}
    >
      {children}
    </KioscoContext.Provider>
  );
};

export { KioscoProvider };

export default KioscoContext;
