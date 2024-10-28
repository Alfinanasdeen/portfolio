import "./cantact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  return (
    <section className="paralax-mf footer-paralax bg-image sect-mt4 route">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                {/* Title for the Contact Section */}
                <div className="title-box-2 text-center">
                  <h2 className="title-left-contactme">Contact Me</h2>
                  <p className="subtitle">I’m eager to hear your thoughts!</p>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left-contact">Send A Message</h5>
                    </div>
                    <div>
                      <form
                        action="https://formspree.io/xdoeonlo"
                        method="POST"
                        className="contactForm"
                      >
                        <div id="sendmessage">
                          Your message has been sent. Thank you!
                        </div>
                        <div id="errormessage"></div>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 4 chars"
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                data-rule="email"
                                data-msg="Please enter a valid email"
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 8 chars of subject"
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                rows="5"
                                data-rule="required"
                                data-msg="Please write something for us"
                                placeholder="Message"
                              ></textarea>
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left-contact">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Whether you want to get in touch, talk about a project
                        collaboration, or just say hi, I'd love to hear from
                        you.
                        <br />
                        Simply fill the form and send me an email.
                      </p>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=your-alfinanasdeen@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <img
                                src="https://w7.pngwing.com/pngs/817/967/png-transparent-gmail-logo-gmail-email-icon-logo-gmail-logo-angle-text-rectangle-thumbnail.png"
                                alt="Email"
                                className="social-icon"
                              />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/alfina-dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <img
                                src="https://w7.pngwing.com/pngs/329/312/png-transparent-in-logo-linkedin-computer-icons-social-media-professional-network-service-youtube-linkedin-miscellaneous-blue-angle-thumbnail.png"
                                alt="LinkedIn"
                                className="social-icon"
                              />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/Alfinanasdeen"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <img
                                src="https://banner2.cleanpng.com/20180711/iqy/aawpwnuou.webp"
                                alt="GitHub"
                                className="social-icon"
                              />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box"></div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
