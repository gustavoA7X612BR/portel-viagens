// app/layout.tsx
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { openSans, roboto } from "./fonts";

export const metadata = {
  title: "Viagens Fluviais de Portel | Horários atualizados",
  description:
    "Consulte os horários atualizados das viagens fluviais de Portel para Belém, Breves e outras cidades, com informações das principais empresas de navegação.",
  keywords: [
    "Portel",
    "viagens fluviais",
    "horários",
    "Belém",
    "Barco",
    "Navegação Bom Jesus",
    "JCM Navegações",
  ],
  openGraph: {
    title: "Viagens Fluviais de Portel",
    description: "Horários e empresas que operam as rotas fluviais entre Portel e Belém.",
    url: "https://portel-viagens.vercel.app",
    siteName: "Portel Viagens",
    locale: "pt_BR",
    type: "website",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full ${openSans.variable} ${roboto.variable}`}>
      <Analytics />

      {children}
    </html>
  );
}
