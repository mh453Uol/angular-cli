export interface CommandMetadata {
  name: string;
  description: string;
  alias?: string;
  arguments?: Argument[];
  options?: Option[];
}

export interface Argument {
  name: string;
  required: boolean;
  type: ArgumentType;
}

export enum ArgumentType {
  string,
  bool,
  number
}

export interface Option {
  name: string;
  alias?: string;
  description?: string;
  defaultValue?: string;
}
