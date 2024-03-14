import { Footer } from "./components/Footer";
import { Landing } from "./components/Landing";
import { Living } from "./components/Living";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import { Us } from "./components/Us";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Landing />
        <Living />
        <Us />
        <Products />
        <Footer />
      </div>
    </>
  );
}

export default App;
