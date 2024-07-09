import "./App.css";
import CardComp from "./components/CardComp";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ReoquirementSection from "./components/ReoquirementSection";
import SignupPage from "./components/SignupPage";
import TestComp from "./components/TestComp";
import VerifiComp from "./components/VerifiComp";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <SignupPage/>
      <ReoquirementSection/>
      <VerifiComp/>
      <CardComp/>
    <FooterSection/>
    <TestComp/>
    </div>
  );
}

export default App;
