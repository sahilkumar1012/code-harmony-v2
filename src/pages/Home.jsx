import Hero from '../components/sections/Hero';
import ServicesGrid from '../components/sections/ServicesGrid';
import MentorShowcase from '../components/sections/MentorShowcase';
import TestimonialSlider from '../components/sections/TestimonialSlider';
import YouTubeSection from '../components/sections/YouTubeSection';
import FAQAccordion from '../components/sections/FAQAccordion';

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesGrid />
      <MentorShowcase />
      <TestimonialSlider />
      <YouTubeSection />
      <FAQAccordion />
    </div>
  );
}
