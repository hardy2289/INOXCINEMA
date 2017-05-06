

function validate()
{ 
   if( document.Registration1.mobileno.value == "" ||
           isNaN( document.Registration1.mobileno.value) ||
           document.Registration1.mobileno.value.length != 16 )
   {
     alert( "Please provide a card Number in 16 digit Format." );
     document.Registration1.mobileno.focus() ;
     return false;
   }
   if( document.Registration1.pi1.value == "" ||
           isNaN( document.Registration1.pi1.value) ||
           document.Registration1.pi1.value.length != 4 )
   {
     alert( "Please provide a expiry date in 4 digit format" );
     document.Registration1.pi1.focus() ;
     return false;
   }
   
   if( document.Registration1.pincode2.value == "" ||
           isNaN( document.Registration1.pincode2.value) ||
           document.Registration1.pincode2.value.length != 3 )
   {
     alert( "Please provide 3 digit security code from the back side of card" );
     document.Registration1.pincode2.focus() ;
     return false;
   }
   if( document.Registration1.pincode.value == "" ||
           isNaN( document.Registration1.pincode.value) ||
           document.Registration1.pincode.value.length != 6 )
   {
     alert( "Please provide a pincode in the format ######." );
     document.Registration1.pincode.focus() ;
     return false;
   }
   

}
