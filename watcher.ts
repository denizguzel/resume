import chokidar from 'chokidar';
import execa from 'execa';

chokidar
  .watch(['**/*.ts', '**/*.html', '**/*.css'], {
    ignored: /node_modules|dist/,
  })
  .on('change', () => execa('yarn', ['build']));
