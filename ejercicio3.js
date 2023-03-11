function ejercicio3()
{
    var num1;
    var num2;
    var num3;
    var n=0;

    num1 = parseInt(prompt("Inserta el primer numero:"));
    num2 = parseInt(prompt("Inserta el segundo numero:"));
    num3 = parseInt(prompt("Inserta el tercer numero:"));

    function nummayor(num1, num2, num3, n)
    {
        if( num1 > num2)
        {
            n=num1;
        }
        else
        {
            n=num2;
        }
        
        if ( num3 > n)
        {
            n=num3;
        }
        return n;
    }
    
    alert("El número mayor es: " + nummayor(num1, num2, num3, n));
    console.log("El número mayor es: " + nummayor(num1, num2, num3, n));   
}
