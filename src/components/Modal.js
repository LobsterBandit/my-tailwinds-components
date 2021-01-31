import tw, { css, styled } from "twin.macro";
import { Portal } from "./Portal";

const DefaultBackdrop = styled.div(({ invisible }) => [
  css`
    z-index: -1;
  `,
  tw`bg-white dark:bg-gray-700`,
  invisible && tw`bg-transparent`,
]);

export const Modal = ({
  BackdropComponent = DefaultBackdrop,
  children,
  containerId,
  onBackdropClick,
  onClose,
  onKeyDown,
  open,
  ...props
}) => {
  const handleBackdropClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(e);
    }

    if (onClose) {
      onClose(e, "backdropClick");
    }
  };

  const handleKeyDown = (e) => {
    if (onKeyDown) {
      onKeyDown(e);
    }

    if (e.key !== "Escape") {
      return;
    }

    e.stopPropagation();
    if (onClose) {
      onClose(e, "escapeKeyDown");
    }
  };

  if (!open) {
    return null;
  }

  return (
    <Portal containerId={containerId}>
      <BackdropComponent
        open={open}
        onClick={handleBackdropClick}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {children}
      </BackdropComponent>
    </Portal>
  );
};
