import './globals.css'; import Navigation from '@/components/Navigation'; import Footer from '@/components/Footer';
export const metadata={title:'Toq de Venus — Entre o mistério e o toque',description:'Experiência digital do Toq de Venus.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body><Navigation/>{children}<Footer/></body></html>}
