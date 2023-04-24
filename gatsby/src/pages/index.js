import React from 'react';
import Layout from '../components/Layout';
//import Scroll from '../components/Scroll';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            {/*<Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>*/}
          </li>
        </ul>
      </div>
      {/*<Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>*/}
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <p>
            Long Beach Feline Rescue is a non-profit organization dedicated to rescuing and rehabilitating cats in need.<br/>
            Join us in our mission to save the lives of cats and promote their well-being throughout the community.<br/>
          </p>
          <a href="https://www.paypal.com/donate?token=oMpLQLBur-VSiUxR3_8Pc8bYl_Utcu9uiZ_JQK2bfd8hLuuPnSSlvQtSVKEnBDVUIO8X9CfjU4KtTm3c" className="button primary">
            Donate
          </a>
        </header>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Our Mission
          </h2>
          <p>
            We're a non-profit organization dedicated to rescuing, protecting, and finding loving homes for stray, abandoned, neglected, and abused kittens and cats. We strive to bring cats and humans together in a loving union and promote the joys of the feline-human bond! <br/>
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Donate            
          </h2>
          <p>
          You can help Long Beach Felines improve the lives of homeless cats and kittens by clicking on our safe and secure PayPal donation button below.<br/>
          Donations go toward providing proper veterinary care, food, shelter and supplies for the many rescue cats that come through our doors.
          </p>
          <a href="https://www.paypal.com/donate?token=oMpLQLBur-VSiUxR3_8Pc8bYl_Utcu9uiZ_JQK2bfd8hLuuPnSSlvQtSVKEnBDVUIO8X9CfjU4KtTm3c" className="button primary">
            Donate
          </a>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Who We Are
          </h2>
          <p>
          Long Beach Felines is an all-volunteer organization formalized in 2008 as a 501(c)(3) non-profit. We have no paid staff and receive no government funding.  We rely on fundraising efforts and private donations to support our cause and provide food, supplies and medical care for our cats. We are a no-kill organization that only euthanizes cats when it is medically deemed the only humane option. 
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Accumsan mus tortor nunc aliquet</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Arcu accumsan</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
