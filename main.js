$(document).ready(function(){
    $("#consulta").on('click' ,async function(){
        const cidade = $('input[name="cidade"]').val();
        const apiKey = '0a5ea4492af408582dd019a84a1e5085';
        const respostaReq = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&units=metric&lang=pt-br&appid=" + apiKey);
        const dados = await respostaReq.json();
		
        console.log(dados);
        console.log(dados.weather[0].description);
        console.log(dados.main.temp);
        console.log(dados.main.feels_like);
        console.log(dados.main.humidity);	
    })

    $("#limpar").on('click' ,function(){
        $('#cidade').val('');
    })       
       
})
