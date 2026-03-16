import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav>
      <h2>Supermercado Online</h2>

      <ul>
        <li>Ofertas</li>
        <li>Frutas</li>
        <li>Verduras</li>
        <li>Bebidas</li>
        <li>Lácteos</li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default NavBar;