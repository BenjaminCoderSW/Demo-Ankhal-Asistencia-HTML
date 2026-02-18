// paquetes.js — Módulo de Paquetes/Bundles Ankhal

// =====================================================
// DATOS DE PAQUETES
// =====================================================

let paquetesData = [
    {
        id: 'PKG-001',
        codigo: 'PKG-001',
        nombre: 'Paquete Mudanza Estándar',
        descripcion: 'Paquete básico para mudanza residencial',
        estado: 'Activo',
        componentes: [
            { tipo: 'producto', itemId: '104',         nombre: 'Tarima Estándar 100x120cm',  cantidad: 2,   precioUnitario: 280.00  },
            { tipo: 'producto', itemId: 'CAJA-RSC-01', nombre: 'Caja RSC 40x30x30cm',        cantidad: 10,  precioUnitario: 45.00   },
            { tipo: 'material', itemId: 'MAT-037',     nombre: 'Cinta de Empaque',            cantidad: 2,   precioUnitario: 28.00   }
        ]
    },
    {
        id: 'PKG-002',
        codigo: 'PKG-002',
        nombre: 'Paquete Industrial WEG',
        descripcion: 'Paquete para entregas industriales en planta WEG',
        estado: 'Activo',
        componentes: [
            { tipo: 'producto', itemId: '125',         nombre: 'Tarima Industrial 120x120cm', cantidad: 5,   precioUnitario: 340.00  },
            { tipo: 'producto', itemId: 'CAJA-DP-01',  nombre: 'Caja Doble Pared 60x40x40cm',cantidad: 8,   precioUnitario: 95.00   },
            { tipo: 'material', itemId: 'MAT-042',     nombre: 'Espuma Protectora',           cantidad: 10,  precioUnitario: 45.00   },
            { tipo: 'material', itemId: 'MAT-043',     nombre: 'Película Stretch',            cantidad: 2,   precioUnitario: 75.00   }
        ]
    },
    {
        id: 'PKG-003',
        codigo: 'PKG-003',
        nombre: 'Paquete Exportación',
        descripcion: 'Paquete para envíos de exportación con tratamiento fitosanitario',
        estado: 'Activo',
        componentes: [
            { tipo: 'producto', itemId: '104',         nombre: 'Tarima Estándar 100x120cm',  cantidad: 4,   precioUnitario: 280.00  },
            { tipo: 'material', itemId: 'MAT-009',     nombre: 'Madera Pino 4x6 TT',         cantidad: 20,  precioUnitario: 22.00   },
            { tipo: 'material', itemId: 'MAT-038',     nombre: 'Fleje de Plástico',           cantidad: 3,   precioUnitario: 55.00   },
            { tipo: 'material', itemId: 'MAT-037',     nombre: 'Cinta de Empaque',            cantidad: 4,   precioUnitario: 28.00   }
        ]
    },
    {
        id: 'PKG-004',
        codigo: 'PKG-004',
        nombre: 'Kit Pequeño Empresas',
        descripcion: 'Solución económica para pequeños negocios',
        estado: 'Activo',
        componentes: [
            { tipo: 'producto', itemId: 'CAJA-RSC-01', nombre: 'Caja RSC 40x30x30cm',        cantidad: 20,  precioUnitario: 45.00   },
            { tipo: 'material', itemId: 'MAT-037',     nombre: 'Cinta de Empaque',            cantidad: 5,   precioUnitario: 28.00   },
            { tipo: 'material', itemId: 'MAT-039',     nombre: 'Esquinero Cartón',            cantidad: 40,  precioUnitario: 3.50    }
        ]
    }
];

