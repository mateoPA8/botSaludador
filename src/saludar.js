function VerDatosDeLaPersona(a,b,c)
  {
    var resultado;
    if(b>=30 && c=="masculino" )
     {
         resultado="Sr " + a;
     }
     if(b>=30 && c=="femenino")
     {
        resultado= "Sra " + a;
     }
     else
     {
        resultado= "joven "+a;
     }
     return resultado;
  }

function saludar(a,b,c,d) {
    if(d>="06:00:00" && d<"12:00:00")
    {
        return "buenos dias " + VerDatosDeLaPersona(a,b,c);
    }
    else if(d>="12:00:00" && d<"18:00:00")
    {
        return "buenos tardes " + VerDatosDeLaPersona(a,b,c);
    }
    else
    {
        return "buenos noches" + VerDatosDeLaPersona(a,b,c);
    }
  }
  
  export default saludar;
  