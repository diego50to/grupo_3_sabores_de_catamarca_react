import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import BeatLoader from "react-spinners/ClipLoader";

function ProductsListCard() {
  const { data, isLoading, error } = useContext(ProductsContext);

  const products = data.products;

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
    <div className="card productList">
      <h2>Listado de productos</h2>
      <div>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductsListCard;
