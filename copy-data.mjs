import { cp } from 'node:fs/promises';
import { join, basename } from 'node:path';

const source = join(process.cwd(), 'public', 'data');
const destination = join(
  process.cwd(),
  'dist',
  'launcher-dashboard',
  'browser',
  'data',
);

const IGNORE_LIST = [
  '.DS_Store',
  '.gitkeep',
  'apps.example.json',
  'example-icon.png',
];

/**
 * Copy data folder to build folder when deploying using pm2 and updating apps.json or icons folder
 */

async function copyData() {
  try {
    await cp(source, destination, {
      recursive: true,
      force: true,
      filter: (src) => {
        const name = basename(src);

        const shouldIgnore = IGNORE_LIST.some((item) => {
          return name === item;
        });

        return shouldIgnore ? false : true;
      },
    });
    console.log('✅ Data successfully copied ✅');
  } catch (err) {
    console.error('❌ Error copying files ❌', err.message);
    process.exit(1);
  }
}

copyData();
