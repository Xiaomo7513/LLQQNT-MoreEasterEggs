export const hash = "#/main";
export const selector = ".contact-top-bar";
export function trigger(contact_topbar) {
    const search_words = [
        "Dinnerbone",
        "Grumm"
    ];

    const menu_item_template = document.createElement("template");
    menu_item_template.innerHTML = `
    <a class="q-context-menu-item q-context-menu-item--normal">
        <div class="q-context-menu-item__icon q-context-menu-item__head">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
        </div>
        <span class="q-context-menu-item__text">千万别点</span>
    </a>
    `;

    const menu_item = menu_item_template.content.firstElementChild;
    const adder_button = contact_topbar.querySelector(".contact-adder-btn");
    const search_input = contact_topbar.querySelector("input");

    const app = document.getElementById("app");

    menu_item.addEventListener("click", () => {
        app.style.transition = "rotate 0.5s ease";
        app.style.rotate = "x 180deg";
    });

    adder_button.addEventListener("click", () => {
        if (search_words.includes(search_input.value)) {
            const context_menu = document.querySelector(".q-context-menu");
            context_menu.append(menu_item);
        }
    });
}