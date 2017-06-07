const Command = require('../ember-cli/lib/models/command');
import { default as UpdateTask, UpdateTaskOptions } from '../tasks/update';

export interface UpdateOptions {
  includeUnstable: boolean;
}

const UpdateCommand = Command.extend({
  name: 'update',
  description: 'Checks for an updated version.',
  works: 'insideProject',
  availableOptions: [
    {
      name: 'include-unstable',
      type: Boolean,
      default: false,
      description: 'Include unstable releases when checking.'
    }
  ],

  run: function(commandOptions: UpdateOptions) {
    const updateTask = new UpdateTask({
      ui: this.ui,
      project: this.project
    });
    const options: UpdateTaskOptions = {...commandOptions, ...{ forceCheck: true } }

    return updateTask.run(options)
      .then((newVersionAvailable: boolean) => {
        if (!newVersionAvailable) {
          console.log('@angular/cli is up to date.');
        }
      });
  }
});

export default UpdateCommand;
