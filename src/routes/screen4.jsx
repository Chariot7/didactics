import { ImageSlider } from "../Components/ImageSlider";
import { SliderData } from "../Components/SliderDataOne";

export default function Screen4() {
  return (
    <main style={{ padding: "4rem 0" }}>
      <ImageSlider slides={SliderData} />
      <div className="text">
        <body>
          <div style={{
            paddingTop: '15px'
          }}>
          <h2>Jennifer and Kevin McCoy</h2>
          </div>

          <span className="title">
              Quantum Leap: Primordial Star 3, 2022
          </span>
          <p>
            <span className="italic">Quantum Leap: Primordial Star 3</span> is a new NFT from the series <span className="italic">Quantum
            Leap</span>, inspired by Kevin McCoy’s 2014 work <span className="italic">Quantum</span>, the first artwork
            ever to be tokenized on a blockchain. The word “quantum” alludes to
            the attempt in theoretical physics to develop a theory of the
            universe and to answer questions about the first phases of the
            universe. This generative, iterative process is emulated in the
            structure of <span className="italic">Quantum Leap</span>, which evolves to become more complex,
            changing states and spinning off new versions of itself over time. 
          </p>
          <p>
            In <span className="italic">Quantum Leap: Primordial Star 3</span>, several levels of code-based
            systems interact. Visually, each token from <span className="italic">Quantum Leap</span> produces a
            mandala that changes and evolves, inspired by the life cycle of the
            stars, which shift colors as they age. These “stars” also change
            form as they become more circular as the code-generated images
            mature, evolving from three to twenty sides over the span of their
            lifetimes. 
          </p>
          <p style={{
            paddingBottom: '54px'
          }}>
            The code-execution environment that drives the animation exists both
            on a dedicated website, and eventually, as a downloadable standalone
            application. This website allows collectors who have <span className="italic">Quantum Leap </span> 
            tokens to visit the site, connect their wallets (or download the
            application), and see the artwork that corresponds to their token.
            The software will read the specific tokens and derive operational
            parameters from on-chain data belonging to each token.
          </p>
          <hr></hr>
          <div className="product" style={{ display: "flex" }}>
          <img
              style={{
                width: '39%'
              }}
              src={
                "https://i.imgur.com/pjPzZfM.png"
              }
              alt="artwork"
            />
            <div className="productText">
              <h3 className="productHeader">
              LG 65-inch OLED evo Objet Collection</h3>
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
