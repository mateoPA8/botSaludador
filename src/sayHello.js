function VerDatosDeLaPersona(nombre,edad,genero)
  {
    var resultado;
    if(edad>=30 && genero=="masculino" )
     {
         resultado="Sr " + nombre;
     }
     else if(edad>=30 && genero=="femenino")
     {
        resultado= "Miss " + nombre;
     }
     else
     {
        resultado= "student "+ nombre;
     }
     return resultado;
  }

  function sayHello(nombre,edad,genero,hora) {
    if(hora>="06:00:00" && hora<"12:00:00")
    {
        return "good morning " + VerDatosDeLaPersona(nombre,edad,genero);
    }
    else if(hora>="12:00:00" && hora<"18:00:00")
    {
        return "good afternoon " + VerDatosDeLaPersona(nombre,edad,genero);
    }
    else
    {
        return "good night " + VerDatosDeLaPersona(nombre,edad,genero);
    }
  }
  
  export default sayHello;