import logo from "../assets/images/logo_sabores_de_catamarca.png";

function TopBar() {
  return (
    <header className="header">
      <div className="header_search">
        <div className="logo">
          <img src={logo} alt="Sabores de Catamarca" />
        </div>
      </div>
      <div className="header_avatar">
        <h3>Dashboard</h3>
      </div>
    </header>
  );
}

export default TopBar;
