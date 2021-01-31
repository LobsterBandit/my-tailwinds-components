import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

export function getContainer(containerId) {
  return document.getElementById(containerId);
}

export const Portal = ({ containerId, children }) => {
  const [root, setRoot] = useState(null);
  const rootRef = useRef(null);

  useEffect(() => {
    setRoot(getContainer(containerId) || document.body);
  }, [containerId]);

  useEffect(() => {
    const curRoot = rootRef;
    if (root) {
      curRoot.current = root;
      return () => {
        curRoot.current = null;
      };
    }
  }, [root, rootRef]);

  return root ? createPortal(children, root) : root;
};

Portal.propTypes = {
  containerId: PropTypes.string,
  children: PropTypes.element,
};
