import { ng } from '../../utils/process';
// import { replaceInFile } from '../../utils/fs';
import { oneLine } from 'common-tags';

export default function () {
  return ng('update')
    .then(({ stdout }) => {
      if (!stdout.match(/@angular\/cli is up to date./)) {
        throw new Error(oneLine`
          Expected to match "@angular/cli is up to date"
          in ${stdout}.
        `);
      }
    });
}
