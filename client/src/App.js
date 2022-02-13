import { Button, Modal } from "react-bootstrap";
import "./App.css";
import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import { useState } from "react";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.imgName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.imgName}</h4>
        <p>{props.imgDesc}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [info, setInfo] = useState(
    {
      imageName: "",
      imageDescription: "",
    }
    // {
    //   imageName: "Cat 2",
    //   imageDescription: "This second cat is adorable",
    // },
  );

  const handleClick = (e) => {
    setModalShow(true);
    if (e.target.name === "cat1") {
      setInfo({
        imageName: "This is Cat 1",
        imageDescription: "This first cat is adorable",
      });
    }
    if (e.target.name === "cat2") {
      setInfo({
        imageName: "This is Cat 2",
        imageDescription: "This second cat is adorable",
      });
    }
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "20%",
        margin: "1rem auto",
      }}
    >
      <img src={img1} name="cat1" onClick={handleClick}></img>
      <img src={img2} name="cat2" onClick={handleClick}></img>
      <Button variant="primary">Click the image</Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        imgName={info.imageName}
        imgDesc={info.imageDescription}
      />
    </div>
  );
}

export default App;
