var v1=0 , v2=0 , v3=0 ;
function num(number) {
    if(v3==1){clr();}
    var n = document.getElementById("display").value;
    if(n==0){
    document.getElementById("display").value = number;    
    }
    else{
        document.getElementById("display").value = n+number;
    }
    v1=0;
}
function opr(operator) {
    if(v1==0){
    var n = document.getElementById("display").value;
    document.getElementById("display").value = n + operator;
    v1=1;
    }
    v2=0;v3=0;
}
function opr1(operator1) {
    var k = document.getElementById("display").value;
    document.getElementById("display").value = k /100;
    

}
function dot(dot) {
    if(v3==1){clr();}
    if(v2==0){
    var n = document.getElementById("display").value;
    document.getElementById("display").value = n+dot;
    v2=1;
    }
}
function equal(equal_to) {
    var n = document.getElementById("display").value;
    document.getElementById("display").value = eval(n);
    v1=0; v2=1; v3=1;
}
function clr(clear) {
    document.getElementById("display").value = 0;
    v1=0; v2=0 ; v3=0;
}
function back(back) {
    
}

