$(document).ready(function() {
    // Toggle do menu mobile
    $('#mobile_btn').on('click', function () {
        $('#mobile_promocao').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    // Navegação ativa no scroll
    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    // Animações com ScrollReveal
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.pacote_promocional', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonieal_rayza', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });

    // Lógica de filtragem da galeria
    const filterBtns = document.querySelectorAll('#gallery-filter .filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove classe 'active' de todos e adiciona ao clicado
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Recupera o data-filter do botão
            const filterValue = btn.getAttribute('data-filter');

            if (filterValue === 'all') {
                // Mostra apenas 8 itens
                let count = 0;
                galleryItems.forEach(item => {
                    if (count < 8) {
                        item.style.display = 'block';
                        count++;
                    } else {
                        item.style.display = 'none';
                    }
                });
            } else {
                // Mostra apenas os itens da categoria
                galleryItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    if (itemCategory === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        });
    });

    // *** Fim do código principal ***

    // Forçar o filtro "all" ser aplicado no carregamento da página:
    const allBtn = document.querySelector('#gallery-filter .filter-btn[data-filter="all"]');
    if (allBtn) {
      // Simulamos o clique no botão "all"
      allBtn.click();
    }

    $(document).ready(function() {
        // ... [Seu código existente de menu, scroll, filtros, etc.]
    
        // Lógica de filtragem da galeria (já existente)
        const filterBtns = document.querySelectorAll('#gallery-filter .filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');
    
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove classe 'active' de todos os botões e adiciona ao clicado
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
    
                // Recupera o data-filter do botão
                const filterValue = btn.getAttribute('data-filter');
    
                if (filterValue === 'all') {
                    // Mostra apenas os primeiros 8 itens
                    let count = 0;
                    galleryItems.forEach(item => {
                        if (count < 8) {
                            item.style.display = 'block';
                            count++;
                        } else {
                            item.style.display = 'none';
                        }
                    });
                } else {
                    // Mostra apenas os itens que correspondem à categoria
                    galleryItems.forEach(item => {
                        const itemCategory = item.getAttribute('data-category');
                        if (itemCategory === filterValue) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                }
            });
        });
    
        // Força o filtro "all" no carregamento da página
        const allBtn = document.querySelector('#gallery-filter .filter-btn[data-filter="all"]');
        if (allBtn) {
          allBtn.click();
        }
    
        // Lightbox: abre a imagem em tamanho grande ao clicar na foto
        const modal = document.getElementById("modal");
        const modalImg = document.getElementById("modal-img");
        const modalCaption = document.getElementById("modal-caption");
        const closeBtn = document.querySelector(".modal .close");
    
        galleryItems.forEach(item => {
            item.addEventListener("click", function() {
                const img = item.querySelector("img");
                modal.style.display = "block";
                modalImg.src = img.src;
                modalCaption.textContent = img.alt;
            });
        });
    
        // Fecha o modal quando o botão de fechar for clicado
        closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
        });
    
        // Fecha o modal quando clicar fora da imagem
        modal.addEventListener("click", function(e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    });
    
});
