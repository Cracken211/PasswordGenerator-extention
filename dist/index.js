(()=>{let e=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],t=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],n=["0","1","2","3","4","5","6","7","8","9"],d=["!","@","#","$","%","^","&","*","(",")","-","_","+","=","[","]","{","}","|",";",":",",",".","<",">","/","?"];document.addEventListener("DOMContentLoaded",()=>{let c=document.getElementById("password-length"),l=document.getElementById("include-numeric"),o=document.getElementById("include-symbols"),a=document.getElementById("include-uppercase"),u=document.getElementById("include-lowercase"),r=document.getElementById("generate-button"),m=document.getElementById("generated-password"),g=document.getElementById("password-length"),s=document.getElementById("length-display");g&&s&&g.addEventListener("input",()=>{let e=+g.value;s.textContent=e.toString()}),c&&l&&o&&a&&u&&r&&m&&r.addEventListener("click",()=>{let r=+c.value,g=l.checked,s=o.checked,i=a.checked,E=u.checked,h=function(c,l,o,a,u){console.log("Generating password...");let r=[];if(c&&(r=r.concat(n)),l&&(r=r.concat(d)),o&&(r=r.concat(t)),a&&(r=r.concat(e)),0===r.length)return"";let m="";for(let e=0;e<u;e++){let e=Math.floor(Math.random()*(r.length-0)+0);m+=r[e]}return m}(g,s,i,E,r);m.value=h,console.log("Generated Password:",h)})})})();
//# sourceMappingURL=index.js.map
