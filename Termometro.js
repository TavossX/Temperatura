var temp = [];
var media = 0;

for (var i = 0; i < 7; i++){
    temp[i] = parseFloat(prompt("Digite a temperatura do dia "  + (i + 1)))
}

console.log("essas foram as temperaturas da semana: ", temp)

var media = 0;
for (var i = 0; i < 7; i++){
    media += temp[i];
}

media = media/7

console.log("essa foi a média de temperatura da semana ", media)