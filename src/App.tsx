import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import BusinessLayout from './layouts/BusinessLayout';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Admissions from './pages/Admissions';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import BusinessTools from './pages/BusinessTools';
import BusinessGrowthLanding from './pages/BusinessGrowthLanding';
import InstructorPortal from './pages/InstructorPortal';
import AssessmentSystem from './pages/AssessmentSystem';
import AlumniNetwork from './pages/AlumniNetwork';
import CorporateTraining from './pages/CorporateTraining';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="programs" element={<Programs />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="about" element={<About />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Business Routes */}
        <Route path="/" element={<BusinessLayout />}>
          <Route path="business-tools" element={<BusinessTools />} />
          <Route path="business-growth" element={<BusinessGrowthLanding />} />
          <Route path="instructor-portal" element={<InstructorPortal />} />
          <Route path="assessment-system" element={<AssessmentSystem />} />
          <Route path="alumni-network" element={<AlumniNetwork />} />
          <Route path="corporate-training" element={<CorporateTraining />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;