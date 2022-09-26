const menu = [
    {
        id: 1,
        title: "Panquecas",
        category: "café",
        price: 15.99,
        img: "./imagens/item-1.jpeg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget purus iaculis, lacinia odio sit amet, dapibus est. Proin faucibus.`,
    },
    {
        id: 2,
        title: "Double X-Salada",
        category: "almoço",
        price: 13.99,
        img: "./imagens/item-2.jpeg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget purus iaculis, lacinia odio sit amet, dapibus est. Proin faucibus.`,
    },
    {
        id: 3,
        title: "Filet Mignon da casa",
        category: "jantar",
        price: 22.99,
        img: "./imagens/item-10.jpeg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget purus iaculis, lacinia odio sit amet, dapibus est. Proin faucibus.`,
    },
    {
        id: 4,
        title: "Milkshake godzilla",
        category: "shakes",
        price: 6.99,
        img: "./imagens/item-3.jpeg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget purus iaculis, lacinia odio sit amet, dapibus est. Proin faucibus.`,
    },
    {
        id: 5,
        title: "Café da casa",
        category: "café",
        price: 20.99,
        img: "./imagens/item-4.jpeg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget purus iaculis, lacinia odio sit amet, dapibus est. Proin faucibus.`,
    },
    {
        id: 6,
        title: "X-Egg",
        category: "almoço",
        price: 22.99,
        img: "./imagens/item-5.jpeg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget purus iaculis, lacinia odio sit amet, dapibus est. Proin faucibus.`,
    },
    {
        id: 7,
        title: "Milkshake Oreo",
        category: "shakes",
        price: 18.99,
        img: "./imagens/item-6.jpeg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget purus iaculis, lacinia odio sit amet, dapibus est. Proin faucibus.`,
    },
    {
        id: 8,
        title: "Pão de queijo da casa",
        category: "café",
        price: 8.99,
        img: "./imagens/item-7.jpeg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget purus iaculis, lacinia odio sit amet, dapibus est. Proin faucibus.`,
    },
    {
        id: 9,
        title: "Combo X-burguer",
        category: "almoço",
        price: 12.99,
        img: "./imagens/item-8.jpeg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget purus iaculis, lacinia odio sit amet, dapibus est. Proin faucibus.`,
    },
    {
        id: 10,
        title: "Milkshake Vanilla",
        category: "shakes",
        price: 16.99,
        img: "./imagens/item-9.jpeg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget purus iaculis, lacinia odio sit amet, dapibus est. Proin faucibus.`,
    },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
});

function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);

        return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">R$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );
    const categoryBtns = categories
        .map(function (category) {
            return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            // console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                diplayMenuItems(menu);
            } else {
                diplayMenuItems(menuCategory);
            }
        });
    });
}