// src/app/layout.js
import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ship Name Generator | Find Perfect Names for Your Vessel',
  description: 'Use our ship name generator to find the perfect name for your boat, yacht, or vessel. Choose from thousands of unique, historic, and creative ship names.',
  keywords: 'ship name generator, boat name ideas, vessel naming, yacht names, ship naming, boat name generator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-800 bg-white`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

// src/app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary-color: #1e3a8a; /* deep blue */
  --primary-light: #3b82f6; /* lighter blue */
  --secondary-color: #0f766e; /* teal */
  --accent-color: #f59e0b; /* amber */
  --bg-light: #f8fafc; /* very light blue/grey */
  --text-dark: #0f172a; /* very dark blue/slate */
  --text-light: #f8fafc; /* very light blue/grey */
}

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  h1 {
    @apply text-4xl md:text-5xl font-bold mb-6 text-slate-900;
  }
  
  h2 {
    @apply text-3xl md:text-4xl font-bold mb-4 text-slate-900;
  }
  
  h3 {
    @apply text-2xl md:text-3xl font-semibold mb-3 text-slate-900;
  }
  
  p {
    @apply mb-4 text-slate-700 leading-relaxed;
  }
  
  section {
    @apply py-12 md:py-20;
  }
}

@layer components {
  .container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
  
  .btn-primary {
    @apply bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300;
  }
  
  .btn-secondary {
    @apply bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300;
  }
  
  .btn-outline {
    @apply border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300;
  }
  
  .card {
    @apply bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300;
  }
  
  .section-title {
    @apply text-center max-w-3xl mx-auto mb-12;
  }
  
  .section-title h2 {
    @apply text-3xl md:text-4xl font-bold text-slate-900 mb-4;
  }
  
  .section-title p {
    @apply text-lg text-slate-600;
  }
}
