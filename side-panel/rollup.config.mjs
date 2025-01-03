import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'umd',
      name: 'SidePanel'
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'es'
    }
  ],
  plugins: [
    postcss({
      extensions: ['.css'],
    }),
    resolve(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    terser()
  ]
};
