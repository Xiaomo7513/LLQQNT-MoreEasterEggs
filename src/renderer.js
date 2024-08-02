/* 
摘自：https://github.com/LiteLoaderQQNT/LiteLoaderQQNT/tree/main/src/easter_eggs/renderer.js
原作者：沫烬染（https://github.com/mo-jinran） 
*/

// 寻找指定元素
async function findElement(selector, callback) {
    const observer = (_, observer) => {
        const element = document.querySelector(selector);
        if (element) {
            callback(element);
            observer?.disconnect?.();
            return true;
        }
        return false;
    }
    if (!observer()) {
        new MutationObserver(observer).observe(document, {
            subtree: true,
            attributes: false,
            childList: true
        });
    }
}


// 监听页面变化
async function watchURLHash(callback) {
    if (!location.hash.includes("#/blank")) {
        callback(location.hash);
    }
    else {
        navigation.addEventListener("navigatesuccess", () => {
            callback(location.hash)
        }, { once: true });
    }
}


// 加载彩蛋
async function loadEasterEggs(currentHash) {
    const easter_eggs = [
        "./easter_eggs/dinnerbone.js",
        "./easter_eggs/jeb_.js"
    ];
    for (const easter_egg of easter_eggs) {
        const { hash, selector, trigger } = await import(easter_egg);
        if (currentHash.includes(hash)) {
            findElement(selector, trigger);
        }
    }
}


// 指定页面触发
watchURLHash(loadEasterEggs);
