// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    }
}

module.exports = nextConfig

if(process.env.NODE_ENV === 'development') {
    const { setupDevBindings } = require('@cloudflare/next-on-pages/next-dev');

    setupDevBindings({
        textBindings: {
            SECRET_KEY: 'my-secret-key--from-dev'
        },
        kvNamespaces: ['MY_KV']
    });
}
