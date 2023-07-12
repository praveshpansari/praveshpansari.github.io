'use client';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import styles from './terminal.module.css';
import { IllegalArgumentError, commands } from './terminal.model';

const Terminal = () => {
  const [output, setOutput] = useState<ReactElement>(<></>);
  const [command, setCommand] = useState('');
  const [prompt, setPrompt] = useState('/praveshpansari.github.io:~$  ');
  const [load, setLoad] = useState(false);

  const inputEl = useRef<HTMLInputElement>(null);

  const updateOutput = (command: string) => {
    setOutput((prev) => (
      <>
        {prev}
        <div className={styles.location}>
          {prompt}
          <span className={styles.command}>{command}</span>
        </div>
      </>
    ));
  };

  const executeCommand = (command: string) => {
    updateOutput(command);
    const commandArray = command.split(' ');

    try {
      if (commandArray[0] === 'clear') {
        if (commandArray.length > 1) throw new IllegalArgumentError();
        setOutput(<></>);
      } else if (commandArray[0] === 'cd') {
        setOutput((prev) => (
          <>
            {prev}
            This command is currently locked.
          </>
        ));
      } else {
        if (commands.has(commandArray[0]))
          setOutput((prev) => (
            <>
              {prev}
              {commands.get(commandArray[0])?.invoke?.(commandArray.splice(1))}
            </>
          ));
        else throw new TypeError();
      }
    } catch (e) {
      let error = '';
      if (command !== '') {
        if (e instanceof TypeError) {
          error = `"${command}" Invalid command. Please use "help" command for the available list of commands.`;
        } else if (e instanceof IllegalArgumentError) {
          error = `Usage: ${commands.get(commandArray[0])?.format}`;
        }
      }
      setOutput((prev) => (
        <>
          {prev}
          {error}
        </>
      ));
    }
    setCommand('');
  };

  useEffect(() => {
    setCommand('cd');
    updateOutput('cd');
    setPrompt('/praveshpansari.github.io/home:~$  ');
    setLoad(true);
  }, []);

  useEffect(() => {
    if (load) {
      setCommand('profile');
      executeCommand('profile');
    }
  }, [load]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: 'smooth' });
    }, 100);
  }, [output]);

  return (
    <div className={styles.main}>
      <div>{output}</div>
      <div className={styles.prompt}>
        <div className={styles.location}>{prompt}</div>
        <input
          type="text"
          ref={inputEl}
          className={styles.input}
          value={command}
          autoFocus
          onKeyDown={(e) => {
            if (e.key === 'Enter') executeCommand(command);
          }}
          onChange={(e) => setCommand(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default Terminal;
