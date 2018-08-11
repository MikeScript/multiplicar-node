const { argv } = require('./config/yargs');
const { crearArchivo, listar } = require('./multiplicar/multiplicar');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:' + `${ archivo }`.green))
            .catch(e => { console.log(e); });
        break;

    default:
        console.log('Comando no reconocido');


}

// let argv2 = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1];