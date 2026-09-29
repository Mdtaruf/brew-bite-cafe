function Gallery() {
  return (
    <section id="gallery" className="gallery-section">

      <div className="gallery-heading">

        <span className="section-label">
          OUR SPACE
        </span>

        <h2>
          Come In.
          <br />
          <span>Stay Awhile.</span>
        </h2>

        <p>
          A cozy place for coffee, conversations
          and good memories.
        </p>

      </div>


      <div className="gallery-grid">

        <div className="gallery-item gallery-large">
          <span className="gallery-icon">
            ☕
          </span>

          <span className="gallery-title">
            Fresh Coffee
          </span>
        </div>


        <div className="gallery-item">
          <span className="gallery-icon">
            🍕
          </span>

          <span className="gallery-title">
            Fresh Food
          </span>
        </div>


        <div className="gallery-item">
          <span className="gallery-icon">
            🍰
          </span>

          <span className="gallery-title">
            Delicious Desserts
          </span>
        </div>


        <div className="gallery-item">
          <span className="gallery-icon">
            🪴
          </span>

          <span className="gallery-title">
            Relaxing Space
          </span>
        </div>


        <div className="gallery-item gallery-large">
          <span className="gallery-icon">
            ❤️
          </span>

          <span className="gallery-title">
            Good Times
          </span>
        </div>

      </div>

    </section>
  );
}

export default Gallery;