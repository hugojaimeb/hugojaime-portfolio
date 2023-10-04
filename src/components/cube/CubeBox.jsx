import "./CubeBox.css";

function CubeBox() {
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.scrollY / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  return (
    <div class="landing-container">
      <div class="container">
        <div class="progress"></div>

        <div class="cube-wrap">
          <div class="cube">
            <div class="side top">
              <h1>Contact Me!</h1>
            </div>
            <div class="side bottom">
              {" "}
              <h1 className="flip-text">My Technologies</h1>
            </div>
            <div class="side front">
              {" "}
              <h1>About Me</h1>
            </div>
            <div class="side back">
              {" "}
              <h1 className="flip-text">Projects</h1>{" "}
            </div>
            <div class="side left"></div>
            <div class="side right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CubeBox;
