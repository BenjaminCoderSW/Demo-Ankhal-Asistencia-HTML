// materiales.js - Funciones específicas para gestión de materiales

// Datos simulados de materiales
let materialesData = [
    // Materiales en ROJO (críticos)
    { codigo: 'MAT-001', nombre: 'Clavos 3"', tipo: 'INSUMOS', stockActual: 45, unidad: 'kg', precioUnit: 35.00, stockMin: 100, stockOpt: 200, estado: 'Activo' },
    { codigo: 'MAT-002', nombre: 'Madera Pino 2x4', tipo: 'MADERA', stockActual: 320, unidad: 'pies', precioUnit: 13.70, stockMin: 500, stockOpt: 1000, estado: 'Activo' },
    { codigo: 'MAT-003', nombre: 'Arandelas M8', tipo: 'INSUMOS', stockActual: 15, unidad: 'kg', precioUnit: 42.00, stockMin: 50, stockOpt: 100, estado: 'Activo' },
    { codigo: 'MAT-004', nombre: 'Cartón RSC', tipo: 'CARTÓN', stockActual: 120, unidad: 'm²', precioUnit: 85.00, stockMin: 300, stockOpt: 600, estado: 'Activo' },
    { codigo: 'MAT-005', nombre: 'Tuercas M10', tipo: 'INSUMOS', stockActual: 8, unidad: 'kg', precioUnit: 48.00, stockMin: 30, stockOpt: 80, estado: 'Activo' },
    
    // Materiales en AMARILLO (atención)
    { codigo: 'MAT-006', nombre: 'Madera Encino 3x6', tipo: 'MADERA', stockActual: 620, unidad: 'pies', precioUnit: 18.50, stockMin: 400, stockOpt: 1000, estado: 'Activo' },
    { codigo: 'MAT-007', nombre: 'Cartón Doble Pared', tipo: 'CARTÓN', stockActual: 480, unidad: 'm²', precioUnit: 125.00, stockMin: 300, stockOpt: 800, estado: 'Activo' },
    { codigo: 'MAT-008', nombre: 'Clavos 2.5"', tipo: 'INSUMOS', stockActual: 85, unidad: 'kg', precioUnit: 32.00, stockMin: 60, stockOpt: 150, estado: 'Activo' },
    
    // Materiales en VERDE (óptimo)
    { codigo: 'MAT-009', nombre: 'Madera Pino 4x6 Tratamiento Térmico', tipo: 'MADERA', stockActual: 1850, unidad: 'pies', precioUnit: 22.00, stockMin: 800, stockOpt: 1500, estado: 'Activo' },
    { codigo: 'MAT-010', nombre: 'Cartón Troquelado', tipo: 'CARTÓN', stockActual: 950, unidad: 'm²', precioUnit: 95.00, stockMin: 400, stockOpt: 700, estado: 'Activo' }
];

// Calcular nivel de alerta
function calcularNivelAlerta(material) {
    if (material.stockActual <= material.stockMin) {
        return { nivel: 'ROJO', clase: 'danger', icono: 'bi-circle-fill text-danger' };
    } else if (material.stockActual < material.stockOpt) {
        return { nivel: 'AMARILLO', clase: 'warning', icono: 'bi-circle-fill text-warning' };
    } else {
        return { nivel: 'VERDE', clase: '', icono: 'bi-circle-fill text-success' };
    }
}

// Guardar nuevo material
function guardarMaterial() {
    const codigo = document.getElementById('codigoMaterial').value.trim().toUpperCase();
    const tipo = document.getElementById('tipoMaterial').value;
    const nombre = document.getElementById('nombreMaterial').value.trim();
    const unidad = document.getElementById('unidadMedida').value;
    const precio = parseFloat(document.getElementById('precioUnitario').value);
    const stockMin = parseFloat(document.getElementById('stockMinimo').value);
    const stockOpt = parseFloat(document.getElementById('stockOptimo').value);
    const estado = document.getElementById('estadoMaterial').value;
    
    // Validaciones
    if (!codigo || !tipo || !nombre || !unidad || !precio || !stockMin || !stockOpt) {
        mostrarNotificacion('Por favor complete todos los campos requeridos', 'error');
        return;
    }
    
    if (stockMin >= stockOpt) {
        mostrarNotificacion('El stock óptimo debe ser mayor al stock mínimo', 'error');
        return;
    }
    
    // Verificar si el código ya existe
    const existe = materialesData.find(mat => mat.codigo === codigo);
    if (existe) {
        mostrarNotificacion(`El código ${codigo} ya existe`, 'error');
        return;
    }
    
    // Agregar nuevo material
    materialesData.push({
        codigo: codigo,
        nombre: nombre,
        tipo: tipo,
        stockActual: 0,
        unidad: unidad,
        precioUnit: precio,
        stockMin: stockMin,
        stockOpt: stockOpt,
        estado: estado
    });
    
    // Cerrar modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalNuevoMaterial'));
    modal.hide();
    
    // Limpiar formulario
    document.getElementById('formNuevoMaterial').reset();
    
    // Mostrar notificación
    mostrarNotificacion(`Material ${codigo} registrado exitosamente`, 'success');
    
    // Recargar tabla
    setTimeout(() => {
        location.reload();
    }, 1000);
}

