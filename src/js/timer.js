// Countdown timer functionality
function startCountdown() {
  console.log('Timer initialized');
  let seconds = 60;
  const countdownElement = document.getElementById('countdown');
  
  if (!countdownElement) {
    console.error('Countdown element not found!');
    return;
  }

  const progressCircle = document.querySelector('.timer-progress');
  const totalTime = seconds;
  
  const timer = setInterval(() => {
    seconds--;
    countdownElement.textContent = seconds;
    
    // Update progress circle
    const progress = (seconds / totalTime) * 283;
    progressCircle.style.strokeDashoffset = progress;
    
    // Toggle warning class based on time remaining
    if (seconds <= 10) {
      progressCircle.classList.add('warning');
    } else {
      progressCircle.classList.remove('warning');
    }
    
    if (seconds <= 0) {
      clearInterval(timer);
      showSessionExpired();
    }
  }, 1000);
}

function showSessionExpired() {
  // Create modal overlay
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  overlay.style.zIndex = '1000';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';

  // Create alert container
  const alertDiv = document.createElement('div');
  alertDiv.style.backgroundColor = 'white';
  alertDiv.style.borderRadius = '10px';
  alertDiv.style.padding = '30px';
  alertDiv.style.width = '350px';
  alertDiv.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
  alertDiv.style.textAlign = 'center';
  alertDiv.style.animation = 'fadeIn 0.3s ease-out';

  // Add icon
  const icon = document.createElement('div');
  icon.innerHTML = '⏱️';
  icon.style.fontSize = '50px';
  icon.style.marginBottom = '15px';
  alertDiv.appendChild(icon);

  // Add message
  const message = document.createElement('h2');
  message.textContent = 'Session Expired';
  message.style.color = '#d32f2f';
  message.style.margin = '0 0 20px 0';
  message.style.fontSize = '24px';
  alertDiv.appendChild(message);

  // Add description
  const desc = document.createElement('p');
  desc.textContent = 'Your session has timed out due to inactivity.';
  desc.style.color = '#555';
  desc.style.marginBottom = '25px';
  alertDiv.appendChild(desc);

  // Add redirect button
  const button = document.createElement('button');
  button.textContent = 'Return to Login';
  button.style.padding = '12px 25px';
  button.style.backgroundColor = '#1976d2';
  button.style.color = 'White';
  button.style.border = 'none';
  button.style.borderRadius = '6px';
  button.style.cursor = 'pointer';
  button.style.fontSize = '16px';
  button.style.transition = 'background-color 0.3s';
  
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#1565c0';
  });
  
  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#1976d2';
  });

  button.addEventListener('click', () => {
    window.location.href = 'http://localhost:8080';
  });
  
  alertDiv.appendChild(button);
  
  // Add to document
  overlay.appendChild(alertDiv);
  document.body.appendChild(overlay);

  // Add animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  startCountdown();
});
