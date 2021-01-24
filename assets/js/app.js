// Selectores
const inputData = document.querySelector('#archivos');
const contenidoArchivo = document.querySelector('#contenido-del-arcivo');
const fileSize = document.querySelector('#file-size');
const sizeType = document.querySelector('#size-type');
const fileName = document.querySelector('#file-name');
const fileType = document.querySelector('#file-type');


//Event Listeners
eventListeners();
function eventListeners() {
    document.addEventListener('DOMConetntLoaded', appInit);
    inputData.addEventListener('change', leerArchivo, false);
}


// Funciones
function appInit() {

}


function leerArchivo(event) {

    const files = event.target.files;
    // console.log(files);

    // Reader instnace
    const reader = new FileReader();

    // FileReader events
    reader.addEventListener('load', displayFileInfo, false);

    for( let i = 0; i < files.length; i++ ) {

        let file = files[i];

        // Validar el tipo de archivo
        if ( file.type.match(/image.*/i) ) {

            reader.readAsDataURL(file);
            llenarInformacionArchivo(file);
            // Para decirle que continue el proceso y no lea las siguientes lineas de codigo
            continue; 
        } else if ( file.type.match(/pdf*/i) ) {

            contenidoArchivo.innerHTML = `<p>No se puede visualizar el contenido del archivo</p>`;
            llenarInformacionArchivo(file);
            return;
        };

        // Accede a este codigo si el archivo no es una imagen
        reader.readAsText(file);
        // Llenar la informacion del archivo en el HTML
        llenarInformacionArchivo(file);
    
    }
}

function displayFileInfo(event) {

    const resultado = event.target.result;

    if ( resultado.indexOf(" ") < 1 ) {

        const img = document.createElement('img');
        img.style.width = '100%';
        img.setAttribute('src', resultado);
        img.setAttribute('alt', '');
        
        limpiarHTML();
        contenidoArchivo.appendChild(img);
        return;
    } 

    const arrTextResult = resultado.split('\n');
    const validResult = arrTextResult.filter(texto => texto.length > 0);
    
    // Imprimir en el HTML
    limpiarHTML();
    validResult.forEach(texto => {

        // Scripting creando p contenedor del texto
        const p = document.createElement('p');
        p.classList.add('my-1rem', 'text-justify');
        p.innerText = texto;

        // Isertar en el HTML
        contenidoArchivo.appendChild(p);

    });
}

function llenarInformacionArchivo(file) {

    // Complete file HTML data
    fileName.innerText = file.name;
    fileType.innerText = file.type;
    
    if ( parseInt(file.size) < 1048576 ) {
        sizeType.innerText = 'KB'
        fileSize.innerText = (file.size / 1024).toFixed(1);
    } else if ( parseInt(file.size) > 1048576 &&  parseInt(file.size) < 1073741824 ) {
        sizeType.innerText = 'MB'
        fileSize.innerText = ((file.size / 1024) / 1024).toFixed(1) ;
    }

    // Imprimir el size en el HTML
}

function limpiarHTML() {
    while ( contenidoArchivo.firstChild ) {
        contenidoArchivo.removeChild( contenidoArchivo.firstChild );
    }
}
