window.onload=init;
function init(){
	var num = 0;
	var color = ["a","b","b","c"];
	var color1 = color.concat(["d","e"]);
	color.splice(0,2);
	color1.splice(2,2,"g","h");
	var a = new A();
	var b = new B();
	var c = industry();
	var d = new Mix();

	c.put();
	a.put();
	b.put();
	d.put();
	alert(a instanceof A);
	alert(b instanceof B);
	alert(c instanceof industry);
//	alert(d.prototype.put.toString());
	alert(d._initialized);
	alert(d.prototype);
	alert(Mix.prototype.name);
	alert(Mix.prototype.put);
	alert(Mix.prototype.put.toString());
	alert(Mix.prototype);
	alert(Mix._initialized);
}
function industry(){
	var obj = new Object();
	obj.name="industry";
	obj.put = function(){
		alert("I am "+obj.name);
	}
	return obj;
}
function A(){
	this.name ="A";
	this.put = function(){
		alert("I am "+this.name);
	};
};

function B(){
}
B.prototype.name = "B";
B.prototype.put = function(){
		alert("I am "+this.name);
	};

function Mix(){
	this.name="Mix";
	if(typeof Mix._initalized == "undefined"){
		Mix.prototype.put = function(){
			alert("I am "+this.name);
		}
		Mix._initialized = true;
	};
	
}
