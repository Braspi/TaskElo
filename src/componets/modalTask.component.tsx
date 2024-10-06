import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Task, TasksModule, TextModule } from '../../types';
import AttachmentAddon from './addons/attachement.addon';
import DescriptionAddon from './addons/description.addon';
import LocationAddon from './addons/location.addon';
import SubpointsAddon from './addons/subpoints.addon';
import TimeAddon from './addons/time.addon';

export default function ModalTask(task: Task) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-2 opacity-80">
          {task.duedate ? <TimeAddon date={task.duedate} /> : ""}
          {task.modules.map(module => {
            if (module.type === "TextModule") {
              return <DescriptionAddon />;
            } else if (module.type === "TasksModule") {
              return <SubpointsAddon module={module.value as TasksModule} />;
            } else if (module.type === "AttachmentModule") {
              return <AttachmentAddon />;
            } else if (module.type === "LocalizationModule") {
              return <LocationAddon />;
            }

            return null;
          })}
        </div>
        <Button variant="primary" onClick={handleShow}>
          Otwórz
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{task.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-4 flex flex-col gap-2">
            {task.modules.map(module => {
              if (module.type === "TextModule") {
                return <p>{(module.value as TextModule).text}</p>;
              } else if (module.type === "TasksModule") {
              } else if (module.type === "AttachmentModule") {
              } else if (module.type === "LocalizationModule") {
              }

              return null;
            })}
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
