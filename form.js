var total = ''
var punto = false
var operacion = []
var op = ''
var aux = ''
var auxtotal = ''

num = ((valor)=> {
    // punto = total.indexOf(".") == -1? true : false 
    if(total.slice(-1)== '.'){
        punto =  false 
    }else{
        punto = true
    }
    if(((valor != ".") || punto) && (valor != "off" && valor != "ac")){
        total += valor
        operation(valor)
    }else{
        if(valor == "off"){
            cleanResult()
        }
        if(valor == "ac"){
            clear()
        }
    }    
})

function operation (valor){
    if(valor == '/' || valor == '*' || valor == '+' || valor == '-' || valor == '='){
        // total = total.substring(0, total.length - 1)
        // console.log('valor de operacion total '+ total + " op "+valor)
        igual = total.indexOf("=") == -1? true : false 
        if(valor == '='){
            total = total.substring(0, total.length - 1)
            let a = eval(total)
            total = total + '= '+ a
            if (total != undefined && a != undefined ){
                operacion.push(total)
            }
        }
        switch (valor) {
            case '/':
                aux = total
                // total = '0'
                op='/'
                break;
            case '*':
                aux = total
                op='*'
                break;
            case '+':
                aux = total
                op='+'
                // total = '0'
                break;
            case '-':
                aux = total
                op = '-'
                break;
            case '=':
                op="="
                total = auxtotal
                let lis = ''
                operacion.forEach(element => {
                    lis += `<li>${element}` 
                });
                document.getElementById('list').innerHTML = lis
                console.log('Total '+total)
                break;
            }
    }else {
        if(op != ''){
            console.log("valor op "+ op)
            switch (op) {
                case '+':
                    auxtotal = (parseFloat(aux) + parseFloat(valor)).toString()
                    op=''
                    // total = ''
                    break;
                case '-':
                    auxtotal = (parseFloat(aux) - parseFloat(valor)).toString()
                    op=''
                    // total = ''
                    break;
                case '*':
                    auxtotal = (parseFloat(aux) * parseFloat(valor)).toString()
                    op=''
                    // total = ''
                    break;
                case '/':
                    auxtotal = (parseFloat(aux) / parseFloat(valor)).toString()
                    op=''
                    // total = ''
                    break;
            }
            console.log('entro a op '+ auxtotal)
        }
    }
    console.log(operacion)
    $("#result").val(total)
}

function cleanResult() {
	total=''
    aux = ''
    auxtotal = ''
    operacion = []
    document.getElementById('list').innerHTML = ''
    $("#result").val(total);
}

function clear(){
    total=''
    aux = ''
    auxtotal = ''
    $("#result").val(total);
}
