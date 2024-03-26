import "~/styles/global.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-neutral-800 from-40% to-purple-950 text-white">
            {children}
          </main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
