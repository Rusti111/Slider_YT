import ImageSlider from "./ImageSlider";

const App = () => {
  const slides =[ 
    {url: "http://localhost:3000/1_img.jpg", title: "One"},
    {url: "http://localhost:3000/2_img.jpg", title: "Two"},
    {url: "http://localhost:3000/3_img.jpg", title: "Red"},
    {url: "http://localhost:3000/4_img.jpg", title: "City"},
  ];
const containerStyles = {
  width: "1400px",
  height: "700px",
  margin: "0 auto",  
};

  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides}/>
      </div>
    </div>
  );
};

export default App;