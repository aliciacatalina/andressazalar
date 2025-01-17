import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Andres Salazar | Product Designer"
    return (
      <div>
          <link rel="stylesheet" href="index.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.14/fullpage.min.js" integrity="sha512-JEyqsBTR2woLAr79cq9g77k5aviE4ffJUwQ52NRRIsXQz5Xp2Am7vJD99hhc2q7lhvG0XCYs1cDGvl8d/t669Q==" crossOrigin="anonymous" referrerpolicy="no-referrer"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.14/fullpage.extensions.min.js" integrity="sha512-GYuJqjXsGFMS4XQFq2IewLF6YHgtvgopOIfJ2vuSqbDiAEVRv20jWtA9q9VK/m+x3WcfdFXrHXXwHZtjQaP1Zg==" crossOrigin="anonymous" referrerpolicy="no-referrer"></script>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.14/fullpage.css" integrity="sha512-j5rbjelirQpuvpLBGAo+rYp3mdBd75uZBqFdtBQytHxQEUWwdbLyDMpDuVm7xVV1MsuEKCyH7KtjLP75lH5+dQ==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
          <div class="header" id="header">
            <span class="header-item logo">
              <img src="images/pigeon.svg" alt="" />
            </span>
            <span class="header-item header-title" id="header-title">Hi</span>
            <ul class="header-item header-menu">
              <li>
                <a href="#projects-index" class="menu" data-slide="projects-index">Work</a></li>
              <li>
                <a href="#about" class="menu" data-slide="about">About me</a>
              </li>
            </ul>
          </div>
          <div class="content" id="fullpage">
            <section class="intro section">
              <div class="intro-text">
              <img src="images/Fotosdrake.png" alt="" class="intro-image" />
              <h1>I am <span class="name">Andrés</span>, a product designer living and working in Copenhagen.</h1>
              <h1>Nice to meet you.</h1>
              </div>
            </section>
            <div class="section">
              <section class="experience">
                <div class="experience-card">
                  <div class="experience-card-header">
                    <h3>Banking Circle</h3>
                    <h4>Senior UX Specialist</h4>
                    <span class="time">
                      2021-Present
                    </span>
                  </div>
                  <div class="experience-card-details">
                    <p>At Banking Circle I work with the online banking platform and the API documentation website.</p>
                    <p>Main tasks:</p>
                    <ul>
                      <li>UX strategy</li>
                      <li>UX research</li>
                      <li>Design system</li>
                      <li>User journey mapping</li>
                      <li>UI design</li>
                      <li>Prototyping</li>
                      <li>Developer handoffs</li>
                    </ul>
                  </div>
                </div>
                <div class="experience-card">
                  <div class="experience-card-header">
                    <h3>Oticon Medical</h3>
                    <h4>UX/UI Designer</h4>
                    <span class="time">
                      2019-2021
                    </span>
                  </div>
                  <div class="experience-card-details">
                    <p>At Oticon Medical I worked with the full redesign of the cochlear implant fitting software.</p>
                    <p>Main tasks:</p>
                    <ul>
                      <li>UX research</li>
                      <li>Design system</li>
                      <li>User journey mapping</li>
                      <li>UI design</li>
                      <li>Prototyping</li>
                      <li>Usability testing</li>
                      <li>Developer handoffs</li>
                    </ul>
                  </div>
                </div>
                <div class="experience-card">
                  <div class="experience-card-header">
                    <h3>Absolute Zero</h3>
                    <h4>UX/UI Designer</h4>
                    <span class="time">
                      2016-2019
                    </span>
                  </div>
                  <div class="experience-card-details">
                    <p>At Banking Circle I work with the online banking platform and the API documentation website.</p>
                    <p>Main tasks:</p>
                    <ul>
                      <li>UX strategy</li>
                      <li>UX research</li>
                      <li>Design system</li>
                      <li>User journey mapping</li>
                      <li>UI design</li>
                      <li>Prototyping</li>
                      <li>Developer handoffs</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
            <div class="section">
              <section class="project">
                <div class="project-wrapper">
                  <div class="project-image">
                    <img src="images/banking-circle-1.png" alt="" />
                  </div>
                  <div class="project-details">
                    <h4>Banking Circle</h4>
                    <h2>Payment Confirmation</h2>
                    <p>UX Research, UX & UI Design</p>
                    <a href="#" class="learn-more">
                      Learn more
                      <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8857 11.0594C21.481 10.4734 21.481 9.52185 20.8857 8.93591L13.2667 1.43591C12.6714 0.849976 11.7048 0.849976 11.1095 1.43591C10.5143 2.02185 10.5143 2.97341 11.1095 3.55935L16.1333 8.49998H1.52381C0.680952 8.49998 0 9.17029 0 9.99998C0 10.8297 0.680952 11.5 1.52381 11.5H16.1286L11.1143 16.4406C10.519 17.0265 10.519 17.9781 11.1143 18.564C11.7095 19.15 12.6762 19.15 13.2714 18.564L20.8905 11.064L20.8857 11.0594Z" fill="#0E0E0E"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </section>
            </div>
            <div class="section">
              <section class="project">
                <div class="project-wrapper">
                  <div class="project-image">
                    <img src="images/banking-circle-api.png" alt="" />
                  </div>
                  <div class="project-details">
                    <h4>Banking Circle</h4>
                    <h2>API Documentation</h2>
                    <p>UX Research, UX & UI Design</p>
                    <a href="#" class="learn-more">
                      Learn more
                      <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8857 11.0594C21.481 10.4734 21.481 9.52185 20.8857 8.93591L13.2667 1.43591C12.6714 0.849976 11.7048 0.849976 11.1095 1.43591C10.5143 2.02185 10.5143 2.97341 11.1095 3.55935L16.1333 8.49998H1.52381C0.680952 8.49998 0 9.17029 0 9.99998C0 10.8297 0.680952 11.5 1.52381 11.5H16.1286L11.1143 16.4406C10.519 17.0265 10.519 17.9781 11.1143 18.564C11.7095 19.15 12.6762 19.15 13.2714 18.564L20.8905 11.064L20.8857 11.0594Z" fill="#0E0E0E"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </section>
            </div>
            <div class="section">
              <section class="project">
                <div class="project-wrapper">
                  <div class="project-image">
                    <img src="images/banking-circle-payment.png" alt="" />
                  </div>
                  <div class="project-details">
                    <h4>Banking Circle</h4>
                    <h2>Payment Flow</h2>
                    <p>UX Research, UX & UI Design</p>
                    <a href="#" class="learn-more">
                      Learn more
                      <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8857 11.0594C21.481 10.4734 21.481 9.52185 20.8857 8.93591L13.2667 1.43591C12.6714 0.849976 11.7048 0.849976 11.1095 1.43591C10.5143 2.02185 10.5143 2.97341 11.1095 3.55935L16.1333 8.49998H1.52381C0.680952 8.49998 0 9.17029 0 9.99998C0 10.8297 0.680952 11.5 1.52381 11.5H16.1286L11.1143 16.4406C10.519 17.0265 10.519 17.9781 11.1143 18.564C11.7095 19.15 12.6762 19.15 13.2714 18.564L20.8905 11.064L20.8857 11.0594Z" fill="#0E0E0E"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </section>
            </div>
            <div class="section">
              <section class="project">
                <div class="project-wrapper">
                  <div class="project-image">
                    <img src="images/banking-circle-accounts.png" alt="" />
                  </div>
                  <div class="project-details">
                    <h4>Banking Circle</h4>
                    <h2>Bank Accounts</h2>
                    <p>UX Research, UX & UI Design</p>
                    <a href="#" class="learn-more">
                      Learn more
                      <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8857 11.0594C21.481 10.4734 21.481 9.52185 20.8857 8.93591L13.2667 1.43591C12.6714 0.849976 11.7048 0.849976 11.1095 1.43591C10.5143 2.02185 10.5143 2.97341 11.1095 3.55935L16.1333 8.49998H1.52381C0.680952 8.49998 0 9.17029 0 9.99998C0 10.8297 0.680952 11.5 1.52381 11.5H16.1286L11.1143 16.4406C10.519 17.0265 10.519 17.9781 11.1143 18.564C11.7095 19.15 12.6762 19.15 13.2714 18.564L20.8905 11.064L20.8857 11.0594Z" fill="#0E0E0E"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </section>
            </div>
            <div class="section">
              <section class="project">
                <div class="project-wrapper">
                  <div class="project-image">
                    <img src="images/oticon-medical-ux.png" alt="" />
                  </div>
                  <div class="project-details">
                    <h4>Oticon Medical</h4>
                    <h2>UX for Medical Device Development</h2>
                    <p>UX Strategy</p>
                    <a href="#" class="learn-more">
                      Learn more
                      <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8857 11.0594C21.481 10.4734 21.481 9.52185 20.8857 8.93591L13.2667 1.43591C12.6714 0.849976 11.7048 0.849976 11.1095 1.43591C10.5143 2.02185 10.5143 2.97341 11.1095 3.55935L16.1333 8.49998H1.52381C0.680952 8.49998 0 9.17029 0 9.99998C0 10.8297 0.680952 11.5 1.52381 11.5H16.1286L11.1143 16.4406C10.519 17.0265 10.519 17.9781 11.1143 18.564C11.7095 19.15 12.6762 19.15 13.2714 18.564L20.8905 11.064L20.8857 11.0594Z" fill="#0E0E0E"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </section>
            </div>
            <div class="section">
              <section class="project">
                <div class="project-wrapper">
                  <div class="project-image">
                    <img src="images/oticon-medical-redesign.png" alt="" />
                  </div>
                  <div class="project-details">
                    <h4>Oticon Medical</h4>
                    <h2>Application Redesign</h2>
                    <p>UX Strategy</p>
                    <a href="#" class="learn-more">
                      Learn more
                      <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8857 11.0594C21.481 10.4734 21.481 9.52185 20.8857 8.93591L13.2667 1.43591C12.6714 0.849976 11.7048 0.849976 11.1095 1.43591C10.5143 2.02185 10.5143 2.97341 11.1095 3.55935L16.1333 8.49998H1.52381C0.680952 8.49998 0 9.17029 0 9.99998C0 10.8297 0.680952 11.5 1.52381 11.5H16.1286L11.1143 16.4406C10.519 17.0265 10.519 17.9781 11.1143 18.564C11.7095 19.15 12.6762 19.15 13.2714 18.564L20.8905 11.064L20.8857 11.0594Z" fill="#0E0E0E"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </section>
            </div>
            <div class="section">
              <section class="end">
                <div class="end-header">
                  <h1>End of portfolio.</h1>
                </div>
                <div class="end-details">
                  <span>Designed by: Me</span>
                  <span>Built by: <a href="#">Alicia</a></span>
                </div>
                <footer>
                  <span>You made it ☺︎</span>
                  <div class="socials">
                    <a href="#linkedin">
                      <img src="images/linkedin.svg" alt="Linkedin profile" />
                    </a>
                    <a href="#dribble">
                      <img src="images/Dribbble.svg" alt="Dribble profile" />
                    </a>
                  </div>
                </footer>
              </section>
            </div>
          </div>
          <div class="projects-index menu-slide" id="projects-index">
            <div class="projects-index-cards">
              <div class="projects-index-card banking-circle">
                <h5>Banking Circle</h5>
                <h3>Payment Confirmation</h3>
                <span>UX Research, UX & UI Design</span>
                <a href="#">learn more</a>
              </div>
              <div class="projects-index-card banking-circle">
                <h5>Banking Circle</h5>
                <h3>API Docs</h3>
                <span>UX Research, UX & UI Design, IA</span>
                <a href="#">learn more</a>
              </div>
              <div class="projects-index-card banking-circle">
                <h5>Banking Circle</h5>
                <h3>Payment Flow</h3>
                <span>UX Research, User Flow, UX & UI Design</span>
                <a href="#">learn more</a>
              </div>
              <div class="projects-index-card banking-circle">
                <h5>Banking Circle</h5>
                <h3>Bank Accounts</h3>
                <span>UX Research, UX & UI Design</span>
                <a href="#">learn more</a>
              </div>
              <div class="projects-index-card oticon-medical">
                <h5>Oticon Medical</h5>
                <h3>UX for Med Device Dev</h3>
                <span>UX Strategy</span>
                <a href="#">learn more</a>
              </div>
              <div class="projects-index-card oticon-medical">
                <h5>Oticon Medical</h5>
                <h3>Application Redesign</h3>
                <span>UX & UI Design</span>
                <a href="#">learn more</a>
              </div>
            </div>
          </div>
          <div class="about menu-slide" id="about">
            <div class="about-wrapper">
              <p>
                Hi, I am Andrés, a product designer working in Copenhagen.
              </p>
              <p>
                What I enjoy the most is doing user research,
                UX & UI design and usability testing.
              </p>
              <p>
                I have professional experience in the fintech,
                medical device and virtual reality industries.
              </p>

              <a href="mailto:andressalazarruizvelasco@gmail.com" class="about-email">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.8351 1.05547L17.1883 3.70234L24.2976 10.8117L26.9445 8.16484C28.3117 6.79765 28.3117 4.58281 26.9445 3.21562L24.7898 1.05547C23.4226 -0.311722 21.2078 -0.311722 19.8406 1.05547H19.8351ZM15.9523 4.93828L3.20467 17.6914C2.63592 18.2602 2.2203 18.9656 1.99061 19.7367L0.0546747 26.3156C-0.0820441 26.7805 0.0437372 27.2781 0.3828 27.6172C0.721862 27.9562 1.21952 28.082 1.67889 27.9508L8.2578 26.0148C9.02889 25.7852 9.73436 25.3695 10.3031 24.8008L23.0617 12.0477L15.9523 4.93828Z" fill="#0E0E0E"/>
                </svg>
                andressalazarruizvelasco@gmail.com</a>
            </div>
          </div>
          <script type="text/javascript" src="index.js">
          </script>
        </div>

    )
  }
}

export default IndexPage
