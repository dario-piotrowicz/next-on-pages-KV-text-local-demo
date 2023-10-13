import Link from 'next/link';

export const runtime = 'edge';

export default async function Home() {

  // const myKV = process.env.MY_KV;

  return (
    <main>
      <h1>next-on-pages KV and text bindings local demo</h1>
    </main>
  )
}
