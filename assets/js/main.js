/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });
/** Funçao para exibir a lista de serviços por paginas e descriçoes diferentes */
const services = {
    pentest: {
      /** 
      title: "Pentest",
      img: "assets/img/servicos/Pentest.jpg",
      desc: "Teste de invasão para identificar vulnerabilidades no sistema.", 
      */
      Titulo_1: "Qual o objetivo do Pentest?",
      img: "assets/img/servicos/Pentest.jpg",
      Desc_titulo1: "Testar a Vulnerabilidade de sua empresa",
      Titulo_img1: "Empresas que testam suas vulerabilidades garantem mais segurança aos seus dados",
      Desc_imagem1: "O Relatorio estatistico aponta que 95% das empresas que realizam os testes de vulnerabilidades garantem mais segurança aos dados e aos seus sistemas informativos.",
      Lista1_img1: "Descriçao da Lista1 da imagem 1",
      Lista2_img1: "Descriçao da Lista2 da imagem 1",
      Lista3_img1: "Descriçao da Lista3 da imagem 1",
      Texto1_img1: "Descriçao do texto 1",
      Texto2_img1: "Descriçao do texto 2"
    },
    acesso: {
      /**
      title: "Controle de Acesso",
      img: "assets/img/acesso.jpg",
      desc: "Gerenciamento de quem pode acessar sistemas e recursos."
      */
      Titulo_1: "Qual o objetivo do Controle de Acesso ou ACL?",
      img: "assets/img/servicos/ACLs.jpg",
      Desc_titulo1: "O controle de acesso permite a empresa manter a confidencialidade das informaçoes",
      Titulo_img1: "Empresas que gerenciam os usuarios atraves de ACLs garantem mais segurança aos seus dados",
      Desc_imagem1: "O Relatorio estatistico aponta que 95% das empresas que realizam o gerenciamento por ACLs garantem mais segurança aos dados e aos seus sistemas informativos.",
      Lista1_img1: "Descriçao da Lista1 da imagem 1",
      Lista2_img1: "Descriçao da Lista2 da imagem 1",
      Lista3_img1: "Descriçao da Lista3 da imagem 1",
      Texto1_img1: "Descriçao do texto 1",
      Texto2_img1: "Descriçao do texto 2"
    },
    vpn: {
      /**
      title: "VPN",
      img: "assets/img/vpn.jpg",
      desc: "Conexão segura e criptografada entre redes."
      */
      Titulo_1: "Qual a vantagem de se ter uma VPN em sua empresa?",
      img: "assets/img/servicos/VPN2.jpeg",
      Desc_titulo1: "Com a VPN a sua empresa entegra Matriz e Filial...",
      Titulo_img1: "Empresas que utilizam VPN garantem mais segurança aos seus dados",
      Desc_imagem1: "O Relatorio estatistico aponta que 95% das empresas que utilizam VPN garantem mais segurança aos dados e aos seus sistemas informativos.",
      Lista1_img1: "Descriçao da Lista1 da imagem 1",
      Lista2_img1: "Descriçao da Lista2 da imagem 1",
      Lista3_img1: "Descriçao da Lista3 da imagem 1",
      Texto1_img1: "Descriçao do texto 1",
      Texto2_img1: "Descriçao do texto 2"
    },
    redundancia: {
      /**
      title: "Redundância de Links",
      img: "assets/img/redundancia.jpg",
      desc: "Garantia de conexão contínua mesmo com falhas."
      */
      Titulo_1: "Será se as empresas realmente precisam de Redundan?",
      img: "assets/img/servicos/failoverlinks.jpg",
      Desc_titulo1: "A redundancia de links permite maior disponibilidade dos seus serviços on line",
      Titulo_img1: "Quanto vale 1 minuto de sua empresa?",
      Desc_imagem1: "O Relatorio estatistico aponta que 95% das empresas que trabalham com redundancia de links garantem mais conforto, comodidade e disponibildade de seus dados.",
      Lista1_img1: "Descriçao da Lista1 da imagem 1",
      Lista2_img1: "Descriçao da Lista2 da imagem 1",
      Lista3_img1: "Descriçao da Lista3 da imagem 1",
      Texto1_img1: "Descriçao do texto 1",
      Texto2_img1: "Descriçao do texto 2"
    },
    wifi: {
      /**
      title: "Wifi Hotspot",
      img: "assets/img/wifi.jpg",
      desc: "Distribuição de internet sem fio controlada."
      */
      Titulo_1: "Qual a diferença entre um Wifi corporativo e um Wifi comum?",
      img: "assets/img/servicos/wifihotspot.jpg",
      Desc_titulo1: "O wifi corporativo voce controla todos os acessos e monitora todos os passos dos seus clientes.",
      Titulo_img1: "Empresas que gerenciam os usuarios atraves de Wifi garantem mais segurança aos seus dados",
      Desc_imagem1: "O Relatorio estatistico aponta que 95% das empresas que realizam o gerenciamento por ACLs garantem mais segurança aos dados e aos seus sistemas informativos.",
      Lista1_img1: "Descriçao da Lista1 da imagem 1",
      Lista2_img1: "Descriçao da Lista2 da imagem 1",
      Lista3_img1: "Descriçao da Lista3 da imagem 1",
      Texto1_img1: "Descriçao do texto 1",
      Texto2_img1: "Descriçao do texto 2"
    },
    monitoramento: {
      /**
      title: "Monitoramento de Rede",
      img: "assets/img/monitoramento.jpg",
      desc: "Acompanhamento em tempo real da infraestrutura."
      */
      Titulo_1: "Qual a importancia de mapear todos os ativos de rede?",
      img: "assets/img/servicos/monitoramento.png",
      Desc_titulo1: "O controle de acesso permite a empresa manter a confidencialidade das informaçoes",
      Titulo_img1: "Empresas que gerenciam os usuarios atraves de ACLs garantem mais segurança aos seus dados",
      Desc_imagem1: "O Relatorio estatistico aponta que 95% das empresas que realizam o gerenciamento por ACLs garantem mais segurança aos dados e aos seus sistemas informativos.",
      Lista1_img1: "Descriçao da Lista1 da imagem 1",
      Lista2_img1: "Descriçao da Lista2 da imagem 1",
      Lista3_img1: "Descriçao da Lista3 da imagem 1",
      Texto1_img1: "Descriçao do texto 1",
      Texto2_img1: "Descriçao do texto 2"
    }
  };
  
  /** Mudança de opacidade nas imagens da pagina Detalhes de Serviços */

  const img = document.getElementById('service-img');
