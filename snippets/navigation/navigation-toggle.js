// ---------------------------------------
// DIFM Template: Navigation Toggle JS
// ---------------------------------------


// Toggles class open to display/hide the whole navigation
$( ".extendednavigation" ).addClass( "closed" );

$( ".navigation-toggle" ).click(function() {
    $( ".extendednavigation" ).toggleClass( "open" ).toggleClass( "closed" );
});


// Togglse class open to display/hide folders
$( ".navigation-item.folder .item-name--parent" ).each(function() {
    $( this ).click(function() {
            $( this ).parent( ".navigation-item.folder" ).toggleClass( "open" );
    });
});


