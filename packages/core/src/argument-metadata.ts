export interface ArgumentMetadata {
  name?: string;
  description: string;
  required?: boolean;
  variadic?: boolean;
  alias?: string;
}
