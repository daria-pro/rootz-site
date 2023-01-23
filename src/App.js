import Header from "./layout/Header/Header";
import Team from "./layout/Team/Team";
import "./assets/scss/main.scss";
import Cta from "./layout/Cta/Cta";
import Faq from "./layout/Faq/Faq";
import SliderSection from "./layout/SliderSection/SliderSection";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Team />
        <Cta />
        <Faq />
      </div>
      <SliderSection />
      <Footer />
    </div>
  );
}

export default App;
