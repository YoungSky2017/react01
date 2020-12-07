/**
 * desc：
 * author： Qi
 * date：2020/12/7 下午10:00
 */

const {override, fixBabelImports} = require('customize-cra');
module.exports = override(
    //很对antd实现按需打包：根据import来打包（使用babel-plugin-import）
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',   //自动打包相关样式
    }),
);
