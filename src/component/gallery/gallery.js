import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import $ from "jquery";

import { useState, useEffect } from "react";

function Gallery() {
  const [photos, setPhotos] = useState([]);

  const [isLoad, setLoad] = useState(false);

  //Modal Settings
  const [show, setShow] = useState(false);

  const [newsrc, setSrc] = useState("");
  const [caption, setCaption] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showFullPicture = (src, cap) => {
    setSrc(src);
    setCaption(cap);
    // console.log(newsrc);
    handleShow();
  };
  // const debug = () => {
  //   console.log("Clicked");
  // };

  useEffect(() => {
    $.get(
      "https://sunshineshownodered.herokuapp.com/photoclub/gallery/get/",
      (res) => {
        setPhotos(res);
        setLoad(true);
      }
    );
  });

  return (
    <div>
      <div id="gallery_desc" style={{ textAlign: "center", marginTop: "10px" }}>
        <h2>Gallery</h2>
        <h4>This is our archive</h4>
        <p>Take a look at some of our photos taken by our club members.</p>
      </div>
      {!isLoad && (
        <div id="loading" style={{ textAlign: "center", marginBottom: "50px" }}>
          <img
            alt="loading_img"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
          />
          <h1>Loading...</h1>
        </div>
      )}
      <Row className="align-items-center">
        {isLoad &&
          photos.map((photo) => (
            <Col sm={12} md={6} lg={4} style={{ padding: "5px" }}>
              <div onClick={() => showFullPicture(photo.src, photo.captions)}>
                <Card>
                  <Card.Img
                    style={{ objectFit: "cover", height: "300px" }}
                    variant="top"
                    src={photo.src}
                  />
                  <Card.Body style={{ textAlign: "center" }}>
                    {photo.captions}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
      </Row>
      {/* Modal Stuff */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Viewing Picture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img alt="Full_Picture" src={newsrc} style={{ width: "100%" }} />
          <p style={{ textAlign: "center", padding: "10px" }}>{caption}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Gallery;
