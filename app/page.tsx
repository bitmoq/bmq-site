import { Inter } from "@next/font/google";
import Link from "next/link";
import AboutUs from "./components/AboutUs";
import Careers from "./components/Careers";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Services from "./components/Services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Services />
      <Careers />
      <ContactUs />
    </main>
  );
}
