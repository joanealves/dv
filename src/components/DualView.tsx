import CompareImage from 'react-compare-image';
import beforeImage from '../assets/antes.png';
import afterImage from '../assets/depois.png';
// import './DualView.css';


const DualView = () => {
  return (
    <div className="dual-view">
      {/* <h1>Dual View: Antes e Depois</h1> */}
      <CompareImage
          leftImageLabel="Antes"
          rightImageLabel="Depois"
          leftImage={beforeImage}
          rightImage={afterImage}
          sliderLineWidth={2}
          // sliderLineColor="#FF6347" altera a cor da bara
        />
    </div>
  );
};

export default DualView;