import React from 'react';

import Layout from '../components/Layout';

const ContactPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Donate ❤️</h2>
        <p>Make a paws-itive impact on feline lives.</p>
      </header>
      <section id="contact" class="spotlight-form">
        <div class="inner">
          <form name="contact" method="POST" data-netlify="true">
            <div class="row gtr-uniform">
              <input type="hidden" name="subject" value="contact" />
              <div class="col-6 col-12-xsmall">
                <input type="text" name="name" id="name" value="" placeholder="Name" required />
              </div>
              <div class="col-6 col-12-xsmall">
                <input type="email" name="email" id="email" value="" placeholder="Email" required />
              </div>
              <div class="col-12">
                <textarea name="message" id="message" placeholder="Your Message" rows="6" required></textarea>
              </div>
              <div class="col-12">
                <ul class="actions">
                  <li><input type="submit" value="Send" class="primary" /></li>
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