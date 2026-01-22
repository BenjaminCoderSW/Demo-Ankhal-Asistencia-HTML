// productos.js - Funciones específicas para gestión de productos

// Datos simulados de productos con componentes
let productosData = [
    {
        codigo: '104',
        nombre: 'Tarima Estándar 100x120cm',
        tipo: 'TARIMA',
        precioVenta: 280.00,
        estado: 'Activo',
        componentes: [
            { material: 'MAT-002', nombre: 'Madera Pino 2x4', cantidad: '20-30 piezas' },
            { material: 'MAT-001', nombre: 'Clavos 3"', cantidad: '0.5-0.8 kg' },
            { material: 'MAT-003', nombre: 'Arandelas M8', cantidad: '0.2-0.3 kg' }
        ]
    },
    {
        codigo: '125',
        nombre: 'Tarima Industrial 120x120cm',
        tipo: 'TARIMA',
        precioVenta: 340.00,
        estado: 'Activo',
        componentes: [
            { material: 'MAT-002', nombre: 'Madera Pino 2x4', cantidad: '30-40 piezas' },
            { material: 'MAT-006', nombre: 'Madera Encino 3x6', cantidad: '10-15 piezas' },
            { material: 'MAT-001', nombre: 'Clavos 3"', cantidad: '0.8-1.2 kg' },
            { material: 'MAT-003', nombre: 'Arandelas M8', cantidad: '0.3-0.5 kg' }
        ]
    },
    {
        codigo: 'CAJA-RSC-01',
        nombre: 'Caja RSC 40x30x30cm',
        tipo: 'CAJA',
        precioVenta: 45.00,
        estado: 'Activo',
        componentes: [
            { material: 'MAT-004', nombre: 'Cartón RSC', cantidad: '0.8-1.2 m²' },
            { material: 'MAT-008', nombre: 'Adhesivo', cantidad: '0.05-0.1 litros' }
        ]
    }
];

// Guardar nuevo producto
function guardarProducto() {
    const codigo = document.getElementById('codigoProducto').value.trim().toUpperCase();
    const tipo = document.getElementById('tipoProducto').value;
    const nombre = document.getElementById('nombreProducto').value.trim();
    const precio = parseFloat(document.getElementById('precioVenta').value);
    
    // Validaciones
    if (!codigo || !tipo || !nombre || !precio) {
        mostrarNotificacion('Por favor complete todos los campos requeridos', 'error');
        return;
    }
    
    // Recopilar componentes
    const materiales = document.querySelectorAll('select[name="material[]"]');
    const cantidades = document.querySelectorAll('input[name="cantidad[]"]');
    const componentes = [];
    
    materiales.forEach((mat, index) => {
        if (mat.value && cantidades[index].value) {
            componentes.push({
                material: mat.value,
                nombre: mat.options[mat.selectedIndex].text,
                cantidad: cantidades[index].value
            });
        }
    });
    
    if (componentes.length === 0) {
        mostrarNotificacion('Agregue al menos un componente al producto', 'warning');
        return;
    }
    
    // Agregar producto
    productosData.push({
        codigo: codigo,
        nombre: nombre,
        tipo: tipo,
        precioVenta: precio,
        estado: 'Activo',
        componentes: componentes
    });
    
    // Cerrar modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalNuevoProducto'));
    modal.hide();
    
    // Limpiar formulario
    document.getElementById('formNuevoProducto').reset();
    document.getElementById('componentesContainer').innerHTML = '';
    agregarComponente(); // Agregar un componente vacío
    
    mostrarNotificacion(`Producto ${codigo} registrado exitosamente`, 'success');
    setTimeout(() => location.reload(), 1000);
}

// Agregar componente al formulario
function agregarComponente() {
    const container = document.getElementById('componentesContainer');
    const nuevoComponente = document.createElement('div');
    nuevoComponente.className = 'row componente-row mb-2';
    nuevoComponente.innerHTML = `
        <div class="col-md-5">
            <select class="form-select" name="material[]">
                <option value="">Seleccionar material...</option>
                <option value="MAT-002">Madera Pino 2x4</option>
                <option value="MAT-006">Madera Encino 3x6</option>
                <option value="MAT-001">Clavos 3"</option>
                <option value="MAT-004">Cartón RSC</option>
                <option value="MAT-007">Cartón Doble Pared</option>
            </select>
        </div>
        <div class="col-md-4">
            <input type="text" class="form-control" name="cantidad[]" placeholder="Ej: 20-30 piezas">
        </div>
        <div class="col-md-3">
            <button type="button" class="btn btn-sm btn-danger" onclick="eliminarComponente(this)">
                <i class="bi bi-trash"></i>
            </button>
        </div>
    `;
    container.appendChild(nuevoComponente);
}

// Eliminar componente
function eliminarComponente(boton) {
    const row = boton.closest('.componente-row');
    row.remove();
}

// Ver componentes de un producto
function verComponentes(codigo) {
    const producto = productosData.find(p => p.codigo === codigo);
    if (!producto) return;
    
    let html = `<h6>${producto.nombre}</h6><hr>`;
    html += '<table class="table table-sm">';
    html += '<thead><tr><th>Material</th><th>Cantidad Aproximada</th></tr></thead>';
    html += '<tbody>';
    
    producto.componentes.forEach(comp => {
        html += `<tr><td>${comp.nombre}</td><td>${comp.cantidad}</td></tr>`;
    });
    
    html += '</tbody></table>';
    html += '<div class="alert alert-info small mt-3">';
    html += '<i class="bi bi-info-circle"></i> Las cantidades son aproximadas debido a la variabilidad natural de los materiales';
    html += '</div>';
    
    document.getElementById('componentesDetalle').innerHTML = html;
    
    const modal = new bootstrap.Modal(document.getElementById('modalComponentes'));
    modal.show();
}

// Ver detalle de producto
function verDetalleProducto(codigo) {
    const producto = productosData.find(p => p.codigo === codigo);
    if (!producto) return;
    
    let mensaje = `${producto.nombre}\n\n`;
    mensaje += `Código: ${producto.codigo}\n`;
    mensaje += `Tipo: ${producto.tipo}\n`;
    mensaje += `Precio Venta: ${formatearMoneda(producto.precioVenta)}\n\n`;
    mensaje += `Componentes:\n`;
    
    producto.componentes.forEach((comp, i) => {
        mensaje += `${i + 1}. ${comp.nombre}: ${comp.cantidad}\n`;
    });
    
    alert(mensaje);
}

// Editar producto
function editarProducto(codigo) {
    const producto = productosData.find(p => p.codigo === codigo);
    if (!producto) return;
    
    const nuevoPrecio = prompt(`Editar precio de ${producto.nombre}:`, producto.precioVenta);
    if (nuevoPrecio && !isNaN(nuevoPrecio)) {
        producto.precioVenta = parseFloat(nuevoPrecio);
        mostrarNotificacion(`Producto ${codigo} actualizado`, 'success');
        setTimeout(() => location.reload(), 1000);
    }
}

// Cargar más productos
function cargarMasProductos() {
    mostrarNotificacion('Mostrando todos los productos...', 'info');
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    // Agregar primer componente al abrir modal
    const modalNuevo = document.getElementById('modalNuevoProducto');
    if (modalNuevo) {
        modalNuevo.addEventListener('show.bs.modal', function() {
            const container = document.getElementById('componentesContainer');
            if (container && container.children.length === 0) {
                agregarComponente();
            }
        });
    }
});
