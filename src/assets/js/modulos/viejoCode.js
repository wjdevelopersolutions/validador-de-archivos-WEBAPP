
console.log()

// // Selectores
// const inputData = document.querySelector('#archivos');
// const contenidoArchivo = document.querySelector('#contenido-del-arcivo');
// const fileSize = document.querySelector('#file-size');
// const sizeType = document.querySelector('#size-type');
// const fileName = document.querySelector('#file-name');
// const fileType = document.querySelector('#file-type');
// const fileTypeIcon = document.querySelector('#file-type-icon');
// const fileExt = document.querySelector('#file-ext');
// const inputLabel = document.querySelector('#cfto-input-label');

// let datos = {
//     archivo: {},
//     resultado: ''
// }


// //Event Listeners
// eventListeners();
// function eventListeners() {
//     // document.addEventListener('DOMConetntLoaded', appInit);
//     inputData.addEventListener('change', leerArchivo, false);
// }

// class Archivo {

//     constructor(){}

//     crearImagen() {
//         const img = document.createElement('img');
//         img.style.width = '100%';
//         img.style.height = '300px';
//         img.setAttribute('src', datos.resultado);
//         img.setAttribute('alt', '');
//         return img;
//     }

//     crearTexto(texto) {
//         const p = document.createElement('p');
//         p.classList.add('my-1rem', 'text-justify');
//         p.innerText =texto;
//         return p;
//     }

// }

// class UI {

//     imprimirImagenEnHTML({ archivo, resultado }) {

//         this.limpiarHTML();
//         const img = administrarArchivo.crearImagen();
//         contenidoArchivo.appendChild(img);
//         this.imprimirMedidasEnHTML(datos);
//     }

//     imprimirTextoEnHTML({ archivo, resultado }) {

//         this.limpiarHTML();
//         const arrTextResult = resultado.split('\n');
//         const validResult = arrTextResult.filter(texto => texto.length > 0);
        
//         validResult.forEach(texto => {
//             const p = administrarArchivo.crearTexto(texto);
//             contenidoStyles('15px', '100%', 'justify')
//             contenidoArchivo.appendChild(p);
//         });

//         this.imprimirMedidasEnHTML(datos);
//     }

//     imprimirMedidasEnHTML({ archivo }) {
//         fileName.innerText = archivo.name;
//         fileType.innerText = archivo.type;
        
//         if ( parseInt(archivo.size) < 1048576 ) {
//             sizeType.innerText = 'KB'
//             fileSize.innerText = (archivo.size / 1024).toFixed(1);
//         } else if ( parseInt(archivo.size) > 1048576 &&  parseInt(archivo.size) < 1073741824 ) {
//             sizeType.innerText = 'MB'
//             fileSize.innerText = ((archivo.size / 1024) / 1024).toFixed(1) ;
//         }
//     }

//     imprimirIconoEnHTML( ext ) {
//         fileTypeIcon.style.fontSize = '25px';
//         if( ext === 'txt' ) 
//             fileTypeIcon.classList.add('icofont', 'icofont-file-text');
//         else if( ext === 'doc' || ext === 'docx' )
//             fileTypeIcon.classList.add('icofont', 'icofont-file-word');
//         else if( ext === 'jpg' || ext === 'jpeg' || ext === 'webp' ) {
//             fileTypeIcon.classList.add('icofont', 'icofont-file-jpg');
//         } else if( ext === 'gif' ) {
//             fileTypeIcon.classList.add('icofont', 'icofont-file-gif');
//         } else if( ext === 'svg' ) {
//             fileTypeIcon.classList.add('icofont', 'icofont-file-svg');
//         } else if( ext === 'bmp' ) {
//             fileTypeIcon.classList.add('icofont', 'icofont-file-bmp');
//         }else if( ext === 'png' ) {
//             fileTypeIcon.classList.add('icofont', 'icofont-file-png');
//         }else if( ext === 'pdf' ) {
//             fileTypeIcon.classList.add('icofont', 'icofont-file-pdf');
//         }else if( ext === 'zip' || ext === 'tar' || ext === 'rar' ) {
//             fileTypeIcon.classList.add('icofont', 'icofont-file-zip');
//         }else if( ext === 'deb' || ext === 'xz' || ext === 'bz2' || ext === 'gz' || ext === 'bin' ) {
//             fileTypeIcon.classList.add('icofont', 'icofont-penguin-linux');
//         }else if( ext === 'exe' ) {
//             fileTypeIcon.classList.add('icofont', 'icofont-file-exe');
//         }
//     }

//     limpiarHTML() {
//         while ( contenidoArchivo.firstChild ) {
//             contenidoArchivo.removeChild( contenidoArchivo.firstChild );
//         }
//     }
// }

