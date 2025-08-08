import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/App.scss";
import "./styles/container.scss";
import "./styles/visually-hidden.scss";
import CBCForm from "./components/CBCForm/CBCForm";
import AboutProject from "./components/AboutProject/AboutProject";
import AboutMe from "./components/AboutMe/AboutMe";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <main>
        <CBCForm />
        <AboutProject />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}

export default App;
