import { useState } from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import { Button } from "./Button";
import { ChevronDown } from "./ChevronDown";
import { DropdownMenu } from "./DropdownMenu";
import { MenuItem } from "./Menu";

const StyledDropdownButton = styled(Button)`
  ${({ open }) => open && tw`bg-gray-100 dark:bg-gray-600`}
`;
const DropdownButtonIcon = styled(ChevronDown)`
  ${tw`h-4 w-4 fill-current`}
  ${({ open }) => open && tw`transform rotate-180`}
`;
export function DropdownButton(props) {
  const { title, onClick } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <StyledDropdownButton
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        {...props}
        open={isOpen}
        onClick={(e) => {
          onClick && onClick(e);
          setIsOpen((open) => !open);
        }}
      >
        {title && title}
        <DropdownButtonIcon open={isOpen} />
      </StyledDropdownButton>
      <DropdownMenu
        containerId="use-tw-portal"
        open={isOpen}
        options={["Account Settings", "Support", "License"]}
        divider
      >
        <MenuItem role="menuItem" type="button">
          Sign out
        </MenuItem>
      </DropdownMenu>
    </>
  );
}

DropdownButton.propTypes = {
  title: PropTypes.string,
};
