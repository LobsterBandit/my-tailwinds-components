import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

export const Menu = styled.div(({ divider }) => [
  divider && tw`divide-y divide-gray-100 dark:divide-gray-400`,
]);

Menu.propTypes = {
  divider: PropTypes.bool,
};

export const MenuItem = styled.button(() => [
  tw`w-full px-4 py-2`,
  tw`text-left text-sm text-gray-700 dark:text-white`,
  tw`hover:bg-gray-100 dark:hover:bg-gray-600`,
  tw`hover:text-gray-900 dark:hover:text-gray-300`,
  tw`prose prose-sm`,
]);
