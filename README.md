# Auto Mecânica Pistão: site de demonstração para oficina mecânica

Site estático (HTML, CSS e JavaScript puro, sem build) para mostrar a clientes como ficaria a página da oficina deles. Conteúdo e nomes são fictícios.

## Ver no ar
No GitHub: **Settings > Pages > Deploy from a branch > `main` / `/ (root)`**. O link fica em `https://SEU-USUARIO.github.io/demo-oficina-mecanica/`.

## Personalizar para um cliente sem editar código
Acrescente parâmetros ao link:

```
https://SEU-USUARIO.github.io/demo-oficina-mecanica/?wa=5515991234567&nome=Oficina%20do%20Cliente
```

- `wa`: número com código do país e DDD, só dígitos. Troca todos os botões, a ordem de serviço e o telefone exibido.
- `nome`: troca o nome da oficina no topo, no rodapé e na aba do navegador.

## Entregar de verdade ao cliente
Antes de publicar para o cliente, troque no `index.html`:

- [ ] Número do WhatsApp: busque `5500900000000` e `(00) 90000-0000`.
- [ ] Nome, endereço, horários e link do Google Maps.
- [ ] Lista de serviços e prazos (use os tempos reais da oficina).
- [ ] Garantia: o texto fala em 90 dias, ajuste para o que a oficina oferece.
- [ ] Marcas atendidas.
- [ ] Remova a frase "Site de demonstração" do rodapé.

A "ordem de serviço" da página monta o pedido de orçamento com os serviços marcados e abre o WhatsApp. Para incluir ou tirar um serviço, edite os `<label class="chk">` do formulário.

## Arquivos
`index.html` (conteúdo) · `style.css` (visual) · `script.js` (ordem de serviço, WhatsApp e parâmetros do link)
