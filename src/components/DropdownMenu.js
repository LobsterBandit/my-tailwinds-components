import PropTypes from "prop-types";
import { Menu, MenuItem } from "./Menu";
import { Popover } from "./Popover";

export const DropdownMenu = ({
  divider,
  open,
  options,
  children,
  containerId,
  ...props
}) => (
  <Popover containerId={containerId} open={open}>
    <Menu
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
      divider={divider}
      {...props}
    >
      {options && (
        <div>
          {options.map((option) => (
            <MenuItem key={option} role="menuItem" type="button">
              {option}
            </MenuItem>
          ))}
        </div>
      )}
      {children}
    </Menu>
  </Popover>
);

DropdownMenu.propTypes = {
  dividier: PropTypes.bool,
  open: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.element,
};
