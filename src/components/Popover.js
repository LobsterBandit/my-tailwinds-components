import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import { Modal } from "./Modal";

export const PopoverBackdrop = styled.div(() => [
  tw`fixed right-2 mt-2`,
  tw`rounded-md shadow-lg`,
  tw`bg-white dark:bg-gray-700`,
  tw`ring-1 ring-black dark:ring-gray-500 ring-opacity-5`,
]);

export const Popover = ({ anchorEl, children, containerId, open }) => {
  return (
    <Modal
      BackdropComponent={PopoverBackdrop}
      containerId={containerId}
      open={open}
    >
      {children}
    </Modal>
  );
};

Popover.propTypes = {
  anchorEl: PropTypes.string,
  children: PropTypes.node,
  container: PropTypes.element,
  open: PropTypes.bool.isRequired,
};
