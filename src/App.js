import { Header } from "./components/HeaderComponent";
import { FirstSection } from "./components/FirstSectionComponent";
import { SocialSideBar } from "./components/SocialSideBar";
import './App.css';

function App() {
  return (
    <div className="App">
      <SocialSideBar />
      <Header />
      <FirstSection />
      <FirstSection />
    </div>
  );
}

export default App;
