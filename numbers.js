var doc1 = document.getElementById("first");
var doc2 = document.getElementById("second");
var doc3 = document.getElementById("third");
var doc4 = document.getElementById("fourth");
var doc5 = document.getElementById("fifth");
var doc6 = document.getElementById("sixth");
var output = document.getElementById("output");


function order(){
    var n1 = parseFloat(doc1.value);
    var n2 = parseFloat(doc2.value);
    var n3 = parseFloat(doc3.value);
    var n4 = parseFloat(doc4.value);
    var n5 = parseFloat(doc5.value);
    var n6 = parseFloat(doc6.value);
    
    var o1 = 0;
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;
    var o5 = 0;
    var o6 = 0;

    o1 = Math.min(n1, n2, n3, n4, n5, n6);

    if(o1 === n1){
        n1 = n2;
        n2 = n3 ;
        n3 = n4 ;
        n4 = n5 ;
        n5 = n6;
    }
    else if(o1 === n2){
        n1 = n1;
        n2 = n3;
        n3 = n4;
        n4 = n5; 
        n5 = n6;
    }
    else if(o1 === n3){
        n1 = n1;
        n2 = n2;
        n3 = n4;
        n4 = n5;
        n5 = n6;
    }
    else if(o1 === n4){
        n1 = n1;
        n2 = n2;
        n3 = n3;
        n4 = n5;
        n5 = n6;
    }
    else if(o1 === n5){
        n1 = n1;
        n2 = n2;
        n3 = n3;
        n4 = n4;
        n5 = n6;
    }

    o2 = Math.min(n1, n2, n3, n4, n5);

    if(o2 === n1){
        n1 = n2;
        n2 = n3 ;
        n3 = n4 ;
        n4 = n5 ;
    }
    else if(o2 === n2){
        n1 = n1;
        n2 = n3;
        n3 = n4;
        n4 = n5; 
    }
    else if(o2 === n3){
        n1 = n1;
        n2 = n2;
        n3 = n4;
        n4 = n5;
    }
    else if(o2 === n4){
        n1 = n1;
        n2 = n2;
        n3 = n3;
        n4 = n5;
    }

    o3 = Math.min(n1, n2, n3, n4);

    if(o3 === n1){
        n1 = n2;
        n2 = n3 ;
        n3 = n4 ;
    }
    else if(o3 === n2){
        n1 = n1;
        n2 = n3;
        n3 = n4;
    }
    else if(o3 === n3){
        n1 = n1;
        n2 = n2;
        n3 = n4;
    }
    
    o4 = Math.min(n1, n2, n3);

    if(o4 === n1){
        n1 = n2;
        n2 = n3 ;
    }
    else if(o4 === n2){
        n1 = n1;
        n2 = n3;
    }

    o5 = Math.min(n1, n2);

        if(o5 === n1){
            n1 = n2;
            n2 = n3 ;
        }

    o6 = Math.min(n1);
    output.innerHTML = o1 + ", " + o2 + ", " + o3 + ", " + o4 + ", " + o5 + ", " + o6;

}


