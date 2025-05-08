import Head from 'next/head';
import Link from 'next/link';
import NavScript from './NavScript';

export default function Layout({ children, title, description, ogImage, canonical }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description || "rebase media - Empowering startups and open source projects through technical content, DevRel services, and community building."} />
        <meta name="keywords" content="rebase media, technical content, DevRel, community building, social media management, content creation, technical writing, developer relations" />
        <meta name="author" content="rebase media" />
        
        <meta property="og:title" content={title || "rebase media - Technical Content & DevRel Services"} />
        <meta property="og:description" content={description || "Empowering startups and open source projects through technical content, DevRel services, and community building."} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical || "https://rebasemedia.com/"} />
        <meta property="og:image" content={ogImage || "https://rebasemedia.com/images/rebase-media-og.png"} />
        <link rel="canonical" href={canonical || "https://rebasemedia.com/"} />
        
        <title>{title || "rebase media - Technical Content & DevRel Services"}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </Head>

      <header>
        <nav>
          <ul className="nav-links">
            <li><Link href="/" legacyBehavior><a>Home</a></Link></li>
            <li><Link href="/#services" legacyBehavior><a>Services</a></Link></li>
            <li><Link href="/#pricing" legacyBehavior><a>Pricing</a></Link></li>
            <li><Link href="/#stats" legacyBehavior><a>Stats</a></Link></li>
            <li><a href="mailto:rebasemedia@gmail.com">Contact</a></li>
          </ul>
          <div className="burger" aria-label="Menu">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>

      <main>
        {children}
      </main>

      <footer>
        <div className="social-links">
          <a href="https://github.com/rebasemedia" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com/company/rebasemedia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://x.com/rebasemedia" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
        <p>&copy; 2025 Rebase Media Private Limited. All rights reserved.</p>
      </footer>

      <NavScript />

      {/* Cal floating-popup embed code begins */}
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
          Cal("init", "30min", {origin:"https://cal.com"});
          
          Cal.ns["30min"]("floatingButton", {"calLink":"rebasemedia/30min","config":{"layout":"month_view"},"buttonColor":"#3d3d3d","buttonText":"Let's Chat!","hideButtonIcon":false}); 
          Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
          `
        }}
      />
      {/* Cal floating-popup embed code ends */}
    </>
  );
} 