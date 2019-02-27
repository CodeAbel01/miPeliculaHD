function principal(){
    $('.peliculasPrincipales').show();
    $('.infantiles').hide();
    $('.terror').hide();
    document.getElementById('inicio').style.borderBottom="5px solid rgb(245, 168, 2)";
    document.getElementById('inicio').style.backgroundColor="#00505C";

    document.getElementById('ninios').style.borderBottom="5px solid #015865"; 
    document.getElementById('ninios').style.backgroundColor="#015865";

    document.getElementById('terror').style.borderBottom="5px solid #015865"; 
    document.getElementById('terror').style.backgroundColor="#015865";
    

}

function infantiles(){
    $('.peliculasPrincipales').hide();
    $('.infantiles').show();
    $('.terror').hide();
    document.getElementById('ninios').style.borderBottom="5px solid rgb(245, 168, 2)";
    document.getElementById('ninios').style.backgroundColor="#00505C";

    document.getElementById('inicio').style.backgroundColor="#015865";
    document.getElementById('inicio').style.borderBottom="5px solid #015865"; 

    document.getElementById('terror').style.borderBottom="5px solid #015865"; 
    document.getElementById('terror').style.backgroundColor="#015865";
}

function terror(){
    $('.peliculasPrincipales').hide();
    $('.infantiles').hide();
    $('.terror').show();
    document.getElementById('terror').style.borderBottom="5px solid rgb(245, 168, 2)";
    document.getElementById('terror').style.backgroundColor="#00505C";

    document.getElementById('ninios').style.borderBottom="5px solid #015865"; 
    document.getElementById('ninios').style.backgroundColor="#015865";

    document.getElementById('inicio').style.borderBottom="5px solid #015865"; 
    document.getElementById('inicio').style.backgroundColor="#015865";
}

