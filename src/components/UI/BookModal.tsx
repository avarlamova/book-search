import { FC, ReactNode, useEffect, useMemo } from "react";
import * as ReactDOM from "react-dom";
import styles from "./ModalWrapper.module.scss";

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
    <div className={styles.background} onClick={toggleModal}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>,
    containerElement
  );
};

export default ModalWrapper;
