import { ImageSlider } from "../Components/ImageSlider";
import { SliderData } from "../Components/SliderDataThree";

export default function Screen3() {
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
              Quantum Entanglement
            </span>
            , 2022
          </h2>
          <p>“the NFT that draws”</p>
          <p>
            Quantum Entanglement is a new hybrid work consisted of drawing and
            NFT from the McCoy Studio. In this series, “drawing” as performative
            act and “the drawing” as physical document of that performance are
            in dialouge.{" "}
          </p>
          <p>
            Both the physical drawings and the digital animations of Quantum
            Entanglement are produced in the McCoy studio with the aid of a
            software and a robotic drawing machine that are designed and
            fabricated by the artists. Though computer-driven, the machine uses
            conventional materials such as ink and paper to physically create
            the drawings.
          </p>
          <p style={{
            paddingBottom: '190px'
          }}>
            Each new drawing has one or more corresponding NFTs that use code to
            “perform” the drawing, either as pixels or ink. Anyone wishing to
            acquire a work in the series must choose between the NFT and the
            physical artwork. The acquisition of one ensures the demise of the
            other.
          </p>
          <hr></hr>
          <div className="product" style={{ display: "flex" }}>
            <img
              className="productImg"
              src={
                "https://www.lge.co.kr/kr/images/tvs/md09156845/gallery/medium01.jpg"
              }
              alt="artwork"
            />
            <div className="productText">
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
