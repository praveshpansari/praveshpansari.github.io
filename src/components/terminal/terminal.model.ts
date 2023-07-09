import echo from "./commands/echo";
import cd from "./commands/cd";
import clear from "./commands/clear";
import help from "./commands/help";

export interface ICommand {
  invoke: (args: string[], setPrompt: Function, setOutput: Function) => void;
  description: string;
  format: string;
}

export class IllegalArgumentError extends Error {
  constructor(msg?: string) {
    super(msg || "Invalid Arguments");
  }
}

export const commands: Map<string, ICommand> = new Map([
  [
    "echo",
    {
      invoke: echo,
      format: "echo [arg ...]",
      description:
        "Write arguments to the standard output. \n\nDisplay the ARGs, separated by a single space character and followed by a newline, on the standard output.",
    },
  ],
  [
    "cd",
    {
      invoke: cd,
      format: "cd [dir]",
      description: "Change the current working directory.",
    },
  ],
  [
    "clear",
    { invoke: clear, format: "clear", description: "Clears the terminal." },
  ],
  [
    "help",
    {
      invoke: help,
      format: "help",
      description: "Display information about builtin commands.",
    },
  ],
]);
