let productosData = [
    { codigo:'104', nombre:'Tarima Estándar 100x120cm', tipo:'TARIMA', precioVenta:280.00, estado:'Activo',
      componentes:[{material:'MAT-002',nombre:'Madera Pino 2x4',cantidad:'20-30 piezas'},{material:'MAT-001',nombre:'Clavos 3"',cantidad:'0.5-0.8 kg'},{material:'MAT-003',nombre:'Arandelas M8',cantidad:'0.2-0.3 kg'}]},
    { codigo:'125', nombre:'Tarima Industrial 120x120cm', tipo:'TARIMA', precioVenta:340.00, estado:'Activo',
      componentes:[{material:'MAT-002',nombre:'Madera Pino 2x4',cantidad:'30-40 piezas'},{material:'MAT-006',nombre:'Madera Encino 3x6',cantidad:'10-15 piezas'},{material:'MAT-001',nombre:'Clavos 3"',cantidad:'0.8-1.2 kg'},{material:'MAT-003',nombre:'Arandelas M8',cantidad:'0.3-0.5 kg'}]},
    { codigo:'CAJA-RSC-01', nombre:'Caja RSC 40x30x30cm', tipo:'CAJA', precioVenta:45.00, estado:'Activo',
      componentes:[{material:'MAT-004',nombre:'Cartón RSC',cantidad:'0.8-1.2 m²'},{material:'MAT-030',nombre:'Adhesivo Almidón',cantidad:'0.05-0.1 kg'}]}
];

function guardarProducto() {
    const codigo = document.getElementById('codigoProducto').value.trim().toUpperCase();
    const tipo   = document.getElementById('tipoProducto').value;
    const nombre = document.getElementById('nombreProducto').value.trim();
    const precio = parseFloat(document.getElementById('precioVenta').value);
    if (!codigo || !tipo || !nombre || !precio) { mostrarNotificacion('Complete todos los campos requeridos', 'error'); return; }
    const mats = document.querySelectorAll('select[name="material[]"]');
    const cants = document.querySelectorAll('input[name="cantidad[]"]');
    const componentes = [];
    mats.forEach((m, i) => { if (m.value && cants[i].value) componentes.push({ material: m.value, nombre: m.options[m.selectedIndex].text, cantidad: cants[i].value }); });
    if (!componentes.length) { mostrarNotificacion('Agregue al menos un componente', 'warning'); return; }
    productosData.push({ codigo, nombre, tipo, precioVenta: precio, estado:'Activo', componentes });
    bootstrap.Modal.getInstance(document.getElementById('modalNuevoProducto')).hide();
    mostrarNotificacion(`Producto ${codigo} registrado`, 'success');
    setTimeout(() => location.reload(), 1000);
}

function agregarComponente() {
    const c = document.getElementById('componentesContainer');
    const div = document.createElement('div');
    div.className = 'row componente-row mb-2';
    div.innerHTML = `<div class="col-md-5"><select class="form-select" name="material[]"><option value="">Seleccionar...</option><option value="MAT-002">Madera Pino 2x4</option><option value="MAT-006">Madera Encino 3x6</option><option value="MAT-001">Clavos 3"</option><option value="MAT-004">Cartón RSC</option></select></div><div class="col-md-4"><input type="text" class="form-control" name="cantidad[]" placeholder="Ej: 20-30 piezas"></div><div class="col-md-3"><button type="button" class="btn btn-sm btn-danger" onclick="eliminarComponente(this)"><i class="bi bi-trash"></i></button></div>`;
    c.appendChild(div);
}

function eliminarComponente(b) { b.closest('.componente-row').remove(); }

function verComponentes(codigo) {
    const p = productosData.find(x => x.codigo === codigo);
    if (!p) return;
    let html = `<h6>${p.nombre}</h6><hr><table class="table table-sm"><thead><tr><th>Material</th><th>Cantidad Aprox.</th></tr></thead><tbody>`;
    p.componentes.forEach(c => { html += `<tr><td>${c.nombre}</td><td>${c.cantidad}</td></tr>`; });
    html += `</tbody></table><div class="alert alert-info small"><i class="bi bi-info-circle"></i> Las cantidades son aproximadas</div>`;
    document.getElementById('componentesDetalle').innerHTML = html;
    new bootstrap.Modal(document.getElementById('modalComponentes')).show();
}

function editarProducto(codigo) {
    const p = productosData.find(x => x.codigo === codigo);
    if (!p) return;
    const nuevo = prompt(`Editar precio de ${p.nombre}:`, p.precioVenta);
    if (nuevo && !isNaN(nuevo)) { p.precioVenta = parseFloat(nuevo); mostrarNotificacion(`Producto ${codigo} actualizado`, 'success'); setTimeout(() => location.reload(), 1000); }
}

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modalNuevoProducto');
    if (modal) modal.addEventListener('show.bs.modal', function () {
        const c = document.getElementById('componentesContainer');
        if (c && c.children.length === 0) agregarComponente();
    });
});