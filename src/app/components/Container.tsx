import { ReactNode } from "react";

export const Container = ({
  as: Element = "div",
  children,
}: {
  children: ReactNode;
  as: any;
}) => {
  return (
    <Element className="flex min-h-screen flex-col items-center justify-center">
      {children}
    </Element>
  );
};
