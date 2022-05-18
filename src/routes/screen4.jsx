import { ImageSlider } from "../Components/ImageSlider";
import { SliderData } from "../Components/SliderDataFour";

export default function Screen4() {
  return (
    <main style={{ padding: "4rem 0" }}>
      <ImageSlider slides={SliderData} />
      <div className="text">
        <body>
        <div style={{
            paddingTop: '18px'
          }}>
          <h2>Jennifer and Kevin McCoy</h2>
          </div>

          <span className="title">
              Quantum Leap 3: Dark Star, 2022
          </span>
          <p style={{
            paddingBottom: '490px'
          }}>
            Each <span className="italic">Quantum Leap: Primordial Star</span> slowly loses its color over the
            course of its lifespan, finally producing a Dark Star. This token is
            a “memento mori,” an animated ghost of what was once living. After
            producing this token, <span className="italic">Quantum Leap: Primordial Star</span> is reborn in
            full color with a new central shape and palette, replicating and
            generating new tokens autonomously.  
          </p>
          <hr></hr>
          <div className="product" style={{ display: "flex" }}>
            <img
              className="productImg"
              src={
                "https://i.imgur.com/xc6b1yb.png"
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
