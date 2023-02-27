$(document).ready(function(){
    
    var result = 0;
    var preEntry = 0;
    var operation = null;
    var currEntry = '0';

    updateDisplay(result);

    var btnpressed;
    // $(".ce").on("click", function(){
    //      btnpressed =  $(this).html();
    //      if(btnpressed === 'CE'){
    //         currEntry = '0';
    //     }else if(btnpressed === '.'){
    //         currEntry = currEntry.substring(0, currEntry.length-1);
    //     }else if(isNumber(btnpressed)){
    //         if(currEntry === '0'){
    //             currEntry = btnpressed;
    //         }else{
    //             currEntry += btnpressed;
    //         }
    //     }else if(isOperator(btnpressed)){
    //         preEntry = parseFloat(currEntry);
    //         operation = btnpressed;
    //         currEntry = '';
    //     }else if(btnpressed === '='){
    //         currEntry = operate(preEntry, currEntry, operation);
    //         operation = null;
    //     }
    //     updateDisplay(currEntry);
    // })

    $(".ce").on("click", function(){
        currEntry = '0';
        updateDisplay(currEntry);
    })

    $(".button").on("click", function(){
         btnpressed =  $(this).html();
         if(btnpressed === 'CE'){
            currEntry = '0';
        }else if(btnpressed === '.'){
            currEntry = currEntry.substring(0, currEntry.length-1);
        }else if(isNumber(btnpressed)){
            if(currEntry === '0'){
                currEntry = btnpressed;
            }else{
                currEntry += btnpressed;
            }
        }else if(isOperator(btnpressed)){
            preEntry = parseFloat(currEntry);
            operation = btnpressed;
            currEntry = '';
        }else if(btnpressed === '='){
            currEntry = operate(preEntry, currEntry, operation);
            operation = null;
        }
        updateDisplay(currEntry);
    })
    $(".operands").on("click", function(){
         btnpressed =  $(this).html();
         if(btnpressed === 'CE'){
            currEntry = '0';
        }else if(btnpressed === '.'){
            currEntry = currEntry.substring(0, currEntry.length-1);
        }else if(isNumber(btnpressed)){
            if(currEntry === '0'){
                currEntry = btnpressed;
            }else{
                currEntry += btnpressed;
            }
        }else if(isOperator(btnpressed)){
            preEntry = parseFloat(currEntry);
            operation = btnpressed;
            currEntry = '';
        }else if(btnpressed === '='){
            currEntry = operate(preEntry, currEntry, operation);
            operation = null;
        }
        updateDisplay(currEntry);
    })

    
})

updateDisplay = function(displayVal){
    var displayVal = displayVal.toString();
    $(".display").html(displayVal.substring(0,10));
}

isNumber = function(val){
    return !isNaN(val)
}

isOperator = function(val){
    return val === 'x' || val === '/' || val === '-' || val === '+' ;
}

operate = function(a,b,operation){
    a = parseFloat(a);
    b = parseFloat(b);

    if(operation === '+') return a + b;
    if(operation === 'x') return a * b;
    if(operation === '-') return a - b;
    if(operation === '/') return a / b;
}