// Catálogo combinado de ítems disponibles para agregar a un paquete
const itemsCatalogo = {
    productos: [
        { id: '104',         nombre: 'Tarima Estándar 100x120cm',   tipo: 'TARIMA',    precio: 280.00  },
        { id: '125',         nombre: 'Tarima Industrial 120x120cm', tipo: 'TARIMA',    precio: 340.00  },
        { id: '14380071',    nombre: 'Tarima Base Reforzada',       tipo: 'TARIMA',    precio: 450.00  },
        { id: 'CAJA-RSC-01', nombre: 'Caja RSC 40x30x30cm',        tipo: 'CAJA',      precio: 45.00   },
        { id: 'CAJA-DP-01',  nombre: 'Caja Doble Pared 60x40x40cm',tipo: 'CAJA',      precio: 95.00   },
        { id: 'FIB001',      nombre: 'Fibergrate Panel 100x50cm',   tipo: 'ACCESORIO', precio: 1200.00 }
    ],
    materiales: [
        { id: 'MAT-009', nombre: 'Madera Pino 4x6 TT',       unidad: 'pies',   precio: 22.00  },
        { id: 'MAT-013', nombre: 'Polín 4x4 Pino',           unidad: 'piezas', precio: 65.00  },
        { id: 'MAT-030', nombre: 'Adhesivo Almidón',          unidad: 'kg',     precio: 35.00  },
        { id: 'MAT-037', nombre: 'Cinta de Empaque',          unidad: 'rollos', precio: 28.00  },
        { id: 'MAT-038', nombre: 'Fleje de Plástico',         unidad: 'rollos', precio: 55.00  },
        { id: 'MAT-039', nombre: 'Esquinero Cartón',          unidad: 'piezas', precio: 3.50   },
        { id: 'MAT-040', nombre: 'Separadores Internos',      unidad: 'piezas', precio: 5.20   },
        { id: 'MAT-042', nombre: 'Espuma Protectora',         unidad: 'm²',     precio: 45.00  },
        { id: 'MAT-043', nombre: 'Película Stretch',          unidad: 'rollos', precio: 75.00  },
        { id: 'MAT-054', nombre: 'Bisagra Metálica 3"',       unidad: 'piezas', precio: 22.00  },
        { id: 'MAT-055', nombre: 'Escuadra Refuerzo 4"',      unidad: 'piezas', precio: 18.00  }
    ]
};

// =====================================================
// CÁLCULO DE PRECIO TOTAL DEL PAQUETE
// =====================================================

function calcularPrecioPaquete(componentes) {
    return componentes.reduce((sum, c) => sum + (c.cantidad * c.precioUnitario), 0);
}

// =====================================================
// DISPONIBILIDAD: CUÁNTOS PAQUETES SE PUEDEN ARMAR
// =====================================================

// Stock simulado (en un sistema real vendría de la BD)
const stockSimulado = {
    productos: {
        '104':         { buenas: 750,  rechazo: 20  },
        '125':         { buenas: 490,  rechazo: 15  },
        'CAJA-RSC-01': { buenas: 2500, rechazo: 50  },
        'CAJA-DP-01':  { buenas: 800,  rechazo: 20  },
        'FIB001':      { buenas: 120,  rechazo: 5   }
    },
    materiales: {
        'MAT-009': 1850, 'MAT-013': 420, 'MAT-030': 380,
        'MAT-037': 420,  'MAT-038': 180, 'MAT-039': 2400,
        'MAT-040': 1800, 'MAT-042': 240, 'MAT-043': 85,
        'MAT-054': 240,  'MAT-055': 380
    }
};

function calcularDisponibilidad(paquete) {
    let minDisponible = Infinity;
    for (const comp of paquete.componentes) {
        let stockActual;
        if (comp.tipo === 'producto') {
            stockActual = (stockSimulado.productos[comp.itemId]?.buenas || 0);
        } else {
            stockActual = (stockSimulado.materiales[comp.itemId] || 0);
        }
        const posibles = Math.floor(stockActual / comp.cantidad);
        if (posibles < minDisponible) minDisponible = posibles;
    }
    return minDisponible === Infinity ? 0 : minDisponible;
}

// =====================================================
// RENDER DE LA TABLA DE PAQUETES
// =====================================================

