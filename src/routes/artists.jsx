import { ImageSlider } from "../Components/ImageSlider";
import { SliderData } from "../Components/SliderDataThree";

export default function Artists() {
  return (
    <main style={{ padding: "4rem 0" }}>
      <div className="text">
        <body>
          <img
            src="https://i.imgur.com/KbmtC7d.png"
            className="image"
            style={{ width: "100%", display: "block" }}
          ></img>
          <h2 style={{ paddingTop: "20px" }}>Kevin McCoy</h2>
          <h3>Seattle, WA, born 1967</h3>
          <h2>Jennifer McCoy</h2>
          <h3 className="artistHeader">Sacramento, CA, born 1968</h3>

          <p>
            In 2014, artist Kevin McCoy minted the world’s first digital art
            NFT. This token, Quantum, was sold at Sothebys in June 2021 in a
            million dollar+ sale. He also co-founded the blockchain company
            Monegraph.
          </p>
          <p>Quantum Leap in the New York Times</p>
          <p>
            Jennifer and Kevin McCoy are New York-based digital media artists
            whose works extends from film and video to installation and
            generative software. Recent work includes generative software that
            uses blockchain technology to create long-term ecosystems for images
            to live, die and evolve. The McCoys’ work has been widely exhibited
            in the US and around the world - including exhibitions at the
            Pompidou Center in Paris, the Museum of Modern Art in New York, The
            British Film Institute Southbank in London, The Hermitage in St.
            Petersburg, The Sundance Film Festival and more.
          </p>
          <p>
            Their work is in the permanent collections of the Museum of Modern
            Art, The Metropolitan Museum of Art, the Milwaukee Art Museum, the
            Whitney Museum of American Art, and the Museum of Fine Arts,
            Houston. They received a Creative Capital award in 2003 and a
            Guggenheim Fellowship in 2011. Their work is represented by
            Postmasters Gallery in New York.
          </p>
        </body>
      </div>
    </main>
  );
}
