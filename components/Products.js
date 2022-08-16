import React from "react";
import Image from "next/image";
import { formatMoney } from "../helpers";

const Products = ({ product }) => {
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
      </div>
    </div>
  );
};

export default Products;
