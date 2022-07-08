function mensagem(){
    console.log('olá, pessoal')
}
mensagem()

function nome(name){
    console.log(`meu nome é ${name}`)
}
nome('Bella')

function dados(nome, idade, estiloMusical){
    console.log(`meu nome é ${nome}, minha idade é ${idade} anos, meu estilo de música preferido é ${estiloMusical}`)
}
dados('Bella', '19', 'mpb, rock')

function info(filme, musica){
    console.log(`meu filme preferido é: ${filme}, mminha musica preferida é ${musica}`)
}
info('várias queixas', 'a sociedade dos poetas mortos')

function conta(x){
    return x*3
}
console.log(conta(9))