import React, { ReactElement } from "react";

const echo = (args: string[], setPrompt: Function, setOutput: Function) => {
  setOutput((prev: ReactElement) => (
    <>
      {prev}
      {args.join(" ")}
    </>
  ));
};

export default echo;
