window.speechSynthesis.cancel();var e=document.getElementById("blur");e.onclick=function(){map.fire("click")},document.getElementById("controls").onclick=function(){map.fire("click")},map.on("click",function(){window.speechSynthesis.cancel(),console.log("Map clicked"),settings.style.left="-45%",settings.style.color="white",settings.style.backgroundColor="#00395a",layers.style.right="-45%",layers.style.color="white",layers.style.backgroundColor="#00395a",infopanel.style.bottom="-67%",e.style.display="none"}),settings.onclick=function(){layers.style.right="-45%",layers.style.color="white",layers.style.backgroundColor="#00395a",console.log(settings.style.left),"-25%"!=settings.style.left&&(settings.style.left="-25%",settings.style.color="black",settings.style.backgroundColor="white")},layers.onclick=function(){settings.style.left="-45%",settings.style.color="white",settings.style.backgroundColor="#00395a",console.log(layers.style.right),"-25%"!=layers.style.right&&(layers.style.right="-25%",layers.style.color="black",layers.style.backgroundColor="white")};var t=document.getElementById("abouttab"),l=document.getElementById("artifactstab"),n=document.getElementById("exhibittab"),s=document.getElementById("about"),o=document.getElementById("artifacts"),i=document.getElementById("exhibit"),c=new SpeechSynthesisUtterance;s.style.display="flex",o.style.display="none",i.style.display="none",t.onclick=function(){s.style.display="flex",o.style.display="none",i.style.display="none",c.text=document.getElementById("abouttribe").innerHTML+". "+document.getElementById("abouttribeinfo").innerHTML,narratorOn&&window.speechSynthesis.speak(c)},l.onclick=function(){window.speechSynthesis.cancel(),s.style.display="none",o.style.display="flex",i.style.display="none"},n.onclick=function(){window.speechSynthesis.cancel(),s.style.display="none",o.style.display="none",i.style.display="flex",c.text="Located at "+document.getElementById("exhibitlocation").innerHTML,narratorOn&&window.speechSynthesis.speak(c)};
//# sourceMappingURL=index.dda8f102.js.map