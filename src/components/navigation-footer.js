// src/components/Navigation.js
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-blue-700 text-2xl font-bold mr-2">⚓</span>
              <span className="text-xl font-bold text-slate-900">Ship Name Generator</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-blue-700 font-medium">
              Home
            </Link>
            <Link href="/generator" className="text-slate-700 hover:text-blue-700 font-medium">
              Generator
            </Link>
            <Link href="/naming-history" className="text-slate-700 hover:text-blue-700 font-medium">
              Naming History
            </Link>
            <Link href="/naming-tips" className="text-slate-700 hover:text-blue-700 font-medium">
              Naming Tips
            </Link>
            <Link href="/faq" className="text-slate-700 hover:text-blue-700 font-medium">
              FAQ
            </Link>
          </div>
          
          <div className="hidden md:block">
            <Link href="/generator" className="btn-primary">
              Try Generator
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-slate-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-slate-200 mt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-slate-700 hover:text-blue-700 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/generator" 
                className="text-slate-700 hover:text-blue-700 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Generator
              </Link>
              <Link 
                href="/naming-history" 
                className="text-slate-700 hover:text-blue-700 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Naming History
              </Link>
              <Link 
                href="/naming-tips" 
                className="text-slate-700 hover:text-blue-700 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Naming Tips
              </Link>
              <Link 
                href="/faq" 
                className="text-slate-700 hover:text-blue-700 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="/generator" 
                className="btn-primary inline-block text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Try Generator
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// src/components/Footer.js
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="text-blue-400 text-2xl font-bold mr-2">⚓</span>
              <span className="text-xl font-bold text-white">Ship Name Generator</span>
            </Link>
            <p className="mt-4 text-slate-300">
              Finding the perfect name for your vessel since 2025. Our ship name generator helps you discover unique and meaningful names for boats of all types.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/generator" className="text-slate-300 hover:text-white transition">
                  Generator
                </Link>
              </li>
              <li>
                <Link href="/naming-history" className="text-slate-300 hover:text-white transition">
                  Naming History
                </Link>
              </li>
              <li>
                <Link href="/naming-tips" className="text-slate-300 hover:text-white transition">
                  Naming Tips
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition">
                  Ship Name Registry
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition">
                  Maritime Traditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition">
                  Naming Regulations
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-slate-300">
                <span className="inline-block w-5 mr-2">📧</span> info@shipnamegenerator.com
              </li>
              <li className="text-slate-300">
                <span className="inline-block w-5 mr-2">📱</span> +1 (555) 123-4567
              </li>
              <li className="text-slate-300">
                <span className="inline-block w-5 mr-2">📍</span> 123 Harbor Way, Seaside, CA
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-slate-300 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            &copy; {currentYear} Ship Name Generator. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="#" className="text-slate-400 hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition">
              Terms of Service
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
