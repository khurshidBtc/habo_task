import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md mx-auto">
        <h2 className="text-xl mb-4">Login / Signup</h2>
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <AiOutlineClose size={25} />
        </button>
        <p>Your login/signup form goes here.</p>
      </div>
    </div>
  );
}

export default Modal;