function renderTablaPaquetes() {
    const tbody = document.getElementById('listaPaquetes');
    if (!tbody) return;

    const fmt = v => '$' + v.toLocaleString('es-MX', { minimumFractionDigits: 2 });
    tbody.innerHTML = '';

    paquetesData.forEach(pkg => {
        const precio = calcularPrecioPaquete(pkg.componentes);
        const disponibles = calcularDisponibilidad(pkg);
        const alertaClass = disponibles === 0 ? 'table-danger' :
                            disponibles < 5  ? 'table-warning' : '';
        const alertaIcon = disponibles === 0
            ? '<i class="bi bi-circle-fill text-danger" title="Sin stock"></i>'
            : disponibles < 5
                ? '<i class="bi bi-circle-fill text-warning" title="Stock bajo"></i>'
                : '<i class="bi bi-circle-fill text-success" title="Disponible"></i>';

        tbody.innerHTML += `
        <tr class="${alertaClass}">
            <td>${alertaIcon}</td>
            <td><strong>${pkg.codigo}</strong></td>
            <td>
                <strong>${pkg.nombre}</strong><br>
                <small class="text-muted">${pkg.descripcion || ''}</small>
            </td>
            <td>
                <span class="badge bg-info">${pkg.componentes.filter(c=>c.tipo==='producto').length} productos</span>
                <span class="badge bg-secondary ms-1">${pkg.componentes.filter(c=>c.tipo==='material').length} materiales</span>
            </td>
            <td class="text-end"><strong>${fmt(precio)}</strong></td>
            <td class="text-center">
                <span class="badge ${disponibles === 0 ? 'bg-danger' : disponibles < 5 ? 'bg-warning text-dark' : 'bg-success'}">
                    ${disponibles} disponibles
                </span>
            </td>
            <td><span class="badge ${pkg.estado==='Activo'?'bg-success':'bg-secondary'}">${pkg.estado}</span></td>
            <td class="text-center">
                <button class="btn btn-sm btn-info btn-action" onclick="verDetallePaquete('${pkg.id}')" title="Ver detalle">
                    <i class="bi bi-eye"></i>
                </button>
                <button class="btn btn-sm btn-success btn-action" onclick="abrirMovimientoPaquete('${pkg.id}')" title="Registrar movimiento">
                    <i class="bi bi-arrow-left-right"></i>
                </button>
                <button class="btn btn-sm btn-warning btn-action" onclick="editarPaquete('${pkg.id}')" title="Editar">
                    <i class="bi bi-pencil"></i>
                </button>
            </td>
        </tr>`;
    });

    document.getElementById('totalPaquetes').textContent = paquetesData.length;
}

// =====================================================
// VER DETALLE DEL PAQUETE
// =====================================================

function verDetallePaquete(id) {
    const pkg = paquetesData.find(p => p.id === id);
    if (!pkg) return;

    const fmt = v => '$' + v.toLocaleString('es-MX', { minimumFractionDigits: 2 });
    const precio = calcularPrecioPaquete(pkg.componentes);
    const disponibles = calcularDisponibilidad(pkg);

    document.getElementById('detallePaqueteNombre').textContent = pkg.nombre;
    document.getElementById('detallePaqueteCodigo').textContent = pkg.codigo;
    document.getElementById('detallePaqueteDescripcion').textContent = pkg.descripcion || '—';
    document.getElementById('detallePaqueteEstado').innerHTML =
        `<span class="badge ${pkg.estado==='Activo'?'bg-success':'bg-secondary'}">${pkg.estado}</span>`;
    document.getElementById('detallePaquetePrecio').textContent = fmt(precio);
    document.getElementById('detallePaqueteDisponibles').innerHTML =
        `<span class="badge fs-6 ${disponibles===0?'bg-danger':disponibles<5?'bg-warning text-dark':'bg-success'}">${disponibles} paquetes</span>`;

    // Tabla de componentes
    let html = '';
    pkg.componentes.forEach(comp => {
        const subtotal = comp.cantidad * comp.precioUnitario;
        const badgeColor = comp.tipo === 'producto' ? 'bg-warning' : 'bg-secondary';
        const tipoLabel = comp.tipo === 'producto' ? 'Producto' : 'Material';
        html += `
        <tr>
            <td><span class="badge ${badgeColor}">${tipoLabel}</span></td>
            <td><small class="text-muted">${comp.itemId}</small></td>
            <td>${comp.nombre}</td>
            <td class="text-center">${comp.cantidad}</td>
            <td class="text-end">${fmt(comp.precioUnitario)}</td>
            <td class="text-end"><strong>${fmt(subtotal)}</strong></td>
        </tr>`;
    });
    document.getElementById('detalleComponentesBody').innerHTML = html;
    document.getElementById('detallePrecioTotal').textContent = fmt(precio);

    new bootstrap.Modal(document.getElementById('modalDetallePaquete')).show();
}

// =====================================================
// GUARDAR NUEVO PAQUETE
// =====================================================

let componentesTemp = [];

