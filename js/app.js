const { createApp } = Vue;

createApp({
  data() {
    const VERSION = "3";
    const v = (url) => `${url}?v=${VERSION}`;

    return {
      // Banner
      currentSlide: 0,
      images: [
          {
          src: v("./assets/new-banner/solucao.png"),
          alt: "Banner Grupo MRG",
          title: "",
          caption: "",
        },
        {
          src: v("./assets/new-banner/obras-com-acompanhamento.png"),
          alt: "Banner obras com acompanhamento",
          title: "",
          caption: "",
        },
        {
          src: v("./assets/new-banner/seguranca.png"),
          alt: "Banner Grupo MRG",
          title: "",
          caption: "",
        },
        {
          src: v("./assets/new-banner/revitalizacao-de-fachada-2.png"),
          alt: "Banner revitalização de fachada 2",
          title: "",
          caption: "",
        },
        {
          src: v("./assets/new-banner/grupo-mrg.png"),
          alt: "Banner Grupo MRG",
          title: "",
          caption: "",
        },
        {
          src: v("./assets/new-banner/atuando.png"),
          alt: "Banner Grupo MRG",
          title: "",
          caption: "",
        },
        {
          src: v("./assets/new-banner/grupo-mrg.png"),
          alt: "Banner Grupo MRG",
          title: "",
          caption: "",
        },
      ],
      autoRotateInterval: null,

      // Serviços
      isModalOpen: false,
      currentImage: null,
      services: [
        {
          src: v("./assets/new-banner/1.png"),
          alt: "Serviço 1",
        },
        {
          src: v("./assets/new-banner/2.png"),
          alt: "Serviço 2",
        },
        {
          src: v("./assets/new-banner/4.png"),
          alt: "Serviço 3",
        },
        {
          src: v("./assets/new-banner/5.png"),
          alt: "Serviço 4",
        },
      ],
    };
  },

  methods: {
    // Banner
    nextSlide() {
      if (!this.images.length) return;
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    prevSlide() {
      if (!this.images.length) return;
      this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    },
    startAutoRotate() {
      this.stopAutoRotate();
      this.autoRotateInterval = setInterval(this.nextSlide, 5000);
    },
    stopAutoRotate() {
      if (this.autoRotateInterval) {
        clearInterval(this.autoRotateInterval);
        this.autoRotateInterval = null;
      }
    },

    // Serviços (modal)
    openModal(imageSrc) {
      this.isModalOpen = true;
      this.currentImage = imageSrc;
    },
    closeModal() {
      this.isModalOpen = false;
      this.currentImage = null;
    },

    // Util: checar carregamento das imagens (ajuda a achar erro de caminho/404)
    async checkImagesLoad(urls) {
      const check = (src) =>
        new Promise((resolve) => {
          const i = new Image();
          i.onload = () => resolve({ src, ok: true });
          i.onerror = () => resolve({ src, ok: false });
          i.src = src;
        });

      const results = await Promise.all(urls.map(check));
      results.forEach((r) => {
        if (!r.ok) console.error("Imagem não carregou:", r.src);
      });
    },
  },

  mounted() {
    // Rotação automática do banner
    this.startAutoRotate();

    // Pausar quando a aba perder foco (opcional, melhora UX e performance)
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) this.stopAutoRotate();
      else this.startAutoRotate();
    });

    // Diagnóstico de imagens
    const allUrls = [
      ...this.images.map((i) => i.src),
      ...this.services.map((s) => s.src),
    ];
    this.checkImagesLoad(allUrls);
  },

  beforeUnmount() {
    this.stopAutoRotate();
  },
}).mount("#app");