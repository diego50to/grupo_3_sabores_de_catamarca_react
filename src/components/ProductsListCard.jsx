import { useGetData } from "../../hooks/useGetData";
import BeatLoader from "react-spinners/ClipLoader";

function ProductsListCard() {
  const { data, isLoading, error } = useGetData(
    "http://localhost:3000/api/products"
  );

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
