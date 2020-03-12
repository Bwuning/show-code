// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss'
import { uglify } from "rollup-plugin-uglify";
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/index.tsx',
    plugins: [
        commonjs(),
        postcss({
            extensions: ['.css', '.sss', '.pcss', 'scss', 'sass']
        }),
        typescript({
            tsconfig: "./tsconfig.json",
        }),
        // uglify({
        //     sourcemap: true
        // }),
    ],
    output: [
        {
            file: 'dist/bundle.cjs.js',
            format: 'cjs',
            sourcemap: true
        },
        // {
        //     file: 'dist/bundle.esm.js',
        //     format: 'esm',
        //     sourcemap: true
        // }
    ]
};