import { ReactElement } from "react";
import { commands } from "../terminal.model";
import styles from "./commands.module.css";

const help = (args: string[], setPrompt: Function, setOutput: Function) => {
  setOutput((prev: ReactElement) => (
    <>
      {prev}
      Here is the list of available commands.
      <div className={styles.help}>
      {[...commands.entries()].map((command, index) => (
        <div className={styles.helpCommand} key={index}>
          <div className={styles.command}>{command[0]}</div>
          <div>Usage: {command[1].format}</div>
          <div className={styles.description}>{command[1].description}</div>
        </div>
      ))}
      </div>
    </>
  ));
};

export default help;
