function About() {
  return (
    <section id="about" className="about-section">

      {/* Left Side - Image */}
      <div className="about-image">

        <div className="about-image-content">
          ☕
        </div>

      </div>

      {/* Right Side - Content */}
      <div className="about-content">

        <span className="section-label">
          OUR STORY
        </span>

        <h2>
          More Than Just
          <br />
          <span>A Cup of Coffee</span>
        </h2>

        <p>
          Brew & Bite started with a simple idea — create a place
          where people can enjoy amazing coffee, delicious food
          and great conversations.
        </p>

        <p>
          Every cup is freshly brewed and every dish is prepared
          with carefully selected ingredients. Whether you are
          meeting friends, working remotely, or simply relaxing,
          Brew & Bite is your place.
        </p>

        {/* Features */}
        <div className="about-features">

          <div className="about-feature">

            <div className="feature-icon">
              ☕
            </div>

            <h3>
              Fresh Coffee
            </h3>

            <p>
              Premium roasted beans
            </p>

          </div>

          <div className="about-feature">

            <div className="feature-icon">
              🥗
            </div>

            <h3>
              Fresh Food
            </h3>

            <p>
              Made fresh every day
            </p>

          </div>

          <div className="about-feature">

            <div className="feature-icon">
              ❤️
            </div>

            <h3>
              Good Vibes
            </h3>

            <p>
              A place to relax
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;