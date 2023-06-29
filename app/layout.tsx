import "./globals.css";

export const metadata = {
  title: "Explore Verses",
  description: "Rive",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="preload"
        href="/hero_use_case_v5.riv"
        as="fetch"
        crossOrigin="anonymous"
      />
      <body>{children}</body>
    </html>
  );
}
