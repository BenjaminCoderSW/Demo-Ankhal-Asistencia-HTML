// materiales.js — incluye subtipo para drill-down

let materialesData = [
    { codigo:'MAT-001', nombre:'Clavos 3"',           tipo:'INSUMOS', subtipo:'Clavos',    stockActual:45,   unidad:'kg',    precioUnit:35.00, stockMin:100, stockOpt:200, estado:'Activo' },
    { codigo:'MAT-002', nombre:'Madera Pino 2x4',      tipo:'MADERA',  subtipo:'Larga',     stockActual:320,  unidad:'pies',  precioUnit:13.70, stockMin:500, stockOpt:1000,estado:'Activo' },
    { codigo:'MAT-003', nombre:'Arandelas M8',         tipo:'INSUMOS', subtipo:'Arandelas', stockActual:15,   unidad:'kg',    precioUnit:42.00, stockMin:50,  stockOpt:100, estado:'Activo' },
    { codigo:'MAT-004', nombre:'Cartón RSC',           tipo:'CARTÓN',  subtipo:'Lámina',    stockActual:120,  unidad:'m²',    precioUnit:85.00, stockMin:300, stockOpt:600, estado:'Activo' },
    { codigo:'MAT-005', nombre:'Tuercas M10',          tipo:'INSUMOS', subtipo:'Tuercas',   stockActual:8,    unidad:'kg',    precioUnit:48.00, stockMin:30,  stockOpt:80,  estado:'Activo' },
    { codigo:'MAT-006', nombre:'Madera Encino 3x6',    tipo:'MADERA',  subtipo:'Larga',     stockActual:620,  unidad:'pies',  precioUnit:18.50, stockMin:400, stockOpt:1000,estado:'Activo' },
    { codigo:'MAT-007', nombre:'Cartón Doble Pared',   tipo:'CARTÓN',  subtipo:'Lámina',    stockActual:480,  unidad:'m²',    precioUnit:125.00,stockMin:300, stockOpt:800, estado:'Activo' },
    { codigo:'MAT-008', nombre:'Clavos 2.5"',          tipo:'INSUMOS', subtipo:'Clavos',    stockActual:85,   unidad:'kg',    precioUnit:32.00, stockMin:60,  stockOpt:150, estado:'Activo' },
    { codigo:'MAT-009', nombre:'Madera Pino 4x6 TT',   tipo:'MADERA',  subtipo:'Tratada',   stockActual:1850, unidad:'pies',  precioUnit:22.00, stockMin:800, stockOpt:1500,estado:'Activo' },
    { codigo:'MAT-010', nombre:'Cartón Troquelado',    tipo:'CARTÓN',  subtipo:'Lámina',    stockActual:950,  unidad:'m²',    precioUnit:95.00, stockMin:400, stockOpt:700, estado:'Activo' },
    { codigo:'MAT-013', nombre:'Polín 4x4 Pino',       tipo:'MADERA',  subtipo:'Polín',     stockActual:420,  unidad:'piezas',precioUnit:65.00, stockMin:200, stockOpt:500, estado:'Activo' },
    { codigo:'MAT-030', nombre:'Adhesivo Almidón',     tipo:'CARTÓN',  subtipo:'Pegamento', stockActual:380,  unidad:'kg',    precioUnit:35.00, stockMin:150, stockOpt:400, estado:'Activo' },
    { codigo:'MAT-033', nombre:'Pintura Negra Agua',   tipo:'CARTÓN',  subtipo:'Pintura',   stockActual:185,  unidad:'litros',precioUnit:85.00, stockMin:80,  stockOpt:200, estado:'Activo' },
    { codigo:'MAT-046', nombre:'Pija Auto Perf. 1"',   tipo:'INSUMOS', subtipo:'Pijas',     stockActual:95,   unidad:'kg',    precioUnit:55.00, stockMin:50,  stockOpt:150, estado:'Activo' },
    { codigo:'MAT-054', nombre:'Bisagra Metálica 3"',  tipo:'INSUMOS', subtipo:'Herrajes',  stockActual:240,  unidad:'piezas',precioUnit:22.00, stockMin:100, stockOpt:400, estado:'Activo' }
];

function calcularNivelAlerta(material) {
    if (material.stockActual <= material.stockMin)   return { nivel:'ROJO',     clase:'danger',  icono:'bi-circle-fill text-danger'  };
    if (material.stockActual <  material.stockOpt)   return { nivel:'AMARILLO', clase:'warning', icono:'bi-circle-fill text-warning' };
    return                                                  { nivel:'VERDE',    clase:'',        icono:'bi-circle-fill text-success' };
}

