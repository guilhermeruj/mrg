const { createApp } = Vue;

createApp({
  data() {
    return {
      currentSlide: 0,
      images: [
        // {
        //   src: "/assets/image1.png",
        //   alt: "Banner de arquitetura 1",
        //   title: "",
        //   caption: "",
        // },
        {
          src: "https://guilhermeruj.github.io/mrg/assets/image1.png",
          alt: "Banner de arquitetura 2",
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
          alt: "Banner de arquitetura 3",
          title: "",
          caption: "",
        },
        {
          src: "https://guilhermeruj.github.io/mrg/assets/image5.png",
          alt: "Banner de arquitetura 3",
          title: "",
          caption: "",
        },
        {
          src: "https://guilhermeruj.github.io/mrg/assets/image6.png",
          alt: "Banner de arquitetura 3",
          title: "",
          caption: "",
        },
      ],
      autoRotateInterval: null,
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.images.length) % this.images.length;
    },
    startAutoRotate() {
      this.autoRotateInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    stopAutoRotate() {
      clearInterval(this.autoRotateInterval);
    },
  },
  mounted() {
    this.startAutoRotate();
  },
  beforeUnmount() {
    clearInterval(this.autoRotateInterval);
  },
}).mount("#app");
