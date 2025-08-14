
function verDetalle(titulo, autor, desc, precio, img) {
  document.getElementById('detalle').style.display = 'flex';
  document.getElementById('detalle-titulo').innerText = titulo;
  document.getElementById('detalle-autor').innerText = autor;
  document.getElementById('detalle-desc').innerText = desc;
  document.getElementById('detalle-precio').innerText = precio;
  document.getElementById('detalle-img').src = img;
}
function cerrarDetalle() { document.getElementById('detalle').style.display = 'none'; }
function contactar() {
  let opcion = prompt('Elige contacto: 1 para WhatsApp, 2 para email');
  if(opcion=='1'){
    window.open('https://api.whatsapp.com/send?text=Hola,%20me%20interesa%20este%20cuadro', '_blank');
  } else if(opcion=='2'){
    window.location.href = 'mailto:tuemail@ejemplo.com?subject=Interés%20en%20cuadro';
  }
}