function guardarMaterial() {
    const codigo   = document.getElementById('codigoMaterial').value.trim().toUpperCase();
    const tipo     = document.getElementById('tipoMaterial').value;
    const subtipo  = document.getElementById('subtipoMaterial') ? document.getElementById('subtipoMaterial').value : '';
    const nombre   = document.getElementById('nombreMaterial').value.trim();
    const unidad   = document.getElementById('unidadMedida').value;
    const precio   = parseFloat(document.getElementById('precioUnitario').value);
    const stockMin = parseFloat(document.getElementById('stockMinimo').value);
    const stockOpt = parseFloat(document.getElementById('stockOptimo').value);
    const estado   = document.getElementById('estadoMaterial').value;
    if (!codigo || !tipo || !nombre || !unidad || !precio || !stockMin || !stockOpt) {
        mostrarNotificacion('Complete todos los campos requeridos', 'error'); return;
    }
    if (stockMin >= stockOpt) { mostrarNotificacion('El stock óptimo debe ser mayor al mínimo', 'error'); return; }
    if (materialesData.find(m => m.codigo === codigo)) { mostrarNotificacion(`El código ${codigo} ya existe`, 'error'); return; }
    materialesData.push({ codigo, nombre, tipo, subtipo, stockActual:0, unidad, precioUnit:precio, stockMin, stockOpt, estado });
    bootstrap.Modal.getInstance(document.getElementById('modalNuevoMaterial')).hide();
    document.getElementById('formNuevoMaterial').reset();
    mostrarNotificacion(`Material ${codigo} registrado`, 'success');
    setTimeout(() => location.reload(), 1000);
}

function generarDistribucionBases(stockTotal, bases) {
    const porcentajes = [35, 25, 25, 15];
    return bases.map((base, i) => ({ base, stock: Math.round(stockTotal * porcentajes[i] / 100), porcentaje: porcentajes[i] }));
}

function verDetalleMaterial(codigo) {
    const material = materialesData.find(m => m.codigo === codigo);
    if (!material) return;
    const alerta = calcularNivelAlerta(material);
    const valorStock = material.stockActual * material.precioUnit;
    const fmt = v => new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(v);

    document.getElementById('nombreMaterialDetalle').textContent = material.nombre;
    document.getElementById('detalleCodigo').textContent  = material.codigo;
    document.getElementById('detalleUnidad').textContent  = material.unidad;
    document.getElementById('detallePrecio').textContent  = fmt(material.precioUnit);
    document.getElementById('detalleEstado').innerHTML    = material.estado === 'Activo'
        ? '<span class="badge bg-success">Activo</span>'
        : '<span class="badge bg-secondary">Inactivo</span>';
    const tipoClases = { MADERA:'bg-warning', CARTÓN:'bg-info', INSUMOS:'bg-secondary' };
    document.getElementById('detalleTipo').innerHTML = `<span class="badge ${tipoClases[material.tipo]||'bg-secondary'}">${material.tipo}</span>
        ${material.subtipo ? `<span class="badge bg-light text-dark border ms-1">${material.subtipo}</span>` : ''}`;
    document.getElementById('detalleStockActual').textContent = `${material.stockActual} ${material.unidad}`;
    document.getElementById('detalleStockMin').textContent    = `${material.stockMin} ${material.unidad}`;
    document.getElementById('detalleStockOpt').textContent    = `${material.stockOpt} ${material.unidad}`;

    const card = document.getElementById('cardAlertaNivel');
    card.className = 'card';
    if (alerta.nivel==='ROJO')     card.classList.add('border-danger','bg-danger','bg-opacity-10');
    else if (alerta.nivel==='AMARILLO') card.classList.add('border-warning','bg-warning','bg-opacity-10');
    else card.classList.add('border-success','bg-success','bg-opacity-10');
    document.getElementById('iconoAlerta').className = 'bi ' + alerta.icono;

    const pct = Math.min((material.stockActual / material.stockOpt) * 100, 100);
    const barra = document.getElementById('barraProgreso');
    barra.style.width = pct + '%';
    barra.className   = 'progress-bar bg-' + alerta.clase;

    const dist = generarDistribucionBases(material.stockActual, ['TULA','WEG','SM','ATOTO']);
    document.getElementById('tablaStockBases').innerHTML = dist.map(d =>
        `<tr><td><strong>${d.base}</strong></td><td class="text-center">${d.stock} ${material.unidad}</td>
         <td class="text-center">${d.porcentaje}%</td><td class="text-end">${fmt(d.stock * material.precioUnit)}</td></tr>`
    ).join('');
    document.getElementById('totalStockBases').textContent  = `${material.stockActual} ${material.unidad}`;
    document.getElementById('totalValorBases').textContent  = fmt(valorStock);
    document.getElementById('detalleValorTotal').textContent = fmt(valorStock);

    new bootstrap.Modal(document.getElementById('modalDetalleMaterial')).show();
}

function editarMaterial(codigo) {
    const m = materialesData.find(m => m.codigo === codigo);
    if (!m) return;
    const nuevo = prompt(`Editar precio de ${m.nombre}:`, m.precioUnit);
    if (nuevo && !isNaN(nuevo)) {
        m.precioUnit = parseFloat(nuevo);
        mostrarNotificacion(`Material ${codigo} actualizado`, 'success');
        setTimeout(() => location.reload(), 1000);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const b = document.getElementById('buscarMaterial');
    if (b) b.addEventListener('keyup', () => {});
});