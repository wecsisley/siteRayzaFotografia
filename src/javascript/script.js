$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_promocao').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

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
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })

    const filterBtns = document.querySelectorAll('#gallery-filter .filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
        // Remove classe 'active' de todos e adiciona ao clicado
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Recupera o data-filter do botão
        const filterValue = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
            // Se o data-filter for 'all', exibir tudo
            if (filterValue === 'all') {
            item.style.display = 'block';
            } else {
            // Caso contrário, checa se item corresponde à categoria
            const itemCategory = item.getAttribute('data-category');
            if (itemCategory === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
            }
        });
        });
    });
});