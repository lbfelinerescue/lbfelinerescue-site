import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/adopt_pic01.jpg'
import pic2 from '../assets/images/adopt_pic02.jpg'
import pic3 from '../assets/images/adopt_pic03.jpg'

const FosterPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Foster ❤️</h2>
        <p>
            Provide a safe space for cats awaiting adoption
        </p>
      </header>
      <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Fostering a Cat
          </h2>
          <p>
          If you enjoy spending time with cats and are interested in helping homeless cats, then fostering one in your home may be a good option for you. You get to experience the joy of spending time with a pet. 
          It teaches children compassion and the importance of treating animals with kindness.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Why Foster?
          </h2>
          <p>
            If you're interested in fostering as a prelude to adoption, you can use your fostering time to truly get to know a cat before you adopt him or her.<br/>
            You can have the satisfaction of knowing that you helped save a life.  Because of space limitations, we have to say "no" to many cats that need our help. If you foster, you will play a vital part in helping a cat that otherwise would have been euthanized at a shelter.
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
            If you have questions about fostering a cat in your home, please feel free to e-mail us for more information. If you feel that fostering a cat is for you, submit an application <a href="/Foster">here</a> or click the button below.
          </p>
          <a href="/Foster" className="button primary">
            Foster
          </a>
        </div>
      </section>
    </section>
    </article>
  </Layout>
);

export default FosterPage;