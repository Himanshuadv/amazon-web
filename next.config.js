/** @type {import('next').NextConfig} */

module.exports = {
  // nextConfig,
 
  
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: "static.vecteezy.com",
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname:  "www.amazon.in" ,
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: "fakestoreapi.com",
          pathname: '**',
        },
      ],
    },
   
}