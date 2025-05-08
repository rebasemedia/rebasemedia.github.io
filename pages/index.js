import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout
      title="rebase media - Technical Content & DevRel Services"
      description="Empowering startups and open source projects through technical content, DevRel services, and community building."
      canonical="https://rebasemedia.com/"
      ogImage="https://rebasemedia.com/images/rebase-media-og.png"
    >
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>rebase media</h1>
          <p>We empower startups and open source projects to grow organically through tailored technical content.</p>
        </div>
        <div className="scroll-indicator" aria-hidden="true">
          <div className="scroll-arrow"></div>
          <div className="scroll-arrow"></div>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <i className="fas fa-users" aria-hidden="true"></i>
            <h3>DevRel As A Service</h3>
            <p>Strategic developer relations to grow your community and product</p>
          </div>
          <div className="service-card">
            <i className="fas fa-pen-fancy" aria-hidden="true"></i>
            <h3>Content Creation</h3>
            <p>Technical writing, tutorials, and product reviews across platforms</p>
          </div>
          <div className="service-card">
            <i className="fas fa-bullhorn" aria-hidden="true"></i>
            <h3>Social Media</h3>
            <p>Strategic social media management and audience engagement</p>
          </div>
          <div className="service-card">
            <i className="fas fa-microphone" aria-hidden="true"></i>
            <h3>Speaking & Workshops</h3>
            <p>Technical talks and workshops for your community</p>
          </div>
          <div className="service-card">
            <i className="fas fa-code" aria-hidden="true"></i>
            <h3>Product Development</h3>
            <p>Custom solutions and tools for your specific needs</p>
          </div>
          <div className="service-card">
            <i className="fas fa-comments" aria-hidden="true"></i>
            <h3>Community Building</h3>
            <p>Building and nurturing engaged communities around your product</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <h2>Service Pricing</h2>
        <p className="pricing-note">(Plus Tax/Transaction fees or charges if applicable.)</p>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Social Post</h3>
            <div className="price-label">AT</div>
            <div className="price">$200</div>
            <div className="price-subtitle">Per Post</div>
            <ul>
              <li>Twitter / LinkedIn</li>
              <li>Graphics Included</li>
              <li>Draft before posting</li>
            </ul>
          </div>
          <div className="pricing-card">
            <h3>Twitter (X) Thread</h3>
            <div className="price-label">AT</div>
            <div className="price">$350</div>
            <div className="price-subtitle">3-4 Post Thread</div>
            <ul>
              <li>With graphics provided</li>
              <li>Link Included</li>
              <li>Draft before posting</li>
            </ul>
          </div>
          <div className="pricing-card">
            <h3>Post With A Video</h3>
            <div className="price-label">AT</div>
            <div className="price">$350</div>
            <div className="price-subtitle">Twitter/LinkedIn</div>
            <ul>
              <li>1 - 2 Min Video</li>
              <li>Demo / Features</li>
              <li>Draft before posting</li>
            </ul>
          </div>
          <div className="pricing-card">
            <h3>Blog</h3>
            <div className="price-label">FROM</div>
            <div className="price">$500</div>
            <div className="price-subtitle">Hashnode / Dev.to</div>
            <ul>
              <li>Tutorial / Review</li>
              <li>Social Promotion Included</li>
            </ul>
          </div>
        </div>
        <div className="pricing-cta">
          <a href="/bundle" className="packages-button">View All Packages</a>
        </div>
      </section>

      <section id="stats" className="stats">
        <h2>Our Reach</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <i className="fa-brands fa-twitter" aria-hidden="true"></i>
            <h3>X (Twitter)</h3>
            <div className="stat-numbers">
              <p>37K+ Followers</p>
              <p>1k+ new monthly followers</p>
            </div>
          </div>
          <div className="stat-card">
            <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            <h3>LinkedIn</h3>
            <div className="stat-numbers">
              <p>15K+ Followers</p>
              <p>2k+ new monthly followers</p>
            </div>
          </div>
          <div className="stat-card">
            <i className="fa-brands fa-dev" aria-hidden="true"></i>
            <h3>Dev.to</h3>
            <div className="stat-numbers">
              <p>14K+ Followers</p>
              <p>190k+ Views</p>
            </div>
          </div>
          <div className="stat-card">
            <i className="fa-brands fa-hashnode" aria-hidden="true"></i>
            <h3>Hashnode</h3>
            <div className="stat-numbers">
              <p>500+ Followers</p>
              <p>40k+ Views</p>
            </div>
          </div>
          <div className="stat-card">
            <i className="fa-solid fa-envelope" aria-hidden="true"></i>
            <h3>Newsletter</h3>
            <div className="stat-numbers">
              <p>170+ Subscribers</p>
              <p>35% Open Rate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="clients">
        <h2>Clients we&apos;ve collaborated with</h2>
        <div className="clients-grid">
          <div className="client-logo">
            <Image src="/images/client1.png" alt="Client 1 Logo" width={150} height={75} />
          </div>
          <div className="client-logo">
            <Image src="/images/client2.png" alt="Client 2 Logo" width={150} height={75} />
          </div>
          <div className="client-logo">
            <Image src="/images/client3.png" alt="Client 3 Logo" width={150} height={75} />
          </div>
          <div className="client-logo">
            <Image src="/images/client4.png" alt="Client 4 Logo" width={150} height={75} />
          </div>
          <div className="client-logo">
            <Image src="/images/client5.png" alt="Client 5 Logo" width={150} height={75} />
          </div>
        </div>
      </section>

      <div className="section-spacer"></div>
    </Layout>
  );
} 