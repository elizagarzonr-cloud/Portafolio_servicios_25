function calculateRisk() {
    // Obtener valores
    const employees = document.getElementById('employees').value;
    const risk = document.getElementById('riskLevel').value;
    const resultBox = document.getElementById('result');
    const amountText = document.getElementById('fineAmount');

    if (!employees || employees <= 0) {
        alert("Por favor ingrese un número válido de empleados.");
        return;
    }

    // Lógica simplificada de Sanciones (Valores aproximados en millones COP para efecto dramático)
    // Base: SMLMV aprox 1.300.000
    let baseFine = 0;

    // Calculo simple basado en tamaño y riesgo (Simulación de Decreto 1072)
    if (employees <= 10) {
        baseFine = 5000000 * risk; 
    } else if (employees <= 50) {
        baseFine = 15000000 * risk; 
    } else {
        baseFine = 40000000 * risk;
    }

    // Formatear a moneda COP
    let formattedFine = new Intl.NumberFormat('es-CO', { 
        style: 'currency', 
        currency: 'COP',
        maximumFractionDigits: 0 
    }).format(baseFine);

    // Mostrar resultado con animación
    resultBox.style.display = 'block';
    amountText.innerText = formattedFine;
    
    // Scroll suave hacia el resultado
    resultBox.scrollIntoView({behavior: "smooth"});
}

// Efecto Matrix suave para el fondo (Opcional, da toque tecnológico)
document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema de Seguridad Inteligente Iniciado");
});