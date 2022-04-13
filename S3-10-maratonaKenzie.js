function positions(a, b, c) {
  let ordemDeChegada = [a, b, c];
  let posicaoDaniel = ordemDeChegada.indexOf("Daniel");
  let posicaoAntes = ordemDeChegada.indexOf("Daniel")-1; 
  let temp
  let temp2
  
  if (posicaoDaniel > 0) {  
  temp = ordemDeChegada[posicaoAntes];     //duas variaveis temporarias pra armazenar os dados originais do podio antes de aplicar o bonus de Daniel
  temp2 = ordemDeChegada[posicaoDaniel];
  ordemDeChegada[posicaoDaniel] = temp;
  ordemDeChegada[posicaoAntes] = temp2;
   
  }
  let podio = ["1ºlugar: "+ ordemDeChegada[0], "2ºlugar: "+ ordemDeChegada[1], "3ºlugar: "+ ordemDeChegada[2]];
  console.log(podio)
  return ordemDeChegada;    
}
positions("Rafael","Manoel","Daniel");
positions("Manoel","Daniel","Rafael");
positions("Daniel","Rafael","Manoel");
