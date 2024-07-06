import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });


export const metadata = {
  title: "Joandev App",
  description: "Blog Joan Dev",
  icon:{
    icon: ['./../assets/images/favicon.ico?v=4'],
    apple: ['./../assets/images/favicon.ico?v=4'],
    shorcut: ['./../assets/images/favicon.ico?v=4']

  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
