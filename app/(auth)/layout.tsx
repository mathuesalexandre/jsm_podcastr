import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <main className=" bg-black-3 relative h-screen w-full">
      <div className="absolute size-full">
        <Image src="/image/bg-img.png" alt="backgorund" fill className="size-full"/>
      </div>
      {children}
    </main>
   
  );
}
