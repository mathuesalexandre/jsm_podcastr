export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <main className=" bg-black-3 ">
      {children}
    </main>
   
  );
}
