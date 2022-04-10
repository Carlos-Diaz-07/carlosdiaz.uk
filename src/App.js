import { Header } from "./components/HeaderComponent";
import { FirstSection } from "./components/FirstSectionComponent";
import { AboutMeSection } from "./components/AboutMeComponent";
import { SocialSideBar } from "./components/SocialSideBar";
import { motion } from "framer-motion"
import './App.css';
import { LogoSpinner } from "./components/LogoSpinnerComponent";

function App() {
  return (
    <div className="App">
      <LogoSpinner />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 3, type: "tween" }}
      >
        <Header />
        <SocialSideBar />
        <FirstSection />
        <AboutMeSection />

      </motion.div>
    </div>
  );
}

export default App;
