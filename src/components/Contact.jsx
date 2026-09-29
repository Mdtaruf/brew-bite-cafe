function Contact() {
  return (
    <>
      {/* =========================
          CTA SECTION
      ========================= */}

      <section className="cta-section">

        <div className="cta-content">

          <span className="section-label">
            READY FOR A COFFEE?
          </span>

          <h2>
            Your Table
            <br />
            <span>Is Waiting.</span>
          </h2>

          <p>
            Come visit us and experience
            Brew & Bite.
          </p>

          <a
            href="#contact"
            className="cta-btn"
          >
            Get Directions
          </a>

        </div>

      </section>


      {/* =========================
          CONTACT SECTION
      ========================= */}

      <section
        id="contact"
        className="contact-section"
      >

        {/* LEFT SIDE */}

        <div className="contact-content">

          <span className="section-label">
            FIND US
          </span>

          <h2>
            Let's Have a
            <br />
            <span>Coffee Together.</span>
          </h2>


          {/* Address */}

          <div className="contact-details">

            <div className="contact-item">

              <div className="contact-icon">
                📍
              </div>

              <div>

                <strong>
                  Address
                </strong>

                <p>
                  123 Cafe Street,
                  <br />
                  Jaipur, Rajasthan 302001
                </p>

              </div>

            </div>


            {/* Phone */}

            <div className="contact-item">

              <div className="contact-icon">
                📞
              </div>

              <div>

                <strong>
                  Phone
                </strong>

                <p>
                  +91 98765 43210
                </p>

              </div>

            </div>


            {/* Opening Hours */}

            <div className="contact-item">

              <div className="contact-icon">
                🕐
              </div>

              <div>

                <strong>
                  Opening Hours
                </strong>

                <p>
                  Monday - Sunday
                  <br />
                  9:00 AM - 11:00 PM
                </p>

              </div>

            </div>

          </div>


          {/* Buttons */}

          <div className="contact-buttons">

            <a
              href="tel:+919876543210"
              className="call-btn"
            >
              📞 Call Us
            </a>


            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              💬 WhatsApp
            </a>

          </div>

        </div>


        {/* RIGHT SIDE - GOOGLE MAP */}

        <div className="map-container">

          <iframe
            title="Brew & Bite Cafe Location"
            src="https://www.google.com/maps?q=Jaipur,Rajasthan&output=embed"
            loading="lazy"
          />

        </div>

      </section>
    </>
  );
}

export default Contact;