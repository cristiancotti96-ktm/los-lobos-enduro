/** @type {import('next').NextConfig} */
const nextConfig = {
    // Required for Cloudflare Pages (Edge Runtime) if using next/image without paid optimization
    // or use a custom loader. For now, we keep defaults but enable output standalone if needed.
    // However, Cloudflare Pages usually does not need 'output: standalone' or 'export'
    // if using next-on-pages adapter.
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'supa.base.url', // Placeholder for user's supabase project
            },
        ],
        // Optional: unoptimized: true, // Use this if images fail to load on free tier
    },
};

export default nextConfig;
