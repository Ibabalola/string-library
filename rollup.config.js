import babel from 'rollup-plugin-babel';

export default {
    input: './src/index.js',
    output: {
        file: 'dist/main.js',
            format: 'cjs'
    },
    plugins: [
        babel({
            include: ['./src/**/*.js'],
            exclude: 'node_modules/**'
        })
    ]
}
