import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/adopt_pic01.jpg'
import pic2 from '../assets/images/adopt_pic02.jpg'
import pic3 from '../assets/images/adopt_pic03.jpg'

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Adopting a Cat</h2>
      </header>
      <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Getting Started
          </h2>
          <p>
            All of our adoptable kitties are happily living at the <a href='https://www.felinegoodsocialclub.com/'>Feline Good Social Club Lounge</a> in comfort and safety.  You can view them <a href='https://www.canva.com/design/DAEhG7_cWcg/50e9Bo-YecCHVsqyFTykyQ/view'>here</a>.<br/>
            The really great part of this new arrangement is that you can meet and spend time with our kitties in their 'Happy Place.'  You'll get to know exactly who each kitty is before you decide who to adopt. 
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Application
          </h2>
          <p>
            If you're ready to adopt, you can start the process by filling out our online <a href='https://fs6.formsite.com/lbf5forms/form2/index.html'>Adoption Questionnaire</a>. This helps ensure that the cat you've chosen will fit in well with your household and family. 
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Details
          </h2>
          <p>
            Every cat and kitten adopted through Long Beach Felines is vaccinated, spayed/neutered, dewormed, tested for Feline Leukemia & FIV and microchipped. 
          </p>
        </div>
      </section>
    </section>
    </article>
  </Layout>
);

export default IndexPage;