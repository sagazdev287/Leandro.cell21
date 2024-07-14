//var a;
//a="Site em manutenção!"
//alert(a);
//var a;
//a="Término da manutençao previsto para as 01:35 hrs,#Equipesagazprogramer"
//alert(a);
var nome = window.prompt('Qual é seu nome ?');
window.alert('Seja bem-vindo a loja Leandro celulares ' + nome + ', fique avontade!!')


console.log("Site monitorado 48H!");

setInterval(() => { let rgb = "rgb(" + Math.ceil(Math.random() * 255) + ", " + Math.ceil(Math.random() * 255) + ", " + Math.ceil(Math.random() * 255) +")"; document.querySelector("nav").style.backgroundColor = rgb }, 1000)
