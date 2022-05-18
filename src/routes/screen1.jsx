import { ImageSlider } from "../Components/ImageSlider";
import { SliderData } from "../Components/SliderDataOne";

export default function Screen1() {
  return (
    <main style={{ padding: "4rem 0" }}>
      <ImageSlider slides={SliderData} />
      <div className="text">
        <body>
          <div style={{
            paddingTop: '10px'
          }}>
          <h2>Jennifer and Kevin McCoy</h2>
          </div>

          <span className="title">
            <span style={{ fontFamily: "LGSMARTBOLD" }}>
              Quantum Leap, Primordial Star 3
            </span>
            , 2022
          </span>
          <p>
            Quantum Leap: Primordial Star 3 is a new NFT from the series Quantum
            Leap, inspired by Kevin McCoy’s 2014 work Quantum, the first artwork
            ever to be tokenized on a blockchain. The word “quantum” alludes to
            the attempt in theoretical physics to develop a theory of the
            universe and to answer questions about the first phases of the
            universe. This generative, iterative process is emulated in the
            structure of Quantum Leap, which evolves to become more complex,
            changing states and spinning off new versions of itself over time. 
          </p>
          <p>
            In Quantum Leap: Primordial Star 3, several levels of code-based
            systems interact. Visually, each token from Quantum Leap produces a
            mandala that changes and evolves, inspired by the life cycle of the
            stars, which shift colors as they age. These “stars” also change
            form as they become more circular as the code-generated images
            mature, evolving from three to twenty sides over the span of their
            lifetimes. 
          </p>
          <p style={{
            paddingBottom: '80px'
          }}>
            The code-execution environment that drives the animation exists both
            on a dedicated website, and eventually, as a downloadable standalone
            application. This website allows collectors who have Quantum Leap
            tokens to visit the site, connect their wallets (or download the
            application), and see the artwork that corresponds to their token.
            The software will read the specific tokens and derive operational
            parameters from on-chain data belonging to each token.
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
            <div className="productText">
              <h3 className="productHeader">LG Transparent OLED</h3>
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
