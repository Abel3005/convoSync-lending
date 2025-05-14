import { LanguageProvider } from "@/components/language-provider"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-white">
        <Navbar />
        <HeroSection />
        <Features />
        <Testimonials />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
