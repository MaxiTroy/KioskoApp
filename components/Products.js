import React from "react";
import Image from "next/image";
import { formatMoney } from "../helpers";
import useKiosco from "../hooks/useKiosco";

const Products = ({ product }) => {
  const { hanldeSetProduct, handleChangeModal } = useKiosco();

  return (
    <div className="border p-3">
      <Image
        src={`/assets/img/${product.imagen}.jpg`}
        alt={`Image ${product.name}`}
        height={400}
        width={500}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatMoney(product.price)}
        </p>

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
          onClick={() => {
            handleChangeModal();
            hanldeSetProduct(product);
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Products;
