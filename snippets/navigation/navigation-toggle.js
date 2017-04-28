
// ---------------------------------------
// Navigation Toggle JS
// ---------------------------------------


// Toggles class open to display/hide the whole navigation
$( ".navigation-toggle" ).click(function() {
    $( ".template-navigation" ).toggleClass( "navigation-open" );
});


// Custom Toggle
$(document).on("click", ".navigation-icon--container input", function() {
    $( ".template-navigation" ).toggleClass( "navigation-open" );
});