function inicializarFormPaquete() {
    componentesTemp = [];
    document.getElementById('formNuevoPaquete').reset();
    document.getElementById('listaComponentesForm').innerHTML = '';
    document.getElementById('precioTotalCalculado').textContent = '$0.00';
    agregarComponentePaquete();
}

function agregarComponentePaquete() {
    const idx = componentesTemp.length;
    componentesTemp.push({ tipo: '', itemId: '', nombre: '', cantidad: 1, precioUnitario: 0 });

    const div = document.createElement('div');
    div.className = 'card mb-2 componente-paquete-row';
    div.dataset.idx = idx;
    div.innerHTML = `
    <div class="card-body py-2 px-3">
        <div class="row align-items-center g-2">
            <div class="col-md-2">
                <select class="form-select form-select-sm" onchange="cambiarTipoItem(this, ${idx})" required>
                    <option value="">Tipo...</option>
                    <option value="producto">Producto</option>
                    <option value="material">Material</option>
                </select>
            </div>
            <div class="col-md-5">
                <select class="form-select form-select-sm item-selector" id="itemSelect_${idx}"
                        onchange="seleccionarItem(this, ${idx})" required disabled>
                    <option value="">Seleccione tipo primero...</option>
                </select>
            </div>
            <div class="col-md-2">
                <input type="number" class="form-control form-control-sm text-center"
                       id="cantidadComp_${idx}" placeholder="Cant." min="1" value="1"
                       onchange="actualizarCantidad(this, ${idx})" required>
            </div>
            <div class="col-md-2">
                <div class="input-group input-group-sm">
                    <span class="input-group-text">$</span>
                    <input type="text" class="form-control" id="precioComp_${idx}"
                           placeholder="0.00" readonly style="background:#f8f9fa;">
                </div>
            </div>
            <div class="col-md-1 text-end">
                <button type="button" class="btn btn-sm btn-outline-danger"
                        onclick="eliminarComponentePaquete(${idx})" title="Eliminar">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
        <div class="row mt-1" id="subtotalRow_${idx}" style="display:none;">
            <div class="col text-end">
                <small class="text-muted">Subtotal: <strong id="subtotalComp_${idx}">$0.00</strong></small>
            </div>
        </div>
    </div>`;
    document.getElementById('listaComponentesForm').appendChild(div);
}

function cambiarTipoItem(select, idx) {
    const tipo = select.value;
    componentesTemp[idx].tipo = tipo;
    componentesTemp[idx].itemId = '';
    componentesTemp[idx].nombre = '';
    componentesTemp[idx].precioUnitario = 0;

    const itemSelect = document.getElementById(`itemSelect_${idx}`);
    itemSelect.disabled = !tipo;
    itemSelect.innerHTML = `<option value="">Seleccionar ${tipo === 'producto' ? 'producto' : 'material'}...</option>`;

    if (tipo === 'producto') {
        itemsCatalogo.productos.forEach(p => {
            itemSelect.innerHTML += `<option value="${p.id}" data-precio="${p.precio}"
                data-nombre="${p.nombre}">${p.nombre} — $${p.precio.toLocaleString('es-MX')}</option>`;
        });
    } else if (tipo === 'material') {
        itemsCatalogo.materiales.forEach(m => {
            itemSelect.innerHTML += `<option value="${m.id}" data-precio="${m.precio}"
                data-nombre="${m.nombre}">${m.nombre} — $${m.precio.toLocaleString('es-MX')} / ${m.unidad}</option>`;
        });
    }
    recalcularPrecioTotal();
}

function seleccionarItem(select, idx) {
    const opt = select.options[select.selectedIndex];
    componentesTemp[idx].itemId = select.value;
    componentesTemp[idx].nombre = opt.dataset.nombre || '';
    componentesTemp[idx].precioUnitario = parseFloat(opt.dataset.precio) || 0;

    const fmt = v => v.toLocaleString('es-MX', { minimumFractionDigits: 2 });
    document.getElementById(`precioComp_${idx}`).value = fmt(componentesTemp[idx].precioUnitario);
    document.getElementById(`subtotalRow_${idx}`).style.display = 'block';
    recalcularSubtotal(idx);
    recalcularPrecioTotal();
}

function actualizarCantidad(input, idx) {
    componentesTemp[idx].cantidad = parseFloat(input.value) || 1;
    recalcularSubtotal(idx);
    recalcularPrecioTotal();
}

