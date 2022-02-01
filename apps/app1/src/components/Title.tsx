import { PropsWithChildren } from "react";

interface Props {}

function Title({ children }: PropsWithChildren<Props>) {
  return <h3>{children}</h3>;
}

export default Title;
export { Title };
