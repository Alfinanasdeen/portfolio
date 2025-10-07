import { useState } from "react";
import Modal from "./Modal.jsx";
import "./portfolio.css";

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({
    title: "",
    description: "",
  });

  const projects = [
    {
      img: "https://i.pinimg.com/564x/2f/c9/f9/2fc9f962debf658069615135dec8875f.jpg",
      title: "Zen Class Dashboard",
      description: (
        <div>
          <ul>
            <li>
              <strong>Overview:</strong>
              <ul>
                <li>
                  Welcome to the Zenclass Student Dashboard frontend repository!
                </li>
                <li>
                  Purpose: Designed to provide students with an interactive and
                  user-friendly dashboard.
                </li>
                <li>
                  <strong>Key Features:</strong>
                  <ul>
                    <li>
                      <strong>Manage Classes:</strong>
                      <p>Students can keep track of their attended classes.</p>
                    </li>
                    <li>
                      <strong>Submit Assignments:</strong>
                      <p>A convenient way to submit coursework and projects.</p>
                    </li>
                    <li>
                      <strong>Raise Queries:</strong>
                      <p>
                        Students can easily ask questions or seek help regarding
                        their studies.
                      </p>
                    </li>
                    <li>
                      <strong>Request Leaves:</strong>
                      <p>
                        Allows students to formally request leave when
                        necessary.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Technology:</strong>
                  <p>
                    Built using modern web technologies to ensure a responsive
                    and seamless user experience.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      ),
      shortDescription:
        "A feature-rich dashboard for scheduling classes, managing interviews, and tasks in Zen Class.",
      frontendCode:
        "https://github.com/Alfinanasdeen/Zenclass-student-dashboard-frontend",
      backendCode:
        "https://github.com/Alfinanasdeen/Zenclass-student-dashboard-backend",
      frontendHostedLink: "https://grand-chebakia-c02c57.netlify.app/",
      backendHostedLink:
        "https://zenclass-student-dashboard-backend-qy1x.onrender.com",
    },
    {
      img: "https://bernardmarr.com/wp-content/uploads/2022/02/What-Is-Social-Media-2.0-Simple-Explanation-And-Examples.jpg",
      title: "Social Media",
      description: (
        <div>
          <ul>
            <li>
              <strong>Registration and Authentication:</strong>
              <p>
                Features a registration page with comprehensive validation,
                allowing users to upload a profile image during registration and
                supporting user login functionality.
              </p>
            </li>
            <li>
              <strong>User Dashboard:</strong>
              <p>
                Home page displays complete user information, enabling users to
                add, delete, and edit their posts.
              </p>
            </li>
            <li>
              <strong>Post Interaction:</strong>
              <p>
                Users can view their own posts as well as those of others, with
                options to like or dislike posts and view comments.
              </p>
            </li>
            <li>
              <strong>Friend Management:</strong>
              <p>
                Allows users to add or remove friends, with a dynamically
                updating friend list.
              </p>
            </li>
            <li>
              <strong>User Profile Page:</strong>
              <p>
                Displays detailed information about the user, including sections
                for friends list, user's posts, and personal information.
              </p>
            </li>
            <li>
              <strong>Theme Support:</strong>
              <p>
                The site supports both light and dark modes for user preference.
              </p>
            </li>
          </ul>
        </div>
      ),
      shortDescription:
        "A social media platform supporting user posts, friend management, and a dynamic dashboard.",
      frontendCode: "https://github.com/Alfinanasdeen/social_media_frontend",
      backendCode: "https://github.com/Alfinanasdeen/social_media_backend",
      frontendHostedLink: "https://timely-semifreddo-30b6fe.netlify.app",
      backendHostedLink: "https://social-media-backend-0p41.onrender.com",
    },
    {
      img: "https://i.pinimg.com/736x/85/d5/2c/85d52c7ddfbf966d7361084256daf436.jpg",
      title: "E-commerce Website",
      description: (
        <div>
          <ul>
            <li>
              <strong>Functionality:</strong>
              <ul>
                <li>Comprehensive login and registration functionality.</li>
                <li>
                  Allows users to sign in as either an admin or a regular user.
                </li>
                <li>
                  Upon logging in, users can browse through a wide range of
                  product categories.
                </li>
                <li>
                  The site offers category selection through a navigation bar
                  dropdown or by scrolling through the category section.
                </li>
                <li>
                  Search functionality is provided to help users find specific
                  products.
                </li>
                <li>
                  Each product includes filtering options based on desired
                  attributes.
                </li>
                <li>
                  Detailed product information is displayed upon clicking on a
                  product.
                </li>
                <li>
                  Users can add products to the shopping cart, adjust
                  quantities, and manage items.
                </li>
                <li>
                  Admins can add new products and manage listed products through
                  the admin interface.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      ),
      shortDescription:
        "An e-commerce site with login, product browsing, and admin management.",
      frontendCode: "https://github.com/Alfinanasdeen/eCommerce-client",
      backendCode: "https://github.com/Alfinanasdeen/eCommerce-server",
      frontendHostedLink: "https://astounding-dieffenbachia-edcc0d.netlify.app",
      backendHostedLink: "https://ecommerce-server-8jif.onrender.com",
    },
    {
      img: "https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/free-blog-maker/free-blog-maker-hero-en.webp?width=540&name=free-blog-maker-hero-en.webp",
      title: "Blog App",
      description: (
        <div>
          <ul>
            <li>
              <strong>Overview:</strong>
              <ul>
                <li>Full-stack blog application built using the MERN stack.</li>
                <li>Dynamic platform for creating and managing blog posts.</li>
                <li>
                  The home page fetches and displays all posts from a MongoDB
                  database.
                </li>
                <li>
                  When a user clicks on a specific post, detailed information
                  about the post and the author is displayed.
                </li>
                <li>
                  Full registration and login functionality for user access and
                  authentication.
                </li>
                <li>
                  Registered users can create new posts, adding titles, images,
                  and content.
                </li>
                <li>
                  Users can edit their own posts, ensuring access permissions
                  for authors.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      ),
      shortDescription:
        "A dynamic blog app for creating, managing, and viewing posts with full user authentication.",
      frontendCode: "https://github.com/Alfinanasdeen/blog-app-frontend",
      backendCode: "https://github.com/Alfinanasdeen/blog-app-backend",
      frontendHostedLink: "https://dapper-marzipan-3f7e6a.netlify.app",
      backendHostedLink: "https://blog-app-backend-t5ec.onrender.com",
    },
  ];

  const handleCardClick = (title, description) => {
    setSelectedProject({ title, description });
    setModalOpen(true);
  };

  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Projects</h3>
              <p className="subtitle-a">
                This Projects showcases my skills and experiences in full stack
                development, reflecting my passion for creating impactful web
                applications.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>

        <div className="row portfolio-work">
          {projects.map((item, index) => (
            <div className="col-md-4 portfolio" key={index}>
              <div
                className="work-box"
                onClick={() => handleCardClick(item.title, item.description)}
                style={{ position: "relative", cursor: "pointer" }}
              >
                <div className="work-img">
                  <img src={item.img} alt={item.title} className="img-fluid" />
                  <div className="icon-overlay">
                    <i className="fas fa-search"></i>
                  </div>
                </div>
                <div className="work-content ">
                  <h2 className="w-title">{item.title}</h2>
                  <div className="w-more">
                    <p className="w-shortDescription">
                      {item.shortDescription}
                    </p>
                  </div>
                  <div className="row mt-2">
                    <div className="col-12 portfolio-link">
                      <a
                        href={item.frontendCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-link"
                      >
                        FrontEnd GitHub Source Code Link
                      </a>
                      <br />
                      <a
                        href={item.backendCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-link"
                      >
                        Backend GitHub Source Code Link
                      </a>
                      <br />
                      <a
                        href={item.frontendHostedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-link"
                      >
                        FrontEnd Hosted Link
                      </a>
                      <br />
                      <a
                        href={item.backendHostedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-link"
                      >
                        Backend Hosted Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedProject.title}
        description={selectedProject.description}
      />
    </section>
  );
};

export default Portfolio;
