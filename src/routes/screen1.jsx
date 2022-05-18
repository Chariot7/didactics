import { ImageSlider } from "../Components/ImageSlider";
import { SliderData } from "../Components/SliderDataFour";

export default function Screen1() {
  return (
    <main style={{ padding: "4rem 0" }}>
      <ImageSlider slides={SliderData} />
      <div className="text">
        <body>
        <div style={{
            paddingTop: '20px'
          }}>
          <h2>Jennifer and Kevin McCoy</h2>
          </div>

          <span className="title">
              Quantum Leap 3: Dark Star, 2022
          </span>
          <p style={{
            paddingBottom: '625px'
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
                "https://www.lg.com/global/images/business/information-display/oled-signage/md07528807/gallery/medium01.jpg"
              }
              alt="artwork"
            />
            <div style={{
              paddingTop: '23px',
              paddingLeft: '17px'
            }}>
              <h3 className="productHeader">
              LG Transparent OLED
              </h3>
              <p className="productSpecs">
                55 inch, 1920x1080, FHD <br></br>
                Anti-Reflection treatment on 4mm safety glass <br></br>
                Transparency(Typ.) : 38% <br></br>
                Bezel : 7.9mm (T/B/L), 121.7 mm (B) <br></br>
                Interface : HDMI/DP/USB(2)/RS232C/RJ45/AUDIO/IR
              </p>
            </div>
          </div>
        </body>
      </div>
    </main>
  );
}
