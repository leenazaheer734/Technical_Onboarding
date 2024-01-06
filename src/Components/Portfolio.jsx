/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/me_with_laptop.jpg";

const imageAltText = "desktop with me and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Airline Optimization System",
    description: 
      "This desktop-based application is designed to address the challenges faced by the airline industry in efficiently managing flights, passenger information, and ticketing processes. The system leverages various data structures and algorithms to provide a robust solution for airline managers and passengers.",
    url: "https://gitlab.com/mwaliahmad/dsafinalprojectpid29",
  },
  {
    title: "Smart Color Mixer",
    description:
      "This project utilizes Arduino UNO, ESP32, and RGB LED technology to create an interactive lighting experience with various color modes.",
    url: "https://github.com/mwaliahmad/Coal-Final-Project",
  },
  {
    title: "Tube Harvest",
    description:
      "This project is a allows you to scrap videos from youtube and compare them, also uses various sorting and searching algorithms to sort and search the videos and help you decide what you want to watch.",
    url: "https://gitlab.com/mwaliahmad/2022-cs-65dsamidproject",
  },
  {
    title: "Bank Management System",
    description:
      "This was created in C# and ted from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/leenazaheer734/Projects_Semester_1",
  }
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
