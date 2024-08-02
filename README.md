# More Easter Eggs

为 LiteLoaderQQNT 添加了更多彩蛋！

具体是哪些自己去翻源码罢（

参考：https://github.com/LiteLoaderQQNT/LiteLoaderQQNT/tree/main/src/easter_eggs

## 彩蛋编写规范

> 详情参考 LiteLoaderQQNT 自带彩蛋（[check_update.js](https://github.com/LiteLoaderQQNT/LiteLoaderQQNT/tree/main/src/easter_eggs/check_update.js), [search_furry.js](https://github.com/LiteLoaderQQNT/LiteLoaderQQNT/tree/main/src/easter_eggs/search_furry.js), [setting_navtab.js](https://github.com/LiteLoaderQQNT/LiteLoaderQQNT/tree/main/src/easter_eggs/setting_navtab.js)）

`renderer.js` 中修改：
``` javascript
// 省略代码
async function loadEasterEggs(currengHash) {
    const easterEggs = [
        "<彩蛋 js 文件>"
    ];
    // 省略代码
}
```

自定义彩蛋 js 文件：
``` javascript
export const hash = "<需要加载彩蛋的页面>"; // 打开 DevTools 控制台，输入 location.hash 查看当前页面 hash
export const selector = "<触发彩蛋的元素选择器>";
export function trigger(/*<触发彩蛋的元素>*/) {
    // 彩蛋内容
}
```