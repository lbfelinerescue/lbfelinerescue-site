import React from 'react';

import Layout from '../components/Layout';

const DonatePage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Donate ❤️</h2>
        <p>Make a paws-itive impact on feline lives.</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Contributing</h3>
          <p>
            Long Beach Felines is a non-profit organization dedicated to rescuing, rehabilitating, and rehoming cats in the Long Beach area. We have been working tirelessly to save the lives of cats who have been abandoned, neglected, or abused. We provide shelter, food, medical care, and love to cats in need, and work hard to find loving homes for these felines.
          </p>
          <p>
            However, running a cat rescue shelter is not easy, and we rely on the support of generous donors to keep our operations going. Every donation, no matter how small, can make a huge difference in the lives of our cats. Your donation will help provide food, medical care, and other necessities for the cats in our care.
          </p>
          <p>
            By donating to Long Beach Felines, you can make a real impact on the lives of cats in need. Your donation can help save a life, and provide a safe and loving home for a cat who has nowhere else to go. Please consider making a donation today to support the important work that we are doing. Your contribution can truly make a difference!
          </p>
          <a href="https://www.paypal.com/donate?token=oMpLQLBur-VSiUxR3_8Pc8bYl_Utcu9uiZ_JQK2bfd8hLuuPnSSlvQtSVKEnBDVUIO8X9CfjU4KtTm3c" className="button primary">
            Donate
          </a>

          <hr />

          <h4>Wish List</h4>
          <p>
            We also have an Amazon wish list containing items that are crucial to the daily operations of the shelter. These items include food, toys, litter, and medical supplies that are needed to care for the cats in their care.
          </p>
          <p>
            By purchasing items from the wish list, you can directly contribute to the well-being of these cats. Your donation will be put to use right away in caring for these animals, and you'll be supporting the important work that Long Beach Felines is doing to rescue, rehabilitate, and rehome cats in need.
          </p>
          <a href="https://smile.amazon.com/hz/wishlist/ls/1C3ESCOI48S3G?&sort=default" class="button primary">
            our amazon wish list <i class="fa-brands fa-amazon"></i>
          </a>
        </div>
      </section>
    </article>
  </Layout>
);

export default DonatePage;