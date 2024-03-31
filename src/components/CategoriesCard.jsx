import { BeatLoader } from "react-spinners";
import { useGetData } from "../../hooks/useGetData";

function CategoriesCard() {
  const { data, isLoading, error } = useGetData(
    "http://localhost:3000/api/products"
  );

  const products = data.products;

  function ProductsByCategory(list) {
    const productsCountByCategory = {};
    list.map((e) => {
      if (productsCountByCategory[e.category]) {
        productsCountByCategory[e.category]++;
      } else {
        productsCountByCategory[e.category] = 1;
      }
    });

    return (
      <ul>
        {Object.keys(productsCountByCategory).map((category) => (
          <li key={category}>
            {category}: {productsCountByCategory[category]}
          </li>
        ))}
      </ul>
    );
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
    <div className="card">
      <h2>Productos por Categorías</h2>
      <div>{ProductsByCategory(products)}</div>
    </div>
  );
}

export default CategoriesCard;
