window.onload=init;
function init(){
	var b = new MaoChong("b","red");	
//	b.put();
	b.sayColor();
}
function A(name){
	this.name = name;
	
}
A.prototype.put=function(){
	alert("I am"+this.name);
}
function MaoChong(name,color){
	this.newMethod = A;
	this.newMethod(name);
	delete this.newMethod;

	this.color = color;

}
MaoChong.prototype.sayColor= function(){
	alert(this.color);
}
