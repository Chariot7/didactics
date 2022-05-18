import { ImageSlider } from "../Components/ImageSlider";
import { SliderData } from "../Components/SliderDataThree";

export default function Screen3() {
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
              Quantum Entanglement, 2022
          </span>
          <p>“the NFT that draws”</p>
          <p>
          <span className="italic">Quantum Entanglement, 2022</span>, is a hybrid drawing/NFT project. 
In this series, a correspondence is made between ‘drawing’ as performative act and ‘the drawing’ as physical document of that performance.
          </p>
          <p>
          The drawings of <span className="italic">Quantum Entanglement</span> are produced in the McCoy studio with the aid of an artists built, software assisted drawing machine. The machine, though computer driven, uses traditional artists materials.
          </p>
          <p style={{
            paddingBottom: '220px'
          }}>
            Each drawing has one or more correspondent NFTs that use code to ‘perform’ the drawing substituting pixels for ink.  Anyone wishing to acquire a work in the series must choose between the NFT and the physical artwork.  The acquisition of one insures the demise of the other.
          </p>
          <hr></hr>
          <div className="product" style={{ display: "flex" }}>
            <img
              className="productImg"
              src={
                "https://i.imgur.com/pjPzZfM.png"
              }
              alt="artwork"
            />
            <div style={{
              paddingTop: '26px'
            }}>
              <h3 className="productHeader">
                LG G2 77-inch OLED evo Gallery Edition TV w/AI ThinQ
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
