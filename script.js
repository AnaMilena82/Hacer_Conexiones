console.log("page loaded...");


var otronombre = document.getElementById('othername');
var restarconexion = document.getElementById('restar');
var sumarconexion = document.getElementById('sumar');

function cambiarnombre() {
    
    otronombre.innerText = "Ana Milena Chaverra C.";   // Al hacer clic en el botón Editar perfil, el nombre del usuario cambiará de Jane Doe a cualquier otro nombre.
}



function aceptar(element) {
   let removerusuario = element.closest ( ".card-list-item" );
   removerusuario.remove();  // Al hacer clic en cualquiera de los botones, se eliminará al usuario de la lista de solicitudes.
   restarconexion.innerText--; //cualquiera de los botones disminuye el número de Solicitudes de conexión
   sumarconexion.innerText++;//el botón aceptar también aumenta el número de conexiones
    
}
function rechazar(element) {
    let removerusuario = element.closest ( ".card-list-item" );
    removerusuario.remove(); // Al hacer clic en cualquiera de los botones, se eliminará al usuario de la lista de solicitudes.
    restarconexion.innerText--;//cualquiera de los botones disminuye el número de Solicitudes de conexión
}
