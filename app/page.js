import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import TechStack from "@/components/TechStack";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Header />

      <main className={styles.content}>
        <Hero />
        <Services />
        <WhyChooseUs />
        <TechStack />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
