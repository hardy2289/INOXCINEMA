

function validate()
{ 
   if( document.Registration.textnames.value == "" )
   {
     alert( "Please provide your First Name!" );
     document.Registration.textnames.focus() ;
     return false;
   }
   if( document.Registration.lastname.value == "" )
   {
     alert( "Please provide your Last Name!" );
     document.Registration.lastname.focus() ;
     return false;
   }
   
    if( document.Registration.City.value == "-1" )
   {
     alert( "Please provide theatre location!" );
     document.Registration.City.focus() ;
     return false;
   }   
   
   if( document.Registration.pincode.value == "" ||
           isNaN( document.Registration.pincode.value) ||
           document.Registration.pincode.value.length != 6 )
   {
     alert( "Please provide a pincode in the format ######." );
     document.Registration.pincode.focus() ;
     return false;
   }
   
    
  var email = document.Registration.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID")
     document.Registration.emailid.focus() ;
     return false;
 }
   
 if( document.Registration.mobileno.value == "" ||
           isNaN( document.Registration.mobileno.value) ||
           document.Registration.mobileno.value.length != 11 )
   {
     alert( "Please provide a Phone Number in 123 Format." );
     document.Registration.mobileno.focus() ;
     return false;
   }
   
   
   
   
   if( document.Registration.City1.value == "-1" )
   {
     alert( "Please provide payment category!" );
     document.Registration.City1.focus() ;
     return false;
   }  
 

}
