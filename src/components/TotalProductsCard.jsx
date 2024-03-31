import { BeatLoader } from "react-spinners";
import { useGetData } from "../../hooks/useGetData";
import TotalCard from "./TotalCard";

function TotalProductsCard() {
  const { data, isLoading, error } = useGetData(
    "http://localhost:3000/api/products"
  );

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
