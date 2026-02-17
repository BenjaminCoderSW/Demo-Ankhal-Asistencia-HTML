// main.js - Funciones globales, utilidades y datos de inventario

// =====================================================
// DATOS DE INVENTARIO CON JERARQUÍA COMPLETA
// =====================================================

const inventarioData = {
    totalGeneral: 2340000,

    // ── PRODUCTOS TERMINADOS ──────────────────────────
    productos: {
        label: "Productos Terminados",
        total: 1220000,
        icon: "bi-grid-3x3-gap",
        color: "bar-productos",
        bases: [
            { codigo: "TULA",    nombre: "Base Tula de Allende", valor: 360000, buenas: 1820, rechazo: 80 },
            { codigo: "WEG",     nombre: "Planta WEG",           valor: 320000, buenas: 1580, rechazo: 65 },
            { codigo: "SM",      nombre: "Base SM",              valor: 160000, buenas: 820,  rechazo: 30 },
            { codigo: "ATOTO",   nombre: "Base Atoto",           valor: 145000, buenas: 740,  rechazo: 28 },
            { codigo: "ARKAM",   nombre: "Base Arkam",           valor: 130000, buenas: 660,  rechazo: 22 },
            { codigo: "QRO",     nombre: "Base Querétaro",       valor: 105000, buenas: 500,  rechazo: 18 }
        ]
    },

    // ── MATERIALES ────────────────────────────────────
    materiales: {
        label: "Materiales",
        total: 1120000,
        icon: "bi-box-seam",
        color: "bar-materiales",
        subtipos: [

            // ── MADERA ──
            {
                id: "madera",
                label: "Madera",
                icon: "bi-tree",
                color: "bar-madera",
                iconClass: "cat-icon-madera",
                total: 280000,
                items: [
                    { codigo: "MAT-009", nombre: "Madera Pino 4x6 Tratamiento Térmico",  subtipo: "Larga",   stock: 1850, unidad: "pies", precioUnit: 22.00,  valor: 40700 },
                    { codigo: "MAT-002", nombre: "Madera Pino 2x4",                       subtipo: "Larga",   stock: 320,  unidad: "pies", precioUnit: 13.70,  valor: 4384  },
                    { codigo: "MAT-006", nombre: "Madera Encino 3x6",                     subtipo: "Larga",   stock: 620,  unidad: "pies", precioUnit: 18.50,  valor: 11470 },
                    { codigo: "MAT-011", nombre: "Madera Pino 2x6 Corta",                 subtipo: "Corta",   stock: 980,  unidad: "pies", precioUnit: 11.00,  valor: 10780 },
                    { codigo: "MAT-012", nombre: "Madera Encino 2x4 Corta",               subtipo: "Corta",   stock: 540,  unidad: "pies", precioUnit: 14.50,  valor: 7830  },
                    { codigo: "MAT-013", nombre: "Polín 4x4 Pino",                        subtipo: "Polín",   stock: 420,  unidad: "piezas", precioUnit: 65.00, valor: 27300 },
                    { codigo: "MAT-014", nombre: "Polín 4x6 Encino",                      subtipo: "Polín",   stock: 310,  unidad: "piezas", precioUnit: 85.00, valor: 26350 },
                    { codigo: "MAT-015", nombre: "Tabla 1x6 Pino (base)",                 subtipo: "Tabla",   stock: 1200, unidad: "piezas", precioUnit: 28.00, valor: 33600 },
                    { codigo: "MAT-016", nombre: "Tabla 1x4 Encino (cabecera)",           subtipo: "Tabla",   stock: 850,  unidad: "piezas", precioUnit: 22.00, valor: 18700 },
                    { codigo: "MAT-017", nombre: "Madera Reciclada Mixta",                subtipo: "Reciclada", stock: 2100, unidad: "pies", precioUnit: 4.50,  valor: 9450  },
                    { codigo: "MAT-018", nombre: "Madera Tratamiento Calor HT",           subtipo: "Tratada", stock: 760,  unidad: "pies", precioUnit: 25.00, valor: 19000 },
                    { codigo: "MAT-019", nombre: "Madera Fumigada MB",                    subtipo: "Tratada", stock: 420,  unidad: "pies", precioUnit: 18.00, valor: 7560  },
                    { codigo: "MAT-020", nombre: "Duela 3\" Pino",                        subtipo: "Duela",   stock: 640,  unidad: "piezas", precioUnit: 15.00, valor: 9600 },
                    { codigo: "MAT-021", nombre: "Duela 4\" Encino",                      subtipo: "Duela",   stock: 480,  unidad: "piezas", precioUnit: 19.00, valor: 9120 },
                    { codigo: "MAT-022", nombre: "Tapa 2x6 Pino",                         subtipo: "Tapa",    stock: 900,  unidad: "piezas", precioUnit: 16.00, valor: 14400 },
                    { codigo: "MAT-023", nombre: "Refuerzo Metálico Esquinero",           subtipo: "Accesorio", stock: 1200, unidad: "piezas", precioUnit: 7.50, valor: 9000 },
                    { codigo: "MAT-024", nombre: "Otros Materiales Madera",               subtipo: "Otros",   stock: 1,   unidad: "lote",  precioUnit: 11556, valor: 11556 }
                ]
            },

            // ── CARTÓN ──
            {
                id: "carton",
                label: "Cartón",
                icon: "bi-archive",
                color: "bar-carton",
                iconClass: "cat-icon-carton",
                total: 650000,
                items: [
                    { codigo: "MAT-004", nombre: "Cartón RSC Simple",          subtipo: "Lámina",    stock: 1200, unidad: "m²",    precioUnit: 85.00,  valor: 102000 },
                    { codigo: "MAT-007", nombre: "Cartón Doble Pared",          subtipo: "Lámina",    stock: 480,  unidad: "m²",    precioUnit: 125.00, valor: 60000  },
                    { codigo: "MAT-010", nombre: "Cartón Troquelado",           subtipo: "Lámina",    stock: 950,  unidad: "m²",    precioUnit: 95.00,  valor: 90250  },
                    { codigo: "MAT-025", nombre: "Cartón Triple Pared",         subtipo: "Lámina",    stock: 320,  unidad: "m²",    precioUnit: 185.00, valor: 59200  },
                    { codigo: "MAT-026", nombre: "Lámina Corrugada B/W",        subtipo: "Lámina",    stock: 680,  unidad: "m²",    precioUnit: 75.00,  valor: 51000  },
                    { codigo: "MAT-027", nombre: "Puntura/Liner Kraft",         subtipo: "Puntura",   stock: 1100, unidad: "kg",    precioUnit: 18.50,  valor: 20350  },
                    { codigo: "MAT-028", nombre: "Puntura Reciclada",           subtipo: "Puntura",   stock: 850,  unidad: "kg",    precioUnit: 12.00,  valor: 10200  },
                    { codigo: "MAT-029", nombre: "Fluting/Médium",             subtipo: "Puntura",   stock: 720,  unidad: "kg",    precioUnit: 16.00,  valor: 11520  },
                    { codigo: "MAT-030", nombre: "Adhesivo Almidón",           subtipo: "Pegamento", stock: 380,  unidad: "kg",    precioUnit: 35.00,  valor: 13300  },
                    { codigo: "MAT-031", nombre: "Cola PVA",                   subtipo: "Pegamento", stock: 220,  unidad: "litros",precioUnit: 45.00,  valor: 9900   },
                    { codigo: "MAT-032", nombre: "Hot Melt / Termofusible",    subtipo: "Pegamento", stock: 95,   unidad: "kg",    precioUnit: 120.00, valor: 11400  },
                    { codigo: "MAT-033", nombre: "Pintura Negra Base Agua",    subtipo: "Pintura",   stock: 185,  unidad: "litros",precioUnit: 85.00,  valor: 15725  },
                    { codigo: "MAT-034", nombre: "Pintura Blanca Cobertura",   subtipo: "Pintura",   stock: 140,  unidad: "litros",precioUnit: 90.00,  valor: 12600  },
                    { codigo: "MAT-035", nombre: "Tinta Flexo Negra",          subtipo: "Pintura",   stock: 60,   unidad: "kg",    precioUnit: 220.00, valor: 13200  },
                    { codigo: "MAT-036", nombre: "Tinta Flexo Color",          subtipo: "Pintura",   stock: 35,   unidad: "kg",    precioUnit: 280.00, valor: 9800   },
                    { codigo: "MAT-037", nombre: "Cinta de Empaque",           subtipo: "Otros",     stock: 420,  unidad: "rollos",precioUnit: 28.00,  valor: 11760  },
                    { codigo: "MAT-038", nombre: "Fleje de Plástico",          subtipo: "Otros",     stock: 180,  unidad: "rollos",precioUnit: 55.00,  valor: 9900   },
                    { codigo: "MAT-039", nombre: "Esquinero Cartón",           subtipo: "Otros",     stock: 2400, unidad: "piezas",precioUnit: 3.50,   valor: 8400   },
                    { codigo: "MAT-040", nombre: "Separadores Internos",       subtipo: "Otros",     stock: 1800, unidad: "piezas",precioUnit: 5.20,   valor: 9360   },
                    { codigo: "MAT-041", nombre: "Bobina Papel Kraft",         subtipo: "Otros",     stock: 95,   unidad: "kg",    precioUnit: 22.00,  valor: 2090   },
                    { codigo: "MAT-042", nombre: "Espuma Protectora",          subtipo: "Otros",     stock: 240,  unidad: "m²",    precioUnit: 45.00,  valor: 10800  },
                    { codigo: "MAT-043", nombre: "Película Stretch",           subtipo: "Otros",     stock: 85,   unidad: "rollos",precioUnit: 75.00,  valor: 6375   }
                ]
            },

            // ── INSUMOS ──
            {
                id: "insumos",
                label: "Insumos (Herrajes)",
                icon: "bi-tools",
                color: "bar-insumos",
                iconClass: "cat-icon-insumos",
                total: 190000,
                items: [
                    { codigo: "MAT-001", nombre: 'Clavos 3"',              subtipo: "Clavos",    stock: 45,   unidad: "kg",     precioUnit: 35.00, valor: 1575  },
                    { codigo: "MAT-008", nombre: 'Clavos 2.5"',            subtipo: "Clavos",    stock: 85,   unidad: "kg",     precioUnit: 32.00, valor: 2720  },
                    { codigo: "MAT-044", nombre: 'Clavos 2"',              subtipo: "Clavos",    stock: 120,  unidad: "kg",     precioUnit: 30.00, valor: 3600  },
                    { codigo: "MAT-045", nombre: 'Clavos 4"',              subtipo: "Clavos",    stock: 60,   unidad: "kg",     precioUnit: 40.00, valor: 2400  },
                    { codigo: "MAT-046", nombre: "Pija Auto Perforante 1\"",subtipo: "Pijas",    stock: 95,   unidad: "kg",     precioUnit: 55.00, valor: 5225  },
                    { codigo: "MAT-047", nombre: "Pija Madera 1.5\"",      subtipo: "Pijas",    stock: 75,   unidad: "kg",     precioUnit: 60.00, valor: 4500  },
                    { codigo: "MAT-048", nombre: "Tornillo Galvanizado 2\"",subtipo: "Tornillos",stock: 48,   unidad: "kg",     precioUnit: 75.00, valor: 3600  },
                    { codigo: "MAT-049", nombre: "Tornillo Estructural 3\"",subtipo: "Tornillos",stock: 32,   unidad: "kg",     precioUnit: 90.00, valor: 2880  },
                    { codigo: "MAT-003", nombre: "Arandelas M8",           subtipo: "Arandelas", stock: 15,   unidad: "kg",     precioUnit: 42.00, valor: 630   },
                    { codigo: "MAT-050", nombre: "Arandelas M10",          subtipo: "Arandelas", stock: 22,   unidad: "kg",     precioUnit: 45.00, valor: 990   },
                    { codigo: "MAT-051", nombre: "Arandelas M6 Planas",    subtipo: "Arandelas", stock: 38,   unidad: "kg",     precioUnit: 38.00, valor: 1444  },
                    { codigo: "MAT-005", nombre: "Tuercas M10",            subtipo: "Tuercas",   stock: 8,    unidad: "kg",     precioUnit: 48.00, valor: 384   },
                    { codigo: "MAT-052", nombre: "Tuercas M8",             subtipo: "Tuercas",   stock: 18,   unidad: "kg",     precioUnit: 44.00, valor: 792   },
                    { codigo: "MAT-053", nombre: "Tuercas Hex M6",         subtipo: "Tuercas",   stock: 25,   unidad: "kg",     precioUnit: 40.00, valor: 1000  },
                    { codigo: "MAT-054", nombre: "Bisagra Metálica 3\"",   subtipo: "Herrajes",  stock: 240,  unidad: "piezas", precioUnit: 22.00, valor: 5280  },
                    { codigo: "MAT-055", nombre: "Escuadra Refuerzo 4\"",  subtipo: "Herrajes",  stock: 380,  unidad: "piezas", precioUnit: 18.00, valor: 6840  },
                    { codigo: "MAT-056", nombre: "Placa Metálica Esquina", subtipo: "Herrajes",  stock: 520,  unidad: "piezas", precioUnit: 12.00, valor: 6240  },
                    { codigo: "MAT-057", nombre: "Grapa Galvanizada",      subtipo: "Herrajes",  stock: 65,   unidad: "kg",     precioUnit: 58.00, valor: 3770  },
                    { codigo: "MAT-058", nombre: "Remache Pop 3/16\"",     subtipo: "Herrajes",  stock: 42,   unidad: "kg",     precioUnit: 85.00, valor: 3570  },
                    { codigo: "MAT-059", nombre: "Clavadora Neumática (consumibles)", subtipo: "Otros", stock: 1, unidad: "lote", precioUnit: 8500, valor: 8500 },
                    { codigo: "MAT-060", nombre: "Hilo de Amarre",         subtipo: "Otros",     stock: 180,  unidad: "kg",     precioUnit: 25.00, valor: 4500  },
                    { codigo: "MAT-061", nombre: "EPP / Consumibles Seguridad", subtipo: "Otros", stock: 1, unidad: "lote",   precioUnit: 12500, valor: 12500 }
                ]
            }
        ]
    }
};

