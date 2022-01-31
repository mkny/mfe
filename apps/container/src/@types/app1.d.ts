/// <reference types="react" />

declare module "app1/Button" {
  const Button: React.ComponentType<{ label: string }>;

  export { Button };

  export default React.ComponentType;
}
