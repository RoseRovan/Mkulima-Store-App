const equipmentUl = document.getElementById("equipment-list");
const equipmentElemName = document.getElementById("equipment-name");
const equipmentElemImage = document.getElementById("equipment-image");
const equipmentElemDescription = document.getElementById("equipment-description");
document.addEventListener("DOMContentLoaded", () => {
    getEquipmentData();
      });
      //fetch function
      function getequipmentData() {
        fetch("http://localhost:3000/equipments")
          .then((response) => response.json())
          .then((data) => equipmentData(data));
      }
      function equipmentData(data) {
        data.forEach((data) => {
          const list = document.createElement("li");
          list.style.fontSize = "18px";
          list.innerText = data.name;
          equipmentUl.appendChild(list);
    
          list.addEventListener("click", () => {
            equipmentElemName.textContent = data.name;
            equipmentElemName.style.color = "red";       
            equipmentElemImage.setAttribute("src", data.image_url);
            equipmentElemDescription.textContent = data.description;
            equipmentElemDescription.style.fontSize = "18px"
          });
        });
      }
      const equipmentRatings = document.getElementById('rating-list');
      document.querySelector('#rating-form').addEventListener('submit', (e) => {
        e.preventDefault();
        let text = document.querySelector('#rating-form textarea')
        let listRating = document.createElement('li');
        listRating.innerText = text.value;
        equipmentRatings.appendChild(listRating);
        document.querySelector('#rating-form').reset();
    })