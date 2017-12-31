/*jshint esversion: 6 */

const printToDom = (foodArray, animal) => {
    foodArray.forEach((prod) => {
        let container = document.getElementById(`${animal}-food`);
        container.innerHTML += `<h2>${prod.name}</h2>`;
        if (animal === "cat") {
            container.innerHTML += `<h3> Breeds: ${prod.breeds.join(", ")}</h3>`;
        }        
        prod.types.forEach((prod) => {
            container.innerHTML += `<div class="food-type">
            <h3>Type: ${prod.type}</h3>`;
            prod.volumes.forEach((volume)=> {
                container.innerHTML += `<h4>Size: ${volume.name}</h4>
                <h4>Price: ${volume.price}</h4>`; 
            });
            container.innerHTML += '</div>';
        });
        return container;
    });
};

module.exports = printToDom;

