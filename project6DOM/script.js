const btsu=document.getElementById("butt");

const randomcolor=() =>{
    let val = "0123456789ABCEDF";
    let cons = "#";
    for (let i = 0; i < 6; i++) {
        cons  = cons + val[Math.floor(Math.random()*16)];
        
    }
    return cons;
}
//console.log(randomcolor)

function colorRandom() {
    document.body.style.backgroundColor = randomcolor();

}

btsu.addEventListener("mouseout",colorRandom);
