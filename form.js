var total = ''
var punto = false
var operacion = []
var op = ''
var aux = ''
var auxtotal = ''

num = ((valor)=> {
    punto = total.indexOf(".") == -1? true : false 
    if(((valor != ".") || punto) && (valor != "off" && valor != "ac")){
        total += valor
        operation(valor)
    }else{
        if(valor == "off" || valor == "ac"){
            cleanResult()
        }
    }    
})

function operation (valor){
    if(valor == '/' || valor == '*' || valor == '+' || valor == '-' || valor == '='){
        total = total.substring(0, total.length - 1)
        console.log('valor de operacion total '+ total + " op "+valor) 
        operacion.push(total)
        switch (valor) {
            case '/':
                aux = total
                total = '0'
                op='/'
                break;
            case '*':
                aux = total
                op='*'
                break;
            case '+':
                aux = total
                op='+'
                total = '0'
                break;
            case '-':
                aux = total
                op = '-'
                break;
            case '=':
                op="="
                total = auxtotal
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
                    total = ''
                    break;
                case '-':
                    auxtotal = (parseFloat(aux) - parseFloat(valor)).toString()
                    op=''
                    total = ''
                    break;
                case '*':
                    auxtotal = (parseFloat(aux) * parseFloat(valor)).toString()
                    op=''
                    total = ''
                    break;
                case '/':
                    auxtotal = (parseFloat(aux) / parseFloat(valor)).toString()
                    op=''
                    total = ''
                    break;
            }
            console.log('entro a op '+ auxtotal)
        }
    }
    $("#result").val(total)
}

function cleanResult() {
	total=''
    $("#result").val(total);
}