import React from 'react';

import Layout from '../components/Layout';

const ContactPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Donate ❤️</h2>
        <p>Make a paws-itive impact on feline lives.</p>
      </header>
      <section id="contact" className="spotlight-form">
        <div className="inner">
          <form name="contact" method="POST" data-netlify="true">
            <div className="row gtr-uniform">
              <input type="hidden" name="subject" value="contact" />
              <div className="col-6 col-12-xsmall">
                <input type="text" name="name" id="name" placeholder="Name" required />
              </div>
              <div className="col-6 col-12-xsmall">
                <input type="email" name="email" id="email" placeholder="Email" required />
              </div>
              <div className="col-12">
                <textarea name="message" id="message" placeholder="Your Message" rows="6" required></textarea>
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li><input type="submit" value="Send" className="primary" /></li>
                  <li><input type="reset" value="Reset" /></li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </section>
    </article>
  </Layout>
);

export default ContactPage;