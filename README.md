# Rayza Fotografia

Rayza Fotografia é um projeto de site responsivo para divulgação de serviços fotográficos. O site conta com seções dedicadas à página inicial, promoções, galeria de fotos (com filtros por categoria), depoimentos e redes sociais. A intenção é proporcionar uma experiência visual atraente e funcional para os visitantes.

## Funcionalidades

- **Home:** Página de apresentação com CTA, imagem/banner e integração com redes sociais.
- **Promoções:** Seção com pacotes promocionais e preços, incluindo botões integrados com o WhatsApp para solicitação de informações.
- **Galeria de Fotos:** Galeria filtrável por categorias (ex.: Dia das Mães, Páscoa, Gestante, Newborn, etc.) com visualização em grid e modal para ampliar fotos.
- **Depoimentos:** Seção com feedback de clientes, utilizando carrossel ou layout em grade para exibir avaliações.
- **Menu Responsivo:** Cabeçalho fixo com navegação adaptada para dispositivos móveis.

## Tecnologias Utilizadas

- **HTML5 & CSS3:** Estrutura e estilização do site.  
  - O arquivo `styles.css` importa os demais arquivos CSS (`header.css`, `home.css`, `promocoes.css`, `galeria.css`, `testimonials.css` e `footer.css`) para organizar os estilos por seções.
- **JavaScript & jQuery:** Funcionalidades dinâmicas, como menu responsivo, rolagem suave, e filtragem na galeria.  
  - O script está no arquivo `script.js`.
- **ScrollReveal:** Para animações de entrada dos elementos na tela.
- **FontAwesome:** Para os ícones (como o do WhatsApp, câmera, e redes sociais).
- **Google Fonts (Poppins):** Para a tipografia.

## Estrutura do Projeto

rayza-fotografia/ ├── images/ # Pasta com todos os assets de imagem (banners, ícones, fotos, etc.) ├── javascript/ │ └── script.js # Arquivo de scripts com jQuery e ScrollReveal ├── styles/ │ ├── header.css # Estilos do cabeçalho (header) │ ├── home.css # Estilos da seção inicial (home) │ ├── promocoes.css # Estilos da seção de promoções │ ├── galeria.css # Estilos da galeria de fotos e filtros │ ├── testimonials.css # Estilos dos depoimentos │ ├── footer.css # Estilos do rodapé (footer) │ └── styles.css # Arquivo principal de estilos que importa os demais CSS └── index.html # Página principal do site


## Instalação e Uso

1. **Clone o repositório**

   
   git clone https://github.com/seu-usuario/rayza-fotografia.git
   cd rayza-fotografia

Abra o site no navegador

Basta abrir o arquivo index.html no seu navegador ou utilizar uma extensão de servidor local (como o Live Server no VSCode) para testar o site.

Configurações Adicionais
Links do WhatsApp: Os botões de WhatsApp foram configurados com o link encurtado https://wa.me/5521992522473 acrescido de parâmetros para mensagem pré-definida e abertura em nova guia.

Scroll Suave: Foi utilizado scroll-padding-top no html para compensar o header fixo e garantir que as seções sejam exibidas corretamente ao clicar nos links do menu.

Filtros da Galeria: A galeria de fotos utiliza data-attributes para filtrar as imagens por categoria. Os botões de filtro possuem eventos JavaScript para mostrar ou esconder os itens da galeria conforme o filtro selecionado.

Contribuição
Contribuições são bem-vindas! Se você deseja melhorar o projeto, siga as etapas abaixo:

Faça um fork do repositório.

Crie uma branch para sua nova funcionalidade ou correção: git checkout -b minha-nova-feature.

Faça seus commits: git commit -m 'Adiciona nova funcionalidade'.

Envie sua branch: git push origin minha-nova-feature.

Abra um Pull Request.

Licença
Esse projeto está licenciado sob a MIT License.

Contato
Se tiver dúvidas ou sugestões, sinta-se à vontade para abrir uma issue ou entrar em contato: