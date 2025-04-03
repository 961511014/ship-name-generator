// src/components/CategorySection.js
import Link from 'next/link'
import Image from 'next/image'

export default function CategorySection() {
  const categories = [
    {
      title: 'Historic Ship Names',
      description: 'Classic names inspired by maritime history and naval traditions.',
      image: '/api/placeholder/600/400',
      alt: 'Historic sailing ship',
      style: 'bg-amber-700'
    },
    {
      title: 'Modern Ship Names',
      description: 'Contemporary and sleek names for modern vessels and yachts.',
      image: '/api/placeholder/600/400',
      alt: 'Modern yacht',
      style: 'bg-blue-700'
    },
    {
      title: 'Funny Ship Names',
      description: 'Humorous and witty names that will make everyone smile.',
      image: '/api/placeholder/600/400',
      alt: 'Fun boat',
      style: 'bg-teal-700'
    },
    {
      title: 'Professional Ship Names',
      description: 'Sophisticated and professional names for commercial vessels.',
      image: '/api/placeholder/600/400',
      alt: 'Commercial ship',
      style: 'bg-slate-700'
    }
  ]
  
  return (
    <section id="categories" className="py-16">
      <div className="container">
        <div className="section-title">
          <h2>Ship Name Categories</h2>
          <p>Our ship name generator offers a wide variety of name styles for every type of vessel.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="card group">
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 ${category.style} opacity-80 group-hover:opacity-90 transition-opacity`}></div>
                <Image
                  src={category.image}
                  alt={category.alt}
                  layout="fill"
                  objectFit="cover"
                  className="mix-blend-overlay"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-slate-600 mb-4">{category.description}</p>
                <Link 
                  href="/generator" 
                  className="text-blue-700 font-medium hover:text-blue-900 inline-flex items-center"
                >
                  Generate Names
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// src/components/FeaturesSection.js
export default function FeaturesSection() {
  const features = [
    {
      icon: '⚓',
      title: 'Extensive Name Database',
      description: 'Access thousands of unique ship names from our carefully curated database spanning various styles and traditions.'
    },
    {
      icon: '🔍',
      title: 'Smart Filtering',
      description: 'Filter ship names by category, style, starting letter, and more to find the perfect match for your vessel.'
    },
    {
      icon: '💡',
      title: 'Personalized Suggestions',
      description: 'Get personalized ship name suggestions based on your preferences and vessel characteristics.'
    },
    {
      icon: '📚',
      title: 'Maritime History',
      description: 'Learn about the rich history and traditions behind ship naming across different cultures and eras.'
    },
    {
      icon: '⭐',
      title: 'Favorites Collection',
      description: 'Save your favorite ship names to revisit later when making your final decision.'
    },
    {
      icon: '🌊',
      title: 'Nautical Inspiration',
      description: 'Find inspiration from nautical themes, mythology, literature, and maritime traditions.'
    }
  ]
  
  return (
    <section id="features" className="py-16 bg-slate-50">
      <div className="container">
        <div className="section-title">
          <h2>Why Use Our Ship Name Generator</h2>
          <p>Discover the perfect name for your vessel with our powerful and intuitive ship name generator.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// src/components/TestimonialsSection.js
export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The ship name generator helped me find the perfect name for my sailboat. 'Wind Whisper' perfectly captures the essence of my sailing experience.",
      author: "James K.",
      vessel: "Sailboat Owner"
    },
    {
      quote: "After struggling for weeks to name our fishing charter boat, this generator gave us 'Reel Adventure' - our customers love it!",
      author: "Maria T.",
      vessel: "Charter Boat Captain"
    },
    {
      quote: "Our yacht club uses this generator when members need inspiration. It's become our go-to resource for creative and meaningful vessel names.",
      author: "Robert M.",
      vessel: "Yacht Club President"
    }
  ]
  
  return (
    <section id="testimonials" className="py-16 bg-blue-800 text-white">
      <div className="container">
        <div className="section-title">
          <h2 className="text-white">What Vessel Owners Say</h2>
          <p className="text-blue-100">Our ship name generator has helped thousands of boat and ship owners find their perfect vessel name.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-700 p-6 rounded-lg">
              <div className="text-4xl text-blue-300 mb-4">"</div>
              <p className="italic mb-6 text-blue-100">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-xl font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-blue-300 text-sm">{testimonial.vessel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// src/components/BlogPreview.js
import Link from 'next/link'

export default function BlogPreview() {
  const articles = [
    {
      title: "The Art and Tradition of Ship Naming",
      excerpt: "Explore the rich history and cultural significance of naming ships throughout maritime history.",
      date: "April 1, 2025",
      slug: "art-tradition-ship-naming"
    },
    {
      title: "Legal Considerations for Naming Your Vessel",
      excerpt: "Learn about the regulations and requirements for registering your boat's name in different countries.",
      date: "March 25, 2025",
      slug: "legal-considerations-vessel-naming"
    },
    {
      title: "Famous Ship Names and Their Stories",
      excerpt: "Discover the fascinating stories behind some of history's most famous and notorious vessel names.",
      date: "March 18, 2025",
      slug: "famous-ship-names-stories"
    }
  ]
  
  return (
    <section id="blog" className="py-16">
      <div className="container">
        <div className="section-title">
          <h2>Ship Naming Resources</h2>
          <p>Learn about ship naming traditions, techniques, and stories from our collection of articles.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="card">
              <div className="p-6">
                <div className="text-sm text-slate-500 mb-2">{article.date}</div>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-slate-600 mb-4">{article.excerpt}</p>
                <Link 
                  href={`/blog/${article.slug}`} 
                  className="text-blue-700 font-medium hover:text-blue-900 inline-flex items-center"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// src/components/FaqSection.js
'use client'

import { useState } from 'react'

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(null)
  
  const faqs = [
    {
      question: "How does the ship name generator work?",
      answer: "Our ship name generator uses a combination of maritime terminology, historical vessel names, nautical themes, and creative algorithms to generate unique and appropriate names for your vessel. You can filter by category, style, and even specify starting letters to find the perfect ship name."
    },
    {
      question: "Are there any restrictions on boat or ship names?",
      answer: "While our ship name generator provides creative suggestions, there may be legal restrictions depending on your country or region. In many places, vessel names cannot be identical to other registered vessels, and some jurisdictions prohibit offensive or inappropriate names. Always check with your local maritime authority before finalizing your vessel name."
    },
    {
      question: "Can I save ship names I like for later?",
      answer: "Yes! Our ship name generator allows you to save your favorite names to a collection that you can revisit later. This helps you compare different options and share them with others before making your final decision."
    },
    {
      question: "What makes a good ship name?",
      answer: "A good ship name is memorable, meaningful to you, and appropriate for your vessel's purpose. Traditional ship naming often follows certain conventions like using female names, mythological references, or nautical terms. However, modern vessel naming is more flexible, with many owners choosing names that reflect their personality or the boat's purpose."
    },
    {
      question: "How do I register my boat's name?",
      answer: "After selecting a name using our ship name generator, you'll need to register it with the appropriate maritime authority in your region. The process typically involves completing registration forms, paying a fee, and ensuring the name isn't already in use. Requirements vary by country, so check with your local coast guard or maritime agency."
    }
  ]
  
  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null)
    } else {
      setOpenFaq(index)
    }
  }
  
  return (
    <section id="faq" className="py-16 bg-slate-50">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Common questions about the ship name generator and vessel naming process.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transition-transform ${openFaq === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openFaq === index && (
                <div className="mt-2 p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-slate-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// src/components/CtaSection.js
import Link from 'next/link'

export default function CtaSection() {
  return (
    <section id="cta" className="py-16 bg-blue-900 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Find the Perfect Ship Name?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our ship name generator has helped thousands of vessel owners discover unique, meaningful, and memorable names. Try it today for free!
          </p>
          <Link href="/generator" className="btn-primary bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
            Start Generating Ship Names
          </Link>
        </div>
      </div>
    </section>
  )
}
