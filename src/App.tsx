import type { Component } from 'solid-js';
import { lazy } from 'solid-js';
import { Routes, Route } from "@solidjs/router";
import Header from "./Header";
import logo from './logo.svg';
import styles from './css/App.module.css';
const Home = lazy(() => import('./pages/Home'));
const Events = lazy(() => import('./pages/Events'));
const Faq = lazy(() => import('./pages/Faq'));
const Contact = lazy(() => import('./pages/Contact'));

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header />
      <Routes>
          <Route path="/" component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/faq" component={Faq} />
          <Route path="/contact" component={Contact} />

      </Routes>
    </div>
  );
};

export default App;
