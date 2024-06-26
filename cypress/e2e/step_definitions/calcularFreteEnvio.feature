#utf-8
#language: pt

Funcionalidade: Calcular Frente Envio

Contexto: Iniciarliza aplicacao
Dado que estou com a aplicacao aberta 

@calcularFreteEnvioCT1
Cenario: CT01 - Valida a visualizar das informações de PAC SEDEX e mini envios.
E informo o cep de origem
E seleciono o formato de caixa ou pacote
E seleciono o peso do objeto
E informa a altura do objeto
E informa a largura do objeto
E informa o comprimento do objeto
E informa o cep de destino
E clico no botao CALCULAR FRETE COM DESCONTO
Entao valido a correspondencia de pacotes de envios PAC SEDEX e Mini envio

@calcularFreteEnvioCT2
Cenario: CT02 - Validar a obrigatoriedade do campo cep origem.
E seleciono o formato de caixa ou pacote
E seleciono o peso do objeto
E informa a altura do objeto
E informa a largura do objeto
E informa o comprimento do objeto
E informa o cep de destino
E clico no botao CALCULAR FRETE COM DESCONTO
Entao valido a obrigatoriedade do preencimento do campo cep origem

@calcularFreteEnvioCT3
Cenario: CT03 - Validar a obrigatoriedade do campo cep destino.
E informo o cep de origem
E seleciono o formato de caixa ou pacote
E seleciono o peso do objeto
E informa a altura do objeto
E informa a largura do objeto
E informa o comprimento do objeto
E clico no botao CALCULAR FRETE COM DESCONTO
Entao valido a obrigatoriedade do preencimento do campo cep destino