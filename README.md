# Desafio Portfolio de Programador - Frontend-Mentor

Este é um desafio de um portfolio para um programador, proposto pelo site Frontend-Mentor.

## Tabela de Conteúdos

- [Visão Geral](#visão-geral)
    - [Imagens](#imagens)
    - [Link da página](#link)
- [Processo](#processo)
    - [Linguagens utilizadas](#linguagens-utilizadas)
    - [O que aprendi](#o-que-aprendi)
    - [Possíveis evoluções](#possíveis-evoluções)
- [Autor](#autor)

## Visão-geral

### Imagens

<br>

````
Versão de Desktop
````

   <img src="./src/design/desktop-design.gif" alt="desktop-design">

<br>

````
Versão Mobile
````

 <img src="./src/design/mobile-design.gif" alt="mobile-design">

<br>

````
Versão Tablet
````

 <img src="./src/design/tablet-design.gif" alt="mobile-design">

### Link

- Página no GitHub Pages: <a href="https://julio-mansan2.github.io/developer-portfolio/">Clique aqui!</a>

## Processo

### Linguagens utilizadas

<br>

- Marcações semânticas de HTML5
- Propriedades de customização do CSS3
- Estruturas de JavaScript

<br>

### O que aprendi

<br>

- Validar um campo input:


````javascript

const inputSubmit = document.querySelector('.submit')
const inputEmail = document.querySelector('#input-email')
const inputName = document.querySelector('#input-name')
const error = document.querySelectorAll('.error')

inputSubmit.addEventListener('click', function () {
    event.preventDefault()
    if (inputEmail.validity.valid === false || inputEmail.value == '') {
        error[1].innerHTML = 'Sorry, check your email'
    } else {
        error[1].innerHTML = ''
    }

    if (inputName.value == '') {
        error[0].innerHTML = 'Cant be blank'
    } else {
        error[0].innerHTML = ''
    }
})

````

<br>

### Possíveis evoluções

<br>

- Códigos compactos;
- Estilização do background.

<br>

## Autor

GitHub - <a href="https://github.com/julio-mansan2">julio-mansan2</a> <br>
Front-end Mentor - <a href="https://www.frontendmentor.io/profile/julio-mansan2">julio-mansan2</a> <br>
LinkedIn - <a href="https://www.linkedin.com/in/j%C3%BAlio-a-mansan-3415a7249/">Júlio A.</a> <br>