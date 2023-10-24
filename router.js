import Vue from "vue";
import Router from "vue-router";
import index from "~/pages/index";
import about from "~/pages/about";
import blog from "~/pages/blog";
import communication from "~/pages/communication";
import broad from "~/pages/broad";
import team from "~/pages/team";
import rent from "~/pages/rent";
import administration from "~/pages/administration";
import biyografi_1 from "~/pages/biyografi_1";
import biyografi_2 from "~/pages/biyografi_2";
import biyografi_3 from "~/pages/biyografi_3";
import capital from "~/pages/capital";
import company from "~/pages/company";
import consumer from "~/pages/consumer";
import contentious from "~/pages/contentious";
import divorce from "~/pages/divorce";
import electronic from "~/pages/electronic";
import estate from "~/pages/estate";
import executive from "~/pages/executive";
import family from "~/pages/family";
import health from "~/pages/health";
import incapacity from "~/pages/incapacity";
import insurance from "~/pages/insurance";
import need from "~/pages/need";
import ohal from "~/pages/ohal";
import personal_data from "~/pages/personal_data";
import property from "~/pages/property";
import punishment from "~/pages/punishment";
import quake from "~/pages/quake";
import realty from "~/pages/realty";
import sosyal_media from "~/pages/sosyal_media";
import traffic_accident from "~/pages/traffic_accident";
import work from "~/pages/work";
import foreign from "~/pages/foreign";
import compensation from "~/pages/compensation";

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: "history",
    routeNameSplitter: "-",
    scrollBehavior() {
      return { x: 0, y: 0 };
    },
    routes: [          
      {
        path: "",
        component: index,
      }, 
      {
        path: "/hakkimizda",
        component: about,
      }, 
      {
        path: "/blog",
        component: blog,
      },  
      {
        path: "/iletisim",
        component: communication,
      }, 
      {
        path: "/faaliyet",
        component: broad,
      },   
      {
        path: "/ekip",
        component: team,
      },   
      {
        path: "/kira",
        component: rent,
      }, 
      {
        path: "/idare_hukuku",
        component:administration,
      }, 
      {
        path: "/avukat_seyit_baris_altun",
        component:biyografi_1,
      }, 
      {
        path: "/avukat_2",
        component:biyografi_2,
      }, 
      {
        path: "/avukat_3",
        component:biyografi_3,
      }, 
      {
        path: "/borsa",
        component:capital,
      }, 
      {
        path: "/sirketler_ticaret_hukuku",
        component:company,
      }, 
      {
        path: "/tuketici_hukuku",
        component:consumer,
      }, 
      {
        path: "/cekismeli_bosanma",
        component:contentious,
      }, 
      {
        path: "/bosanma_davası",
        component:divorce,
      }, 
      {
        path: "/elektronik",
        component:electronic,
      }, 
      {
        path: "/miras_hukuku",
        component:estate,
      }, 
      {
        path: "/icra_iflas_hukuku",
        component:executive,
      }, 
      {
        path: "/aile_hukuku",
        component:family,
      }, 
      {
        path: "/saglik_hukuku",
        component:health,
      }, 
      {
        path: "/is_goremezlik_tazminatı",
        component:incapacity,
      }, 
      {
        path: "/sigorta_hukuku",
        component:insurance,
      }, 
      {
        path: "/ihtiyac",
        component:need,
      }, 
      {
        path: "/ohal",
        component:ohal,
      }, 
      {
        path: "/kisisel_verilerin_korunması",
        component:personal_data,
      },
      {
        path: "/fikri_mulkiyet_hukuku",
        component:property,
      }, 
      {
        path: "/deprem",
        component:quake,
      }, 
      {
        path: "/gayrimenkul_hukuku",
        component:realty,
      },
      {
        path: "/ceza_hukuku",
        component:punishment,
      }, 
      {
        path: "/sosyal_medya",
        component:sosyal_media,
      }, 
      {
        path: "/trafik_kazaları",
        component:traffic_accident,
      },
      {
        path: "/is_hukuku",
        component:work,
      },
      {
        path: "/yabancılar_hukuku",
        component:foreign,
      },
      {
        path: "/tazminat_hukuku",
        component:compensation,
      },
      
    ],
  });
}
