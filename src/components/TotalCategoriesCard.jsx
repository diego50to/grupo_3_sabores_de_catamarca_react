import { BeatLoader } from "react-spinners";
import { useGetData } from "../../hooks/useGetData";
import TotalCard from "./TotalCard";

function TotalCategoriesCard() {
  const { data, isLoading, error } = useGetData(
    "http://localhost:3000/api/products"
  );

  function CategoriesCounter(list) {
    const uniqueCategories = new Set();
    list.map((e) => uniqueCategories.add(e.category));
    const numberOfUniqueCategories = uniqueCategories.size;
    return numberOfUniqueCategories;
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
    <TotalCard
      titulo="Total de Categorías"
      cifra={CategoriesCounter(data.products)}
      icono="fa-list-ul"
    />
  );
}

export default TotalCategoriesCard;
