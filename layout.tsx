import './globals.css'
export const metadata={title:'合同会社フラットアシスト',description:'AIとFPで将来のお金の不安を見える化する',robots:{index:false,follow:false}}
export default function RootLayout({children}:{children:React.ReactNode}){
return <html lang="ja"><body>{children}</body></html>
}