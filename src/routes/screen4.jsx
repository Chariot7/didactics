import { ImageSlider } from '../Components/ImageSlider';
import { SliderData } from '../Components/SliderDataFour';


export default function Screen1() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <ImageSlider slides={SliderData}/>
      </main>
    );
  }