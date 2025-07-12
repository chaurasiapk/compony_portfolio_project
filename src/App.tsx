/**
 * Main App Component
 *
 * This is the root component of the portfolio application.
 * It orchestrates all the main sections of the portfolio website
 * including navigation, home, services, team, testimonials, contact, and footer.
 */

import { NavBar } from './components/navBar';
import { Home } from './components/home';
import { Services } from './components/services';
import { Team } from './components/team';
import { Testimonials } from './components/testimonials';
import { Footer } from './components/footer';
import { Contact } from './components/contact';

/**
 * App Component
 *
 * Renders the complete portfolio website with all sections
 * in a logical order for optimal user experience.
 */
function App() {
  return (
    <div>
      {/* Navigation bar for site-wide navigation */}
      <NavBar />

      {/* Hero section with main portfolio introduction */}
      <Home />

      {/* Services section showcasing offered services */}
      <Services />

      {/* Team section displaying team members */}
      <Team />

      {/* Testimonials section with client feedback */}
      <Testimonials />

      {/* Contact section for user inquiries */}
      <Contact />

      {/* Footer with additional links and information */}
      <Footer />
    </div>
  );
}

export default App;