// =====================================================
// RENDER DEL ÁRBOL DE VALOR
// =====================================================

function renderValorTree(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const d = inventarioData;
    const fmt = (v) => '$' + v.toLocaleString('es-MX');

    let html = `<div class="valor-tree">`;

    // ── Nivel 0: Total General ──
    html += `
    <div class="tree-level-0 d-flex justify-content-between align-items-center">
        <span class="tree-label"><i class="bi bi-database-fill me-2"></i>VALOR TOTAL DE INVENTARIO</span>
        <span class="tree-value">${fmt(d.totalGeneral)}</span>
    </div>`;

    // ── Nivel 1: Productos Terminados ──
    const pct_prod = Math.round(d.productos.total / d.totalGeneral * 100);
    html += `
    <div class="tree-level-1 d-flex align-items-center" onclick="toggleTree(this)">
        <i class="bi bi-chevron-right tree-chevron me-2"></i>
        <span class="cat-icon cat-icon-productos"><i class="bi ${d.productos.icon}"></i></span>
        <span class="tree-label flex-grow-1">${d.productos.label}</span>
        <div class="tree-bar-wrap"><div class="tree-bar-fill bar-productos" style="width:${pct_prod}%"></div></div>
        <span class="pct-badge">${pct_prod}%</span>
        <span class="tree-value ms-3">${fmt(d.productos.total)}</span>
    </div>
    <div class="tree-children-1">`;

    d.productos.bases.forEach(base => {
        const pct = Math.round(base.valor / d.productos.total * 100);
        html += `
        <div class="tree-level-2 d-flex align-items-center" onclick="toggleTree(this)">
            <i class="bi bi-chevron-right tree-chevron me-2"></i>
            <span class="tree-label flex-grow-1"><i class="bi bi-building me-1 text-muted"></i>${base.codigo} — ${base.nombre}</span>
            <div class="tree-bar-wrap"><div class="tree-bar-fill bar-productos" style="width:${pct}%"></div></div>
            <span class="pct-badge">${pct}%</span>
            <span class="tree-value ms-3">${fmt(base.valor)}</span>
        </div>
        <div class="tree-children-2">
            <table class="tree-detail-table table table-sm mb-0">
                <thead>
                    <tr>
                        <th>Tipo</th>
                        <th class="text-end">Buenas</th>
                        <th class="text-end">Rechazo</th>
                        <th class="text-end">Total pzas</th>
                        <th class="text-end">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="badge bg-warning text-dark">Tarimas</span></td>
                        <td class="text-end">${Math.round(base.buenas * .55).toLocaleString()}</td>
                        <td class="text-end text-danger">${Math.round(base.rechazo * .5)}</td>
                        <td class="text-end">${Math.round(base.buenas * .55 + base.rechazo * .5).toLocaleString()}</td>
                        <td class="text-end"><strong>${fmt(Math.round(base.valor * .58))}</strong></td>
                    </tr>
                    <tr>
                        <td><span class="badge bg-info">Cajas</span></td>
                        <td class="text-end">${Math.round(base.buenas * .38).toLocaleString()}</td>
                        <td class="text-end text-danger">${Math.round(base.rechazo * .4)}</td>
                        <td class="text-end">${Math.round(base.buenas * .38 + base.rechazo * .4).toLocaleString()}</td>
                        <td class="text-end"><strong>${fmt(Math.round(base.valor * .35))}</strong></td>
                    </tr>
                    <tr>
                        <td><span class="badge bg-secondary">Accesorios</span></td>
                        <td class="text-end">${Math.round(base.buenas * .07).toLocaleString()}</td>
                        <td class="text-end text-danger">${Math.round(base.rechazo * .1)}</td>
                        <td class="text-end">${Math.round(base.buenas * .07 + base.rechazo * .1).toLocaleString()}</td>
                        <td class="text-end"><strong>${fmt(Math.round(base.valor * .07))}</strong></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="table-light">
                        <td><strong>TOTAL BASE</strong></td>
                        <td class="text-end"><strong>${base.buenas.toLocaleString()}</strong></td>
                        <td class="text-end text-danger"><strong>${base.rechazo}</strong></td>
                        <td class="text-end"><strong>${(base.buenas + base.rechazo).toLocaleString()}</strong></td>
                        <td class="text-end"><strong>${fmt(base.valor)}</strong></td>
                    </tr>
                </tfoot>
            </table>
        </div>`;
    });

    html += `</div>`; // cierra tree-children-1 de productos

    // ── Nivel 1: Materiales ──
    const pct_mat = Math.round(d.materiales.total / d.totalGeneral * 100);
    html += `
    <div class="tree-level-1 d-flex align-items-center" onclick="toggleTree(this)">
        <i class="bi bi-chevron-right tree-chevron me-2"></i>
        <span class="cat-icon cat-icon-materiales"><i class="bi ${d.materiales.icon}"></i></span>
        <span class="tree-label flex-grow-1">${d.materiales.label}</span>
        <div class="tree-bar-wrap"><div class="tree-bar-fill bar-materiales" style="width:${pct_mat}%;background:#c62828"></div></div>
        <span class="pct-badge">${pct_mat}%</span>
        <span class="tree-value ms-3">${fmt(d.materiales.total)}</span>
    </div>
    <div class="tree-children-1">`;

    d.materiales.subtipos.forEach(subtipo => {
        const pct_sub = Math.round(subtipo.total / d.materiales.total * 100);

        // Agrupar items por subtipo
        const grupos = {};
        subtipo.items.forEach(item => {
            if (!grupos[item.subtipo]) grupos[item.subtipo] = [];
            grupos[item.subtipo].push(item);
        });

        html += `
        <div class="tree-level-2 d-flex align-items-center" onclick="toggleTree(this)">
            <i class="bi bi-chevron-right tree-chevron me-2"></i>
            <span class="cat-icon ${subtipo.iconClass}"><i class="bi ${subtipo.icon}"></i></span>
            <span class="tree-label flex-grow-1">${subtipo.label}</span>
            <div class="tree-bar-wrap"><div class="tree-bar-fill ${subtipo.color}" style="width:${pct_sub}%"></div></div>
            <span class="pct-badge">${pct_sub}%</span>
            <span class="tree-value ms-3">${fmt(subtipo.total)}</span>
        </div>
        <div class="tree-children-2">`;

        // Mostrar grupos dentro del subtipo
        Object.entries(grupos).forEach(([grupoNombre, grupoItems]) => {
            const grupoTotal = grupoItems.reduce((s, i) => s + i.valor, 0);
            html += `
            <div class="px-3 pt-2 pb-1" style="background:#fafbff; border-bottom:1px solid #edf0f7;">
                <small class="text-muted fw-bold text-uppercase" style="font-size:.72rem; letter-spacing:.5px;">
                    <i class="bi bi-tag me-1"></i>${grupoNombre}
                    <span class="text-dark ms-2">${fmt(grupoTotal)}</span>
                </small>
            </div>
            <table class="tree-detail-table table table-sm mb-0">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Material</th>
                        <th class="text-end">Stock</th>
                        <th class="text-end">Precio Unit.</th>
                        <th class="text-end">Valor</th>
                        <th class="text-center">Alerta</th>
                    </tr>
                </thead>
                <tbody>`;

            grupoItems.forEach(item => {
                const alerta = getAlertaIcon(item.codigo);
                html += `
                    <tr>
                        <td><small class="text-muted">${item.codigo}</small></td>
                        <td>${item.nombre}</td>
                        <td class="text-end">${item.stock.toLocaleString()} <small class="text-muted">${item.unidad}</small></td>
                        <td class="text-end">$${item.precioUnit.toLocaleString('es-MX', {minimumFractionDigits: 2})}</td>
                        <td class="text-end"><strong>${fmt(item.valor)}</strong></td>
                        <td class="text-center">${alerta}</td>
                    </tr>`;
            });

            html += `</tbody></table>`;
        });

        html += `</div>`; // cierra tree-children-2 del subtipo
    });

    html += `</div>`; // cierra tree-children-1 de materiales
    html += `</div>`; // cierra valor-tree

    container.innerHTML = html;
}

