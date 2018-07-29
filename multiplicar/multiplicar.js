//requires
const fs = require('fs');

var colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('----------------------------------------------'.green);
    console.log(`Tabla del ${ base }`.red);
    console.log('----------------------------------------------'.green);
    if (!Number(base)) {
        console.log(`El valor introducido ${base} no es un número`);
        return
    }
    if (!Number(limite)) {
        console.log(`El límite introducido ${limite} no es un número`);
        return
    }
    let data = '';
    for (let i = 1; i <= limite; i++) {
        if (i % 2) {
            data += `>> ${ base } + ${ i } = ${ base * i }\n`.blue;
        } else {
            data += `>> ${ base } + ${ i } = ${ base * i }\n`.black;
        }
    }
    console.log(data);
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } + ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla${ base }.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla${base}.txt`.green);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}