import React, { Suspense, lazy } from 'react';
import './App.css';

// Lazy load non-critical sections for faster initial paint
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const CompanyLogo = lazy(() => import('./components/CompanyLogo'));
const PurposeSection = lazy(() => import('./components/PurposeSection'));
const FeaturesSection = lazy(() => import('./components/FeaturesSection'));
const ScheduleSection = lazy(() => import('./components/ScheduleSection'));
const MonitorSection = lazy(() => import('./components/MonitorSection'));
const PricingSection = lazy(() => import('./components/PricingSection'));
const FaqSection = lazy(() => import('./components/FaqSection.jsx'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const NewsletterSection = lazy(() => import('./components/NewsletterSection'));
const Footer = lazy(() => import('./components/Footer'));

// Preload Hero and Navbar for LCP and FCP optimization
const preloadHero = import('./components/Hero');
const preloadNavbar = import('./components/Navbar');

// Remove unused CSS/JS: Only import what is needed (already done above)
// Minify all assets: Handled by build tool (Vite, CRA, etc.)
// Compress and lazy load images: Ensure <img loading="lazy" /> in components (handled in components, e.g., Hero)
// Fix layout shifts: Set explicit width/height for images in components (handled in components)
// Reduce render-blocking resources: Lazy load non-critical sections

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Preload key background gradient as inline style to avoid layout shift */}
      <div
        className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-b from-[#18486b] via-[#185a8a] to-[#0d253a] rounded-full blur-[80px] -z-10"
        aria-hidden="true"
        style={{ minWidth: 500, minHeight: 500 }}
      ></div>
      <div className="overflow-hidden">
        <Suspense fallback={<div className="h-16" />}>
          <Navbar />
        </Suspense>
        <Suspense fallback={<div className="h-[400px]" />}>
          <Hero />
        </Suspense>
        <Suspense fallback={null}>
          <CompanyLogo />
        </Suspense>
        <Suspense fallback={null}>
          <PurposeSection />
        </Suspense>
        <Suspense fallback={null}>
          <FeaturesSection />
        </Suspense>
        <Suspense fallback={null}>
          <ScheduleSection />
        </Suspense>
        <Suspense fallback={null}>
          <MonitorSection />
        </Suspense>
        <Suspense fallback={null}>
          <PricingSection />
        </Suspense>
        <Suspense fallback={null}>
          <FaqSection />
        </Suspense>
        <Suspense fallback={null}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={null}>
          <NewsletterSection />
        </Suspense>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}

export default App;
