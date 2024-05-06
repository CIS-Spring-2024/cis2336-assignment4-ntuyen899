// Dynamic Menu
const SectionCenter = document.querySelector('.menu-items-container');
const filterBtns = document.querySelectorAll('.btn-cat');

    filterBtns.forEach(function(btn){
        btn.addEventListener("click",function(e){
            const Category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem){
                if(menuItem.Category == Category){
                        return menuItem;
                }
            });
            if(Category=="all"){
                displayMenusItem(menu);
            }
            else{
                 displayMenusItem(menuCategory);
            }
         })
    });

    const menu = [
    {
        id: 1,
        title: "French Toasts",
        Category: "Breakfast",
        price: 20,
        img: "./images/breakfast1.png"
    },

    {
        id: 2,
        title: "Acai Bowl",
        Category: "Breakfast",
        price: 20,
        img: "./images/breakfast2.png"
    },

    {
        id: 3,
        title: "Egg & Sausage Bagel",
        Category: "Breakfast",
        price: 20,
        img: "./images/breakfast3.png"
    },

    {
        id: 4,
        title: "Chicken Club Sandwhich",
        Category: "Lunch",
        price: 25,
        img: "./images/lunch1.png"
    },

    {
        id: 5,
        title: "Farmer's Market Salad",
        Category: "Lunch",
        price: 25,
        img: "./images/lunch2.png"
    },

    {
        id: 6,
        title: "Birria Tacos",
        Category: "Lunch",
        price: 25,
        img: "./images/lunch3.png"
    },

    {
        id: 7,
        title: "Alfredo Pasta",
        Category: "Dinner",
        price: 30,
        img: "./images/dinner1.png"
    },

    {
        id: 8,
        title: "Roasted Prime Ribs",
        Category: "Dinner",
        price: 30,
        img: "./images/dinner2.png"
    },

    {
        id: 9,
        title: "Grilled Salmon",
        Category: "Dinner",
        price: 30,
        img: "./images/dinner3.png"
    },
    {
        id: 10,
        title: "Fruit Tart",
        Category: "Desserts",
        price: 12,
        img: "./images/dessert1.png"
    },
    {
        id: 11,
        title: "Tiramisu",
        Category: "Desserts",
        price: 12,
        img: "./images/dessert2.png"
    },
    {
        id: 12,
        title: "Fresh Fruits",
        Category: "Desserts",
        price: 12,
        img: "./images/dessert3.png"
    },
]

window.addEventListener('DOMContentLoaded',function(){
    displayMenusItem(menu);
});

function displayMenusItem(menuItem){
    let displayMenusItem = menuItem.map(function(item){
        return `<div class="img_cards"> 
        <img src=${item.img} alt=""/>
        <p>${item.title}</p>
        <div class="price">$${item.price}</div>
        <button onclick="addCart(${item.id})">Add To Cart</button>
    </div>`;
    })
    displayMenusItem = displayMenusItem.join("");
    SectionCenter.innerHTML = displayMenusItem;
}

