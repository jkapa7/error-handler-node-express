import { useState } from "react";

function ModalRegister() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <input type="checkbox" id="btn-modal" onChange={handleModalToggle} />
      <label
        htmlFor="btn-modal"
        className="bg-white p-2.5 rounded cursor-pointer"
      >
        Abrir
      </label>

      {modalOpen && (
        <div className="fixed top-1/3vh bottom-1/2vh left-20  transition-all duration-500 ease opacity-100 visible">
          <div className="bg-white shadow-lg transition-all duration-500 ease relative transform -translate-y-0">
            <header className="flex p-5 justify-center bg-EAgreen text-white">
              ¡Bienvenido!
            </header>

            <div className="p-10 flex justify-center">
              <p>
                Tu cuenta se ha creado correctamente. Revisa tu email y sigue
                las instrucciones para activarla.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalRegister;
