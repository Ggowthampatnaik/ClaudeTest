document.getElementById('cta').addEventListener('click', function() {
  this.style.transform = 'scale(0.96)';
  setTimeout(() => {
    // Simulate navigation to the test page
    window.location.href = '/test';
    // Alternatively, you could use an alert:
    // alert('Start Test clicked');
  }, 150);
});