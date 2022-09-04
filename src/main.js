const hostUrl = "http://localhost:3000";

function getAndLoadAllEquipments(){
    fetch(`${hostUrl}/equipments`).then(resp=>resp.json()).then(equipments=>{
        document.getElementById('equipment-list').innerHTML = equipments
        .map(equipment=>`<li onClick="getAndLoadEquipmentDetails(${equipment.id})">${equipment.name}</li>`)
        .join('');
    })
}

function getAndLoadEquipmentDetails(equipmentId){
    fetch(`${hostUrl}/equipments${equipmentId}`).then(resp=>resp.json()).then(equipment=>{
        console.log(beer);
        document.getElementById('equipment-name').innerHTML = equipment.name;
        document.getElementById('equipment-image').src = equipment.image_url;
        document.getElementById('equipment-description').innerHTML = equipment.description;
        document.getElementById('rating-list').innerHTML = equipment.ratings.map(rating=>`<li>${rating}</li>`).join('');
    });
}

document.addEventListener('DOMContentLoaded', ()=>{
    getAndLoadAllEquipments();
    getAndLoadEquipmentDetails(1);

    document.getElementById('description-form').addEventListener('submit', (evt)=>{
        evt.preventDefault();
        const form = evt.target;
        document.getElementById('equipment-description').innerHTML = form.description.value;
        form.reset();
    });

    document.getElementById('rating-form').addEventListener('submit', evt=>{
        evt.preventDefault();
        const form = evt.target;
        document.getElementById('rating-list').innerHTML += `<li>${form.rating.value}</li>`;
        form.reset();
    })
})