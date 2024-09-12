import React from "react";
import "./style.css";


// App.js



function App() {
  return (
    <div className="container-fluid">
      <div className=" up ">
      <header className="header">
        <div className="logo">
          <a href="/">
            <span>Abstract</span>
          </a>

              <a href="/help-center">Help Center</a>

        </div>
        <nav className="nav">

        </nav>
        <div className="actions">
          <button className="button-sub" type="button">Submit request</button>
          <button className="button" type="button">Sign in</button>
        </div>
      </header>
      <main className="main">
        <h1 className="title">How can we help?</h1>
        <div className="container">
        <div className="search">
          <input type="text" placeholder="Search  →" />

        </div>
        </div>
      </main>
</div>

      <div className="middle">
      <div className="section">
        <div className="icon">
          <img src="https://help.abstract.com/hc/theming_assets/01HZH4D4GACXWCRKK6JHQ730XD" alt="Icon" />
        </div>
        <div className="content">
          <h3>Using Abstract</h3>
          <p>Abstract lets you manage, version, and document your designs in one place.</p>
          <a href="#" className="learn-more">Learn More →</a>
        </div>
      </div>
      <div className="section">
        <div className="icon">
          <img src="https://help.abstract.com/hc/theming_assets/01HZH4D45NKFCN3388ZCBJB878" alt="Icon" />
        </div>
        <div className="content">
          <h3>Manage your account</h3>
          <p>Configure your account settings, such as your email, profile details, and password.</p>
          <a href="#" className="learn-more">Learn More →</a>
        </div>
      </div>
      <div className="section">
        <div className="icon">
          <img src="https://help.abstract.com/hc/theming_assets/01HZH4D3M8CRR0C2V5GREVR6HK" alt="Icon" />
        </div>
        <div className="content">
          <h3>Manage organizations, teams, and projects</h3>
          <p>Use Abstract organizations, teams, and projects to organize your people and your work.</p>
          <a href="#" className="learn-more">Learn More→</a>
        </div>
      </div>
      <div className="section">
        <div className="icon">
          <img src="https://help.abstract.com/hc/theming_assets/01HZH4D38K1S1M9WKWSQZE62YE" alt="Icon" />
        </div>
        <div className="content">
          <h3>Manage billing</h3>
          <p>Change subscriptions and payment details.</p>
          <a href="#" className="learn-more">Learn More→</a>
        </div>
      </div>
      <div className="section">
        <div className="icon">
          <img src="https://help.abstract.com/hc/theming_assets/01HZH4D3S3QY5190TZE3H8ZSVK" alt="Icon" />
        </div>
        <div className="content">
          <h3>Authenticate to Abstract</h3>
          <p>Set up and configure SSO, SCIM, and Just-in-Time provisioning.</p>
          <a href="#" className="learn-more">Learn More→</a>
        </div>
      </div>
      <div className="section">
        <div className="icon">
          <img src="https://help.abstract.com/hc/theming_assets/01HZH4D3G4S2K93BN3WJPT8600" alt="Icon" />
        </div>
        <div className="content">
          <h3>Abstract support</h3>
          <p>Get in touch with a human.</p>
          <a href="#" className="learn-more">Learn More→</a>
        </div>
      </div>
    </div>


    
      <footer className="footer">
        <div className="footer-section">
          <h3>Abstract</h3>
          <a href="#">Start Trial</a>
          <a href="#">Pricing</a>
          <a href="#">Download</a>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <a href="#">Blog</a>
          <a href="#">Help Center</a>
          <a href="#">Release Notes</a>
          <a href="#">Status</a>
        </div>
        
        <div className="footer-section">
          <h3>Community</h3>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
          <a href="#">Dribbble</a>
          <a href="#">Podcast</a>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Legal</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="copyright">
          <div className="instagram-icon" />
            <p>©️ Copyright 2024</p>
            <p>Abstract Studio Design, Inc.</p>
            <p>All rights reserved</p>
          </div>  

      </footer>
</div>

      




  );
}

export default App;