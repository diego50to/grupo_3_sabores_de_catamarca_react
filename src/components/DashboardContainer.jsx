import CategoriesCard from "./CategoriesCard";
import Footer from "./Footer";
import LastCreatedCard from "./LastCreatedCard";
import ProductsListCard from "./ProductsListCard";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import TotalCardsContainer from "./TotalCardsContainer";

function DashboardContainer() {
  return (
    <div className="grid-container">
      <div className="menu-icon">
        <strong> &#9776;</strong>
      </div>
      <TopBar />
      <SideBar />
      <main className="main">
        <TotalCardsContainer />
        <div className="main_cards">
          <LastCreatedCard />
          <CategoriesCard />
          <ProductsListCard />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DashboardContainer;
