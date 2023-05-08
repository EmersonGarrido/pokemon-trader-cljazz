import "./globals.css";
import { Roboto } from "next/font/google";
import { Footer, Header } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Pokemon Go Trader",
  description:
    "Turn Your Pokémon GO Collection into Cash with Pokémon GO Trader! Sell Your Cards Today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
