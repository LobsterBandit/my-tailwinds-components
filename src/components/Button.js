import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

export const Button = styled.div(({ fullWidth }) => [
  tw`inline-flex justify-center items-center`,
  fullWidth && tw`w-full`,
  tw`shadow-sm px-4 py-2`,
  tw`rounded-md border border-gray-300 dark:border-gray-600`,
  tw`bg-white dark:bg-gray-800`,
  tw`text-sm font-medium`,
  tw`text-gray-700 dark:text-white`,
  tw`hover:text-gray-900 dark:hover:text-gray-300`,
  tw`hover:bg-gray-100 dark:hover:bg-gray-700`,
  tw`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500`,
  tw`cursor-pointer select-none`,
]);

Button.propTypes = {
  fullWidth: PropTypes.bool,
};
