var total = ''
var punto = false
var operacion = []
var saveOp = []
var op = ''

num = ((valor)=> {
    punto = total.indexOf(".") == -1? true : false 
    if(((valor != ".") || punto) && (valor != "off" && valor != "ac")){
        total += valor
        operation(valor)
    }else if(valor == "off" || valor == "ac"){
        cleanResult()
    }
})

function operation (valor){
    if(valor == '/' || valor == '*' || valor == '+' || valor == '-' || valor == '='){
        total = total.substring(0, total.length - 1)
        console.log('valor de operacion total '+ total)
        operacion.push(total)
        switch (valor) {
            case '/':
                op = '/'
                total = ''
                operacion.push(valor)
                resultado()
                break;
            case '*':
                op = '*'
                total = ''
                operacion.push(valor)
                resultado()
                break;
            case '+':
                op = '+'
                total = ''
                break;
            case '-':
                total = ''
                op = '-'
                break;
            case '=':
                total = ''
                op="="
                resultado()
                break;
            }
    }
    $("#result").val(total)
}

function resultado(){ 

    if (operacion.length > 3){
        for (let i = 0; i < operacion.length; i++) {
            if(operacion[i-1]== "+"){
                a = operacion[i-2]
                b = operacion[i]
                r = parseFloat(a) + parseFloat(b)
                operacion = []
                operacion.push(r)
            }    
            if(operacion[i-1]== "-"){
                a = operacion[i-2]
                b = operacion[i]
                r = parseFloat(a) - parseFloat(b)
                operacion = []
                operacion.push(r)
            }    
        }
        // operacion.push(op)
        
    }
    operacion.forEach(element => {
        console.log('|'+element+"|")
    });
}

function cleanResult() {
	total=''
    $("#result").val(total);
}