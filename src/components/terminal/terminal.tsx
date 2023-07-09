'use client';
import React, { ReactElement, useState } from 'react';
import styles from './terminal.module.css';
import { IllegalArgumentError, commands } from './terminal.model';

const Terminal = () => {
  const [output, setOutput] = useState<ReactElement>(<></>);
  const [command, setCommand] = useState('');
  const [prompt, setPrompt] = useState('/praveshpansari.github.com:~$  ');

  const executeCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setOutput((prev) => (
        <>
          {prev}
          <div className={styles.location}>
            {prompt}
            <span className={styles.command}>{command}</span>
          </div>
        </>
      ));
      const commandArray = command.split(' ');

      try {
        if (commandArray[0] === 'clear') {
          if (commandArray.length > 1) throw new IllegalArgumentError();
          setOutput(<></>);
        } else if (commandArray[0] === 'cd') {
          setPrompt('/praveshpansari.github.com/home:~$  ');
        } else {
          setOutput((prev) => (
            <>
              {prev}
              {commands.get(commandArray[0])?.invoke?.(commandArray.splice(1))}
            </>
          ));
        }
      } catch (e) {
        let error = '';
        if (e instanceof TypeError) {
          error = 'Command not found. Please use "help" command for the available list of commands.';
        } else if (e instanceof IllegalArgumentError) {
          error = `Usage: ${commands.get(commandArray[0])?.format}`;
        }
        setOutput((prev) => (
          <>
            {prev}
            {error}
          </>
        ));
      }
      setCommand('');
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
          // onBlur={(e) => e.target.focus()}
          onChange={(e) => setCommand(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default Terminal;