function recalcularSubtotal(idx) {
    const sub = (componentesTemp[idx].cantidad || 0) * (componentesTemp[idx].precioUnitario || 0);
    const el = document.getElementById(`subtotalComp_${idx}`);
    if (el) el.textContent = '$' + sub.toLocaleString('es-MX', { minimumFractionDigits: 2 });
}

function eliminarComponentePaquete(idx) {
    const rows = document.querySelectorAll('.componente-paquete-row');
    if (rows.length <= 1) { mostrarNotificacion('Debe haber al menos un componente', 'warning'); return; }
    const row = document.querySelector(`.componente-paquete-row[data-idx="${idx}"]`);
    if (row) row.remove();
    componentesTemp[idx] = null;
    recalcularPrecioTotal();
}

function recalcularPrecioTotal() {
    const total = componentesTemp
        .filter(c => c && c.precioUnitario > 0)
        .reduce((sum, c) => sum + (c.cantidad * c.precioUnitario), 0);
    document.getElementById('precioTotalCalculado').textContent =
        '$' + total.toLocaleString('es-MX', { minimumFractionDigits: 2 });
}

function guardarPaquete() {
    const codigo = document.getElementById('codigoPaquete').value.trim().toUpperCase();
    const nombre = document.getElementById('nombrePaquete').value.trim();
    const descripcion = document.getElementById('descripcionPaquete').value.trim();
    const estado = document.getElementById('estadoPaquete').value;

    if (!codigo || !nombre) { mostrarNotificacion('Complete los campos requeridos', 'error'); return; }
    if (paquetesData.find(p => p.codigo === codigo)) {
        mostrarNotificacion(`El código ${codigo} ya existe`, 'error'); return;
    }

    const componentes = componentesTemp.filter(c => c && c.itemId && c.cantidad > 0);
    if (componentes.length === 0) { mostrarNotificacion('Agregue al menos un componente', 'warning'); return; }

    for (const c of componentes) {
        if (!c.tipo || !c.itemId) { mostrarNotificacion('Complete todos los componentes', 'error'); return; }
    }

    paquetesData.push({ id: codigo, codigo, nombre, descripcion, estado, componentes });
    bootstrap.Modal.getInstance(document.getElementById('modalNuevoPaquete')).hide();
    mostrarNotificacion(`Paquete ${codigo} registrado exitosamente`, 'success');
    setTimeout(() => renderTablaPaquetes(), 500);
}

// =====================================================
// MOVIMIENTO POR PAQUETE
// =====================================================

function abrirMovimientoPaquete(id) {
    const pkg = paquetesData.find(p => p.id === id);
    if (!pkg) return;

    const fmt = v => '$' + v.toLocaleString('es-MX', { minimumFractionDigits: 2 });
    const precio = calcularPrecioPaquete(pkg.componentes);
    const disponibles = calcularDisponibilidad(pkg);

    document.getElementById('movPkgNombre').textContent = pkg.nombre;
    document.getElementById('movPkgCodigo').textContent = pkg.codigo;
    document.getElementById('movPkgPrecio').textContent = fmt(precio);
    document.getElementById('movPkgDisponibles').textContent = disponibles;
    document.getElementById('movPkgId').value = id;
    document.getElementById('movPkgCantidad').value = 1;
    document.getElementById('movPkgCantidad').max = disponibles;

    // Tabla previa de afectación
    renderAfectacion(pkg, 1);

    document.getElementById('movPkgCantidad').oninput = function() {
        renderAfectacion(pkg, parseInt(this.value) || 0);
    };

    new bootstrap.Modal(document.getElementById('modalMovimientoPaquete')).show();
}

function renderAfectacion(pkg, cantidad) {
    const fmt = v => '$' + v.toLocaleString('es-MX', { minimumFractionDigits: 2 });
    let html = '';
    pkg.componentes.forEach(comp => {
        const totalCantidad = comp.cantidad * cantidad;
        const subtotal = comp.precioUnitario * totalCantidad;
        const tipoBadge = comp.tipo === 'producto' ? 'bg-warning' : 'bg-secondary';
        html += `
        <tr>
            <td><span class="badge ${tipoBadge} badge-sm">${comp.tipo === 'producto' ? 'Prod' : 'Mat'}</span></td>
            <td><small>${comp.nombre}</small></td>
            <td class="text-center"><strong>${comp.cantidad}</strong> × ${cantidad}</td>
            <td class="text-center text-danger"><strong>-${totalCantidad}</strong></td>
            <td class="text-end">${fmt(subtotal)}</td>
        </tr>`;
    });
    document.getElementById('tablaAfectacion').innerHTML = html;

    const totalMovimiento = calcularPrecioPaquete(pkg.componentes) * cantidad;
    document.getElementById('totalMovimiento').textContent = fmt(totalMovimiento);
}

