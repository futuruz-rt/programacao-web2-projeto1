$(document).ready(function(){
    $("#consulta").on('click' ,async function(){
        const cidade = $('input[name="cidade"]').val();
        const apiKey = '0a5ea4492af408582dd019a84a1e5085';
        const respostaReq = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&units=metric&lang=pt&appid=" + apiKey);
        const dados = await respostaReq.json();
		if (cidade == '' || cidade.length <= 3){
			alert('cidade vazia ou menor que 4 caracteres');
			return;
		}
		if (dados.cod == 404){
			alert('cheque o nome e a acentuação da cidade');
			$('#cidade').val('');
			$('#tempo').empty();
			$('#temp').empty();
			$('#umidade').empty();
			$('#tempoMarca').empty();
			return;
        }
		switch(dados.weather[0].icon){
            case '01d':
                $("#tempoMarca").html("<img src='http://openweathermap.org/img/wn/01d@2x.png'>");
                break;

            case '02d':
                $("#tempoMarca").html("<img src='http://openweathermap.org/img/wn/02d@2x.png'>");
                break;

            case '03d':
                $("#tempoMarca").html("<img src='http://openweathermap.org/img/wn/03d@2x.png'>");
                break;

            case '04d':
                $("#tempoMarca").html("<img src='http://openweathermap.org/img/wn/04d@2x.png'>");
                break;

            case '09d':
                $("#tempoMarca").html("<img src='http://openweathermap.org/img/wn/09d@2x.png'>");
                break;

            case '10d':
                $("#tempoMarca").html("<img src='http://openweathermap.org/img/wn/10d@2x.png'>");
                break;

            case '11d':
                $("#tempoMarca").html("<img src='http://openweathermap.org/img/wn/11d@2x.png'>");
                break;

            case '13d':
                $("#tempoMarca").html("<img src='http://openweathermap.org/img/wn/13d@2x.png'>");
                break;

            case '50d':
                $("#tempoMarca").html("<img src='http://openweathermap.org/img/wn/50d@2x.png'>");
                break;


            case '01n':
                $("#tempoMarca").html("<img src='http://openweathermap.org/img/wn/01n@2x.png'>");
                break;

            case '02n':
                $("#tempoMarca").html("<img src='http://openweathermap.org/img/wn/02n@2x.png'>");
                break;

            case '03n':
                $("#tempoMarca").html("<img src='http://openweathermap.org/img/wn/03n@2x.png'>");
                break;

            case '04n':
                $("#tempoMarca").html("<img src='http://openweathermap.org/img/wn/04n@2x.png'>");
                break;

            case '09n':
                $("#tempoMarca").html("<img src='http://openweathermap.org/img/wn/09n@2x.png'>");
                break;

            case '10n':
                $("#tempoMarca").html("<img src='http://openweathermap.org/img/wn/10n@2x.png'>");
                break;

            case '11n':
                $("#tempoMarca").html("<img src='http://openweathermap.org/img/wn/11n@2x.png'>");
                break;

            case '13n':
                $("#tempoMarca").html("<img src='http://openweathermap.org/img/wn/13n@2x.png'>");
                break;

            case '50n':
                $("#tempoMarca").html("<img src='http://openweathermap.org/img/wn/50n@2x.png'>");
                break;

        }
        $("#tempo").html(dados.weather[0].description);
        $("#temp").html(dados.main.temp);
		$("#umidade").html(dados.main.humidity); 
    })

    $("#limpar").on('click' ,function(){
        $('#cidade').val('');
		$('#tempo').empty();
        $('#temp').empty();
        $('#umidade').empty();
        $('#tempoMarca').empty();
    })       
       
})
