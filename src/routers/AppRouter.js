import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const Nav = () => (
  //   <nav>
  //     <Link to="/">Home</Link>
  //     <Link to="/contact">Contact</Link>
  //     <Link to="/products">Products</Link>
  //   </nav>

  <nav>
    <NavLink exact to="/" activeClassName="active">
      Home
    </NavLink>
    |<NavLink to="/contact#email">Contact</NavLink>|
    <NavLink exact to="/products">
      Products
    </NavLink>
    |<NavLink to="/products/12?orderby=price">Products Details</NavLink>
  </nav>
);

const Header = () => <h3>Github Finder</h3>;

const HomePage = () => (
  <>
    <div>Home Page</div>
  </>
);
const ContactPage = () => {
  return (
    <>
      <div>Contact Page</div>
    </>
  );
};
const ProductsPage = () => (
  <>
    <div>Products Page</div>
  </>
);
const ProductsDetailsPage = (props) => {
  return (
    <>
      <div>Products Detail Page</div>
      <div>{props.match.params.id}</div>
    </>
  );
};
const NotFound = () => (
  <>
    <div>Not Found Hacı</div>
  </>
);

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Nav />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/contact" component={ContactPage} />
      <Route exact path="/products" component={ProductsPage} />
      <Route path="/products/:id" component={ProductsDetailsPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
