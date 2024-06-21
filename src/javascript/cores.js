document.getElementById('btn-cor-v').addEventListener('click' , mudarCorV)
document.getElementById('btn-r').addEventListener('click' , mudarCorR)
document.getElementById('btn-cor-a').addEventListener('click' , mudarCorA)

function mudarCorR(){
	let ele = document.querySelectorAll('.cors')

	ele.forEach(i => {
		i.className = ''
		i.classList.add('cors')
		i.classList.add('corsR')
	})
}

function mudarCorV() {
	let elementos = document.querySelectorAll('.cors')

	elementos.forEach(elemento => {
		elemento.className = ''
		elemento.classList.add('cors')
		elemento.classList.add('corsV')
	})
}

function mudarCorA(){
	let elementos = document.querySelectorAll('.cors')

	elementos.forEach(i =>{
		i.className = ""
		i.classList.add('cors')
		i.classList.add('corsA')
	})
}