function middle(){
    var n1 = parseFloat(doc1.value);
    var n2 = parseFloat(doc2.value);
    var n3 = parseFloat(doc3.value);
    var n4 = parseFloat(doc4.value);
    var n5 = parseFloat(doc5.value);
    var n6 = parseFloat(doc6.value);
    
    var o1 = 0;
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;
    var o5 = 0;
    var o6 = 0;

    o1 = Math.min(n1, n2, n3, n4, n5, n6);

    if(o1 === n1){
        n1 = n2;
        n2 = n3 ;
        n3 = n4 ;
        n4 = n5 ;
        n5 = n6;
    }
    else if(o1 === n2){
        n1 = n1;
        n2 = n3;
        n3 = n4;
        n4 = n5; 
        n5 = n6;
    }
    else if(o1 === n3){
        n1 = n1;
        n2 = n2;
        n3 = n4;
        n4 = n5;
        n5 = n6;
    }
    else if(o1 === n4){
        n1 = n1;
        n2 = n2;
        n3 = n3;
        n4 = n5;
        n5 = n6;
    }
    else if(o1 === n5){
        n1 = n1;
        n2 = n2;
        n3 = n3;
        n4 = n4;
        n5 = n6;
    }

    o2 = Math.min(n1, n2, n3, n4, n5);

    if(o2 === n1){
        n1 = n2;
        n2 = n3 ;
        n3 = n4 ;
        n4 = n5 ;
    }
    else if(o2 === n2){
        n1 = n1;
        n2 = n3;
        n3 = n4;
        n4 = n5; 
    }
    else if(o2 === n3){
        n1 = n1;
        n2 = n2;
        n3 = n4;
        n4 = n5;
    }
    else if(o2 === n4){
        n1 = n1;
        n2 = n2;
        n3 = n3;
        n4 = n5;
    }

    o3 = Math.min(n1, n2, n3, n4);

    if(o3 === n1){
        n1 = n2;
        n2 = n3 ;
        n3 = n4 ;
    }
    else if(o3 === n2){
        n1 = n1;
        n2 = n3;
        n3 = n4;
    }
    else if(o3 === n3){
        n1 = n1;
        n2 = n2;
        n3 = n4;
    }
    
    o4 = Math.min(n1, n2, n3);

    if(o4 === n1){
        n1 = n2;
        n2 = n3 ;
    }
    else if(o4 === n2){
        n1 = n1;
        n2 = n3;
    }

    o5 = Math.min(n1, n2);

        if(o5 === n1){
            n1 = n2;
            n2 = n3 ;
        }

    o6 = Math.min(n1);
    output.innerHTML = "The middle is " + o3;
}


function largest(){
    var n1 = parseFloat(doc1.value);
    var n2 = parseFloat(doc2.value);
    var n3 = parseFloat(doc3.value);
    var n4 = parseFloat(doc4.value);
    var n5 = parseFloat(doc5.value);
    var n6 = parseFloat(doc6.value);
    
    var largest = Math.max(n1,n2,n3,n4,n5,n6);
    output.innerHTML = largest;
    return true;
}


function smallest(){
    var n1 = parseFloat(doc1.value);
    var n2 = parseFloat(doc2.value);
    var n3 = parseFloat(doc3.value);
    var n4 = parseFloat(doc4.value);
    var n5 = parseFloat(doc5.value);
    var n6 = parseFloat(doc6.value);
    
    var smallest = Math.min(n1,n2,n3,n4,n5,n6);
    output.innerHTML = smallest;
    return true;
}


function mean(){
    var n1 = parseFloat(doc1.value);
    var n2 = parseFloat(doc2.value);
    var n3 = parseFloat(doc3.value);
    var n4 = parseFloat(doc4.value);
    var n5 = parseFloat(doc5.value);
    var n6 = parseFloat(doc6.value);
    output.innerHTML = (n1 + n2 + n3 + n4 + n5 + n6) / 6;
    return true;
}


