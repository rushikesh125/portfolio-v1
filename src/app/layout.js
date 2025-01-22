import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#0b001a] text-white min-h-screen antialiased`}>{children}</body>
    </html>
  );
}