// const ui = new UI();
// const administrarArchivo = new Archivo();


// function leerArchivo(event) {

//     const files = event.target.files;
//     const reader = new FileReader();

//     // REVIEW: FileReader events
//     reader.addEventListener('load', displayFileInfo, false);


//     for( let i = 0; i < files.length; i++ ) {

//         let file = files[i];

//         inputLabel.innerHTML = file.name;
//         // datos.archivo = file;
//         // const nameSplited = file.name.split('.');
//         // const ext = nameSplited[nameSplited.length -1].toLowerCase(); 
//         // fileExt.innerHTML = ext;
//         // ui.imprimirIconoEnHTML(ext);

//         // if ( ext === 'jpg' || ext === 'jpeg' || ext === 'png' || ext === 'gif' || ext === 'webp' || ext === 'bmp' || ext === 'svg' ) {

//         //     reader.readAsDataURL(file);
//         //     continue;
//         // } else if ( ext === 'txt' || ext === 'doc' || ext === 'docx' ) {

//         //     reader.readAsText(file);
//         // } else {
//         //     contenidoStyles('15', '100%', 'justify')
//         //     datos.resultado = `No se puede visualizar el contenido del archivo con formato ${ext}, puedes continuar obteniendo los datos del fichero o vuelve a cargar un formato de archivo soportado por la aplicacion. `;
//         //     ui.imprimirTextoEnHTML(datos)
//         // }

//     }
// }

// function displayFileInfo(event) {

//     // Assing resultado a datos.resultado
//     datos.resultado = event.target.result;

//     if ( event.target.result.indexOf(" ") < 1 ) {
//         contenidoStyles('0', '100%', '');
//         ui.imprimirImagenEnHTML(datos);
//         return;
//     } 

//     ui.imprimirTextoEnHTML(datos);
// }

// function contenidoStyles( padding, width, align ) {
//     contenidoArchivo.style.padding = padding;
//     contenidoArchivo.style.width = width;
//     contenidoArchivo.style.textAlign = align;
// }







class DragAndDrop {
    constructor() {
        this.filesDropped();
        this.filesChanged();
    }
    filesDropped() {
        let ele = document.querySelectorAll("div.drag-drop");

        for (let i = 0; i < ele.length; i++) {

            ele[i].ondragover = ele[i].ondragenter = function(e) {
                e.preventDefault();
            };

            ele[i].ondrop = (e) => {

                e.preventDefault();
                let formId = e.target.getAttribute("data-form-id");
                let formField = e.target.getAttribute("data-form-field");
                let input = document.querySelector(`form#${formId} input[name='${formField}']`);
                input.files = e.dataTransfer.files;
                this.displayFilelist(formId, formField);
            }
        }
    }
    filesChanged() {
        let ele = document.querySelectorAll("input.file-input");

        for (let j = 0; j < ele.length; j++) {
            ele[j].onchange = (e) => {
                let formId = e.target.getAttribute("data-form-id");
                let formField = e.target.getAttribute("data-form-field");
                this.displayFilelist(formId, formField);
            }
        }
    }
    displayFilelist(formId, formField) {
            let files = document.querySelector(`form#${formId} input[name='${formField}']`).files;
            var fileList = ``;

            for (var i = 0; i < files.length; i++) {

                let fileExt = this.getFileExtension(files[i].name);
                let fileSize = this.convertBytesTo(files[i].size, 'K', 0);

                document.querySelector('.cfto-dragDrop__alert').style.display = 'block';
                console.log(files[i])

                fileList = `
                <div class="jumbotron col-12">
                    ${fileList}
                    <div class="file">
                        <div class="file-name">
                            ${files[i].name}
                        </div>
                        <div class="file-details">
                            <div class="file-extension">
                                ${fileExt}
                            </div>
                            <div class="file-size">
                                ${fileSize} KB
                            </div>
                        </div>
                    </div>  
                </div>               
                `;

            }
            document.querySelector(`form#${formId} div.file-list[data-form-field='${formField}']`).innerHTML = fileList;


        }
    convertBytesTo(bytes, to, decimalPlaces = 2) {
            switch (to) {
                case 'K':
                    {
                        bytes = bytes / 1024;
                        break;
                    }
                case 'M':
                    {
                        bytes = bytes / 1048576;
                        break;
                    }
                case 'G':
                    {
                        bytes = bytes / 1073741824;
                        break;
                    }
            }
            return bytes = +bytes.toFixed(decimalPlaces);
        }

    getFileExtension(fileName) {
        return fileName.split('.').pop();
    }
}
var dd = new DragAndDrop(); 

