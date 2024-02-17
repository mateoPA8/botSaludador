function VerDatosDeLaPersona(nombre,edad,genero)
  {
    var resultado;
    if(edad>=30 && genero=="masculino")
     {
         resultado="Sr " + nombre;
     }
    else if(edad>=30 && genero=="femenino")
     {
        resultado= "Sra " + nombre;
     }
     else
     {
        resultado= "joven "+nombre;
     }
     return resultado;
  }

function saludar(nombre,edad,genero,hora) {
    if(hora>="06:00:00" && hora<"12:00:00")
    {
        return "buenos dias " + VerDatosDeLaPersona(nombre,edad,genero);
    }
    else if(hora>="12:00:00" && hora<"18:00:00")
    {
        return "buenos tardes " + VerDatosDeLaPersona(nombre,edad,genero);
    }
    else
    {
        return "buenos noches" + VerDatosDeLaPersona(nombre,edad,genero);
    }
  }
  
  export default saludar;
  