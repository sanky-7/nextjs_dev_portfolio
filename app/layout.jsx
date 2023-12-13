import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StarsCanvas from "@/components/StarBackground";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ToastContainer, toast } from 'react-toastify';

const inter = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Vaibhav's Portfolio",
  description: "Created by Vaibhav Sanket using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <SpeedInsights />
        <ToastContainer />
      </body>
    </html>
  );
}
