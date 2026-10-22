# Colégio Sagrada Família

Site institucional do Colégio Sagrada Família, com informações sobre a escola, projetos pedagógicos, unidades e serviços da secretaria.

## Funcionalidades

- Páginas institucionais sobre o colégio e a rede de educação.
- Apresentação dos projetos de capoeira, handebol, Cooperativa Mirim e Comunidade Cuidado e Apoio.
- Calendário escolar, listas de materiais e regimento escolar em PDF.
- Informações de contato dos polos 1 e 2.
- Formulário de matrícula com geração de documento Word e envio por e-mail via PHP.
- Exibição de data, hora, eventos e versículo bíblico consultado em uma API externa.

## Tecnologias

- HTML5 e JavaScript.
- Tailwind CSS 3.4 para estilização.
- Font Awesome via CDN para ícones.
- PHP com PHPMailer e PHPWord para o formulário de matrícula.
- npm para instalação do Tailwind CSS e Composer para as dependências PHP.

## Estrutura

```text
src/
├── index.html              # Página inicial
├── sobre.html              # Informações sobre o colégio
├── redeDeEducacao.html     # Rede de educação
├── em_construcao.html      # Página de construção
├── input.css               # Entrada do Tailwind CSS
├── output.css              # CSS gerado pelo Tailwind
├── docs/                   # Documentos institucionais
├── img/                    # Imagens, vídeos e PDFs
├── js/                     # Scripts do site
├── pages/
│   ├── calendario/
│   ├── contatos/
│   ├── projetos/
│   └── secretaria/
└── php/
    ├── composer.json       # Dependências PHP
    └── enviarMatricula.php # Processamento da matrícula
package.json
package-lock.json
tailwind.config.js
vercel.json
```

## Como executar localmente

### 1. Instalar as dependências

Instale Node.js com npm e, na raiz do projeto, execute:

```sh
npm ci
```

### 2. Compilar os estilos

Durante o desenvolvimento, mantenha este comando em execução:

```sh
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

Para gerar uma versão minificada do CSS:

```sh
npx tailwindcss -i ./src/input.css -o ./src/output.css --minify
```

O projeto ainda não define scripts no `package.json`; os comandos acima executam o Tailwind diretamente.

### 3. Servir as páginas

Para visualizar o site, utilize um servidor HTTP local com a pasta `src` como raiz, como a extensão Live Server do VS Code.

Se tiver PHP instalado, também pode executar na raiz do projeto:

```sh
php -S localhost:8000 -t src
```

Acesse `http://localhost:8000`. O servidor embutido do PHP é destinado ao desenvolvimento local.

### 4. Configurar o formulário de matrícula

O processamento do formulário exige PHP, Composer e acesso a um servidor SMTP. Instale as dependências a partir da raiz do projeto:

```sh
composer install --working-dir=src/php
```

Configure o envio em `src/php/enviarMatricula.php` e execute o site com um servidor que suporte PHP. O processo precisa de permissão de escrita em `src/php` para gerar o documento temporário da matrícula.

**Antes de publicar:** o arquivo PHP atualmente contém uma senha SMTP no código. Remova essa credencial, substitua-a por configuração externa ao repositório e altere a senha se ela já tiver sido compartilhada. O carregamento de variáveis de ambiente ainda precisa ser implementado.

## Manutenção

- Edite o conteúdo nas páginas HTML de `src` e `src/pages`.
- Ajuste as cores e demais personalizações do Tailwind em `tailwind.config.js`.
- Utilize `src/input.css` como entrada dos estilos e recompile após alterações nas classes das páginas ou scripts.
- Atualize imagens e documentos em `src/img` e `src/docs`, conferindo os links nas páginas correspondentes.
- O cabeçalho e o rodapé atualmente estão repetidos nas páginas; a centralização em um arquivo compartilhado ainda não foi implementada.

## Publicação

O repositório contém uma configuração da Vercel com `src` como diretório de saída e `npm run build` como comando de build. Como esse script ainda não existe no `package.json`, será necessário adicioná-lo com o comando de compilação do Tailwind ou ajustar o comando de build na configuração antes do deploy.

A publicação estática atende às páginas HTML, CSS, JavaScript e arquivos de mídia. O formulário de matrícula precisa de hospedagem com suporte a PHP ou de um backend separado; a publicação estática por si só não executa `enviarMatricula.php`.

## Preparação para o Git

Antes do primeiro commit:

- Remova as credenciais presentes no código.
- Configure um `.gitignore` para excluir `node_modules/`, `src/php/vendor/`, `.idea/`, arquivos `.env`, logs e documentos temporários de matrícula (`src/php/matricula_*.docx`).
- Confira os arquivos enviados para evitar a inclusão de dados pessoais de alunos e responsáveis.
- Mantenha os arquivos de dependências e seus respectivos lockfiles versionados, quando disponíveis.

## Licença

Este repositório ainda não contém um arquivo de licença. Defina as condições de uso e distribuição antes de reutilizar ou distribuir o código e os materiais institucionais.
