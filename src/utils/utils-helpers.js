// src/utils/helpers.js

/**
 * Format date to a readable string
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

/**
 * Truncate text to a specified length and add ellipsis
 * @param {string} text - The text to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} Truncated text with ellipsis if needed
 */
export const truncateText = (text, maxLength = 150) => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

/**
 * Generate a slug from a string
 * @param {string} text - The text to convert to a slug
 * @returns {string} URL-friendly slug
 */
export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Calculate reading time for content
 * @param {string} content - The content to calculate reading time for
 * @returns {number} Estimated reading time in minutes
 */
export const calculateReadingTime = (content) => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

/**
 * Check if a string contains a keyword
 * @param {string} text - The text to search in
 * @param {string} keyword - The keyword to search for
 * @returns {boolean} True if the keyword is found
 */
export const containsKeyword = (text, keyword) => {
  if (!text || !keyword) return false;
  return text.toLowerCase().includes(keyword.toLowerCase());
};

/**
 * Calculate keyword density in text
 * @param {string} text - The text to analyze
 * @param {string} keyword - The keyword to count
 * @returns {number} Keyword density as a percentage
 */
export const calculateKeywordDensity = (text, keyword) => {
  if (!text || !keyword) return 0;
  
  const words = text.toLowerCase().split(/\s+/);
  const totalWords = words.length;
  
  // Count occurrences of the keyword
  const keywordRegex = new RegExp(`\\b${keyword.toLowerCase()}\\b`, 'g');
  const keywordCount = (text.toLowerCase().match(keywordRegex) || []).length;
  
  // Calculate density
  return (keywordCount / totalWords) * 100;
};

/**
 * Get a random item from an array
 * @param {Array} array - The array to pick from
 * @returns {*} Random item from the array
 */
export const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Debounce function to limit function calls
 * @param {Function} func - The function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Add SEO-friendly metadata to a page
 * @param {string} title - Page title
 * @param {string} description - Page description
 * @param {string} keywords - Comma-separated keywords
 * @returns {Object} Metadata object for Next.js
 */
export const generateMetadata = (title, description, keywords) => {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: 'website',
      url: 'https://shipnamegenerator.com',
      siteName: 'Ship Name Generator',
      images: [
        {
          url: 'https://shipnamegenerator.com/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Ship Name Generator',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://shipnamegenerator.com/images/twitter-image.jpg'],
    },
  };
};
