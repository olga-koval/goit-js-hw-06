
// ASSIGNMENT #1

// step#1

const categoriesRef = document.querySelectorAll('.item');
const categoriesNumberRef = categoriesRef.length;

console.log('Number of categories: ', categoriesNumberRef);

// step#2

const elementsRef = document.querySelectorAll('.item');

elementsRef.forEach(element => {
    console.log(`Category: `, element.firstElementChild.textContent);
    console.log(`Elements: `, element.lastElementChild.children.length);
});