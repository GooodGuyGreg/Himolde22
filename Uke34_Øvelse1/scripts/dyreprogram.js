//få tak i element
const img = document.getElementById('bilde');
//vent og hør på klikk event
// toggle
let toggle = true;
img.addEventListener('click', function (){
    // toggle
    toggle = !toggle;
    if(toggle){
        img.src = 'rødlisteart/aerfugl0.jpg';
    }else{
        img.src = 'rødlisteart/aerfugl1.jpg';
    }

    // img.src = 'rødlisteart/aerfugl1.jpg';
})