import tw from "twin.macro";
import { Button, ChevronDown, DropdownButton } from "./components";

const AppContainer = tw.div`flex flex-col min-h-screen bg-white dark:bg-gray-600`;
const Header = tw.header`flex inline-flex content-center gap-4 bg-white dark:bg-gray-700`;
const Half = tw.div`flex flex-1 gap-4 items-center p-2`;

export default function App() {
  return (
    <AppContainer>
      <Header>
        <Half>
          <ChevronDown tw="h-10 w-10 fill-current text-black dark:text-white" />
          <div tw="prose prose-lg text-black dark:text-white">The Brand</div>
          <ChevronDown tw="h-10 w-10 transform rotate-180 fill-current text-black dark:text-white" />
        </Half>
        <Half>
          <Button fullWidth>Max Width Button</Button>
          <DropdownButton title="Dropdown" />
        </Half>
      </Header>
      <div id="use-tw-portal" />
    </AppContainer>
  );
}
