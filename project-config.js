// package.json
{
  "name": "ship-name-generator",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.16",
    "eslint": "^8.53.0",
    "eslint-config-next": "^14.0.0",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.3.5"
  }
}

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.placeholder.com'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.700'),
            h1: {
              color: theme('colors.slate.900'),
            },
            h2: {
              color: theme('colors.slate.900'),
            },
            h3: {
              color: theme('colors.slate.900'),
            },
            a: {
              color: theme('colors.blue.700'),
              '&:hover': {
                color: theme('colors.blue.900'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// README.md
# Ship Name Generator Website

This is a Next.js website for generating ship and boat names. The site includes a name generator tool, educational content about maritime naming traditions, and resources for boat owners.

## Features

- Interactive ship name generator with filtering options
- Educational pages about maritime naming history and traditions
- Responsive design for all device types
- SEO-optimized content focused on "ship name generator" keyword

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/app` - Contains the Next.js pages
- `/src/components` - Reusable React components
- `/src/lib` - Helper functions and ship name data
- `/public` - Static assets

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [React](https://reactjs.org/) - UI library

## SEO Focus

This website is optimized for the primary keyword "ship name generator" and related terms like:
- boat name ideas
- vessel naming
- ship naming traditions
- nautical name generator
