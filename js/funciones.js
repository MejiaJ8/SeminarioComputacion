function operaciones(){
    let num1, num2;
    num1 = parseInt(document.getElementById('num1').value)
    num2 = parseInt(document.getElementById('num2').value)
    sum = num1 + num2;
    res = num1 - num2;
    mul = num1 * num2;
    div = num1 / num2;
    //alert(num1 + " - " + num2); 
    alert("el resultado de la suma es: "+ sum);
    alert("el resultado de la resta es: "+ res);
    alert("el resultado de la multiplicacion es: "+ mul);
    if(num1<num2){
        alert("ERROR:EL PRIMER NUMERO ES MENOR");
    }else{
        
    alert("el resultado de la division es: "+ div);
    }
}