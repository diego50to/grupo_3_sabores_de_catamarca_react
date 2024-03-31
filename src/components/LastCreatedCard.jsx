import { BeatLoader } from "react-spinners";
import { useGetData } from "../../hooks/useGetData";
import ProductCard from "./ProductCard";

function LastCreatedCard() {
  const { data, isLoading, error } = useGetData(
    "http://localhost:3000/api/products"
  );

  const products = data.products;

  function LatestProductId(list) {
    let latestId = null;
    list.map((e) => {
      if (!latestId || e.id > latestId) {
        latestId = e.id;
      }
    });
    return latestId;
  }
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
    <ProductCard
      id={LatestProductId(products)}
      title={"Último Producto Creado"}
    />
  );
}

export default LastCreatedCard;
