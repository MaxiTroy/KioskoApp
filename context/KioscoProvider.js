import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const KioscoContext = createContext();

const KioscoProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);

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
    const category = categories.filter((item) => item.id === id);
    setCurrentCategory(category[0]);
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
      }}
    >
      {children}
    </KioscoContext.Provider>
  );
};

export { KioscoProvider };

export default KioscoContext;