function registrarMovimientoPaquete() {
    const id = document.getElementById('movPkgId').value;
    const cantidad = parseInt(document.getElementById('movPkgCantidad').value);
    const base = document.getElementById('movPkgBase').value;
    const tipo = document.getElementById('movPkgTipo').value;
    const observaciones = document.getElementById('movPkgObs').value;

    if (!base) { mostrarNotificacion('Seleccione la base origen', 'error'); return; }
    if (!cantidad || cantidad < 1) { mostrarNotificacion('Ingrese una cantidad válida', 'error'); return; }

    const pkg = paquetesData.find(p => p.id === id);
    const disponibles = calcularDisponibilidad(pkg);

    if (cantidad > disponibles) {
        mostrarNotificacion(`No hay suficiente stock. Máximo disponible: ${disponibles} paquetes`, 'error');
        return;
    }

    // En un sistema real, aquí se crearían movimientos individuales para cada componente
    const movimientosGenerados = pkg.componentes.map(comp => ({
        tipo: tipo,
        base: base,
        itemTipo: comp.tipo,
        itemId: comp.itemId,
        nombre: comp.nombre,
        cantidad: comp.cantidad * cantidad,
        paqueteOrigen: pkg.codigo,
        observaciones: `Movimiento por Paquete ${pkg.codigo} (${cantidad} paquetes). ${observaciones}`
    }));

    console.log('Movimientos generados automáticamente:', movimientosGenerados);

    bootstrap.Modal.getInstance(document.getElementById('modalMovimientoPaquete')).hide();
    mostrarNotificacion(
        `Movimiento registrado: ${cantidad} paquete(s) "${pkg.nombre}". ${movimientosGenerados.length} ítems afectados.`,
        'success'
    );
}

// =====================================================
// EDITAR PAQUETE (básico)
// =====================================================

function editarPaquete(id) {
    const pkg = paquetesData.find(p => p.id === id);
    if (!pkg) return;
    const nuevo = prompt(`Editar nombre del paquete "${pkg.nombre}":`, pkg.nombre);
    if (nuevo && nuevo.trim()) {
        pkg.nombre = nuevo.trim();
        mostrarNotificacion(`Paquete actualizado`, 'success');
        setTimeout(() => renderTablaPaquetes(), 300);
    }
}

// =====================================================
// FILTROS
// =====================================================

function filtrarPaquetes() {
    const busqueda = (document.getElementById('buscarPaquete')?.value || '').toUpperCase();
    const filtroEstado = document.getElementById('filtroPaqueteEstado')?.value || '';

    const filas = document.querySelectorAll('#listaPaquetes tr');
    let visibles = 0;
    filas.forEach(fila => {
        const texto = fila.textContent.toUpperCase();
        const estado = fila.querySelector('.badge')?.textContent || '';
        let mostrar = true;
        if (busqueda && !texto.includes(busqueda)) mostrar = false;
        if (filtroEstado && !estado.includes(filtroEstado)) mostrar = false;
        fila.style.display = mostrar ? '' : 'none';
        if (mostrar) visibles++;
    });
    document.getElementById('totalPaquetes').textContent = visibles;
}

// =====================================================
// INIT
// =====================================================

document.addEventListener('DOMContentLoaded', function () {
    renderTablaPaquetes();

    const b = document.getElementById('buscarPaquete');
    if (b) b.addEventListener('keyup', filtrarPaquetes);
    const fe = document.getElementById('filtroPaqueteEstado');
    if (fe) fe.addEventListener('change', filtrarPaquetes);

    const modalNuevo = document.getElementById('modalNuevoPaquete');
    if (modalNuevo) {
        modalNuevo.addEventListener('show.bs.modal', inicializarFormPaquete);
    }
});