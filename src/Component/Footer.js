import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 footer-container">
            <h3 className="footer-heading">Food House</h3>
            <p className="footer-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              at neque eu sapien faucibus venenatis. Sed eu aliquet mauris, ac
              tincidunt turpis. Sed et nisl vitae mauris tempus fringilla non ut
              purus
            </p>
            <ul className="social-icons">
              <li>
                <i class="fab fa-facebook-f"></i>
              </li>
              <li>
                <i class="fab fa-twitter"></i>
              </li>
              <li>
                <i class="fab fa-instagram"></i>
              </li>
              <li>
                <i class="fab fa-pinterest-p"></i>
              </li>
            </ul>
          </div>
          <div id="contact" className="col-md-6 footer-container">
            <h3 className="footer-heading">Contact Us</h3>
            <p>Address:Marine Point, Block-9 Clifton, Sindh</p>
            <p>Phone:+9221-5831175</p>
            <p>Email:x9tgmvph9l@temporary-mail.net</p>
            <h3 className="footer-heading">Payment Method</h3>
            <ul className="payment-icons">
              <li>
                <i class="fab fa-cc-paypal"></i>
              </li>
              <li>
                <i class="fab fa-cc-stripe"></i>
              </li>
              <li>
                <i class="fab fa-cc-visa"></i>
              </li>
              <li>
                <i class="fab fa-cc-mastercard"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
