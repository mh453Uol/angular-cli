export interface CommandHandler {
  validate(): boolean;
  run(): boolean;
}
