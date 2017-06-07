import { ng } from '../../utils/process';
import { updateJsonFile } from '../../utils/project';
import { oneLine } from 'common-tags';

export default function () {
  return updateJsonFile('node_modules/@angular/cli/package.json', (json) => {
      json.version = '1.0.0';
    })
    .then(() => ng('update'))
    .then(({ stdout }) => {
      if (!stdout.match(/is out of date/)) {
        throw new Error(oneLine`
          Expected to match "is out of date"
          in ${stdout}.
        `);
      }
    });
}
