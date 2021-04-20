const apiKey = {
    key: 'e18171f7-a1a0-4b3a-9a9a-0594dd672a01'
}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apiKey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
    })
    .then((api) => {
        var text = "";
        
        for(let i = 0; i < 12; i++) {
            text = text + 
            `<div class="media card mb-3 mr-3" style="width: 15rem;">
                <img src="./img/coin.jpg" class="card-img-top" alt="coin" width="15rem" height="150rem">
                <div class="media-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <h5 class="mt-2 text-center">${api.data[i].name}</h5>
                        </li>
                        <li class="list-group-item">
                            <p class="text-center">${api.data[i].symbol}</p>
                        </li>
                        <li class="list-group-item">
                            <p class="text-center">${api.data[i].first_historical_data.substring(0,10).split('-').reverse().join('-')}</p>
                        </li>
                    </ul>
                </div>
            </div>`;

            document.getElementById("coins").innerHTML = text;
    }
    }).catch((error) => {
        console.log(error.message);
    })