// Ver detalle de material
function verDetalleMaterial(codigo) {
    const material = materialesData.find(m => m.codigo === codigo);
    if (material) {
        const alerta = calcularNivelAlerta(material);
        const valorStock = material.stockActual * material.precioUnit;
        
        alert(`Detalle de ${material.nombre}

Código: ${material.codigo}
Tipo: ${material.tipo}
Stock Actual: ${material.stockActual} ${material.unidad}
Precio Unitario: ${formatearMoneda(material.precioUnit)}
Valor en Stock: ${formatearMoneda(valorStock)}

Niveles:
- Mínimo: ${material.stockMin} ${material.unidad}
- Óptimo: ${material.stockOpt} ${material.unidad}

Alerta: ${alerta.nivel}

Esta funcionalidad mostrará un modal con:
- Historial de movimientos
- Stock por base
- Gráfica de consumo
- Proveedores
- Productos que usan este material`);
    }
}

// Editar material
function editarMaterial(codigo) {
    const material = materialesData.find(m => m.codigo === codigo);
    if (material) {
        // En producción, esto abriría un modal con el formulario pre-llenado
        const nuevoPrecio = prompt(`Editar precio de ${material.nombre}:`, material.precioUnit);
        if (nuevoPrecio && !isNaN(nuevoPrecio)) {
            material.precioUnit = parseFloat(nuevoPrecio);
            mostrarNotificacion(`Material ${codigo} actualizado`, 'success');
            setTimeout(() => {
                location.reload();
            }, 1000);
        }
    }
}

// Filtrar materiales
function filtrarMateriales() {
    const busqueda = document.getElementById('buscarMaterial');
    const filtroTipo = document.getElementById('filtroTipo');
    const filtroAlerta = document.getElementById('filtroAlerta');
    const filtroEstado = document.getElementById('filtroEstado');
    
    if (!busqueda) return;
    
    const busquedaTexto = busqueda.value.toUpperCase();
    const tipoSeleccionado = filtroTipo ? filtroTipo.value : '';
    const alertaSeleccionada = filtroAlerta ? filtroAlerta.value : '';
    const estadoSeleccionado = filtroEstado ? filtroEstado.value : '';
    
    // Aquí iría la lógica de filtrado de la tabla
    console.log('Filtrando materiales...', busquedaTexto, tipoSeleccionado, alertaSeleccionada, estadoSeleccionado);
}

// Cargar más materiales (paginación simulada)
function cargarMasMateriales() {
    mostrarNotificacion('Cargando más materiales...', 'info');
    setTimeout(() => {
        mostrarNotificacion('Se mostraron todos los materiales disponibles', 'success');
    }, 1000);
}

// Generar reporte de materiales críticos
function generarReporteCriticos() {
    const criticos = materialesData.filter(m => {
        const alerta = calcularNivelAlerta(m);
        return alerta.nivel === 'ROJO';
    });
    
    if (criticos.length === 0) {
        mostrarNotificacion('No hay materiales en nivel crítico', 'success');
        return;
    }
    
    let reporte = `MATERIALES EN NIVEL CRÍTICO (${criticos.length})\n\n`;
    criticos.forEach(mat => {
        reporte += `${mat.codigo} - ${mat.nombre}\n`;
        reporte += `Stock: ${mat.stockActual} ${mat.unidad} (Mínimo: ${mat.stockMin})\n`;
        reporte += `Sugerencia: Pedir ${mat.stockOpt - mat.stockActual} ${mat.unidad}\n\n`;
    });
    
    alert(reporte);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Buscar al escribir
    const buscarInput = document.getElementById('buscarMaterial');
    if (buscarInput) {
        buscarInput.addEventListener('keyup', filtrarMateriales);
    }
    
    // Filtros
    const filtroTipo = document.getElementById('filtroTipo');
    const filtroAlerta = document.getElementById('filtroAlerta');
    const filtroEstado = document.getElementById('filtroEstado');
    
    if (filtroTipo) filtroTipo.addEventListener('change', filtrarMateriales);
    if (filtroAlerta) filtroAlerta.addEventListener('change', filtrarMateriales);
    if (filtroEstado) filtroEstado.addEventListener('change', filtrarMateriales);
    
    // Validar stock óptimo > stock mínimo
    const stockMin = document.getElementById('stockMinimo');
    const stockOpt = document.getElementById('stockOptimo');
    
    if (stockMin && stockOpt) {
        const validarStocks = () => {
            const min = parseFloat(stockMin.value) || 0;
            const opt = parseFloat(stockOpt.value) || 0;
            
            if (min > 0 && opt > 0 && min >= opt) {
                stockOpt.setCustomValidity('El stock óptimo debe ser mayor al mínimo');
            } else {
                stockOpt.setCustomValidity('');
            }
        };
        
        stockMin.addEventListener('change', validarStocks);
        stockOpt.addEventListener('change', validarStocks);
    }
});
