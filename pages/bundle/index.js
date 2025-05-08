import Layout from '../../components/Layout';

export default function Bundle() {
  return (
    <Layout
      title="rebase media - Professional Social Media Content Services"
      description="High-quality social media content creation for Twitter and LinkedIn. Professional packages with graphics and analytics included."
      canonical="https://rebasemedia.com/bundle/"
      ogImage="https://rebasemedia.com/images/rebase-media-og.png"
    >
      <section className="packages">
        <h1>Social Media Content: Professional Packages and Pricing</h1>
        <p className="pricing-note">(Plus Tax/Transaction fees or charges if applicable.)</p>
        
        <div className="packages-grid">
          <div className="package-card">
            <h3>Single Post</h3>
            <div className="price-label">AT</div>
            <div className="price">$200</div>
            <ul>
              <li>Twitter / LinkedIn</li>
              <li>With graphics provided</li>
              <li>Link Included</li>
              <li>Draft before posting</li>
            </ul>
          </div>

          <div className="package-card">
            <h3>Reshare</h3>
            <div className="price-label">AT</div>
            <div className="price">$200</div>
            <ul>
              <li>Twitter / LinkedIn</li>
              <li>No links</li>
            </ul>
          </div>

          <div className="package-card">
            <h3>Post With A Video</h3>
            <div className="price-label">AT</div>
            <div className="price">$350</div>
            <ul>
              <li>Twitter/LinkedIn</li>
              <li>1 Min Video</li>
              <li>Demo / Features</li>
              <li>Draft before posting</li>
            </ul>
          </div>

          <div className="package-card">
            <h3>Twitter Thread</h3>
            <div className="price-label">AT</div>
            <div className="price">$350</div>
            <ul>
              <li>3-4 Post Thread</li>
              <li>With graphics provided</li>
              <li>Link Included</li>
              <li>Draft before posting</li>
            </ul>
          </div>

          <div className="package-card highlight">
            <h3>Pack of 4</h3>
            <div className="price-label">AT</div>
            <div className="price">$720</div>
            <ul>
              <li>Twitter / LinkedIn</li>
              <li>With graphics provided</li>
              <li>Link Included</li>
              <li>Draft before posting</li>
            </ul>
          </div>

          <div className="package-card highlight">
            <h3>Pack of 8</h3>
            <div className="price-label">AT</div>
            <div className="price">$1400</div>
            <ul>
              <li>Twitter / LinkedIn</li>
              <li>With graphics provided</li>
              <li>Link Included</li>
              <li>Draft before posting</li>
            </ul>
          </div>

          <div className="package-card highlight">
            <h3>Pack of 12</h3>
            <div className="price-label">AT</div>
            <div className="price">$2000</div>
            <ul>
              <li>Twitter / LinkedIn</li>
              <li>With graphics provided</li>
              <li>Link Included</li>
              <li>Draft before posting</li>
            </ul>
          </div>
        </div>

        <div className="conditions">
          <div className="condition-section">
            <h2>Service Terms and Guidelines</h2>
            <div className="condition-grid">
              <div className="condition-card">
                <h3>Our Commitments:</h3>
                <ul>
                  <li>◾ 100% Upfront payment</li>
                  <li>◾ Provide Analytics</li>
                  <li>◾ Approval before posting - Draft</li>
                </ul>
              </div>
              <div className="condition-card">
                <h3>Content Guidelines:</h3>
                <ul>
                  <li>◾ No &apos;salesy&apos; and Exclusive language</li>
                  <li>◾ No defaming competitors</li>
                  <li>◾ No controversial graphics</li>
                  <li>◾ No promotion for bad product/project</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 