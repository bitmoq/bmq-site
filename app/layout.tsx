import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./globals.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <span id="top"></span>
        <Nav />
        {children}
        <Footer />
        <a
          href="#top"
          className="fixed bottom-3 float-right right-0 w-36 text-sm text-center text-white bg-slate-800 p-3 rounded hover:bg-slate-600"
        >
          Scroll to Top
        </a>
      </body>
      <Script id="show-banner" strategy="afterInteractive">
        {`const btn = document.getElementById("menu-btn");
          const nav = document.getElementById("menu");

          btn.addEventListener("click", () => {
          btn.classList.toggle("open");
          nav.classList.toggle("flex");
          nav.classList.toggle("hidden");
        });`}
      </Script>
    </html>
  );
}
