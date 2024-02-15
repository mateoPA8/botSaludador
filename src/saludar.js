function saludar(a,b,c) {
    if(b>=30 && c=="masculino")
    {
        return "Sr " + a;
    }
    if(b>=30 && c=="femenino")
    {
        return "Sra " + a;
    }
    else
    {
        return "joven "+a;
    }
  }
  
  export default saludar;
  