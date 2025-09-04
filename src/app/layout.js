import './globals.css'

export const metadata = {
  title: 'School Management',
  description: 'Manage school information',
    icons: {
    icon: '/favicon.png',  
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">{children}</body>
    </html>
  )
}