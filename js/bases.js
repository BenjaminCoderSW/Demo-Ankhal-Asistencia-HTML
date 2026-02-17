let basesData = [
    { codigo: 'TULA', nombre: 'Base Tula de Allende', tipo: 'Mixta', estado: 'Activa', stockActual: 770000, metaTarimas: 500, metaCajas: 800, metaAccesorios: 200 },
    { codigo: 'WEG', nombre: 'Planta WEG', tipo: 'Producción', estado: 'Activa', stockActual: 660000, metaTarimas: 600, metaCajas: 1000, metaAccesorios: 300 },
    { codigo: 'SM', nombre: 'Base SM', tipo: 'Almacén', estado: 'Activa', stockActual: 420000, metaTarimas: 0, metaCajas: 0, metaAccesorios: 0 },
    { codigo: 'ATOTO', nombre: 'Base Atoto', tipo: 'Mixta', estado: 'Activa', stockActual: 330000, metaTarimas: 350, metaCajas: 500, metaAccesorios: 150 },
    { codigo: 'ARKAM', nombre: 'Base Arkam', tipo: 'Mixta', estado: 'Activa', stockActual: 300000, metaTarimas: 400, metaCajas: 600, metaAccesorios: 180 },
    { codigo: 'NAVE4', nombre: 'Nave 4', tipo: 'Almacén', estado: 'Activa', stockActual: 250000, metaTarimas: 0, metaCajas: 0, metaAccesorios: 0 },
    { codigo: 'VOLTRAN', nombre: 'Base Voltran', tipo: 'Producción', estado: 'Activa', stockActual: 180000, metaTarimas: 250, metaCajas: 400, metaAccesorios: 100 },
    { codigo: 'BRASKEM', nombre: 'Base Braskem', tipo: 'Mixta', estado: 'Activa', stockActual: 150000, metaTarimas: 200, metaCajas: 350, metaAccesorios: 80 },
    { codigo: 'FIBRAMEX', nombre: 'Base Fibramex', tipo: 'Almacén', estado: 'Activa', stockActual: 120000, metaTarimas: 0, metaCajas: 0, metaAccesorios: 0 },
    { codigo: 'QRO', nombre: 'Base Querétaro', tipo: 'Producción', estado: 'Activa', stockActual: 95000, metaTarimas: 300, metaCajas: 450, metaAccesorios: 120 },
    { codigo: 'TULTENGO', nombre: 'Base Tultengo', tipo: 'Almacén', estado: 'Activa', stockActual: 75000, metaTarimas: 0, metaCajas: 0, metaAccesorios: 0 },
    { codigo: 'MP', nombre: 'Materia Prima Central', tipo: 'Almacén', estado: 'Activa', stockActual: 450000, metaTarimas: 0, metaCajas: 0, metaAccesorios: 0 },
    { codigo: 'PT', nombre: 'Producto Terminado Central', tipo: 'Almacén', estado: 'Activa', stockActual: 380000, metaTarimas: 0, metaCajas: 0, metaAccesorios: 0 }
];

function guardarBase() {
    const codigo = document.getElementById('codigoBase').value.trim().toUpperCase();
    const nombre = document.getElementById('nombreBase').value.trim();
    const tipo   = document.getElementById('tipoBase').value;
    const estado = document.getElementById('estadoBase').value;
    if (!codigo || !nombre || !tipo) { mostrarNotificacion('Complete todos los campos requeridos', 'error'); return; }
    if (basesData.find(b => b.codigo === codigo)) { mostrarNotificacion(`El código ${codigo} ya existe`, 'error'); return; }
    basesData.push({ codigo, nombre, tipo, estado, stockActual: 0, metaTarimas: 0, metaCajas: 0, metaAccesorios: 0 });
    bootstrap.Modal.getInstance(document.getElementById('modalNuevaBase')).hide();
    document.getElementById('formNuevaBase').reset();
    mostrarNotificacion(`Base ${codigo} registrada exitosamente`, 'success');
    setTimeout(() => location.reload(), 1000);
}

function filtrarBases() {
    const busqueda = document.getElementById('buscarBase').value.toUpperCase();
    const filtroTipo   = document.getElementById('filtroTipo').value;
    const filtroEstado = document.getElementById('filtroEstado').value;
    const filas = document.getElementById('tablaBases').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    let visibles = 0;
    for (let fila of filas) {
        const codigo = fila.cells[0].textContent;
        const nombre = fila.cells[1].textContent;
        const tipo   = fila.cells[2].textContent;
        const estado = fila.cells[3].textContent;
        let mostrar = true;
        if (busqueda && !codigo.includes(busqueda) && !nombre.toUpperCase().includes(busqueda)) mostrar = false;
        if (filtroTipo   && !tipo.includes(filtroTipo))   mostrar = false;
        if (filtroEstado && !estado.includes(filtroEstado)) mostrar = false;
        fila.style.display = mostrar ? '' : 'none';
        if (mostrar) visibles++;
    }
    document.getElementById('totalBases').textContent = visibles;
}

document.addEventListener('DOMContentLoaded', function() {
    const b = document.getElementById('buscarBase');
    if (b) b.addEventListener('keyup', filtrarBases);
    const ft = document.getElementById('filtroTipo');
    const fe = document.getElementById('filtroEstado');
    if (ft) ft.addEventListener('change', filtrarBases);
    if (fe) fe.addEventListener('change', filtrarBases);
});