/*!

=========================================================
* React Core - v2.0.0
=========================================================

* Product Page: https://www.weenspace.com/product/react-core
* Copyright 2021 WeenSpace (https://www.weenspace.com)

* Coded by WeenSpace

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import "assets/scss/react-core.scss?v=1.0.0";

// pages for this product
import AboutUsPage from "views/AboutUsPage/AboutUsPage";
import BlogPostPage from "views/BlogPostPage/BlogPostPage";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage";
import ComponentsPage from "views/ComponentsPage/ComponentsPage";
import ContactUsPage from "views/ContactUsPage/ContactUsPage";
import EcommercePage from "views/EcommercePage/EcommercePage";
import LandingPage from "views/LandingPage/LandingPage";
import LoginPage from "views/LoginPage/LoginPage";
import PresentationPage from "views/PresentationPage/PresentationPage";
import PricingPage from "views/PricingPage/PricingPage";
import ProfilePage from "views/ProfilePage/ProfilePage";
import ProductPage from "views/ProductPage/ProductPage";
import SectionsPage from "views/SectionsPage/SectionsPage";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage";
import SignupPage from "views/SignupPage/SignupPage";
import ErrorPage from "views/ErrorPage/ErrorPage";

var hist = createBrowserHistory();
const theme = createTheme();
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StyledEngineProvider injectFirst>
      <Router history={hist}>
        <Switch>
          <Route path="/about-us" component={AboutUsPage} />
          <Route path="/blog-post" component={BlogPostPage} />
          <Route path="/blog-posts" component={BlogPostsPage} />
          <Route path="/components" component={ComponentsPage} />
          <Route path="/contact-us" component={ContactUsPage} />
          <Route path="/ecommerce-page" component={EcommercePage} />
          <Route path="/landing-page" component={LandingPage} />
          <Route path="/login-page" component={LoginPage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/profile-page" component={ProfilePage} />
          <Route path="/product-page" component={ProductPage} />
          <Route path="/sections" component={SectionsPage} />
          <Route path="/shopping-cart-page" component={ShoppingCartPage} />
          <Route path="/signup-page" component={SignupPage} />
          <Route path="/error-page" component={ErrorPage} />
          <Route path="/" component={PresentationPage} />
        </Switch>
      </Router>
    </StyledEngineProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
