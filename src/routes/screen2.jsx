import { ImageSlider } from "../Components/ImageSlider";
import { SliderData } from "../Components/SliderDataTwo";

export default function Screen2() {
  return (
    <main style={{ padding: "4rem 0" }}>
      <ImageSlider slides={SliderData} />
      <div className="text">
        <body>
        <div style={{
            paddingTop: '15px'
          }}>
          <h2>Kevin McCoy</h2>
          </div>

          <span className="title">
            Quantum, 2014
          </span>
          <p>
            This code-driven work – the first-ever artwork to be tokenized on a
            blockchain – narrates an ongoing, abstract cycle of birth, death,
            and rebirth through color, line, and movement. Following its sale
            at “Natively Digital: A Curated NFT Sale” at Sotheby’s in 2021, the
            work was on view at The Hermitage Museum and at The Decentral Art
            Pavilion during the 59th Venice Biennale.{" "}
          </p>
          <p>
            “In 2014, I had an idea to use blockchain technology to create
            indelible provenance and ownership of digital images of this kind.
            <span className="italic">Quantum</span> was the first ever to be recorded in this way.” Kevin McCoy,
            2021{" "}
          </p>
          <p style={{
            paddingBottom: '190px'
          }}>
            “How to picture the moment of creation. A spark, a seed, a particle.
            We have narratives that describe it as an interval of days or as a
            cryptic alphabet that divides the earth from the firmament. Kevin
            McCoy’s <span className="italic">Quantum</span> takes its place alongside other original icons
            replacing their aura and gilding with a pulsating luminous
            heartbeat. To call this a mandala would not be an understatement,
            since what is a mandala if not an allegory for a universe, its
            revolutions, breath and winking into being out of nothingness?” -
            David Geers, art critic, 2021{" "}
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
                LG G2 65-inch OLED evo Gallery Edition TV
              </h3>
              <p className="productSpecs">
                a9 Gen5 AI Processor 4k<br></br>
                Home Cinema (Dolby Vision / Dolby Atmos® / Filmmaker Mode){" "}
                <br></br>
                Ultimate Gaming (G-SYNC compatible, FreeSync Premium, VRR. 4K @
                120Hz) <br></br>
                Brightness Booster Max
              </p>
            </div>
          </div>
        </body>
      </div>
    </main>
  );
}
