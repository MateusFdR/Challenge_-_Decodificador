# Decodificador de Texto

![Imagem do Projeto](/assets/projeto.png)

## Índice

* [Visão Geral](#visão-geral)
* [Funcionalidades](#funcionalidades)
* [Chaves de Criptografia](#chaves-de-criptografia)
* [Exemplo](#exemplo)
* [Tecnologias](#tecnologias)
* [Fontes](#fontes)
* [Instalação](#instalação)
* [Como Usar](#como-usar)
* [Contato](#contato)

## Visão Geral

O **Decodificador de Texto** é uma aplicação web simples que permite criptografar e descriptografar mensagens usando um método de substituição de caracteres. Este projeto foi desenvolvido usando HTML, CSS e JavaScript. Os usuários podem inserir um texto para criptografar ou descriptografar, tornando a troca de mensagens secretas possível entre aqueles que conhecem o segredo da criptografia.

## Funcionalidades

- **Criptografar texto:** Transforma letras específicas em códigos, escondendo o conteúdo da mensagem.
- **Descriptografar texto:** Converte os códigos de volta para as letras originais, revelando o conteúdo da mensagem.
- **Copiar texto:** Permite copiar o texto criptografado ou descriptografado para a área de transferência.
- **Limpar campos:** Função para apagar rapidamente o conteúdo dos campos de entrada e saída.

## Chaves de Criptografia

As "chaves" utilizadas para criptografar o texto são:

- A letra **"e"** é convertida para **"enter"**
- A letra **"i"** é convertida para **"imes"**
- A letra **"a"** é convertida para **"ai"**
- A letra **"o"** é convertida para **"ober"**
- A letra **"u"** é convertida para **"ufat"**

### Exemplo

- Criptografando: `"gato"` => `"gaitober"`
- Descriptografando: `"gaitober"` => `"gato"`

## Tecnologias

- **HTML5:** Estrutura da página e marcação semântica.
- **CSS3:** Estilização e layout responsivo.
- **JavaScript:** Lógica de criptografia, descriptografia e manipulação do DOM.

## Fontes

Fonte usada: "Inter" e "IBM Plex Mono"

## Instalação

Para rodar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:

    ```bash
    git clone https://github.com/MateusFdR/Challenge_-_Decodificador.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd Challenge_-_Decodificador
    ```

3. Abra o arquivo `index.html` no seu navegador:

    Basta clicar duas vezes no arquivo `index.html` ou abrir no navegador usando um servidor local.

## Como Usar

![Gif do Projeto](/assets/funcionalidades.gif)

1. Digite o texto que deseja criptografar ou descriptografar no campo fornecido.
2. Clique no botão **"Criptografar"** para transformar seu texto em uma versão codificada.
3. Clique no botão **"Descriptografar"** para reverter o texto codificado para sua versão original.
4. Use o botão **"Copiar"** para copiar o texto exibido para a área de transferência.
5. Use o botão **"Limpar"** para limpar os campos de entrada e saída de texto.

## Contato

- **Autor:** Mateus Faria
- **LinkedIn:** [Mateus Faria](https://www.linkedin.com/in/mateus-faria-ti/)
- **GitHub:** [MateusFdR](https://github.com/MateusFdR)