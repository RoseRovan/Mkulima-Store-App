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