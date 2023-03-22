import React from 'react';
import FocusLock from 'react-focus-lock';
import { X } from 'react-feather';

function ModalForm({ handleDismiss }: { handleDismiss: () => void }) {
  return (
    <FocusLock>
      <div className="wrapper">
        <div className="backdrop" />
        <form className="modal-form">
          <label>Name</label>
          <input />
          <label>Name</label>
          <input />
          <label>Name</label>
          <input />
        </form>
      </div>
    </FocusLock>
  );
}

export default ModalForm;
