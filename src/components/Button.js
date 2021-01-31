import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

export const Button = styled.div(({ fullWidth }) => [
  tw`inline-flex justify-center items-center`,
  fullWidth && tw`w-full`,
  tw`rounded-md border border-gray-300 shadow-sm px-4 py-2`,
  tw`bg-white text-sm font-medium text-gray-700`,
  tw`hover:bg-gray-100`,
  tw`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500`,
  tw`cursor-pointer select-none`,
]);

Button.propTypes = {
  fullWidth: PropTypes.bool,
};
