"use client";
import React, { ReactElement, useState } from "react";
import styles from "./terminal.module.css";
import { commands } from "./terminal.model";

const Terminal = () => {
  const [output, setOutput] = useState<ReactElement>(<></>);
  const [command, setCommand] = useState("");
  const [prompt, setPrompt] = useState("/praveshpansari.github.com:~$  ");

  const executeCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setOutput((prev) => (
        <>
          {prev}
          <div className={styles.location}>
            {prompt}
            <span className={styles.command}>{command}</span>
          </div>
        </>
      ));
      let commandArray = command.split(" ");

      if (commands.has(commandArray[0])) {
        commands
          .get(commandArray[0])
          ?.invoke(commandArray.splice(1), setPrompt, setOutput);
      } else {
        let error =
          'Command not found. Please use "help" command for the available list of commands.';
        setOutput((prev) => (
          <>
            {prev}
            {error}
          </>
        ));
      }
      setCommand("");
    }
  };

  return (
    <div className={styles.main}>
      <div>{output}</div>
      <div className={styles.prompt}>
        <div className={styles.location}>{prompt}</div>
        <input
          type="text"
          className={styles.input}
          value={command}
          autoFocus
          onKeyDown={executeCommand}
          onBlur={(e) => e.target.focus()}
          onChange={(e) => setCommand(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default Terminal;
