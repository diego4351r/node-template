import { defineConfig } from 'vitest/config';
import path from 'path';
export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: [
      { find: '@absolutePath', replacement: path.resolve(__dirname, 'src/absolutePath')}, //just an example
    ]
  }
});
