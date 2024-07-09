import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: 'src/index.ts', // Entry point for your application
    output: [
      { file: 'dist/index.cjs.js', format: 'cjs' }, // CommonJS format
      { file: 'dist/index.esm.js', format: 'esm' }, // ES module format
      { 
        file: 'dist/index.umd.js', 
        format: 'umd', 
        name: 'toaster', 
        globals: { react: 'React', tslib: 'tslib' } // Define globals for UMD format
      },
    ],
    plugins: [
      resolve(), // Resolve node_modules dependencies
      commonjs(), // Convert CommonJS modules to ES6
      typescript({
        useTsconfigDeclarationDir: true, // Use declarationDir from tsconfig.json
        tsconfig: 'tsconfig.json', // Path to your TypeScript configuration file
      }),
      postcss({
        plugins: [autoprefixer], // Use autoprefixer plugin for CSS
        extract: 'styles.css', // Output CSS file
        minimize: true, // Minimize CSS
        sourceMap: true, // Generate source maps
        modules: true, // Enable CSS modules
      }),
    ],
    external: ['react', 'react-dom', 'tslib'], // Specify external dependencies
  },
];
