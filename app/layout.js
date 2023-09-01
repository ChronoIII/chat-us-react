import './globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/components/Providers';

import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ChatUS',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>
        <AuthProvider>
            <Navbar />
            <div style={{height: 'calc(100% - 50px)'}}>
              {children}
            </div>
          </AuthProvider>
      </body>
    </html>
  )
}
