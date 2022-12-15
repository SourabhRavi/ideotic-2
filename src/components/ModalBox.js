import { useState, useEffect } from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import bg from "../img/modal-bg.png";

function ModalBox({ isOpen, goTo, setData, initialData, setIsSubmit }) {
  const [open, setOpen] = useState(isOpen);

  useEffect(
    () => {
      if (open === "") {
        setData(initialData);
        setIsSubmit(false);
        goTo(0);
      }
    },
    // eslint-disable-next-line
    [open]
  );

  return (
    <>
      <Modal
        open={!!open}
        onClose={() => setOpen("")}
        sx={{ backgroundColor: "#75757560", backdropFilter: "blur(5px)" }}
      >
        <ModalDialog
          aria-labelledby="layout-modal-title"
          aria-describedby="layout-modal-description"
          layout={open || undefined}
          variant="solid"
          style={{
            backgroundColor: "#fff",
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPositionY: "center",
            padding: "100px",
            borderRadius: "30px",
          }}
        >
          <ModalClose sx={{ right: "20px", top: "20px" }} />
          <p className="form-heading">
            <b>Thank You!</b>
          </p>
          <p className="description modal">
            Thank you for submitting the form. <br />
            One of our team members will be in touch shortly
          </p>
        </ModalDialog>
      </Modal>
    </>
  );
}

export default ModalBox;
