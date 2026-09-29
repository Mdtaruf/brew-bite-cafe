function Hero() {
  return (
    <section id="home" className="hero">

      {/* Left Side */}
      <div className="hero-content">

        <span className="hero-label">
          WELCOME TO BREW & BITE
        </span>

        <h1>
          Good Coffee.
          <br />
          Great Food.
          <br />
          <span>Good Times.</span>
        </h1>

        <p>
          Your neighborhood cafe for freshly brewed coffee,
          delicious food and unforgettable moments.
        </p>

        <div className="hero-buttons">

          <a
            href="#menu"
            className="primary-btn"
          >
            Explore Menu
          </a>

          <a
            href="#contact"
            className="secondary-btn"
          >
            Find Us
          </a>

        </div>

        {/* Statistics */}
        <div className="hero-stats">

          <div className="stat">
            <strong>4.8 ★</strong>
            <span>Google Rating</span>
          </div>

          <div className="stat">
            <strong>10+</strong>
            <span>Years Experience</span>
          </div>

          <div className="stat">
            <strong>1000+</strong>
            <span>Happy Customers</span>
          </div>

        </div>

      </div>

      {/* Right Side */}
      <div className="hero-image">

        <div className="coffee-circle">
          ☕
        </div>

      </div>

    </section>
  );
}

export default Hero;