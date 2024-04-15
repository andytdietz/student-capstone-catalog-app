import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "bootstrap";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
