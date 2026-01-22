// bases.js - Funciones específicas para gestión de bases

// Datos simulados de bases
let basesData = [
    { codigo: 'TULA', nombre: 'Base Tula de Allende', tipo: 'Mixta', estado: 'Activa', stockActual: 770000 },
    { codigo: 'WEG', nombre: 'Planta WEG', tipo: 'Producción', estado: 'Activa', stockActual: 660000 },
    { codigo: 'SM', nombre: 'Base SM', tipo: 'Almacén', estado: 'Activa', stockActual: 420000 },
    { codigo: 'ATOTO', nombre: 'Base Atoto', tipo: 'Mixta', estado: 'Activa', stockActual: 330000 },
    { codigo: 'ARKAM', nombre: 'Base Arkam', tipo: 'Mixta', estado: 'Activa', stockActual: 300000 },
    { codigo: 'NAVE4', nombre: 'Nave 4', tipo: 'Almacén', estado: 'Activa', stockActual: 250000 },
    { codigo: 'VOLTRAN', nombre: 'Base Voltran', tipo: 'Producción', estado: 'Activa', stockActual: 180000 },
    { codigo: 'BRASKEM', nombre: 'Base Braskem', tipo: 'Mixta', estado: 'Activa', stockActual: 150000 },
    { codigo: 'FIBRAMEX', nombre: 'Base Fibramex', tipo: 'Almacén', estado: 'Activa', stockActual: 120000 },
    { codigo: 'QRO', nombre: 'Base Querétaro', tipo: 'Producción', estado: 'Activa', stockActual: 95000 },
    { codigo: 'TULTENGO', nombre: 'Base Tultengo', tipo: 'Almacén', estado: 'Activa', stockActual: 75000 },
    { codigo: 'MP', nombre: 'Materia Prima Central', tipo: 'Almacén', estado: 'Activa', stockActual: 450000 },
    { codigo: 'PT', nombre: 'Producto Terminado Central', tipo: 'Almacén', estado: 'Activa', stockActual: 380000 }
];

// Guardar nueva base
function guardarBase() {
    const codigo = document.getElementById('codigoBase').value.trim().toUpperCase();
    const nombre = document.getElementById('nombreBase').value.trim();
    const tipo = document.getElementById('tipoBase').value;
    const estado = document.getElementById('estadoBase').value;
    
    // Validaciones
    if (!codigo || !nombre || !tipo) {
        mostrarNotificacion('Por favor complete todos los campos requeridos', 'error');
        return;
    }
    
    // Verificar si el código ya existe
    const existe = basesData.find(base => base.codigo === codigo);
    if (existe) {
        mostrarNotificacion(`El código ${codigo} ya existe`, 'error');
        return;
    }
    
    // Agregar nueva base
    basesData.push({
        codigo: codigo,
        nombre: nombre,
        tipo: tipo,
        estado: estado,
        stockActual: 0
    });
    
    // Cerrar modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalNuevaBase'));
    modal.hide();
    
    // Limpiar formulario
    document.getElementById('formNuevaBase').reset();
    
    // Mostrar notificación
    mostrarNotificacion(`Base ${codigo} registrada exitosamente`, 'success');
    
    // Recargar tabla (en producción sería actualización dinámica)
    setTimeout(() => {
        location.reload();
    }, 1000);
}

// Ver detalle de base
function verDetalle(codigo) {
    const base = basesData.find(b => b.codigo === codigo);
    if (base) {
        alert(`Detalle de ${base.nombre}
        
Código: ${base.codigo}
Tipo: ${base.tipo}
Estado: ${base.estado}
Stock Actual: ${formatearMoneda(base.stockActual)}

Esta funcionalidad mostrará un modal con información detallada de la base, 
incluyendo inventario por material y producto, movimientos recientes, etc.`);
    }
}

// Editar base
function editarBase(codigo) {
    const base = basesData.find(b => b.codigo === codigo);
    if (base) {
        // En producción, esto abriría un modal con el formulario pre-llenado
        const nuevoNombre = prompt(`Editar nombre de ${codigo}:`, base.nombre);
        if (nuevoNombre && nuevoNombre.trim()) {
            base.nombre = nuevoNombre.trim();
            mostrarNotificacion(`Base ${codigo} actualizada`, 'success');
            setTimeout(() => {
                location.reload();
            }, 1000);
        }
    }
}

// Filtrar bases
function filtrarBases() {
    const busqueda = document.getElementById('buscarBase').value.toUpperCase();
    const filtroTipo = document.getElementById('filtroTipo').value;
    const filtroEstado = document.getElementById('filtroEstado').value;
    
    const tabla = document.getElementById('tablaBases');
    const filas = tabla.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    
    let visibles = 0;
    
    for (let i = 0; i < filas.length; i++) {
        const fila = filas[i];
        const codigo = fila.cells[0].textContent;
        const nombre = fila.cells[1].textContent;
        const tipo = fila.cells[2].textContent;
        const estado = fila.cells[3].textContent;
        
        let mostrar = true;
        
        // Filtro de búsqueda
        if (busqueda && !codigo.includes(busqueda) && !nombre.toUpperCase().includes(busqueda)) {
            mostrar = false;
        }
        
        // Filtro de tipo
        if (filtroTipo && !tipo.includes(filtroTipo)) {
            mostrar = false;
        }
        
        // Filtro de estado
        if (filtroEstado && !estado.includes(filtroEstado)) {
            mostrar = false;
        }
        
        fila.style.display = mostrar ? '' : 'none';
        if (mostrar) visibles++;
    }
    
    // Actualizar contador
    document.getElementById('totalBases').textContent = visibles;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Buscar al escribir
    const buscarInput = document.getElementById('buscarBase');
    if (buscarInput) {
        buscarInput.addEventListener('keyup', filtrarBases);
    }
    
    // Filtros
    const filtroTipo = document.getElementById('filtroTipo');
    const filtroEstado = document.getElementById('filtroEstado');
    
    if (filtroTipo) filtroTipo.addEventListener('change', filtrarBases);
    if (filtroEstado) filtroEstado.addEventListener('change', filtrarBases);
});
