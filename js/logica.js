
const container =  document.querySelector(".formulario");
const boton_main = document.querySelector(".button");
const tutor_main = document.querySelector(".imagen");
const welcome = document.querySelector(".bienvenida");


var checkbox = document.querySelector(".checkbox-rem");
var checkboxuno = document.getElementById("checkbox-1");

 



/*---------------------------------------------*/

function GetSelected() {
        //Create an Array.
        var selected = new Array();
 
        //Reference the Table.
      const respuestas = document.querySelector(".checkbox");
 
        //Reference all the CheckBoxes in Table.
  const chks = respuestas.getElementsByTagName("INPUT");

respuestas.addEventListener( 'change', function() {
       
        for (var i = 0; i < chks.length; i++) {

        	   if (chks[i].checked) {
                selected.push(chks[i].value);
            }
        }

console.log(selected);
 
for(var i=1;i<selected.length;i++)
		{
			for(var j=0;j<(selected.length-i);j++)
			{
				if(selected[j] == 1 && selected[j+1]==4 && selected[j+2] == 7 && selected.length === 3)
				{
					alert("Respusta Correcta")
				}
			}
		}

        
selected = [];
         




});

        // Loop and push the checked CheckBox value in Array.
      
    }

    GetSelected();

let muestremenu = false;


/* Evento Click linea del Tiempo Right*/


/* Evento Click Button Ingreso!*/
boton_main.addEventListener("click", function(){
	


	if(!muestremenu){

	container.style.zIndex = "-1";
	tutor_main.style.zIndex = "-1";
	welcome.style.zIndex = "-1";
	muestremenu = true;

	}else{
		btnclick.classList.remove('close');



		muestremenu = false;
	}
	
})