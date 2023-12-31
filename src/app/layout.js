import { Inter , Noto_Serif_Display} from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'kpr rocks & gems',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className+" bg-[rgb(16,16,16)]"}>{children}</body>
    </html>
  )
}
