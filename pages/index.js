import Head from 'next/head'
import Script from 'next/script';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next + Vaadin</title>
      </Head>
      <Script
        src="http://localhost:8080/web-component/hello-world-view-wc.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`web component script loaded correctly`)
        }
      />
      <main>
        Hello from Next.js
        <p>
          <hello-world-view-wc></hello-world-view-wc>
        </p>
      </main>
    </div>
  )
}
