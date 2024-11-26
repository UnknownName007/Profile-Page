let a="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia a dolorum temporibus, fugit cupiditate commodi ducimus quam illo. Aliquam enim pariatur debitis animi perspiciatis cum iusto rerum praesentium saepe dignissimos?";
function bg(){
	let num=Math.round(1+17*Math.random());
	let st="bg"+num+".webp"
	return st;
}
let btn=document.body.querySelector(".btn");
btn.addEventListener('click' , ()=>{
	let st=bg();
	let prof=btn=document.body.querySelector(".main");
	document.head.insertAdjacentHTML("beforeend",`<style> .main{background-image: url('${st}')}</style>`);
})

async function main2() {
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			resolve(7)
		},21);	
	})
}
async function main(params) {
	for(let i=0;i<a.length;i++){
		let doc=document.body.querySelector(".lorem");
		let a1=a.charAt(i)
		let data=await main2();
		doc.insertAdjacentHTML('beforeend',a1);
	}
}
main();