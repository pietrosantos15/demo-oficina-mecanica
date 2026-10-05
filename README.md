# Cardoso Auto Center: site de demonstração para oficina mecânica

Site estático (HTML, CSS e JavaScript puro, sem build) para mostrar a clientes como ficaria a página de uma oficina de bairro. Nome, endereço e valores são fictícios; o site não se declara autorizado de nenhuma marca.

## Estrutura
Hero com foto e CTA de WhatsApp, faixa de 4 fatos (garantia por escrito, orçamento antes de começar, peças com nota fiscal, hora marcada), serviços com "a partir de", como funciona, formulário de orçamento (placa, ano, marca/modelo, serviço) que abre o WhatsApp, marcas atendidas, FAQ, endereço, horário e mapa. Botão flutuante de WhatsApp.

- Paleta: azul-marinho `#12263F`, âmbar `#F5B301`, papel `#F6F4EF`, verde WhatsApp `#157A3D`, texto `#1A2433`.
- Fontes: Archivo (títulos) e Inter (texto), via Google Fonts.

## Fotos (hotlink Unsplash, trocar por fotos do cliente em `assets/`)
- Hero: carro com capô aberto sobre elevador (`photo-1786490002518-8b5af5f2b537`).
- Galeria 1: mecânico avaliando o motor (`photo-1625047509248-ec889cbff17f`).
- Galeria 2: mecânico trabalhando em pneu (`photo-1645445522156-9ac06bc7a767`).
- Galeria 3: mecânico colocando óleo (`photo-1642075223291-f9ec545889fa`).

## Personalizar por link
`?wa=5515991234567&nome=Oficina%20do%20Cliente` troca o WhatsApp, o telefone exibido e o nome (topo, rodapé e aba).

## Checklist de entrega
- [ ] WhatsApp: busque `5500900000000` e `(00) 90000-0000`.
- [ ] Nome, logotipo (SVG inline), endereço, horários e link do mapa.
- [ ] Valores "a partir de", prazos, garantia (90 dias/3.000 km é exemplo), formas de pagamento.
- [ ] Marcas atendidas e FAQ conforme a oficina.
- [ ] Trocar as fotos e remover a barra "Proposta de demonstração" e a frase do rodapé.
