import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import { Button } from "./Button";
import { ChevronDown } from "./ChevronDown";
import { DropdownMenu } from "./DropdownMenu";
import { MenuItem } from "./Menu";
import { Portal } from "./Portal";

const StyledDropdownButton = styled(Button)`
  ${({ open }) => open && tw`bg-gray-100`}
`;
const DropdownButtonIcon = styled(ChevronDown)`
  ${tw`h-4 w-4 fill-current`}
  ${({ open }) => open && tw`transform rotate-180`}
`;
export function DropdownButton(props) {
  const { title, onClick } = props;
  return (
    <>
      <StyledDropdownButton
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        {...props}
        open={true}
        onClick={(e) => {
          onClick && onClick(e);
        }}
      >
        {title && title}
        <DropdownButtonIcon open={true} />
      </StyledDropdownButton>
      <Portal containerId="use-tw-portal">
        <DropdownMenu
          options={["Account Settings", "Support", "License"]}
          divider
        >
          <MenuItem role="menuItem" type="button">
            Sign out
          </MenuItem>
        </DropdownMenu>
      </Portal>
    </>
  );
}

DropdownButton.propTypes = {
  title: PropTypes.string,
};
