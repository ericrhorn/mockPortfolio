import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;


// You will be provided with code snippets and your task is to use these, plus any of your own code, to complete a portfolio app that contains:

// A header with external links to social media accounts and internal links to other sections of the page.
// A landing section with an avatar picture and a short bio.
// A section to display your featured projects as cards in a grid fashion.
// A contact me section with a form to allow visitors to contact you.
// Review the final project

// You will take part in a peer review exercise in which you will submit your completed portfolio app for two of your peers to review. You will also be required to review two of your peers' portfolio apps.

// When you submit your assignment, other learners in the course will review and grade your work. They will be looking at the Portfolio page functionality based on the following criteria:

// Did the header have external links that take you to different social apps?
// Did the header have internal links that, when clicked, will smoothly scroll into their corresponding section?
// Was the landing section filled with an avatar, name and a short bio?
// Did the project section display a 2x2 grid with each project rendered in a card widget?
// Was the Contact Me form business logic implemented as per the requirements?
// Was the header hidden/shown depending on the scroll direction? Did it happen with a smooth transition animation?
// Can you suggest any improvements for the portfolio app?

