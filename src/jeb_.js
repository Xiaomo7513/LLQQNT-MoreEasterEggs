export const hash = "#/main";
export const selector = ".contact-top-bar";
export function trigger(contact_topbar) {
    const search_word = "jeb_";

    const menu_item_template = document.createElement("template");
    menu_item_template.innerHTML = `
    <a class="q-context-menu-item q-context-menu-item--normal">
        <div class="q-context-menu-item__icon q-context-menu-item__head">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
        </div>
        <span class="q-context-menu-item__text">千万别点（光敏性癫痫注意）</span>
    </a>
    `;

    const menu_item = menu_item_template.content.firstElementChild;
    const adder_button = contact_topbar.querySelector(".contact-adder-btn");
    const search_input = contact_topbar.querySelector("input");

    const style = document.createElement("style");
    style.innerHTML = `
    @keyframes jeb_ {
        0% {filter: hue-rotate(0deg);}
        100% {filter: hue-rotate(360deg);}
    }
    
    #app {
        animation: jeb_ 1s linear infinite;
    }
    `;

    menu_item.addEventListener("click", () => {
        document.head.appendChild(style);
    });

    adder_button.addEventListener("click", () => {
        if (search_input.value == search_word) {
            const context_menu = document.querySelector(".q-context-menu");
            context_menu.append(menu_item);
        }
    });
}