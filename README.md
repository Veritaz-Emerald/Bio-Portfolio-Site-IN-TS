# Comandos básicos:
`npm i` (Instalar dependências);
`npm run dev` (Iniciar em localhost).

# TUTORIAL DE ALTERAÇÃO DE COMPONENTES:
### Como alterar o site:
1. Em `App.tsx` terá "initialLinks", altere para **"true"** ou **"false"** para ativar ou desativar o link das plataformas.

2. Além disto, em App.tsx terá como alterar a música do site `(linha 18)`. Faça download do mp3 da música de sua escolha e a coloque no catbox (https://catbox.moe/). Ele irá retornar um link, apenas substitua o que já está na source.

3. Na `linha 27` de app.tsx você também poderá alterar se quuem acessar o seu site pode ativar/desativar se quer ver ou não o background do site. Há um comentário explicando.

### Como hospedar `(vercel/netlify)`:

1. Você precisará adicionar a source no github, há inúmeros tutoriais no YouTube para isto (além de como hospedar na vercel/netlify).
2. 
**O comando inicial é `npm run build` (provavelmente já vai estar configurado, mas em alguns casos pode não estar).**
