import { useEffect, useState } from "react";
import Image from "next/image";
import useKiosco from "../hooks/useKiosco";
import { formatMoney } from "../helpers";
import { PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER } from "next/dist/server/api-utils";

const ModalProduct = () => {
  const { product, handleChangeModal, handleAddOrder, order } = useKiosco();
  const [amount, setAmount] = useState(1);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (order.some((orderState) => orderState.id === product.id)) {
      const editProduct = order.find(
        (orderState) => orderState.id === product.id
      );
      setEdit(true);
      setAmount(editProduct.amount);
    }
  }, [product, order]);
  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          alt={`Image ${product.name}`}
          src={`/assets/img/${product.imagen}.jpg`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleChangeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5">{product.name}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatMoney(product.price)}
        </p>

        <div className="flex gap-4 mt-5">
          <button
            type="button"
            onClick={() => {
              if (amount <= 1) return;
              setAmount(amount - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>

          <p className="text-3xl">{amount}</p>

          <button
            type="button"
            onClick={() => {
              if (amount >= 10) return;
              setAmount(amount + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-2 text-white font-bold uppercase rounded"
          onClick={() => handleAddOrder({ ...product, amount })}
        >
          {edit ? "Guardar Cambios" : "Añadir al pedido"}
        </button>
      </div>
    </div>
  );
};

export default ModalProduct;
