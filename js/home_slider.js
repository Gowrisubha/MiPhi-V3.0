function bannerSwitcher() {
  next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
  if (next.length) next.prop('checked', true);
  else $('.sec-1-input').first().prop('checked', true);
}

var bannerTimer = setInterval(bannerSwitcher, 10000); // Automatically switch slides every 10s

// Restart the timer when control labels are clicked
$('nav .controls label').click(function() {
  clearInterval(bannerTimer);
  bannerTimer = setInterval(bannerSwitcher, 5000); // Switch every 5s after manual interaction
});

// Stop the banner switcher on click
$('.banner').click(function() {
  clearInterval(bannerTimer); // Stop the interval when clicking on the banner
});
