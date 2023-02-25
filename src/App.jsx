import ProgressiveImage from "./components/ProgressiveImage"
import image from "./assets/images/large-santa-maria.jpg"
import placeholderSrc from "./assets/images/tiny-santa-maria.jpg"


function App() {

  return (
    <div className="App">
      <h1>Progressive image loading:</h1>
      <ProgressiveImage 
        src={image}
        placeholderSrc={placeholderSrc}
        width="700"
        height="465"
      />
    </div>
  )
}

export default App
