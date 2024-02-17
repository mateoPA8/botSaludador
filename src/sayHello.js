function VerDatosDeLaPersona(a,b,c)
  {
    var resultado;
    if(b>=30 && c=="masculino" )
     {
         resultado="Sr " + a;
     }
     if(b>=30 && c=="femenino")
     {
        resultado= "Miss " + a;
     }
     else
     {
        resultado= "student "+a;
     }
     return resultado;
  }

function sayHello(a,b,c,d,e) {
    if(d>="06:00:00" && d<"12:00:00")
    {
        return "good morning " + VerDatosDeLaPersona(a,b,c);
    }
    else if(d>="12:00:00" && d<"18:00:00")
    {
        return "good afternoon " + VerDatosDeLaPersona(a,b,c);
    }
    else
    {
        return "good night " + VerDatosDeLaPersona(a,b,c);
    }
  }
  
  export default sayHello;