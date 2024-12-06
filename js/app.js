const { createApp } = Vue;

createApp({
  data() {
    return {
      // Configurações do banner
      currentSlide: 0,
      images: [
        {
          src: "https://guilhermeruj.github.io/mrg/assets/image2.png",
          alt: "Banner de arquitetura 1",
          title: "",
          caption: "",
        },
        {
          src: "https://guilhermeruj.github.io/mrg/assets/image3.png",
          alt: "Banner de arquitetura 3",
          title: "",
          caption: "",
        },
        {
          src: "https://guilhermeruj.github.io/mrg/assets/image4.png",
          alt: "Banner de arquitetura 4",
          title: "",
          caption: "",
        },
        {
          src: "https://guilhermeruj.github.io/mrg/assets/image5.png",
          alt: "Banner de arquitetura 5",
          title: "",
          caption: "",
        },
        {
          src: "https://guilhermeruj.github.io/mrg/assets/image6.png",
          alt: "Banner de arquitetura 6",
          title: "",
          caption: "",
        },
      ],
      autoRotateInterval: null,

      // Configurações dos serviços
      isModalOpen: false,
      currentImage: null,
      services: [
        {
          src: "https://guilhermeruj.github.io/mrg/assets/service/service-1.png",
          alt: "Serviço 1",
        },
        {
          src: "https://guilhermeruj.github.io/mrg/assets/service/service-2.png",
          alt: "Serviço 2",
        },
        {
          src: "https://guilhermeruj.github.io/mrg/assets/service/service-3.png",
          alt: "Serviço 3",
        },
        {
          src: "https://guilhermeruj.github.io/mrg/assets/service/service-4.png",
          alt: "Serviço 4",
        },
        {
          src: "https://guilhermeruj.github.io/mrg/assets/service/service-5.png",
          alt: "Serviço 5",
        },
      ],
    };
  },
  methods: {
    // Métodos do banner
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.images.length) % this.images.length;
    },
    startAutoRotate() {
      this.autoRotateInterval = setInterval(this.nextSlide, 5000);
    },
    stopAutoRotate() {
      clearInterval(this.autoRotateInterval);
    },

    // Métodos dos serviços
    openModal(imageSrc) {
      this.isModalOpen = true;
      this.currentImage = imageSrc;
    },
    closeModal() {
      this.isModalOpen = false;
      this.currentImage = null;
    },
  },
  mounted() {
    this.startAutoRotate();
  },
  beforeUnmount() {
    clearInterval(this.autoRotateInterval);
  },
}).mount("#app");
