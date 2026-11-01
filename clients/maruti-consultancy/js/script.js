(function() {
  var secs = 60;
  var initialSecs = secs;
  var targetUrl = "https://t.me/+CopTvJKx0NRhNDVl";
  
  var timerText = document.getElementById('timerSecs');
  var timerBar = document.getElementById('timerBar');
  var joinBtn = document.getElementById('join-btn');

  // Ripple effect on click
  if (joinBtn) {
    joinBtn.addEventListener('click', function(e) {
      var rect = joinBtn.getBoundingClientRect();
      var circle = document.createElement('span');
      var diameter = Math.max(rect.width, rect.height);
      var radius = diameter / 2;
      circle.style.width = circle.style.height = diameter + 'px';
      circle.style.left = (e.clientX - rect.left - radius) + 'px';
      circle.style.top = (e.clientY - rect.top - radius) + 'px';
      circle.classList.add('ripple');
      var old = joinBtn.getElementsByClassName('ripple')[0];
      if (old) old.remove();
      joinBtn.appendChild(circle);
    });
  }

  // Auto-join countdown
  if (secs > 0 && timerText && timerBar) {
    var interval = setInterval(function() {
      secs--;
      timerText.textContent = secs + 's';
      var pct = Math.max(0, (secs / initialSecs) * 100);
      timerBar.style.width = pct + '%';
      
      if (secs <= 0) {
        clearInterval(interval);
        window.location.href = targetUrl;
      }
    }, 1000);
  }
})();