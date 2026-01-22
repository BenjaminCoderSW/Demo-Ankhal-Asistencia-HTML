// main.js - Funciones globales y utilidades

// Actualizar fecha y hora actual
function actualizarFechaHora() {
    const ahora = new Date();
    const opciones = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const fechaFormateada = ahora.toLocaleDateString('es-MX', opciones);
    
    const elemento = document.getElementById('lastUpdate');
    if (elemento) {
        elemento.textContent = fechaFormateada;
    }
}

// Formatear moneda
function formatearMoneda(valor) {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
    }).format(valor);
}

// Formatear número
function formatearNumero(valor) {
    return new Intl.NumberFormat('es-MX').format(valor);
}

// Mostrar notificación tipo toast
function mostrarNotificacion(mensaje, tipo = 'success') {
    const iconos = {
        success: 'bi-check-circle-fill',
        error: 'bi-x-circle-fill',
        warning: 'bi-exclamation-triangle-fill',
        info: 'bi-info-circle-fill'
    };
    
    const colores = {
        success: 'success',
        error: 'danger',
        warning: 'warning',
        info: 'info'
    };
    
    // Crear elemento de notificación
    const toast = document.createElement('div');
    toast.className = `alert alert-${colores[tipo]} alert-dismissible fade show position-fixed top-0 end-0 m-3`;
    toast.style.zIndex = '9999';
    toast.innerHTML = `
        <i class="bi ${iconos[tipo]} me-2"></i>
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(toast);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        toast.remove();
    }, 5000);
}

// Confirmar acción
function confirmarAccion(mensaje, callback) {
    if (confirm(mensaje)) {
        callback();
    }
}

// Validar formulario
function validarFormulario(formId) {
    const form = document.getElementById(formId);
    if (form.checkValidity()) {
        return true;
    } else {
        form.classList.add('was-validated');
        mostrarNotificacion('Por favor complete todos los campos requeridos', 'error');
        return false;
    }
}

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Actualizar fecha/hora
    actualizarFechaHora();
    setInterval(actualizarFechaHora, 60000); // Actualizar cada minuto
    
    // Activar tooltips de Bootstrap
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Marcar página activa en navbar
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Exportar a Excel (simulado)
function exportarExcel() {
    mostrarNotificacion('Exportando a Excel...', 'info');
    setTimeout(() => {
        mostrarNotificacion('Archivo exportado exitosamente', 'success');
    }, 1500);
}

// Imprimir reporte
function imprimirReporte() {
    window.print();
}

// Buscar en tabla
function buscarEnTabla(inputId, tableId) {
    const input = document.getElementById(inputId);
    const filter = input.value.toUpperCase();
    const table = document.getElementById(tableId);
    const tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        let txtValue = tr[i].textContent || tr[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = '';
        } else {
            tr[i].style.display = 'none';
        }
    }
}

// Limpiar filtros
function limpiarFiltros() {
    const inputs = document.querySelectorAll('.filter-section input, .filter-section select');
    inputs.forEach(input => {
        if (input.type === 'text' || input.type === 'search') {
            input.value = '';
        } else if (input.tagName === 'SELECT') {
            input.selectedIndex = 0;
        }
    });
    mostrarNotificacion('Filtros limpiados', 'info');
}

// Navegación rápida
function irAModulo(modulo) {
    window.location.href = `${modulo}.html`;
}
