document.addEventListener('DOMContentLoaded', () => {
  const mascot = document.querySelector('.mascot-3d');
  const eyes = document.querySelectorAll('.mascot-eye');
  const inputs = document.querySelectorAll('input');

  if (!mascot) return;

  // Eye follow effect
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const mascotRect = mascot.getBoundingClientRect();
    const mascotX = mascotRect.left + mascotRect.width / 2;
    const mascotY = mascotRect.top + mascotRect.height / 2;
    
    // Constrain eye movement to stay within mascot
    const maxOffset = 5; // Max pixels eyes can move
    const angleX = Math.max(-maxOffset, Math.min(maxOffset, (mouseY - mascotY) / 20));
    const angleY = Math.max(-maxOffset, Math.min(maxOffset, (mouseX - mascotX) / 20));
    
    eyes.forEach(eye => {
      eye.style.transform = `translate(${angleY}px, ${angleX}px)`;
      eye.style.overflow = 'hidden';
    });
  });

  // Enhanced input field interactions
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      mascot.classList.add('mascot-focused');
      mascot.style.transform = 'scale(1.1)';
    });
    
    input.addEventListener('blur', () => {
      mascot.classList.remove('mascot-focused');
      mascot.style.transform = 'scale(1)';
    });

    input.addEventListener('input', (e) => {
      if (e.target.value.length > 0) {
        mascot.classList.add('mascot-typing');
        eyes.forEach(eye => {
          eye.style.transform = 'translateY(-3px)';
          eye.style.width = '18px';
          eye.style.height = '18px';
        });
      } else {
        mascot.classList.remove('mascot-typing');
        eyes.forEach(eye => {
          eye.style.transform = '';
          eye.style.width = '20px';
          eye.style.height = '20px';
        });
      }
    });
  });

  // Idle animation
  mascot.classList.add('mascot-idle');
});
