import img11 from "../../src/10.jpg";
import img22 from "../../src/20.jpg";
import img33 from "../../src/30.jpg";

const Slider = () => {
  return (
    <>
      <div className="slideCon">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active mainpostionBox">
              <img src={img11} className="d-block w-100" alt="img1" />
              <div className="flowBox">
                <div className="row deepBox">
                  <div className="col-md-8  smallImgLeftCon">
                    <h2>John Wick: Chapter 4</h2>
                    <p>
                      John Wick (Keanu Reeves) uncovers a path to defeating The
                      High Table. But before he can earn his freedom, Wick must
                      face off against a new enemy with powerful alliances
                      across the globe and forces that turn old friends into
                      foes.
                    </p>
                    <div>
                      <button>Watch trialer</button>
                      <button className="btnReverse">Watch Now</button>
                    </div>
                  </div>
                  <div className="col-md-4 smallImgCon  one"></div>
                </div>
              </div>
            </div>
            <div className="carousel-item mainpostionBox">
              <img src={img22} className="d-block w-100" alt="img2" />
              <div className="flowBox">
                <div className="row deepBox">
                  <div className="col-md-8 smallImgLeftCon">
                    <h2>The Super Mario Bros</h2>
                    <p>
                      The movie tells the story of two Brooklyn plumbers who are
                      brothers and best friends: Mario, the brave one with the
                      "let's-a go" attitude, and the perpetually anxious Luigi,
                      who would prefer to go nowhere. We open with the Super
                      Mario Brothers reckoning with their struggling plumbing
                      business, and wind up in a whirlwind adventure through
                      Mushroom Kingdom.
                    </p>
                    <div>
                      <button>Watch trialer</button>
                      <button className="btnReverse">Watch Now</button>
                    </div>
                  </div>{" "}
                  <div className="col-md-4  smallImgCon two"></div>
                </div>
              </div>
            </div>
            <div className="carousel-item mainpostionBox">
              <img src={img33} className="d-block w-100" alt="img3" />
              <div className="flowBox ">
                <div className="row deepBox">
                  <div className="col-md-8 smallImgLeftCon">
                    <h2>Guardians of the Galaxy Vol. 3</h2>
                    <p>
                      After saving Xandar from Ronan's wrath, the Guardians are
                      now recognized as heroes. Now the team must help their
                      leader, Star Lord, uncover the truth behind his true
                      heritage. Along the way, old foes turn to allies and
                      betrayal is blooming. And the Guardians find they are up
                      against a devastating new menace who is out to rule the
                      galax
                    </p>
                    <div>
                      <button>Watch trialer</button>
                      <button className="btnReverse">Watch Now</button>
                    </div>
                  </div>
                  <div className="col-md-4  smallImgCon three"></div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