// Datos de alertas por material (simplificado)
const alertasStock = {
    "MAT-001": "rojo", "MAT-002": "rojo", "MAT-003": "rojo",
    "MAT-004": "rojo", "MAT-005": "rojo",
    "MAT-006": "amarillo", "MAT-007": "amarillo", "MAT-008": "amarillo"
};

function getAlertaIcon(codigo) {
    const nivel = alertasStock[codigo];
    if (nivel === "rojo")     return '<i class="bi bi-circle-fill text-danger" title="Crítico"></i>';
    if (nivel === "amarillo") return '<i class="bi bi-circle-fill text-warning" title="Precaución"></i>';
    return '<i class="bi bi-circle-fill text-success" title="Óptimo"></i>';
}

// Toggle colapsar/expandir nodo del árbol
function toggleTree(el) {
    el.classList.toggle('open');
    const siblings = el.parentElement.children;
    for (let sib of siblings) {
        if (sib !== el && (sib.classList.contains('tree-children-1') || sib.classList.contains('tree-children-2'))) {
            // Buscar el children inmediatamente después
        }
    }
    // Buscar el siguiente elemento hermano que sea el contenedor de hijos
    let next = el.nextElementSibling;
    while (next) {
        if (next.classList.contains('tree-children-1') || next.classList.contains('tree-children-2')) {
            next.classList.toggle('open');
            break;
        }
        next = next.nextElementSibling;
    }
}

