import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <NavLink to="/">
        <div>home</div>
      </NavLink>
      <NavLink to="/cart">
        <div>cart</div>
      </NavLink>
    </div>
  );
};
