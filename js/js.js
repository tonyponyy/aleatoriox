var  peticion = () => {
	num = Math.random()*100
	imprimir(num)
}
var imprimir = (num)=>{
	if (num>70){
		document.getElementById("mask").src="img/sure.png"
		text = "Definitivamente si."
	}else if (num>60){
		document.getElementById("mask").src="img/ok.png"
		text = "Si."
	}else if (num>40){
		document.getElementById("mask").src="img/doubt.png"
		text = "Toma tu la decisión..."
	}else{
		document.getElementById("mask").src="img/no.png"
		text = "No."
	}
	document.getElementById("text").textContent = text 
}