// =====================================================
// UTILIDADES GLOBALES
// =====================================================

function actualizarFechaHora() {
    const ahora = new Date();
    const opciones = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const elemento = document.getElementById('lastUpdate');
    if (elemento) elemento.textContent = ahora.toLocaleDateString('es-MX', opciones);
}

function formatearMoneda(valor) {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(valor);
}

function formatearNumero(valor) {
    return new Intl.NumberFormat('es-MX').format(valor);
}

function mostrarNotificacion(mensaje, tipo = 'success') {
    const iconos = { success: 'bi-check-circle-fill', error: 'bi-x-circle-fill', warning: 'bi-exclamation-triangle-fill', info: 'bi-info-circle-fill' };
    const colores = { success: 'success', error: 'danger', warning: 'warning', info: 'info' };
    const toast = document.createElement('div');
    toast.className = `alert alert-${colores[tipo]} alert-dismissible fade show position-fixed top-0 end-0 m-3`;
    toast.style.zIndex = '9999';
    toast.innerHTML = `<i class="bi ${iconos[tipo]} me-2"></i>${mensaje}<button type="button" class="btn-close" data-bs-dismiss="alert"></button>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 5000);
}

function confirmarAccion(mensaje, callback) { if (confirm(mensaje)) callback(); }

function validarFormulario(formId) {
    const form = document.getElementById(formId);
    if (form.checkValidity()) return true;
    form.classList.add('was-validated');
    mostrarNotificacion('Por favor complete todos los campos requeridos', 'error');
    return false;
}

function exportarExcel() {
    mostrarNotificacion('Exportando a Excel...', 'info');
    setTimeout(() => mostrarNotificacion('Archivo exportado exitosamente', 'success'), 1500);
}

function imprimirReporte() { window.print(); }

function buscarEnTabla(inputId, tableId) {
    const filter = document.getElementById(inputId).value.toUpperCase();
    const tr = document.getElementById(tableId).getElementsByTagName('tr');
    for (let i = 1; i < tr.length; i++) {
        let txt = tr[i].textContent || tr[i].innerText;
        tr[i].style.display = txt.toUpperCase().indexOf(filter) > -1 ? '' : 'none';
    }
}

function limpiarFiltros() {
    document.querySelectorAll('.filter-section input, .filter-section select').forEach(input => {
        if (input.type === 'text' || input.type === 'search') input.value = '';
        else if (input.tagName === 'SELECT') input.selectedIndex = 0;
    });
    mostrarNotificacion('Filtros limpiados', 'info');
}

function irAModulo(modulo) { window.location.href = `${modulo}.html`; }

document.addEventListener('DOMContentLoaded', function () {
    actualizarFechaHora();
    setInterval(actualizarFechaHora, 60000);

    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(el => new bootstrap.Tooltip(el));

    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === currentPage);
    });
});