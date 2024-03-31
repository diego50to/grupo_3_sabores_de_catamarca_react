import TotalProductsCard from "./TotalProductsCard";
import TotalUsersCard from "./TotalUsersCard";
import TotalCategoriesCard from "./TotalCategoriesCard";

function TotalCardsContainer() {
  return (
    <div className="main_overview">
      <TotalProductsCard />
      <TotalUsersCard />
      <TotalCategoriesCard />
    </div>
  );
}

export default TotalCardsContainer;
