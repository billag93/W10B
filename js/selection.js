var selectedhero = Cookies.get('chosenhero');
var yourhero = document.getElementById('selected-hero');
yourhero.innerHTML = selectedhero;

if(selectedhero == 'Goku'){
   yourhero.innerHTML = '<img src="https://i.pinimg.com/originals/ae/e6/fa/aee6faaa513440bdd5c75a5d71948ac2.png" alt="goku">, <p>You chose the grestest hero</p>'
}

else if(selectedhero == 'onepunchman'){
    yourhero.innerHTML = '<img src="https://i1.wp.com/decider.com/wp-content/uploads/2019/05/one-punch-man-season-2-episode-6.jpg?quality=80&strip=all&ssl=1" alt="One Punch Man">, <p>You chose an overpowered hero that is unfair to all other heros</p>'
}

else if(selectedhero == 'superman'){
    yourhero.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png" alt="Superman">, <p>You chose a weak ass hero who needs the suns radiation for his powers</p>'
}