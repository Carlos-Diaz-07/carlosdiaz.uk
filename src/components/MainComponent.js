import { Header } from "./HeaderComponent";
import { HeroSection } from "./HeroComponent";
import { AboutMeSection } from "./AboutMeComponent";
import { ContactMeSection } from "./ContactMeComponent";
import { SocialSideBar } from "./SocialSideBarComponent";
import { WorkSection } from "./WorkComponent";
import { FooterSection } from "./FooterComponent";
import { LogoSpinner } from "./LogoSpinnerComponent";
import { motion } from "framer-motion";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    projects: state.projects
  }
}

const Main = (props) => {
  return (
    <div>
      <LogoSpinner />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 3, type: "tween" }}
      >
        <Header />
        <SocialSideBar />
        <HeroSection />
        <AboutMeSection />
        <WorkSection projects={props.projects} />
        <ContactMeSection />
        <FooterSection />
      </motion.div>
    </div>
  );
}

export default (connect(mapStateToProps)(Main));