function mode(){
    var n1 = parseFloat(doc1.value);
    var n2 = parseFloat(doc2.value);
    var n3 = parseFloat(doc3.value);
    var n4 = parseFloat(doc4.value);
    var n5 = parseFloat(doc5.value);
    var n6 = parseFloat(doc6.value);
    
    var m1 = 1;
    var m2 = 1;
    var m3 = 1;
    var m4 = 1;
    var m5 = 1;
    var m6 = 1;

    if(n1 === n2){
        m1 += 1;
    }
    if(n1 === n3){
        m1 += 1;
    }
    if(n1 === n4){
        m1 += 1;
    }
    if(n1 === n5){
        m1 += 1;
    }
    if(n1 === n6){
        m1 += 1;
    }

    if(n2 === n1){
        m2 += 1;
    }
    if(n2 === n3){
        m2 += 1;
    }
    if(n2 === n4){
        m2 += 1;
    }
    if(n2 === n5){
        m2 += 1;
    }
    if(n2 === n6){
        m2 += 1;
    }

    if(n3 === n1){
        m3 += 1;
    }
    if(n3 === n2){
        m3 += 1;
    }
    if(n3 === n4){
        m3 += 1;
    }
    if(n3 === n5){
        m3 += 1;
    }
    if(n3 === n6){
        m3 += 1;
    }

    if(n4 === n1){
        m4 += 1;
    }
    if(n4 === n2){
        m4 += 1;
    }
    if(n4 === n3){
        m4 += 1;
    }
    if(n4 === n5){
        m4 += 1;
    }
    if(n4 === n6){
        m4 += 1;
    }

    if(n5 === n1){
        m5 += 1;
    }
    if(n5 === n2){
        m5 += 1;
    }
    if(n5 === n4){
        m5 += 1;
    }
    if(n5 === n3){
        m5 += 1;
    }
    if(n5 === n6){
        m5 += 1;
    }

    if(n6 === n1){
        m6 += 1;
    }
    if(n6 === n2){
        m6 += 1;
    }
    if(n6 === n4){
        m6 += 1;
    }
    if(n6 === n5){
        m6 += 1;
    }
    if(n6 === n3){
        m6 += 1;
    }

    if(m1 > m2 && m1 > m3 && m1 > m4 && m1 > m5 && m1 > m6){
        output.innerHTML = n1 " is the mode and is displayed " + m1 + " times";
    }
}


function range(){
    var n1 = parseFloat(doc1.value);
    var n2 = parseFloat(doc2.value);
    var n3 = parseFloat(doc3.value);
    var n4 = parseFloat(doc4.value);
    var n5 = parseFloat(doc5.value);
    var n6 = parseFloat(doc6.value);

    var smallest = Math.min(n1,n2,n3,n4,n5,n6);
    var largest = Math.max(n1,n2,n3,n4,n5,n6);
    output.innerHTML = largest - smallest;
    return true;
}


function duplicate(){
    var n1 = parseFloat(doc1.value);
    var n2 = parseFloat(doc2.value);
    var n3 = parseFloat(doc3.value);
    var n4 = parseFloat(doc4.value);
    var n5 = parseFloat(doc5.value);
    var n6 = parseFloat(doc6.value);

    if(n1 === n2 || doc1 === n3 || n1 === n4 || n1 === n5 || n1 === n6){
        output.innerHTML += n1;
    }
    if(doc2 === n3 || n2 === n4 || n2 === n5 || n2 === n6){
        output.innerHTML += n2;
    }
    if(n3 === n4 || n3 === n5 || n3 === n6){
        output.innerHTML += n3;
    }
    if(n4 === n5 || n4 === n6){
        output.innerHTML += n4;
    }
    if(doc5 === n2 || n5 === n3 || n5 === n4 || n5 === n6){
        output.innerHTML += n5;
    }
    if(doc6 === n2 || n6 === n3 || n6 === n5 || n6 === n4){
        output.innerHTML += n6;
    }
    return true;
}


function unique(){
    var n1 = parseFloat(doc1.value);
    var n2 = parseFloat(doc2.value);
    var n3 = parseFloat(doc3.value);
    var n4 = parseFloat(doc4.value);
    var n5 = parseFloat(doc5.value);
    var n6 = parseFloat(doc6.value);
    if(n1 != n2 && doc1 != n3 && n1 != n4 && n1 != n5 && n1 != n6){
        output.innerHTML = n1;
    }
    if(n2 != n1 && doc2 != n3 && n2 != n4 && n2 != n5 && n2 != n6){
        output.innerHTML += n2;
    }
    if(n3 != n1 && doc3 != n2 && n3 != n4 && n3 != n5 && n3 != n6){
        output.innerHTML += n3;
    }
    if(n4 != n1 && doc4 != n2 && n4 != n3 && n4 != n5 && n4 != n6){
        output.innerHTML += n4;
    }
    if(n5 != n1 && doc5 != n2 && n5 != n3 && n5 != n4 && n5 != n6){
        output.innerHTML += n5;
    }
    if(n6 != n1 && doc6 != n2 && n6 != n3 && n6 != n5 && n6 != n4){
        output.innerHTML += n6;
    }

    return true;
}