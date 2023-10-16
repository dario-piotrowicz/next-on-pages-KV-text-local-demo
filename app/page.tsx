import ClientView from './ClientView';

export const runtime = 'edge';

export default async function Home() {
  const myKV = process.env.MY_KV;

  const secretKey = process.env.SECRET_KEY;

  const value = await myKV.get(secretKey);

  return (
    <main>
      <h1>next-on-pages KV and text bindings local demo</h1>
      <ClientView value={value} />
    </main>
  )
}
