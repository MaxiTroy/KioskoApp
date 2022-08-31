import { useEffect, useCallback } from "react";
import Layout from "../layout/Layout";
import useKiosco from "../hooks/useKiosco";
import { formatMoney } from "../helpers";

export default function Total() {
  const { order, name, setName, confirmOrder, total } = useKiosco();

  const checkOrder = useCallback(() => {
    return order.length === 0 || name === "";
  }, [order, name]);

  useEffect(() => {
    checkOrder();
  }, [order, checkOrder]);

  return (
    <Layout pagina={"Total"}>
      <h1 className="text-4xl font-black">Total</h1>
      <p className="text-2xl my-10">Confirma tu pedido</p>

      <form onSubmit={confirmOrder}>
        <div>
          <label
            htmlFor="name"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rouded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar: {""}{" "}
            <span className="font-bold">{formatMoney(total)}</span>
          </p>
        </div>

        <div className="mt-5">
          <input
            type="submit"
            className={`${
              checkOrder()
                ? "bg-indigo-100"
                : "bg-indigo-600 hover:bg-indigo-800"
            }  w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
            value="Confirmar pedido"
            disabled={checkOrder()}
          />
        </div>
      </form>
    </Layout>
  );
}
