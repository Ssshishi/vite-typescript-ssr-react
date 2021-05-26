// postcss.config.cjs
// cjs 即 commonjs  文件格式为 commonjs 语法，配置使用 module.exports = {} 导出
// mjs 即  ECMAScript modules 的语法，使用 export 导出

/**
 * babel.config.js: 如果 babel 配置里声明了 type: module，和 babel.config..mjs 行为一样，
 * 否则和 babel.config.cjs 行为一致，使用 mocule.exports = {} 导出
 */
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
}
