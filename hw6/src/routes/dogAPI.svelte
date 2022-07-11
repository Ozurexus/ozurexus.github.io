<body>
	<button id="GetADog" onclick="getDog()">Click to get a dog</button>
	<div class="flex-container" id="flex">
		<div><img id="dog1" src="loading2.gif" alt="" /></div>
		<div><img id="dog2" src="loading2.gif" alt="" /></div>
		<div><img id="dog3" src="loading2.gif" alt="" /></div>
	</div>
	<script>
		i = 0;
		const dog1 = document.getElementById('dog1');
		const dog2 = document.getElementById('dog2');
		const dog3 = document.getElementById('dog3');
		async function getDog() {
			const response1 = await fetch('https://dog.ceo/api/breeds/image/random', { method: 'GET' });
			response1.json().then((data) => {
				console.log(data.message);
				if (i < 4) {
					if (i == 1) {
						dog1.src = data.message;
						dog1.style.opacity = 100;
					}
					if (i == 2) {
						dog2.src = data.message;
						dog2.style.opacity = 100;
					}
					if (i == 3) {
						dog3.src = data.message;
						dog3.style.opacity = 100;
					}
				} else {
					if (i % 3 == 1) {
						dog1.src = data.message;
					}
					if (i % 3 == 2) {
						dog2.src = data.message;
					}
					if (i % 3 == 0) {
						dog3.src = data.message;
					}
				}
			});
			i++;
		}
	</script>
</body>

<style>
	button {
		color: aqua;
		background-color: purple;
		height: 5em;
		width: 10em;
	}
	.flex-container {
		display: flex;
		height: fit-content;
		width: 100%;
		flex-wrap: nowrap;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		margin-top: 10px;
	}
	.flex-container img {
		height: 100%;
		width: 30vw;
		opacity: 0;
		flex-grow: 1;
		margin: 10px;
	}
</style>
