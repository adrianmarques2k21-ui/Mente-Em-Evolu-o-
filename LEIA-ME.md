# Mente em Evolução — site estático

## O que está pronto neste pacote
- Site completo e responsivo (Home, Box do Sucesso, 6 páginas de categoria, Blog, 6 artigos SEO completos e originais, 5 páginas legais).
- Identidade visual preto/branco/dourado, tipografia editorial (Fraunces + Inter), menu mobile, barra de CTA fixa no celular, animações discretas de scroll.
- **Link de afiliado centralizado em um único lugar:** `js/config.js`, campo `AFFILIATE_URL`. Todo botão de conversão do site (desktop, mobile, artigos, categorias) puxa esse valor automaticamente via `data-affiliate-link`. Para trocar o link no futuro, edite apenas essa linha.
- SEO técnico: `sitemap.xml`, `robots.txt`, meta title/description por página, Open Graph, canonical, Schema.org (Article + BreadcrumbList nos artigos).
- Nenhuma informação inventada: sem depoimentos falsos, sem preços, sem contadores de escassez — conforme pedido no briefing.

## Como publicar
Este é um site estático puro (HTML/CSS/JS), sem dependências de build. Basta enviar a pasta `dist/` para qualquer hospedagem estática (Vercel, Netlify, Cloudflare Pages, GitHub Pages, cPanel etc.). Antes de publicar:
1. Trocar o domínio placeholder `https://menteemevolucao.com.br` em `generate.py` (constante `SITE_URL`) pelo domínio real e rodar `python3 build_all.py` novamente.
2. Preencher os campos marcados como `[Espaço reservado]` nas páginas legais e de contato.
3. Substituir os visuais gerados em CSS por fotos/ilustrações reais, se desejar.
4. Conectar o Google Analytics e o Google Search Console (ver seção abaixo).

## O que NÃO foi construído — e por quê
O briefing também pedia um **painel administrativo com Supabase Auth**, criação/edição de artigos por uma interface visual, e registro de analytics no banco de dados. Isso é honesto e importante de dizer:

Este ambiente de chat gera arquivos e roda código localmente, mas **não tem acesso à internet** para instalar frameworks (Next.js, React com backend), criar um projeto Supabase real ou conectar a um banco de dados. Por isso, um painel `/admin` funcional — com login, CRUD de artigos e gravação de métricas em tempo real — não pode ser entregue *funcionando* a partir daqui.

**Caminho recomendado para essa parte:**
- Migrar este site estático para **Next.js** (mantendo o mesmo design e conteúdo) hospedado na Vercel.
- Usar **Supabase** para autenticação do `/admin` e para armazenar artigos, categorias e configuração do link de afiliado em tabelas (uma tabela `settings` com o campo `affiliate_url` substitui o `config.js`).
- Registrar cliques no botão do Box e visualizações de artigo em uma tabela `events` do Supabase em vez do `localStorage` simples usado aqui (que serve apenas como espaço reservado local).
- Esse trabalho é melhor conduzido em uma ferramenta com acesso a terminal, internet e deploy contínuo — no ecossistema Claude, o **Claude Code** é o ambiente adequado para isso, já que consegue instalar dependências, criar o projeto Supabase via CLI e publicar de fato.

## Artigos publicados vs. planejados
Dos 20 títulos do briefing, **6 foram escritos por completo** (originais, com H2/H3/FAQ e ~600–700 palavras cada), cobrindo as principais categorias. Os outros 14 aparecem na página `/blog` como um **calendário editorial** ("em breve"), sem página própria — para não publicar texto genérico só para preencher espaço, como o briefing pediu explicitamente. Peça para eu escrever os próximos lotes quando quiser.
