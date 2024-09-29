document.getElementById('calculateBtn').addEventListener('click', function() {
    const heightCm = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    const height = heightCm / 100;

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Please enter valid height and weight values.');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('bmiResult').textContent = bmi;

    const status = getBMIStatus(bmi);
    document.getElementById('bmiStatus').textContent = status;

    animateBMISpeedometer(bmi);
});

function getBMIStatus(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Healthy";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

function animateBMISpeedometer(bmi) {
    let rotationAngle;

    if (bmi < 18.5) {
        rotationAngle = -90; // Underweight
    } else if (bmi >= 18.5 && bmi < 24.9) {
        rotationAngle = 0; // Healthy
    } else if (bmi >= 25 && bmi < 29.9) {
        rotationAngle = 90; // Overweight
    } else {
        rotationAngle = 180; // Obese
    }

    gsap.to('.needle-container', {
        rotation: rotationAngle,
        duration: 1,
        ease: 'power2.out',
    });
}
