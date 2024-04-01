import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { BeatLoader } from "react-spinners";
import TotalCard from "./TotalCard";

function TotalProductsCard() {
  const { data, isLoading, error } = useContext(ProductsContext);

  if (isLoading)
    return (
      <div className="card">
        <BeatLoader color="f86e31" />
      </div>
    );
  if (error)
    return (
      <div className="card">
        <p>{error}</p>
      </div>
    );

  return (
    <TotalCard
      titulo="Total de productos"
      cifra={data.meta.count}
      icono="fa-wine-bottle"
    />
  );
}

export default TotalProductsCard;
