import { Geist, Geist_Mono } from "next/font/google";
import "../styles/reset.css";
import "../styles/variables.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}