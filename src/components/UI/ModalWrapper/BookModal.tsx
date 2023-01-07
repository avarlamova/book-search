import { FC, ReactNode, useEffect, useMemo } from "react";
import * as ReactDOM from "react-dom";
import styles from "./BookModal.module.scss";
import { ReactComponent as CloseIcon } from "./CloseIcon.svg";

interface ModalWrapperProps {
  children: ReactNode;
  toggleModal: any;
}

const ModalWrapper: FC<ModalWrapperProps> = ({ children, toggleModal }) => {
  const containerElement: HTMLElement | null = useMemo(
    () => document.getElementById("modal-container"),
    []
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, []);

  if (!containerElement) {
    return null;
  }

  return ReactDOM.createPortal(
    <div onClick={toggleModal} className={styles.background}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <CloseIcon onClick={toggleModal} className={styles.closeIcon} />
        {children}
      </div>
    </div>,
    containerElement
  );
};

export default ModalWrapper;
