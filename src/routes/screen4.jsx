import { ImageSlider } from "../Components/ImageSlider";
import { SliderData } from "../Components/SliderDataFour";

export default function Screen4() {
  return (
    <main style={{ padding: "4rem 0" }}>
      <ImageSlider slides={SliderData} />
      <div className="text">
        <body>
          <h2>Kevin McCoy</h2>
          <h3>Seattle, WA, born 1967</h3>
          <h2>Jennfier McCoy</h2>
          <h3>Sacramento, CA, born 1968</h3>

          <h2 className="title">
            <span style={{ fontFamily: "LGSMARTBOLD" }}>
              Quantum Leap 3: Dark Star
            </span>
            , 2022
          </h2>
          <p style={{
            paddingBottom: '430px'
          }}>
            Each Quantum Leap: Primordial Star slowly loses its color over the
            course of its lifespan, finally producing a Dark Star. This token is
            a “memento mori,” an animated ghost of what was once living. After
            producing this token, Quantum Leap: Primordial Star is reborn in
            full color with a new central shape and palette, replicating and
            generating new tokens autonomously.  
          </p>
          <hr></hr>
          <div className="product" style={{ display: "flex" }}>
            <img
              className="productImg"
              src={
                "https://www.lge.co.kr/kr/images/tvs/md09062827/gallery/medium06.jpg"
              }
              alt="artwork"
            />
            <div className="productText">
              <h3 className="productHeader">
                LG 65-inch OLED evo Objet Collection
              </h3>
              <p className="productSpecs">
                a9 Gen4 AI Processor <br></br>
                OLED with Self-Lit Pixels <br></br>
                Ultra HD (3,840 x 2,160) <br></br>
                80 W Speaker Output
              </p>
            </div>
          </div>
        </body>
      </div>
    </main>
  );
}
