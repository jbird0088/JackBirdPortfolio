import "./globals.css";
import "../styles/Home.module.css"; // Import home/global styles
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Arcade Portfolio",
  description: "A retro arcade-themed portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Include the Navbar */}
        <Navbar />

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
