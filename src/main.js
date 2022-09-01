const equipmentUl = document.getElementById("equipment-list");
const equipmentElemName = document.getElementById("equipment-name");
const equipmentElemImage = document.getElementById("equipment-image");
const equipmentElemDescription = document.getElementById("equipment-description");
document.addEventListener("DOMContentLoaded", () => {
    getEquipmentData();
      });
      function getBeerData() {
        fetch("http://localhost:3000")
          .then((response) => response.json())
          .then((data) => beerData(data));
      }