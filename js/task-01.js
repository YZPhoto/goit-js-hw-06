const numberOfCategories = document.querySelectorAll(".item");
console.log("Number of categories: ", numberOfCategories.length);

numberOfCategories.forEach((item) => {
    const categoryName = item.querySelector("h2");
    console.log("Category: ", categoryName.textContent);
    const numberOfElements = item.querySelectorAll("ul > li");
    console.log("Elements: ", numberOfElements.length);
});
