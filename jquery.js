$("#hide").click(function(){
    $("p").hide();
});

$("#show").click(function(){
    $("p").show();
});

for ( i=1; i < length; i++ ) {
    
       
            if ( ( options = arguments[ i ] ) != null ) {
    
              
                for ( name in options ) {
                    src = target[ name ];
                    copy = options[ name ];
    
                
                    if ( target === copy ) {
                        continue;
                    }
