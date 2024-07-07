import { Jura } from "next/font/google";
import "./globals.css";
import Logo from './components/Logo';
import Lk_selection from './components/Lk_selection';

const jura = Jura({ subsets: ["latin"] });

export const metadata = {
  title: "SocialPlatform",
  description: "Социальная платформа 8 института"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={jura.className}>
        <Logo/>
        <Lk_selection/>
        {children}
      </body>
    </html>
  );
}
