import ContactHeader from "@/components/ContactHeader";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <ContactHeader />
        {children}
    </>
  )
}