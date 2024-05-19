import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
            <br></br>
           <hr class="blue-hr"/>

            <br></br>
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
            
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Our Mission</h3>
              <p>
                PuwaKhola-one is public hydropower company with the aim to
                promote hydropower in Nepal. We are a team of experts and young
                talents bringing excellence and innovations in the projects. We
                believe this will help us to bring sustainable invest- ments and
                add more projects in directed time.Puwa Khola-One Hydropower
                Limited is dedicated to harnessing the power of renewable energy
                to drive sustainable development while prioritizing
                environmental stewardship and community prosperity.
              </p>
              <h3>Our Values</h3>
              <p>
                - Innovation: We strive for continuous improvement and embrace
                innovation to meet the evolving needs of our stakeholders.
                <br />
                - Reliability: We uphold the highest standards of quality,
                safety, and reliability in all aspects of our operations.
                <br />
                - Sustainability: We are committed to minimizing our ecological
                footprint and promoting responsible resource management.
                <br />- Collaboration: We believe in the power of collaboration
                and partnerships to achieve our goals and create shared value.
              </p>
              <h3>Our Vision</h3>
              <p>
                <strong>Become an innovative and key Hydropower devel- oper in Nepal.</strong>
              </p>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};