import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6 footer-info">
              <h3>MEDBOOK</h3>
              <p>WE at medbook try to make medical report & prescriptions available to the user at any point and place.<br />At the same time reducing papered dependency of current user for their medical history </p>

            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="ion-ios-arrow-right"></i>{" "}
                  <a href="#">MY Timeline</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-right"></i>{" "}
                  <a href="#">Profile</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-right"></i>{" "}
                  <a href="#">Contact</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-right"></i>{" "}
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <i class="ion-ios-arrow-right"></i>{" "}
                  <a href="#">Resources - BootstrapMade </a>
                </li>
                <li>
                  <i class="ion-ios-arrow-right"></i>{" "}
                  <a href="#">For  -DEVELOPERS- </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                Ravindra Bhawan <br />
                IIT ROORKEE <br />
                <br />
                INDIA <br />
                <strong>Phone:</strong> +91 94651-12352
                <br />
                <strong>Email:</strong> info@medbook.in
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong>MEDBOOK</strong>. All Rights Reserved
        </div>
        <div className="credits"></div>
      </div>
    </footer>
  );
}

export default Footer;
