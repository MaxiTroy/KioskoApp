export const formatMoney = (cant) => {
  return cant.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
