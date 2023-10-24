export default {
  target: "server",
  ssr: "true",
  //mode: "spa",

  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [     
      {
        rel: "stylesheet",
        href: "/master.css",
      },
      {
        rel: "stylesheet",
        href: "/Style.css",
      },
      {
        rel: "stylesheet",
        href: "/Util.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css",
      },


      // {
      //   rel: "stylesheet",
      //   href: "/font-awesome-p.min.css",
      // },
      // {
      //   rel: "stylesheet",
      //   href: "/icon-line-pro-style.css",
      // },
    ],
    script: [],
  },

  components: true,
  buildModules: [
    "@nuxtjs/router",
  ],

  telemetry: false, // nuxt build ederken sorulan soruyu kapatır
};
