var x = document.getElementById("user");
var y = document.getElementById("password");
var b = document.getElementById("btn1");


var eslam = ["eslam","01019539347"]

b.onclick = function()
{

if(x.value == eslam[0] && y.value == eslam[1])

{location.replace("first.html")}

else if(x.value == "" && y.value == "")
{document.getElementById("edit").innerHTML = "الحقول فارغة"}

else if(x.value == "")
{document.getElementById("edit").innerHTML = "الحقل فارغة"}

else if(y.value == "")
{document.getElementById("edit").innerHTML = "الحقل فارغة"}

else if(x.value != eslam[0] && y.value != eslam[1])
{document.getElementById("edit").innerHTML = " كلمة المرور غير صحيحة والاسم ايضا"}

else if(x.value != eslam[0])
{document.getElementById("edit").innerHTML = "الاسم غير صحيح"}

else if(y.value != eslam[1])
{document.getElementById("edit").innerHTML = "كلمة المرور غير صحيحه"}

}

x.addEventListener("invalid", ()=>{

x.setCustomValidity("يرجى ملء هذا الحقل");
})


y.addEventListener("invalid", ()=>{

y.setCustomValidity("يرجى ملء هذا الحقل");
})