const links = document.querySelectorAll(".services-list a");

links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    // remove ativo de todos
    links.forEach(1 => 1.classList.remove("active"));

    //adiciona "active" no item clicado
    this.classList.add("active");

    const service = this.getAttribute("data-service");

    if (!services[service]) {
      console.log("Serviço nao encontrado:", service);
      return;
    }

    const newSrc = services[service].img;

    // pré-carrega a imagem
    const tempImg = new Image();
    tempImg.src = newSrc;

    tempImg.onload = () => {

      // FADE OUT
      img.classList.add('fade-out');

      setTimeout(() => {
        // troca imagem (AGORA SIM, só aqui)
        img.src = newSrc;

        // atualiza textos JUNTO com a imagem
        document.getElementById("service-Titulo_1").innerText = services[service].Titulo_1;
        document.getElementById("service-Desc_titulo1").innerText = services[service].Desc_titulo1;

        document.getElementById("service-Titulo_img1").innerText = services[service].Titulo_img1;
        document.getElementById("service-Desc_imagem1").innerText = services[service].Desc_imagem1;

        document.getElementById("service-Lista1_img1").innerText = services[service].Lista1_img1;
        document.getElementById("service-Lista2_img1").innerText = services[service].Lista2_img1;
        document.getElementById("service-Lista3_img1").innerText = services[service].Lista3_img1;

        document.getElementById("service-Texto1_img1").innerText = services[service].Texto1_img1;
        document.getElementById("service-Texto2_img1").innerText = services[service].Texto2_img1;

        // FADE IN
        img.classList.remove('fade-out');

      }, 400);
    };
  });
});
  
  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();
