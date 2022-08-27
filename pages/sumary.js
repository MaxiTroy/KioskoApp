import Layout from "../layout/Layout";
import useKiosco from "../hooks/useKiosco";
import ProductSumary from "../components/ProductSumary";

export default function Sumary() {
  const { order } = useKiosco();
  return (
    <Layout pagina={"Resumen"}>
      <h1 className="text-4xl font-black">Resumen</h1>
      <p className="text-2xl my-10">Revisa tu resumen</p>

      {order.length === 0 ? (
        <p>Agregue pedidos a su orden</p>
      ) : (
        order.map((product) => (
          <ProductSumary key={product.id} product={product} />
        ))
      )}
    </Layout>
  );
}
