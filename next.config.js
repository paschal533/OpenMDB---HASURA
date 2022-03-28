/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co', 'lh3.googleusercontent.com'],
  },
  env: {
    REACT_APP_GOOGLE_API_TOKEN: '',
  },
}
