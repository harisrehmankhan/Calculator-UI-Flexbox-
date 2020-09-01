var a=0;
var b=0;
res=0;

// debugger;


// function func(){
    document.querySelector(".btns").addEventListener("click", function(event){
       var vv= buttonval(event.target.innerText);
        // console.log(vv);
// console.log(res+" times");

    });
// }


function buttonval(val){
    
    if(isNaN(val)){

     console.log(val+"Symbolfunc");
       handleSymbol(val);

    //    

    
    }

    else{
        var init=parseInt(val);
         console.log(init + "Num else part");

        handleNumber(init);
    }
}

function handleSymbol(val){
    // console.log("click "+res+"times");
sval=document.querySelector(".sc").innerText;
    
    switch(val){
        case 'C':
            //-- console.log("here");
            document.querySelector(".sc").innerText="0";
        break;

        case '+':
            // console.log(val.ParseInt);
        var fval=parseInt(sval);
        a=fval;
        handleSymbol('C');
        mathop='+';
            
        break;

        case '-':
            var fval=parseInt(sval);
            a=fval;
            handleSymbol('C');
            mathop='-';
            break;

        case '*':
            var fval=parseInt(sval);
            a=fval;
            handleSymbol('C');
            mathop='*';
            break;

        case '/':
            var fval=parseInt(sval);
            a=fval;
            handleSymbol('C');
            mathop='/';
            break;

        case '=':
            res=0;

            secval= parseInt(document.querySelector(".sc").innerText);
            if (mathop === '+')
            {
                console.log("In equal");

                res = a + secval;
                // sval=res;
                document.querySelector(".sc").innerText=res;
            console.log(res);
                    
            }

            else if (mathop === '-')
            {
                console.log("In equal");

                res = a - secval;
                // sval=res;
                document.querySelector(".sc").innerText=res;
            console.log(res);
                    
            }

            else if (mathop === '*')
            {
                console.log("In mul");

                res = a * secval;
                // sval=res;
                document.querySelector(".sc").innerText=res;
            console.log(res);
                    
            }

            else if (mathop === '/')
            {
                console.log("In equal");

                res = a / secval;
                // sval=res;
                document.querySelector(".sc").innerText=res;
            console.log(res);
                    
            }

            break;
            
    }    
}

function handleNumber(val){
//    a=val;
sval=document.querySelector(".sc").innerText;


console.log("Numfuc here");
    if(sval==="0"){
        document.querySelector(".sc").innerText=val;
console.log("If screen is zero" + sval);

   }
   else{
    document.querySelector(".sc").innerText+=val;
    console.log("If screen is not zero" +sval) ;

   }

    switch(val){
        case '0':
            document.querySelector(".sc").innerText="0";
        break;

        case '1':
            document.querySelector(".sc").innerText="1";
        break;

        case '2':
            document.querySelector(".sc").innerText="2";

            break;

        case '3':
            document.querySelector(".sc").innerText="3";

        break;

        case '4':
            document.querySelector(".sc").innerText="4";

            break;

        case '5':
            document.querySelector(".sc").innerText="5";

            break;
            

        case '6':
            document.querySelector(".sc").innerText="6";

            break;

        case '7':
            document.querySelector(".sc").innerText="7";

            break;

        case '8':
            document.querySelector(".sc").innerText="8";

            break;

        case '9':
            document.querySelector(".sc").innerText="9";

            break;
    }
}