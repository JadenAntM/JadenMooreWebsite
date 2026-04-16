import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Jaden Moore | Software Engineer",
  description:
    "Software Engineering student at McMaster University. Experienced in fullstack development, automation, and AI/ML.",
  icons: {
    icon: "/JadenMooreWebsite/JFavicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
