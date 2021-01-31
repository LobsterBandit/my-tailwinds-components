import tw, { styled } from "twin.macro";

export const Popover = styled.div(() => [
  tw`fixed right-2 mt-2`,
  tw`rounded-md shadow-lg`,
  tw`bg-white`,
  tw`ring-1 ring-black ring-opacity-5`,
]);
