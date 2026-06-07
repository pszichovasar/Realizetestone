export default function Home() {
  return (
    <main>
      <nav>
        <a href="#" className="logo">realize<span>.</span></a>
        <ul>
          <li><a href="#how">How it works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#results">Results</a></li>
          <li><a href="#" className="nav-cta">Start for free</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-grid-bg"></div>
        <div className="hero-glow"></div>
        <div className="hero-glow2"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            Performance Advertising Platform
          </div>
          <h1>Ads that<br /><em>perform.</em><br />Not just appear.</h1>
          <p className="hero-sub">Launch campaigns that reach 600M+ daily users across the open web. AI-powered targeting, real-time optimization, and transparent results — from day one.</p>
          <div className="hero-actions">
            <a href="#" className="btn-primary">Start free campaign</a>
            <a href="#how" className="btn-ghost">See how it works</a>
          </div>
        </div>
      </section>

      <div className="stats-strip">
        <div className="stats-inner">
          <div className="stat">
            <div className="stat-num">600<span>M+</span></div>
            <div className="stat-label">Daily active users reached</div>
          </div>
          <div className="stat">
            <div className="stat-num">17<span>yr</span></div>
            <div className="stat-label">Years of AI training data</div>
          </div>
          <div className="stat">
            <div className="stat-num">3<span>×</span></div>
            <div className="stat-label">Average ROAS vs display</div>
          </div>
          <div className="stat">
            <div className="stat-num"><span>&lt;</span>5<span>min</span></div>
            <div className="stat-label">Time to launch first campaign</div>
          </div>
        </div>
      </div>

      <section className="section" id="how">
        <div className="container">
          <div className="section-label">How it works</div>
          <h2>From setup to scale<br />in minutes.</h2>

          <div className="how-grid">
            <div className="steps">
              <div className="step">
                <div className="step-num">01</div>
                <div className="step-body">
                  <h3>Set your goals</h3>
                  <p>Tell us what you want — affiliate sales, leads, or awareness. Our platform calibrates every parameter to your objective automatically.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">02</div>
                <div className="step-body">
                  <h3>Define your audience</h3>
                  <p>Use first-party data, contextual signals, or let AI surface high-intent segments based on real behavioral patterns.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">03</div>
                <div className="step-body">
                  <h3>Launch & optimize</h3>
                  <p>Smart bidding technology continuously fine-tunes delivery. Track every conversion in real-time.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">04</div>
                <div className="step-body">
                  <h3>Scale what works</h3>
                  <p>Proven creatives and winning audiences get amplified automatically. Duplicate, iterate, and grow.</p>
                </div>
              </div>
            </div>

            <div className="visual-panel">
              <div className="panel-header">
                <div className="dot-red" />
                <div className="dot-yellow" />
                <div className="dot-green" />
                <div className="panel-title">Campaign Dashboard</div>
              </div>
              <div className="panel-body">
                <div className="mini-chart">
                  <div className="mini-chart-label">Weekly Revenue ↑ 34%</div>
                  <div className="chart-bars">
                    <div className="bar" style={{ height: '40%' }}></div>
                    <div className="bar" style={{ height: '55%' }}></div>
                    <div className="bar" style={{ height: '45%' }}></div>
                    <div className="bar" style={{ height: '65%' }}></div>
                    <div className="bar" style={{ height: '50%' }}></div>
                    <div className="bar" style={{ height: '75%' }}></div>
                    <div className="bar active" style={{ height: '90%' }}></div>
                  </div>
                </div>

                <div className="metric-row">
                  <div className="metric-card">
                    <div className="label">Conversions</div>
                    <div className="value">2,841</div>
                    <div className="change">↑ 18% this week</div>
                  </div>
                  <div className="metric-card">
                    <div className="label">ROAS</div>
                    <div className="value">4.2×</div>
                    <div className="change">↑ 0.6 vs last week</div>
                  </div>
                </div>

                <div className="metric-row">
                  <div className="metric-card">
                    <div className="label">CPC</div>
                    <div className="value">$0.38</div>
                    <div className="change">↓ 12% optimized</div>
                  </div>
                  <div className="metric-card">
                    <div className="label">CTR</div>
                    <div className="value">2.9%</div>
                    <div className="change">↑ above benchmark</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="logos-section">
        <div className="logos-label">Trusted by advertisers. Distributed across</div>
        <div className="logos-row">
          <span className="logo-item">NBC News</span>
          <span className="logo-item">Yahoo</span>
          <span className="logo-item">Samsung</span>
          <span className="logo-item">Xiaomi</span>
          <span className="logo-item">MSN</span>
          <span className="logo-item">CBS</span>
          <span className="logo-item">USA Today</span>
        </div>
      </div>

      <section className="features" id="features">
        <div className="features-header">
          <div className="section-label">Features</div>
          <h2>Everything you need<br />to scale performance.</h2>
          <p className="section-sub">Built for affiliates who want results, not complexity.</p>
        </div>

        <div className="feat-grid">
          <div className="feat-card">
            <div className="feat-icon"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><line x1="12" y1="3" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="21" /><line x1="3" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="21" y2="12" /></svg></div>
            <h3>AI Audience Targeting</h3>
            <p>17 years of behavioral data power intent-based targeting that finds buyers.</p>
          </div>

          <div className="feat-card">
            <div className="feat-icon"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></div>
            <h3>Smart Bidding</h3>
            <p>Real-time auction optimization adjusts bids thousands of times per day.</p>
          </div>

          <div className="feat-card">
            <div className="feat-icon"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20.5C2 20.5 6 19 8 17L18.5 6.5a2.12 2.12 0 0 0-3-3L5 14c-2 2-2.5 6.5-3 6.5z" /><path d="M15 5l3 3" /><circle cx="19.5" cy="20.5" r="2.5" /></svg></div>
            <h3>Creative Studio</h3>
            <p>Generate, test, and scale winning ad creatives with built-in brand safety.</p>
          </div>

          <div className="feat-card">
            <div className="feat-icon"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" /></svg></div>
            <h3>Real-Time Analytics</h3>
            <p>Track every click, conversion, and dollar spent in a transparent dashboard.</p>
          </div>

          <div className="feat-card">
            <div className="feat-icon"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /><circle cx="12" cy="16" r="1" /></svg></div>
            <h3>First-Party Data</h3>
            <p>Connect your CRM and pixel data to build lookalike audiences.</p>
          </div>

          <div className="feat-card">
            <div className="feat-icon"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg></div>
            <h3>Open Web Reach</h3>
            <p>Go beyond walled gardens. Reach high-intent audiences across 9,000+ placements.</p>
          </div>
        </div>
      </section>

      <section className="testimonials" id="results">
        <div className="section-label">Real results</div>
        <h2>What marketers<br />are saying.</h2>

        <div className="testimonial-grid">
          <div className="testi-card">
            <p>"Realize gave us a completely new angle on content distribution. Within 6 weeks we tripled our affiliate conversion rate without increasing spend."</p>
            <div className="testi-author">
              <div className="author-avatar" style={{ background: 'rgba(212,255,63,0.15)', color: '#d4ff3f' }}>M</div>
              <div className="author-info">
                <div className="name">Maria Chen</div>
                <div className="role">Head of Affiliate, TechReview Co.</div>
              </div>
            </div>
          </div>

          <div className="testi-card">
            <p>"The smart bidding actually works. We cut our CPA by 41% in the first month while scaling volume. The AI genuinely optimizes better than our manual efforts."</p>
            <div className="testi-author">
              <div className="author-avatar" style={{ background: 'rgba(61,255,212,0.15)', color: '#3dffd4' }}>D</div>
              <div className="author-info">
                <div className="name">David Park</div>
                <div className="role">Performance Director, GrowthLab</div>
              </div>
            </div>
          </div>

          <div className="testi-card">
            <p>"Finally a platform with real transparency. I can see exactly where every dollar goes, which creatives work, and make decisions with actual data."</p>
            <div className="testi-author">
              <div className="author-avatar" style={{ background: 'rgba(255,100,100,0.15)', color: '#ff8a8a' }}>S</div>
              <div className="author-info">
                <div className="name">Sarah Williams</div>
                <div className="role">Founder, NativeAds Agency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-glow" />
        <div className="section-label">Get started</div>
        <h2>Ready to<br /><em>realize</em> results?</h2>
        <div className="cta-input-row">
          <input type="email" className="cta-input" placeholder="your@email.com" />
          <a href="#" className="btn-primary">Launch your campaign</a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-content">
          <a href="#" className="logo">realize<span>.</span></a>
          <ul className="footer-nav">
            <li><a href="#">Product</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <p className="footer-copyright">© 2025 Realize by Taboola. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}