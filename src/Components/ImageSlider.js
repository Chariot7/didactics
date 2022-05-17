import React, {useState} from 'react'


export const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => (
        setCurrent(current === 0 ? length - 1 : current - 1)
    )

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

  return (
    <section classnam="slider">
      {slides.map((slide, index) => {
        console.log(slide, index, current, slides.length);
        return (
          <div
            style={{ textAlign: "center"}}
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              
              <img
                src={slide.image}
                alt="artwork"
                className="image"
                style={{ width: "65%" }}
              />
            )}
          </div>
        );
      })}
      <div>
        <svg
          style={{
            height: 30,
            position: "absolute",
            right: "120px",
            top: "356px",
          }}
          onClick={nextSlide}
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.88 57.78"
        >
          <g id="Group_2833" data-name="Group 2833">
            <line
              id="Line_632"
              data-name="Line 632"
              x1="28.88"
              y1="28.77"
              x2="4.11"
              y2="4"
              fill="none"
              stroke="#707071"
              stroke-linecap="round"
              stroke-width="8"
            />
            <line
              id="Line_633"
              data-name="Line 633"
              x1="28.77"
              y1="29.01"
              x2="4"
              y2="53.78"
              fill="none"
              stroke="#707071"
              stroke-linecap="round"
              stroke-width="8"
            />
          </g>
        </svg>
        <svg
          style={{
            height: 30,
            position: "absolute",
            left: "120px",
            top: "356px",
          }}
          onClick={prevSlide}
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.88 57.78"
        >
          <g id="Group_2833" data-name="Group 2833">
            <line
              id="Line_632"
              data-name="Line 632"
              x1="4"
              y1="29.01"
              x2="28.77"
              y2="53.78"
              fill="none"
              stroke="#707071"
              stroke-linecap="round"
              stroke-width="8"
            />
            <line
              id="Line_633"
              data-name="Line 633"
              x1="4.11"
              y1="28.77"
              x2="28.88"
              y2="4"
              fill="none"
              stroke="#707071"
              stroke-linecap="round"
              stroke-width="8"
            />
          </g>
        </svg>
        <div className="dotholder">
          <span
            className="dot"
            style={{ backgroundColor: 0 === current ? "black" : "#bbb" }}
          ></span>
          <span
            className="dot"
            style={{ backgroundColor: 1 === current ? "black" : "#bbb" }}
          ></span>
          <span
            className="dot"
            style={{ backgroundColor: 2 === current ? "black" : "#bbb" }}
          ></span>
          <span
            className="dot"
            style={{ backgroundColor: 3 === current ? "black" : "#bbb" }}
          ></span>
          <span
            className="dot"
            style={{ backgroundColor: 4 === current ? "black" : "#bbb" }}
          ></span>
        </div>
      </div>
    </section>
  );
};
