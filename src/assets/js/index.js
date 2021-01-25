import Dropzone from './modulos/bootstrap.fd';


$("#open_btn").click(function() {
    $.FileDialog({multiple: true}).on('files.bs.filedialog', function(ev) {

        let files = ev.files;
        let texto = "";
        let datos = [];

        files.forEach(function(f) {
            texto += f.name + "<br />"
            datos = [ ...datos, { texto: f.name, peso: f.size } ];
        });

        imprimirHTML(datos, texto)
        
    }).on('cancel.bs.filedialog', function(ev) {
        $('#subir-archivo-texto').html('Subir archivo(s)');
        $("#output").html(`
            <div class="alert alert-dismissible alert-danger">
                <div>
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Vaya!</strong> has cancelado, si deseas puedes <a href="/" class="alert-link">vuelve a subir</a> tus archivos cuando quieras!.
                </div>
            </div>
        `);
    });
}); 


function imprimirHTML(datos, texto) {

    const div = document.createElement('div');
    div.classList.add('alert', 'alert-dismissible', 'alert-success');
    const listGroup = document.createElement('ul');
    listGroup.classList.add('list-group');
    listGroup.style.width = '100%';

    datos.map(file => {

        const listGroupItem = document.createElement('li');
        listGroupItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        listGroupItem.style.textAlign = 'left';
        listGroupItem.textContent = file.texto;

        const span = document.createElement('span');
        span.classList.add('badge', 'badge-success', 'badge-pill');
        span.textContent = file.peso;

        listGroupItem.appendChild(span);

        listGroup.appendChild(listGroupItem)
    });



    div.appendChild(listGroup);
    $("#output").html(div);

    document.querySelector('#subir-archivo-texto').innerHTML = texto;

}