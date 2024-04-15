import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Axios } from "axios";

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
