import tw from "twin.macro";
import { Button, ChevronDown, DropdownButton } from "./components";

const AppContainer = tw.div`flex flex-col`;
const Header = tw.header`flex inline-flex content-center gap-4`;
const Half = tw.div`flex flex-1 gap-4`;

export default function App() {
  return (
    <AppContainer>
      <Header>
        <Half>
          <ChevronDown tw="h-10 w-10" />
          <div tw="prose prose-lg">The Brand</div>
          <ChevronDown tw="h-10 w-10 transform rotate-180" />
        </Half>
        <Half>
          <Button fullWidth>Max Width Button</Button>
          <DropdownButton title="Dropdown" />
        </Half>
      </Header>
    </AppContainer>
  );
}
