import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

export const Menu = styled.div(({ divider }) => [
  divider && tw`divide-y divide-gray-100`,
]);

Menu.propTypes = {
  divider: PropTypes.bool,
};

export const MenuItem = styled.button(() => [
  tw`w-full px-4 py-2`,
  tw`text-left text-sm text-gray-700`,
  tw`hover:bg-gray-100 hover:text-gray-900`,
]);
