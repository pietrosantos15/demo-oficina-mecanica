# Torque Car Service: site de demonstração para rede/oficina de serviço automotivo

Site estático (HTML, CSS e JavaScript puro, sem build) para mostrar a clientes como ficaria a página de uma oficina com padrão de rede. Nome, endereço e conteúdo são fictícios.

## Inspiração
Visual inspirado em redes de serviço automotivo de padrão corporativo técnico (vermelho-técnico, grafite, branco, tipografia condensada em caixa alta, grid de módulos e selos de garantia). Logotipo e nome são originais e não há vínculo com nenhuma marca real. O site não se declara autorizado de nenhum fabricante.

- Paleta: vermelho `#D5001C`, grafite `#1F2933`, azul-petróleo escuro `#14202B`, cinza `#F1F3F5`, branco.
- Fontes: Barlow Condensed (títulos) e Barlow (texto), via Google Fonts, com fallback de sistema.

## Ver no ar
No GitHub: **Settings > Pages > Deploy from a branch > `main` / `/ (root)`**. O link fica em `https://SEU-USUARIO.github.io/demo-oficina-mecanica/`.

## Personalizar para um cliente sem editar código
```
https://SEU-USUARIO.github.io/demo-oficina-mecanica/?wa=5515991234567&nome=Oficina%20do%20Cliente
```

- `wa`: número com código do país e DDD, só dígitos. Troca todos os botões, a ordem de serviço e o telefone exibido.
- `nome`: troca o nome no topo, no rodapé e na aba do navegador.

## Checklist de entrega ao cliente
- [ ] Número do WhatsApp: busque `5500900000000` e `(00) 90000-0000` no `index.html`.
- [ ] Nome da marca e logotipo (SVG inline `.logo`, aparece no topo e no rodapé).
- [ ] Endereço, CEP, horários (barra superior e seção Unidade) e link do Google Maps.
- [ ] Serviços, prazos e valores reais.
- [ ] Garantia: o texto fala em 90 dias ou 3.000 km, ajuste ao que a oficina oferece.
- [ ] Checklist de 30 pontos e FAQ conforme o processo real.
- [ ] Marcas atendidas.
- [ ] Remova a frase "Site de demonstração" do rodapé e o asterisco de garantia, se não se aplicar.

A "ordem de serviço" do hero monta o pedido com placa, marca, modelo, ano e serviços marcados e abre o WhatsApp. Para incluir ou tirar um serviço, edite os `<label class="chk">`.

## Arquivos
`index.html` (conteúdo) · `style.css` (visual) · `script.js` (ordem de serviço, WhatsApp e parâmetros do link)
