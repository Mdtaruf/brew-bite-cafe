const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Regular Customer",
    review:
      "Amazing coffee and such a beautiful atmosphere. This has become my favorite cafe in the city!",
  },

  {
    id: 2,
    name: "Priya Mehta",
    role: "Food Lover",
    review:
      "The food was fresh and delicious. Staff was extremely friendly. Highly recommended!",
  },

  {
    id: 3,
    name: "Arjun Verma",
    role: "Coffee Lover",
    review:
      "Perfect place to work, meet friends or simply enjoy a good cup of coffee.",
  },
];

function Reviews() {
  return (
    <section className="reviews-section">

      {/* Heading */}

      <div className="reviews-heading">

        <span className="section-label">
          CUSTOMER LOVE
        </span>

        <h2>
          What Our Customers
          <br />
          <span>Say About Us</span>
        </h2>

        <p>
          Don't just take our word for it.
          Here's what our customers say.
        </p>

      </div>


      {/* Reviews */}

      <div className="reviews-grid">

        {reviews.map((review) => (

          <div
            className="review-card"
            key={review.id}
          >

            {/* Stars */}

            <div className="stars">
              ★★★★★
            </div>


            {/* Review */}

            <p className="review-text">
              "{review.review}"
            </p>


            {/* Customer */}

            <div className="review-customer">

              <div className="customer-avatar">
                {review.name.charAt(0)}
              </div>

              <div>

                <strong>
                  {review.name}
                </strong>

                <span>
                  {review.role}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Reviews;