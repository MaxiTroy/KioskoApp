import Head from "next/head";
import Image from "next/image";
import Layout from "../layout/Layout";
import Products from "../components/Products";
import useKiosco from "../hooks/useKiosco";

export default function Home() {
  const { currentCategory } = useKiosco();

  return (
    <Layout pagina={`Menú ${currentCategory?.name}`}>
      <h1 className="text-4xl font-black ">{currentCategory?.name}</h1>
      <p className="text-2xl my-10">Elige y personaliza tu pedido</p>
      <div className="grid bap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {currentCategory?.products?.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}
