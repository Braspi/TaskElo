import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Addons from "./addons.component";
import Tags from "./tags.component";

export default function ModalTask() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="flex justify-between">
        <Addons />
        <Button variant="primary" onClick={handleShow}>
          Otwórz
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Zadanie #1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-4 flex flex-col gap-2">
            <Tags />
            <p>Zadanie numer jeden polegajace na jedym i drugim ktory robi cos t</p>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
