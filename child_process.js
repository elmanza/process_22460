console.log("Entrando al hijo!");

process.on('message', data =>{
    console.log(`[CHILD] -> ${data}`);
    process.send({res:sumar()});
});

function sumar(){
    let suma = 0;
    for (let i = 0; i < 5e9; i++) {
        suma+=i;
    }
    return suma;
}