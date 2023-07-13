import echo from './commands/echo';
import help from './commands/help';
import about from './commands/about';
import { ReactElement } from 'react';
import works from './commands/works/works';
import profile from './commands/profile';

export interface ICommand {
  invoke?: (args: string[]) => ReactElement;
  description: string;
  format: string;
}

export class IllegalArgumentError extends Error {
  constructor(msg?: string) {
    super(msg || 'Invalid Arguments');
  }
}

export const commands: Map<string, ICommand> = new Map([
  [
    'echo',
    {
      invoke: echo,
      format: 'echo [arg ...]',
      description:
        'Write arguments to the standard output. \n\nDisplay the ARGs, separated by a single space character and followed by a newline, on the standard output.',
    },
  ],
  [
    'cd',
    {
      format: 'cd [dir]',
      description: 'Change the current working directory. Locked.',
    },
  ],
  ['clear', { format: 'clear', description: 'Clears the terminal.' }],
  [
    'help',
    {
      invoke: help,
      format: 'help',
      description: 'Display information about builtin commands.',
    },
  ],
  [
    'about',
    {
      invoke: about,
      format: 'about',
      description: 'Display my experience, education and skills.',
    },
  ],
  [
    'works',
    {
      invoke: works,
      format: 'works',
      description: 'Display the projects I worked on professionally and personally.',
    },
  ],
  [
    'profile',
    {
      invoke: profile,
      format: 'profile',
      description: 'My contact information and resume.',
    },
  ],
]);
