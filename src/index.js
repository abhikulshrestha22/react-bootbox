import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';

// export class BootBox extends React.Component {
// }

function BootBox(props) {
  return (
    <Modal className="bootbox-modal" show={props.show} onHide={props.onClose}>
      <Modal.Body>
        <h5 className="bootBox-message">{props.message ? props.message : 'Are you sure you want to proceed' }</h5>
      </Modal.Body>
      <Modal.Footer className="bootbox-modal-footer">
        <Button className="btn btn-success" onClick={() => props.onYesClick()}>
            Yes
        </Button>
        <Button className="btn btn-danger" onClick={() => props.onNoClick()}>
            No
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

BootBox.propTypes = {
  show: PropTypes.bool.isRequired,
  onYesClick: PropTypes.func.isRequired,
  onNoClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string,
};

export default BootBox;
