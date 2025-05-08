import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import CountdownScript from '../../components/CountdownScript';

export default function Payment() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Layout
      title="Redirecting - rebase media"
      description="You are being redirected to the rebase media home page."
      canonical="https://rebasemedia.com/payment/"
      ogImage="https://rebasemedia.com/images/rebase-media-og.png"
    >
      <div className="container">
        <div className="redirect-message">
          <h1>You&apos;ve reached the wrong page</h1>
          <p>You are being redirected to the home page. If you are not redirected automatically, please click the link below.</p>
          <div className="countdown">
            <div className="loading"></div>
            <span>Redirecting in <span id="countdown">5</span> seconds...</span>
          </div>
          <a href="/">Go to Home Page</a>
        </div>
      </div>
      <CountdownScript />
    </Layout>
  );
} 