import { Footer } from 'components/footer'
import { Header } from 'components/header'
import Dropdown  from 'components/dropdown'
import 'public/globals.css'

export default function RootLayout({ children }:any) {
  return (
  <div>
      <Header/>
      <Dropdown/>
      <body className="h-fit">{children}</body>
      <Footer/>
  </div>
  )
}

