export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/";

export const SWIGGY_API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.67740&lng=83.20360&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const MENU_API =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.67740&lng=83.20360&restaurantId=";

export function getResCardsInfo() {
  //var resInfo = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.67740&lng=83.20360&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  var resArray =
    resInfo.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

  const restaurants = [
    {
      name: "Spice Garden",
      cuisine: ["Indian", "North Indian"],
      rating: 4.3,
      priceForTwo: 600,
      deliveryTime: 35,
    },
    {
      name: "Pizza Hub",
      cuisine: ["Italian", "Fast Food"],
      rating: 4.1,
      priceForTwo: 500,
      deliveryTime: 30,
    },
    {
      name: "Sushi World",
      cuisine: ["Japanese"],
      rating: 4.6,
      priceForTwo: 1200,
      deliveryTime: 45,
    },
    {
      name: "Burger Point",
      cuisine: ["American", "Fast Food"],
      rating: 4.0,
      priceForTwo: 400,
      deliveryTime: 25,
    },
    {
      name: "Tandoori Treats",
      cuisine: ["Indian", "Mughlai"],
      rating: 4.4,
      priceForTwo: 800,
      deliveryTime: 40,
    },
    {
      name: "Green Bowl",
      cuisine: ["Healthy", "Salads"],
      rating: 4.5,
      priceForTwo: 700,
      deliveryTime: 30,
    },
    {
      name: "Dragon Express",
      cuisine: ["Chinese", "Asian"],
      rating: 4.2,
      priceForTwo: 650,
      deliveryTime: 35,
    },
    {
      name: "Cafe Delight",
      cuisine: ["Cafe", "Desserts"],
      rating: 4.3,
      priceForTwo: 550,
      deliveryTime: 28,
    },
    {
      name: "Hyderabadi Biryani House",
      cuisine: ["Indian", "Biryani"],
      rating: 4.7,
      priceForTwo: 900,
      deliveryTime: 50,
    },
    {
      name: "Mexi Fiesta",
      cuisine: ["Mexican"],
      rating: 4.1,
      priceForTwo: 750,
      deliveryTime: 38,
    },
  ];
  //   return restaurants;
  return resArray;
}

export const resInfo = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    pageOffset: {
      nextOffset: "CJhlELQ4KICwlryrqP+0KTCnEzgB",
      widgetOffset: {
        NewListingView_category_bar_chicletranking_TwoRows: "",
        NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
        Restaurant_Group_WebView_SEO_PB_Theme: "",
        collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "9",
        inlineFacetFilter: "",
        restaurantCountWidget: "",
      },
    },
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            header: {
              title: "What's on your mind?",
              headerStyling: {
                padding: {
                  left: 16,
                  top: 16,
                  bottom: 4,
                },
              },
            },
            layout: {
              rows: 1,
              columns: 10,
              horizontalScrollEnabled: true,
              itemSpacing: 24,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 8,
                  top: 8,
                  right: 12,
                  bottom: 4,
                },
              },
              widgetTheme: {
                defaultMode: {
                  backgroundColour: "#FFFFFF",
                  theme: "THEME_TYPE_LIGHT",
                },
                darkMode: {
                  theme: "THEME_TYPE_DARK",
                },
              },
            },
            imageGridCards: {
              info: [
                {
                  id: "750585",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83634?collection_id=83634&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2",
                    text: "South Indian",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for south indian",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83634&tags=layout_CCS_SouthIndian&search_context=southindian",
                  frequencyCapping: {},
                  externalMarketing: {},
                  overlayIcon: {},
                  footerOverlay: {
                    title: {},
                    subtitle: {},
                    cta: {},
                  },
                },
                {
                  id: "750131",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
                    text: "Dosa",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for dosa",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
                  frequencyCapping: {},
                  externalMarketing: {},
                  overlayIcon: {},
                  footerOverlay: {
                    title: {},
                    subtitle: {},
                    cta: {},
                  },
                },
                {
                  id: "750643",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80440?collection_id=80440&tags=layout_CCS_Idli&type=rcv2",
                    text: "Idli",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for idly",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80440&tags=layout_CCS_Idli",
                  frequencyCapping: {},
                  externalMarketing: {},
                  overlayIcon: {},
                  footerOverlay: {
                    title: {},
                    subtitle: {},
                    cta: {},
                  },
                },
                {
                  id: "750234",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/2b999748-b33c-4560-a422-e90f3e60a5fb_Poori1.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80377?collection_id=80377&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
                    text: "Poori",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for poori",
                    altTextCta: "open",
                  },
                  entityId: "80377",
                  frequencyCapping: {},
                  externalMarketing: {},
                  overlayIcon: {},
                  footerOverlay: {
                    title: {},
                    subtitle: {},
                    cta: {},
                  },
                },
                {
                  id: "750561",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/9a22cf0d-f44c-4345-a48d-29033aa19729_Vada.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80425?collection_id=80425&tags=layout_BAU_Contextual%2Cvada&type=rcv2",
                    text: "Vada",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for vada",
                    altTextCta: "open",
                  },
                  entityId: "80425",
                  frequencyCapping: {},
                  externalMarketing: {},
                  overlayIcon: {},
                  footerOverlay: {
                    title: {},
                    subtitle: {},
                    cta: {},
                  },
                },
                {
                  id: "750591",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                    text: "Biryani",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for biryani",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
                  frequencyCapping: {},
                  externalMarketing: {},
                  overlayIcon: {},
                  footerOverlay: {
                    title: {},
                    subtitle: {},
                    cta: {},
                  },
                },
                {
                  id: "749868",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
                    text: "Cakes",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for cake",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
                  frequencyCapping: {},
                  externalMarketing: {},
                  overlayIcon: {},
                  footerOverlay: {
                    title: {},
                    subtitle: {},
                    cta: {},
                  },
                },
                {
                  id: "750107",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Desserts.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83661?collection_id=83661&search_context=desserts&tags=layout_CCS_Desserts&type=rcv2",
                    text: "Dessert",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for dessert",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83661&tags=layout_CCS_Desserts&search_context=desserts",
                  frequencyCapping: {},
                  externalMarketing: {},
                  overlayIcon: {},
                  footerOverlay: {
                    title: {},
                    subtitle: {},
                    cta: {},
                  },
                },
                {
                  id: "750581",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
                    text: "North Indian",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for north indian",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83633&tags=layout_CCS_NorthIndian&search_context=northindian",
                  frequencyCapping: {},
                  externalMarketing: {},
                  overlayIcon: {},
                  footerOverlay: {
                    title: {},
                    subtitle: {},
                    cta: {},
                  },
                },
                {
                  id: "750219",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/3f2c40d3-96c7-44ce-8b35-aef6ea746cdc_pesarattu.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80366?collection_id=80366&tags=layout_BAU_Contextual%2Cpesarattu&type=rcv2",
                    text: "Pesarattu",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for pesarattu",
                    altTextCta: "open",
                  },
                  entityId: "80366",
                  frequencyCapping: {},
                  externalMarketing: {},
                  overlayIcon: {},
                  footerOverlay: {
                    title: {},
                    subtitle: {},
                    cta: {},
                  },
                },
                {
                  id: "750554",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Uttapam.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80415?collection_id=80415&tags=layout_CCS_Uthappam&type=rcv2",
                    text: "Uthappam",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for uttappam",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80415&tags=layout_CCS_Uthappam",
                  frequencyCapping: {},
                  externalMarketing: {},
                  overlayIcon: {},
                  footerOverlay: {
                    title: {},
                    subtitle: {},
                    cta: {},
                  },
                },
                {
                  id: "750579",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                    text: "Pizzas",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for pizza",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza",
                  frequencyCapping: {},
                  externalMarketing: {},
                  overlayIcon: {},
                  footerOverlay: {
                    title: {},
                    subtitle: {},
                    cta: {},
                  },
                },
                {
                  id: "745861",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83673?collection_id=83673&tags=layout_CCS_Shakes&type=rcv2",
                    text: "Shake",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for shakes",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83673&tags=layout_CCS_Shakes",
                  frequencyCapping: {},
                  externalMarketing: {},
                  overlayIcon: {},
                  footerOverlay: {
                    title: {},
                    subtitle: {},
                    cta: {},
                  },
                },
                {
                  id: "750589",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
                    text: "Burgers",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for burger",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
                  frequencyCapping: {},
                  externalMarketing: {},
                  overlayIcon: {},
                  footerOverlay: {
                    title: {},
                    subtitle: {},
                    cta: {},
                  },
                },
                {
                  id: "750232",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/9ffd8896-26d5-407f-8ebc-d70e96cb0cc4_Pongal2.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80375?collection_id=80375&tags=layout_BAU_Contextual%2Cpongal&type=rcv2",
                    text: "Pongal",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for pongal",
                    altTextCta: "open",
                  },
                  entityId: "80375",
                  frequencyCapping: {},
                  externalMarketing: {},
                  overlayIcon: {},
                  footerOverlay: {
                    title: {},
                    subtitle: {},
                    cta: {},
                  },
                },
                {
                  id: "750587",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
                    text: "Chinese",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for chinese",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
                  frequencyCapping: {},
                  externalMarketing: {},
                  overlayIcon: {},
                  footerOverlay: {
                    title: {},
                    subtitle: {},
                    cta: {},
                  },
                },
                {
                  id: "750201",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_CCS_Paratha&type=rcv2",
                    text: "Paratha",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for paratha",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80475&tags=layout_CCS_Paratha",
                  frequencyCapping: {},
                  externalMarketing: {},
                  overlayIcon: {},
                  footerOverlay: {
                    title: {},
                    subtitle: {},
                    cta: {},
                  },
                },
                {
                  id: "750225",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/186ebf5c-d9ad-4d2b-a2b0-77795e19241f_Salad2.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
                    text: "Salad",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for salad",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
                  frequencyCapping: {},
                  externalMarketing: {},
                  overlayIcon: {},
                  footerOverlay: {
                    title: {},
                    subtitle: {},
                    cta: {},
                  },
                },
                {
                  id: "750208",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80355?collection_id=80355&tags=layout_CCS_Pastry&type=rcv2",
                    text: "Pastry",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for Pastry",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80355&tags=layout_CCS_Pastry",
                  frequencyCapping: {},
                  externalMarketing: {},
                  overlayIcon: {},
                  footerOverlay: {
                    title: {},
                    subtitle: {},
                    cta: {},
                  },
                },
                {
                  id: "749772",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80463?collection_id=80463&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                    text: "Noodles",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for noodles",
                    altTextCta: "open",
                  },
                  entityId: "80463",
                  frequencyCapping: {},
                  externalMarketing: {},
                  overlayIcon: {},
                  footerOverlay: {
                    title: {},
                    subtitle: {},
                    cta: {},
                  },
                },
              ],
              style: {
                width: {
                  type: "TYPE_RELATIVE",
                  value: 0.2941,
                  reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                },
                height: {
                  type: "TYPE_RELATIVE",
                  value: 1.2444,
                  reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                },
              },
            },
            id: "whats_on_your_mind",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                info: [
                  {
                    id: "750585",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83634?collection_id=83634&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2",
                      text: "South Indian",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for south indian",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83634&tags=layout_CCS_SouthIndian&search_context=southindian",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750131",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
                      text: "Dosa",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for dosa",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750643",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80440?collection_id=80440&tags=layout_CCS_Idli&type=rcv2",
                      text: "Idli",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for idly",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80440&tags=layout_CCS_Idli",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750234",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/2b999748-b33c-4560-a422-e90f3e60a5fb_Poori1.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80377?collection_id=80377&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
                      text: "Poori",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for poori",
                      altTextCta: "open",
                    },
                    entityId: "80377",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750561",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/9a22cf0d-f44c-4345-a48d-29033aa19729_Vada.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80425?collection_id=80425&tags=layout_BAU_Contextual%2Cvada&type=rcv2",
                      text: "Vada",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for vada",
                      altTextCta: "open",
                    },
                    entityId: "80425",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750591",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                      text: "Biryani",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for biryani",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "749868",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
                      text: "Cakes",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for cake",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750107",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Desserts.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83661?collection_id=83661&search_context=desserts&tags=layout_CCS_Desserts&type=rcv2",
                      text: "Dessert",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for dessert",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83661&tags=layout_CCS_Desserts&search_context=desserts",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750581",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
                      text: "North Indian",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for north indian",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83633&tags=layout_CCS_NorthIndian&search_context=northindian",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750219",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/3f2c40d3-96c7-44ce-8b35-aef6ea746cdc_pesarattu.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80366?collection_id=80366&tags=layout_BAU_Contextual%2Cpesarattu&type=rcv2",
                      text: "Pesarattu",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for pesarattu",
                      altTextCta: "open",
                    },
                    entityId: "80366",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750554",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Uttapam.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80415?collection_id=80415&tags=layout_CCS_Uthappam&type=rcv2",
                      text: "Uthappam",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for uttappam",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80415&tags=layout_CCS_Uthappam",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750579",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                      text: "Pizzas",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for pizza",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "745861",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83673?collection_id=83673&tags=layout_CCS_Shakes&type=rcv2",
                      text: "Shake",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for shakes",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83673&tags=layout_CCS_Shakes",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750589",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
                      text: "Burgers",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for burger",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750232",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/9ffd8896-26d5-407f-8ebc-d70e96cb0cc4_Pongal2.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80375?collection_id=80375&tags=layout_BAU_Contextual%2Cpongal&type=rcv2",
                      text: "Pongal",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for pongal",
                      altTextCta: "open",
                    },
                    entityId: "80375",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750587",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
                      text: "Chinese",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for chinese",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750201",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_CCS_Paratha&type=rcv2",
                      text: "Paratha",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for paratha",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80475&tags=layout_CCS_Paratha",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750225",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/186ebf5c-d9ad-4d2b-a2b0-77795e19241f_Salad2.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
                      text: "Salad",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for salad",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750208",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80355?collection_id=80355&tags=layout_CCS_Pastry&type=rcv2",
                      text: "Pastry",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for Pastry",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80355&tags=layout_CCS_Pastry",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "749772",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80463?collection_id=80463&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                      text: "Noodles",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for noodles",
                      altTextCta: "open",
                    },
                    entityId: "80463",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                ],
                style: {
                  width: {
                    type: "TYPE_RELATIVE",
                    value: 0.2941,
                    reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                  },
                  height: {
                    type: "TYPE_RELATIVE",
                    value: 1.2444,
                    reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                  },
                },
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            header: {
              title: "Top restaurant chains in Vizag",
              action: {},
              headerStyling: {
                padding: {
                  left: 16,
                  top: 28,
                  bottom: 18,
                },
              },
            },
            layout: {
              rows: 1,
              columns: 20,
              horizontalScrollEnabled: true,
              itemSpacing: 32,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 16,
                  right: 12,
                  bottom: 12,
                },
              },
              scrollBar: {
                scrollThumbColor: "#E46D47",
                scrollTrackColor: "#02060C",
                width: 54,
                height: 4,
                scrollStyling: {
                  padding: {
                    top: 6,
                    bottom: 24,
                  },
                },
              },
              widgetTheme: {
                defaultMode: {
                  backgroundColour: "#1B3028",
                  theme: "THEME_TYPE_DARK",
                },
                darkMode: {
                  backgroundColour: "#1B3028",
                  theme: "THEME_TYPE_DARK",
                },
              },
            },
            id: "top_brands_for_you",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                restaurants: [
                  {
                    info: {
                      id: "363713",
                      name: "KFC",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/aefedd77-b9c8-4ed9-be83-ffa62573b62b_363713.JPG",
                      locality: "Chaitanya nagar",
                      areaName: "Gajuwaka",
                      costForTwo: "₹400 for two",
                      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
                      avgRating: 4.3,
                      parentId: "547",
                      avgRatingString: "4.3",
                      totalRatingsString: "13K+",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 1.8,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "1.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "android/static-assets/icons/big_rx.png",
                            description: "bolt!",
                          },
                          {
                            imageId:
                              "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                            description: "Best in Bolt",
                          },
                          {
                            imageId:
                              "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                            description: "Best in Burger",
                          },
                          {
                            imageId:
                              "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                            description: "Best in Corporate",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId:
                                    "android/static-assets/icons/big_rx.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "Best in Bolt",
                                  imageId:
                                    "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                  theme: "",
                                },
                              },
                              {
                                attributes: {
                                  description: "Best in Burger",
                                  imageId:
                                    "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                  theme: "",
                                },
                              },
                              {
                                attributes: {
                                  description: "Best in Corporate",
                                  imageId:
                                    "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                  theme: "",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/kfc-chaitanya-nagar-gajuwaka-rest363713",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "858814",
                      name: "McCafe by McDonald's",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/19/f4c906d1-5873-4e0c-8a15-a5a46200abbe_858814.jpg",
                      locality: "Celest Mall",
                      areaName: "GAJUWAKA",
                      costForTwo: "₹250 for two",
                      cuisines: ["Beverages", "Desserts"],
                      avgRating: 4.7,
                      veg: true,
                      parentId: "8263",
                      avgRatingString: "4.7",
                      totalRatingsString: "22",
                      sla: {
                        deliveryTime: 22,
                        lastMileTravel: 1.9,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "1.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:59:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "android/static-assets/icons/big_rx.png",
                            description: "bolt!",
                          },
                        ],
                      },
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId:
                                    "android/static-assets/icons/big_rx.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/mccafe-by-mcdonalds-celest-mall-gajuwaka-rest858814",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "638021",
                      name: "Delights by INOX",
                      cloudinaryImageId: "pzddraf9ef2lpzvxpqqb",
                      locality: "chiatnya nagar",
                      areaName: "Gajuwaka",
                      costForTwo: "₹400 for two",
                      cuisines: ["Snacks"],
                      avgRating: 4.3,
                      parentId: "385095",
                      avgRatingString: "4.3",
                      totalRatingsString: "111",
                      sla: {
                        deliveryTime: 18,
                        lastMileTravel: 1.8,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "1.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:59:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "android/static-assets/icons/big_rx.png",
                            description: "bolt!",
                          },
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId:
                                    "android/static-assets/icons/big_rx.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                  theme: "",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/delights-by-inox-chiatnya-nagar-gajuwaka-rest638021",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "858813",
                      name: "McDonald's",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/ff9e1ea1-95d0-4ad1-9486-58dbeae7f82e_858813.JPG",
                      locality: "Celest Mall",
                      areaName: "GAJUWAKA",
                      costForTwo: "₹400 for two",
                      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
                      avgRating: 4.4,
                      parentId: "630",
                      avgRatingString: "4.4",
                      totalRatingsString: "2.9K+",
                      sla: {
                        deliveryTime: 27,
                        lastMileTravel: 1.9,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "1.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:59:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "android/static-assets/icons/big_rx.png",
                            description: "bolt!",
                          },
                          {
                            imageId:
                              "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                            description: "Best in Bolt",
                          },
                          {
                            imageId:
                              "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                            description: "Best in Burger",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId:
                                    "android/static-assets/icons/big_rx.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "Best in Bolt",
                                  imageId:
                                    "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                  theme: "",
                                },
                              },
                              {
                                attributes: {
                                  description: "Best in Burger",
                                  imageId:
                                    "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                  theme: "",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹100 OFF",
                        subHeader: "ABOVE ₹399",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/mcdonalds-celest-mall-gajuwaka-rest858813",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "321242",
                      name: "Subway",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/113bc269-598c-4b4a-8749-d9b239b4a9a9_321242.JPG",
                      locality: "Gajuwaka",
                      areaName: "Chaitanya Nagar",
                      costForTwo: "₹300 for two",
                      cuisines: [
                        "Healthy Food",
                        "Salads",
                        "Snacks",
                        "Desserts",
                        "Beverages",
                      ],
                      avgRating: 4.3,
                      parentId: "2",
                      avgRatingString: "4.3",
                      totalRatingsString: "4.5K+",
                      sla: {
                        deliveryTime: 14,
                        lastMileTravel: 1.8,
                        serviceability: "SERVICEABLE",
                        slaString: "10-15 mins",
                        lastMileTravelString: "1.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:59:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "android/static-assets/icons/big_rx.png",
                            description: "bolt!",
                          },
                          {
                            imageId: "High%20Protein/rx%20tag%205.png",
                            description: "High Protein",
                          },
                        ],
                      },
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId:
                                    "android/static-assets/icons/big_rx.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "High Protein",
                                  imageId: "High%20Protein/rx%20tag%205.png",
                                  theme: "",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/subway-gajuwaka-chaitanya-nagar-rest321242",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "429771",
                      name: "Burger King",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/c28d31e7-b15b-4416-97ca-ed3825227040_429771.jpg",
                      locality: "Exhibition Road",
                      areaName: "Gajuwaka",
                      costForTwo: "₹350 for two",
                      cuisines: ["Burgers", "American"],
                      avgRating: 4.5,
                      parentId: "166",
                      avgRatingString: "4.5",
                      totalRatingsString: "21K+",
                      sla: {
                        deliveryTime: 14,
                        lastMileTravel: 1.8,
                        serviceability: "SERVICEABLE",
                        slaString: "10-15 mins",
                        lastMileTravelString: "1.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:59:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "android/static-assets/icons/big_rx.png",
                            description: "bolt!",
                          },
                          {
                            imageId:
                              "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                            description: "Best in Burger",
                          },
                          {
                            imageId:
                              "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                            description: "Best in Corporate",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId:
                                    "android/static-assets/icons/big_rx.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "Best in Burger",
                                  imageId:
                                    "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                  theme: "",
                                },
                              },
                              {
                                attributes: {
                                  description: "Best in Corporate",
                                  imageId:
                                    "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                  theme: "",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹59",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.6",
                          ratingCount: "2.8K+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/burger-king-exhibition-road-gajuwaka-rest429771",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "526798",
                      name: "The Dessert Heaven - Pastry, Brownie and Cakes",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/6/10541998-ecfc-4228-b4eb-34931cc66c23_526798.JPG",
                      locality: "Steel Plant",
                      areaName: "Kurmannapalem",
                      costForTwo: "₹200 for two",
                      cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
                      avgRating: 4.3,
                      parentId: "506176",
                      avgRatingString: "4.3",
                      totalRatingsString: "1.3K+",
                      sla: {
                        deliveryTime: 28,
                        lastMileTravel: 5,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "5.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:59:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                  theme: "",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹69",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/the-dessert-heaven-pastry-brownie-and-cakes-steel-plant-kurmannapalem-rest526798",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "858815",
                      name: "McDonald's Gourmet Burger Collection",
                      cloudinaryImageId: "e233fb34d70482545b018b5b169fe18e",
                      locality: "Celest Mall",
                      areaName: "GAJUWAKA",
                      costForTwo: "₹400 for two",
                      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
                      avgRating: 4.6,
                      parentId: "10761",
                      avgRatingString: "4.6",
                      totalRatingsString: "87",
                      sla: {
                        deliveryTime: 25,
                        lastMileTravel: 1.9,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "1.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:59:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "android/static-assets/icons/big_rx.png",
                            description: "bolt!",
                          },
                        ],
                      },
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId:
                                    "android/static-assets/icons/big_rx.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/mcdonalds-gourmet-burger-collection-celest-mall-gajuwaka-rest858815",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "696122",
                      name: "Ovenfresh Cakes And Desserts",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/6/7bcc9d0e-87f3-4bef-9839-24d43ff73192_696122.jpg",
                      locality: "Gajuwaka",
                      areaName: "Steel Plant",
                      costForTwo: "₹200 for two",
                      cuisines: [
                        "Bakery",
                        "Desserts",
                        "Beverages",
                        "Ice Cream",
                        "Sweets",
                        "Juices",
                        "Bengali",
                        "Pizzas",
                      ],
                      avgRating: 4.3,
                      parentId: "419247",
                      avgRatingString: "4.3",
                      totalRatingsString: "532",
                      sla: {
                        deliveryTime: 32,
                        lastMileTravel: 5,
                        serviceability: "SERVICEABLE",
                        slaString: "30-35 mins",
                        lastMileTravelString: "5.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:59:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹69",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/ovenfresh-cakes-and-desserts-gajuwaka-steel-plant-rest696122",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "526795",
                      name: "CakeZone Patisserie",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/6/862addc3-5d46-42bc-9889-623dd62595aa_526795.JPG",
                      locality: "Gajuwaka",
                      areaName: "Kurmannapalem",
                      costForTwo: "₹200 for two",
                      cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
                      avgRating: 4.2,
                      parentId: "7003",
                      avgRatingString: "4.2",
                      totalRatingsString: "4.0K+",
                      sla: {
                        deliveryTime: 29,
                        lastMileTravel: 5,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "5.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:59:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId:
                              "brand_cards/Badges%202026/43_Best%20in%20Cakes%20&%20Desserts2026.png",
                            description: "Best in Cakes & Desserts",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Best in Cakes & Desserts",
                                  imageId:
                                    "brand_cards/Badges%202026/43_Best%20in%20Cakes%20&%20Desserts2026.png",
                                  theme: "",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹59",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/cakezone-patisserie-gajuwaka-kurmannapalem-rest526795",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "390655",
                      name: "The Red Box",
                      cloudinaryImageId: "zlx1hsdkqe0eoayx7pmx",
                      locality: "Gajuwaka",
                      areaName: "Gajuwaka",
                      costForTwo: "₹400 for two",
                      cuisines: [
                        "Chinese",
                        "Asian",
                        "Momos",
                        "Thai",
                        "Beverages",
                        "Starters",
                      ],
                      avgRating: 4.1,
                      parentId: "1636",
                      avgRatingString: "4.1",
                      totalRatingsString: "4.7K+",
                      sla: {
                        deliveryTime: 34,
                        lastMileTravel: 1.6,
                        serviceability: "SERVICEABLE",
                        slaString: "30-40 mins",
                        lastMileTravelString: "1.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:59:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "android/static-assets/icons/big_rx.png",
                            description: "bolt!",
                          },
                          {
                            imageId:
                              "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                            description: "Best in Chinese",
                          },
                        ],
                      },
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId:
                                    "android/static-assets/icons/big_rx.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "Best in Chinese",
                                  imageId:
                                    "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                                  theme: "",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "3.8",
                          ratingCount: "197",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/the-red-box-gajuwaka-rest390655",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "196926",
                      name: "Ibaco",
                      cloudinaryImageId: "l0ic42djgaznawz7okxv",
                      areaName: "Gajuwaka",
                      costForTwo: "₹300 for two",
                      cuisines: ["Ice Cream"],
                      avgRating: 4.6,
                      veg: true,
                      parentId: "3481",
                      avgRatingString: "4.6",
                      totalRatingsString: "2.4K+",
                      sla: {
                        deliveryTime: 13,
                        lastMileTravel: 1.1,
                        serviceability: "SERVICEABLE",
                        slaString: "10-15 mins",
                        lastMileTravelString: "1.1 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "android/static-assets/icons/big_rx.png",
                            description: "bolt!",
                          },
                          {
                            imageId:
                              "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                            description: "Best in Ice Cream",
                          },
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                      },
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId:
                                    "android/static-assets/icons/big_rx.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "Best in Ice Cream",
                                  imageId:
                                    "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                                  theme: "",
                                },
                              },
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                  theme: "",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/ibaco-gajuwaka-rest196926",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "334228",
                      name: "Pizza Hut | CMR Mall, Vizag",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/d9c60126-3e78-44e9-b68b-af619bf65271_334228.JPG",
                      locality: "Gajuwaka",
                      areaName: "Gajuwaka",
                      costForTwo: "₹350 for two",
                      cuisines: ["Pizzas"],
                      avgRating: 4.5,
                      parentId: "721",
                      avgRatingString: "4.5",
                      totalRatingsString: "11K+",
                      sla: {
                        deliveryTime: 24,
                        lastMileTravel: 1.8,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "1.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:59:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId:
                              "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                            description: "Best in Pizza",
                          },
                        ],
                      },
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Best in Pizza",
                                  imageId:
                                    "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                  theme: "",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.6",
                          ratingCount: "2.2K+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/pizza-hut-cmr-mall-vizag-gajuwaka-rest334228",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "323686",
                      name: "Cream Stone Ice Cream",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/8/acff0cac-7e4c-4a1a-9924-3df228eb69ab_323686.JPG",
                      areaName: "Sheela Nagar",
                      costForTwo: "₹300 for two",
                      cuisines: ["Ice Cream", "Desserts", "Beverages"],
                      avgRating: 4.6,
                      veg: true,
                      parentId: "538712",
                      avgRatingString: "4.6",
                      totalRatingsString: "5.1K+",
                      sla: {
                        deliveryTime: 13,
                        lastMileTravel: 1.3,
                        serviceability: "SERVICEABLE",
                        slaString: "10-15 mins",
                        lastMileTravelString: "1.3 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:59:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "android/static-assets/icons/big_rx.png",
                            description: "bolt!",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId:
                                    "android/static-assets/icons/big_rx.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹95",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/cream-stone-ice-cream-sheela-nagar-rest323686",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "575178",
                      name: "Veg Darbar by Behrouz Biryani",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/9/5d03afe4-19d0-4555-95a9-b59bd7659254_575178.JPG",
                      locality: "laxmi nagar",
                      areaName: "Simhachalam",
                      costForTwo: "₹700 for two",
                      cuisines: [
                        "Biryani",
                        "North Indian",
                        "Kebabs",
                        "Mughlai",
                        "Lucknowi",
                        "Hyderabadi",
                        "Desserts",
                        "Beverages",
                      ],
                      avgRating: 4.2,
                      veg: true,
                      parentId: "344904",
                      avgRatingString: "4.2",
                      totalRatingsString: "275",
                      sla: {
                        deliveryTime: 42,
                        lastMileTravel: 11.2,
                        serviceability: "SERVICEABLE",
                        slaString: "40-50 mins",
                        lastMileTravelString: "11.2 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:59:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                  theme: "",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹99",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/veg-darbar-by-behrouz-biryani-laxmi-nagar-simhachalam-rest575178",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "263849",
                      name: "Veg Meals By LunchBox",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/15/d1431d99-c3ab-4d88-a29a-03a075585918_263849.JPG",
                      locality: "laxmi nagar",
                      areaName: "Gopalapatnam",
                      costForTwo: "₹200 for two",
                      cuisines: [
                        "Biryani",
                        "North Indian",
                        "Desserts",
                        "Beverages",
                      ],
                      avgRating: 4.3,
                      veg: true,
                      parentId: "21938",
                      avgRatingString: "4.3",
                      totalRatingsString: "284",
                      sla: {
                        deliveryTime: 48,
                        lastMileTravel: 11.2,
                        serviceability: "SERVICEABLE",
                        slaString: "45-55 mins",
                        lastMileTravelString: "11.2 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:59:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                  theme: "",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹99",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/veg-meals-by-lunchbox-laxmi-nagar-gopalapatnam-rest263849",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "566438",
                      name: "Faasos Signature Wraps & Rolls",
                      cloudinaryImageId: "c583ca6ce40b426797a78ae2ac91f2ec",
                      locality: "laxmi nagar",
                      areaName: "Simhachalam",
                      costForTwo: "₹350 for two",
                      cuisines: [
                        "Fast Food",
                        "Snacks",
                        "North Indian",
                        "Desserts",
                        "Beverages",
                      ],
                      avgRating: 4.1,
                      parentId: "340366",
                      avgRatingString: "4.1",
                      totalRatingsString: "383",
                      sla: {
                        deliveryTime: 48,
                        lastMileTravel: 11.2,
                        serviceability: "SERVICEABLE",
                        slaString: "45-55 mins",
                        lastMileTravelString: "11.2 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:59:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹129",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/faasos-signature-wraps-and-rolls-laxmi-nagar-simhachalam-rest566438",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "801396",
                      name: "Makhani Darbar",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/fe181768-7bf9-4221-ac60-c38d977831af_801396.JPG",
                      locality: "NAD Vizag",
                      areaName: "laxmi nagar",
                      costForTwo: "₹500 for two",
                      cuisines: ["Kebabs", "Mughlai", "Beverages", "Desserts"],
                      avgRating: 4.2,
                      parentId: "478595",
                      avgRatingString: "4.2",
                      totalRatingsString: "163",
                      sla: {
                        deliveryTime: 47,
                        lastMileTravel: 11.2,
                        serviceability: "SERVICEABLE",
                        slaString: "45-55 mins",
                        lastMileTravelString: "11.2 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:59:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹149",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/makhani-darbar-nad-laxmi-nagar-rest801396",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "67800",
                      name: "Bunnys Family Restaurant",
                      cloudinaryImageId: "dxknlfkvtfmx94f2cwxi",
                      locality: "Kurmannapalem",
                      areaName: "Kurmannapalem",
                      costForTwo: "₹300 for two",
                      cuisines: ["Biryani", "Andhra", "Chinese"],
                      avgRating: 3.9,
                      parentId: "12847",
                      avgRatingString: "3.9",
                      totalRatingsString: "149K+",
                      sla: {
                        deliveryTime: 48,
                        lastMileTravel: 5,
                        serviceability: "SERVICEABLE",
                        slaString: "45-55 mins",
                        lastMileTravelString: "5.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:59:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹59",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "3.5",
                          ratingCount: "1.3K+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/bunnys-family-restaurant-kurmannapalem-rest67800",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "237344",
                      name: "LunchBox - Meals and Thalis",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/882b3f30-6cf5-4a6c-9f6e-0df05c6aa1ef_237344.jpg",
                      locality: "laxmi nagar",
                      areaName: "Simhachalam",
                      costForTwo: "₹200 for two",
                      cuisines: ["Thalis", "North Indian", "Biryani"],
                      avgRating: 4.4,
                      parentId: "4925",
                      avgRatingString: "4.4",
                      totalRatingsString: "5.4K+",
                      sla: {
                        deliveryTime: 42,
                        lastMileTravel: 11.2,
                        serviceability: "SERVICEABLE",
                        slaString: "40-45 mins",
                        lastMileTravelString: "11.2 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:59:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "High%20Protein/rx%20tag%205.png",
                            description: "High Protein",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "High Protein",
                                  imageId: "High%20Protein/rx%20tag%205.png",
                                  theme: "",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹99",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/lunchbox-meals-and-thalis-laxmi-nagar-simhachalam-rest237344",
                      type: "WEBLINK",
                    },
                  },
                ],
                theme: "Restaurant_Group_WebView_SEO_PB_Theme",
                widgetType: "WIDGET_TYPE_POPULAR_BRANDS",
                style: {
                  width: {
                    type: "TYPE_RELATIVE",
                    value: 0.41111112,
                    reference: "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH",
                  },
                  height: {
                    type: "TYPE_RELATIVE",
                    value: 0.7027027,
                    reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                  },
                  layoutAlignment: "LAYOUT_ALIGNMENT_LEFT",
                },
                collectionId: "84124",
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
            title: "Restaurants with online food delivery in Vizag",
            id: "popular_restaurants_title",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
            sortConfigs: [
              {
                key: "relevance",
                title: "Relevance (Default)",
                selected: true,
                defaultSelection: true,
              },
              {
                key: "deliveryTimeAsc",
                title: "Delivery Time",
              },
              {
                key: "modelBasedRatingDesc",
                title: "Rating",
              },
              {
                key: "costForTwoAsc",
                title: "Cost: Low to High",
              },
              {
                key: "costForTwoDesc",
                title: "Cost: High to Low",
              },
            ],
            restaurantCount: 817,
            widgetId: "inlineFacetFilter",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              columns: 4,
            },
            id: "restaurant_grid_listing_v2",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.seo.widgets.v1.FoodRestaurantGridListingInfo",
                restaurants: [
                  {
                    "@type":
                      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    info: {
                      id: "70469",
                      name: "Hotel Prabha Veg Restaurant",
                      cloudinaryImageId: "gtvtfctgsvoopjgg4xkb",
                      locality: "Lankelapalem",
                      areaName: "NAD",
                      costForTwo: "₹200 for two",
                      cuisines: ["South Indian"],
                      avgRating: 4.6,
                      veg: true,
                      parentId: "473072",
                      avgRatingString: "4.6",
                      totalRatingsString: "67K+",
                      sla: {
                        deliveryTime: 31,
                        lastMileTravel: 9.7,
                        serviceability: "SERVICEABLE",
                        slaString: "30-35 mins",
                        lastMileTravelString: "9.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 22:15:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                      },
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                  theme: "",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.0",
                          ratingCount: "5.1K+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/hotel-prabha-veg-restaurant-lankelapalem-nad-rest70469",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    "@type":
                      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    info: {
                      id: "167119",
                      name: "Uma Parlour - Pure Veg",
                      cloudinaryImageId: "zskk21orirlgzrjddimy",
                      locality: "Gajuwaka",
                      areaName: "Sheela Nagar",
                      costForTwo: "₹200 for two",
                      cuisines: ["South Indian"],
                      avgRating: 4.5,
                      veg: true,
                      parentId: "472032",
                      avgRatingString: "4.5",
                      totalRatingsString: "52K+",
                      sla: {
                        deliveryTime: 15,
                        lastMileTravel: 1.3,
                        serviceability: "SERVICEABLE",
                        slaString: "10-15 mins",
                        lastMileTravelString: "1.3 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "android/static-assets/icons/big_rx.png",
                            description: "bolt!",
                          },
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId:
                                    "android/static-assets/icons/big_rx.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                  theme: "",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹39",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.0",
                          ratingCount: "2.3K+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/uma-parlour-pure-veg-gajuwaka-sheela-nagar-rest167119",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    "@type":
                      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    info: {
                      id: "84266",
                      name: "Sai Ram Parlour",
                      cloudinaryImageId: "aorebea1gkcgs43orzlg",
                      locality: "Kurmannapalem",
                      areaName: "Kurmannapalem",
                      costForTwo: "₹200 for two",
                      cuisines: ["South Indian"],
                      avgRating: 4.5,
                      veg: true,
                      parentId: "13025",
                      avgRatingString: "4.5",
                      totalRatingsString: "23K+",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 5,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "5.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 12:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId:
                              "brand_cards/Badges%202026/124_Best%20in%20Breakfast2026.png",
                            description: "Best in Breakfast",
                          },
                        ],
                      },
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Best in Breakfast",
                                  imageId:
                                    "brand_cards/Badges%202026/124_Best%20in%20Breakfast2026.png",
                                  theme: "",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "3.9",
                          ratingCount: "221",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/sai-ram-parlour-kurmannapalem-rest84266",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    "@type":
                      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    info: {
                      id: "450148",
                      name: "Eaters Stop",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/2/a7776fad-abc0-4d79-881d-dadb8173cb60_450148.jpg",
                      locality: "Sramika Nagar",
                      areaName: "Gajuwaka",
                      costForTwo: "₹350 for two",
                      cuisines: ["Biryani", "Tandoor", "Chinese"],
                      avgRating: 4.4,
                      parentId: "12347",
                      avgRatingString: "4.4",
                      totalRatingsString: "60K+",
                      sla: {
                        deliveryTime: 24,
                        lastMileTravel: 2.2,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "2.2 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "android/static-assets/icons/big_rx.png",
                            description: "bolt!",
                          },
                          {
                            imageId:
                              "brand_cards/Badges%202026/26_Best%20in%20North%20Indian2026.png",
                            description: "Best in North Indian",
                          },
                          {
                            imageId:
                              "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                            description: "Best in Bolt",
                          },
                          {
                            imageId:
                              "brand_cards/Badges%202026/92_Best%20in%20South%20Indian%20Thali2026.png",
                            description: "Best in South Indian Thali",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId:
                                    "android/static-assets/icons/big_rx.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "Best in North Indian",
                                  imageId:
                                    "brand_cards/Badges%202026/26_Best%20in%20North%20Indian2026.png",
                                  theme: "",
                                },
                              },
                              {
                                attributes: {
                                  description: "Best in Bolt",
                                  imageId:
                                    "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                  theme: "",
                                },
                              },
                              {
                                attributes: {
                                  description: "Best in South Indian Thali",
                                  imageId:
                                    "brand_cards/Badges%202026/92_Best%20in%20South%20Indian%20Thali2026.png",
                                  theme: "",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹119",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/eaters-stop-sramika-nagar-gajuwaka-rest450148",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    "@type":
                      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    info: {
                      id: "66469",
                      name: "Grand Alpha(Original)",
                      cloudinaryImageId: "xgus21ov1ncd3shvvvgc",
                      locality: "Gajuwaka",
                      areaName: "Gajuwaka",
                      costForTwo: "₹350 for two",
                      cuisines: ["Indian", "Tandoor", "Biryani"],
                      avgRating: 4.4,
                      parentId: "472650",
                      avgRatingString: "4.4",
                      totalRatingsString: "168K+",
                      sla: {
                        deliveryTime: 22,
                        lastMileTravel: 1.2,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "1.2 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 16:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "android/static-assets/icons/big_rx.png",
                            description: "bolt!",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId:
                                    "android/static-assets/icons/big_rx.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹99",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "3.6",
                          ratingCount: "4.4K+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/grand-alpha-original-gajuwaka-rest66469",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    "@type":
                      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    info: {
                      id: "937195",
                      name: "Dinesh Tiffen Center",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/5/fa543784-b963-470c-801a-36279f94f434_937195.jpg",
                      locality: "Gajuwaka",
                      areaName: "Gajuwaka",
                      costForTwo: "₹200 for two",
                      cuisines: [
                        "Chinese",
                        "Biryani",
                        "South Indian",
                        "Indian",
                      ],
                      avgRating: 4.5,
                      veg: true,
                      parentId: "550863",
                      avgRatingString: "4.5",
                      totalRatingsString: "1.2K+",
                      sla: {
                        deliveryTime: 10,
                        lastMileTravel: 0.8,
                        serviceability: "SERVICEABLE",
                        slaString: "10-15 mins",
                        lastMileTravelString: "0.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:30:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "android/static-assets/icons/big_rx.png",
                            description: "bolt!",
                          },
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId:
                                    "android/static-assets/icons/big_rx.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                  theme: "",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹49",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/dinesh-tiffen-center-gajuwaka-rest937195",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    "@type":
                      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    info: {
                      id: "141529",
                      name: "Ramachandra Parlour",
                      cloudinaryImageId: "shtyfaasefm35ohqirpp",
                      areaName: "Sheela Nagar",
                      costForTwo: "₹200 for two",
                      cuisines: ["South Indian"],
                      avgRating: 4.5,
                      parentId: "12962",
                      avgRatingString: "4.5",
                      totalRatingsString: "39K+",
                      sla: {
                        deliveryTime: 14,
                        lastMileTravel: 1.3,
                        serviceability: "SERVICEABLE",
                        slaString: "10-15 mins",
                        lastMileTravelString: "1.3 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 22:30:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "android/static-assets/icons/big_rx.png",
                            description: "bolt!",
                          },
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId:
                                    "android/static-assets/icons/big_rx.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                  theme: "",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹80",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/ramachandra-parlour-sheela-nagar-rest141529",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    "@type":
                      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    info: {
                      id: "1216303",
                      name: "Hotel Subhiksha",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/18/20c40d35-374f-4399-9972-523c3f062451_1216303.jpg",
                      locality: "Gajuwaka",
                      areaName: "Gajuwaka",
                      costForTwo: "₹200 for two",
                      cuisines: [
                        "Chinese",
                        "Biryani",
                        "South Indian",
                        "Beverages",
                        "Juices",
                        "Curry Point",
                      ],
                      avgRating: 4.4,
                      parentId: "694975",
                      avgRatingString: "4.4",
                      totalRatingsString: "403",
                      sla: {
                        deliveryTime: 12,
                        lastMileTravel: 0.9,
                        serviceability: "SERVICEABLE",
                        slaString: "10-15 mins",
                        lastMileTravelString: "0.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2026-04-23 23:30:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹29",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3095bb46-45db-412b-b55f-e424d990b589",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/vizag/hotel-subhiksha-gajuwaka-rest1216303",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                ],
                theme: "SeoRestaurantListingGridWidget",
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
            message: "Show More",
            id: "show_more_button",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            title: "Best Places to Eat Across Cities",
            brands: [
              {
                text: "Best Restaurants in Bangalore",
                link: "https://www.swiggy.com/city/bangalore/best-restaurants",
              },
              {
                text: "Best Restaurants in Pune",
                link: "https://www.swiggy.com/city/pune/best-restaurants",
              },
              {
                text: "Best Restaurants in Mumbai",
                link: "https://www.swiggy.com/city/mumbai/best-restaurants",
              },
              {
                text: "Best Restaurants in Delhi",
                link: "https://www.swiggy.com/city/delhi/best-restaurants",
              },
              {
                text: "Best Restaurants in Hyderabad",
                link: "https://www.swiggy.com/city/hyderabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Kolkata",
                link: "https://www.swiggy.com/city/kolkata/best-restaurants",
              },
              {
                text: "Best Restaurants in Chennai",
                link: "https://www.swiggy.com/city/chennai/best-restaurants",
              },
              {
                text: "Best Restaurants in Chandigarh",
                link: "https://www.swiggy.com/city/chandigarh/best-restaurants",
              },
              {
                text: "Best Restaurants in Ahmedabad",
                link: "https://www.swiggy.com/city/ahmedabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Jaipur",
                link: "https://www.swiggy.com/city/jaipur/best-restaurants",
              },
              {
                text: "Best Restaurants in Nagpur",
                link: "https://www.swiggy.com/city/nagpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhubaneswar",
                link: "https://www.swiggy.com/city/bhubaneswar/best-restaurants",
              },
              {
                text: "Best Restaurants in Kochi",
                link: "https://www.swiggy.com/city/kochi/best-restaurants",
              },
              {
                text: "Best Restaurants in Surat",
                link: "https://www.swiggy.com/city/surat/best-restaurants",
              },
              {
                text: "Best Restaurants in Dehradun",
                link: "https://www.swiggy.com/city/dehradun/best-restaurants",
              },
              {
                text: "Best Restaurants in Ludhiana",
                link: "https://www.swiggy.com/city/ludhiana/best-restaurants",
              },
              {
                text: "Best Restaurants in Patna",
                link: "https://www.swiggy.com/city/patna/best-restaurants",
              },
              {
                text: "Best Restaurants in Mangaluru",
                link: "https://www.swiggy.com/city/mangaluru/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhopal",
                link: "https://www.swiggy.com/city/bhopal/best-restaurants",
              },
              {
                text: "Best Restaurants in Gurgaon",
                link: "https://www.swiggy.com/city/gurgaon/best-restaurants",
              },
              {
                text: "Best Restaurants in Coimbatore",
                link: "https://www.swiggy.com/city/coimbatore/best-restaurants",
              },
              {
                text: "Best Restaurants in Agra",
                link: "https://www.swiggy.com/city/agra/best-restaurants",
              },
              {
                text: "Best Restaurants in Noida",
                link: "https://www.swiggy.com/city/noida/best-restaurants",
              },
              {
                text: "Best Restaurants in Vijayawada",
                link: "https://www.swiggy.com/city/vijayawada/best-restaurants",
              },
              {
                text: "Best Restaurants in Guwahati",
                link: "https://www.swiggy.com/city/guwahati/best-restaurants",
              },
              {
                text: "Best Restaurants in Mysore",
                link: "https://www.swiggy.com/city/mysore/best-restaurants",
              },
              {
                text: "Best Restaurants in Pondicherry",
                link: "https://www.swiggy.com/city/pondicherry/best-restaurants",
              },
              {
                text: "Best Restaurants in Thiruvananthapuram",
                link: "https://www.swiggy.com/city/thiruvananthapuram/best-restaurants",
              },
              {
                text: "Best Restaurants in Ranchi",
                link: "https://www.swiggy.com/city/ranchi/best-restaurants",
              },
              {
                text: "Best Restaurants in Vizag",
                link: "https://www.swiggy.com/city/vizag/best-restaurants",
              },
              {
                text: "Best Restaurants in Udaipur",
                link: "https://www.swiggy.com/city/udaipur/best-restaurants",
              },
              {
                text: "Best Restaurants in Vadodara",
                link: "https://www.swiggy.com/city/vadodara/best-restaurants",
              },
            ],
            id: "restaurant_near_me_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            title: "Best Cuisines Near Me",
            brands: [
              {
                text: "Chinese Restaurant Near Me",
                link: "https://www.swiggy.com/chinese-restaurants-near-me",
              },
              {
                text: "South Indian Restaurant Near Me",
                link: "https://www.swiggy.com/south-indian-restaurants-near-me",
              },
              {
                text: "Indian Restaurant Near Me",
                link: "https://www.swiggy.com/indian-restaurants-near-me",
              },
              {
                text: "Kerala Restaurant Near Me",
                link: "https://www.swiggy.com/kerala-restaurants-near-me",
              },
              {
                text: "Korean Restaurant Near Me",
                link: "https://www.swiggy.com/korean-restaurants-near-me",
              },
              {
                text: "North Indian Restaurant Near Me",
                link: "https://www.swiggy.com/north-indian-restaurants-near-me",
              },
              {
                text: "Seafood Restaurant Near Me",
                link: "https://www.swiggy.com/seafood-restaurants-near-me",
              },
              {
                text: "Bengali Restaurant Near Me",
                link: "https://www.swiggy.com/bengali-restaurants-near-me",
              },
              {
                text: "Punjabi Restaurant Near Me",
                link: "https://www.swiggy.com/punjabi-restaurants-near-me",
              },
              {
                text: "Italian Restaurant Near Me",
                link: "https://www.swiggy.com/italian-restaurants-near-me",
              },
              {
                text: "Andhra Restaurant Near Me",
                link: "https://www.swiggy.com/andhra-restaurants-near-me",
              },
              {
                text: "Biryani Restaurant Near Me",
                link: "https://www.swiggy.com/biryani-restaurants-near-me",
              },
              {
                text: "Japanese Restaurant Near Me",
                link: "https://www.swiggy.com/japanese-restaurants-near-me",
              },
              {
                text: "Arabian Restaurant Near Me",
                link: "https://www.swiggy.com/arabian-restaurants-near-me",
              },
              {
                text: "Fast Food Restaurant Near Me",
                link: "https://www.swiggy.com/fast-food-restaurants-near-me",
              },
              {
                text: "Jain Restaurant Near Me",
                link: "https://www.swiggy.com/jain-restaurants-near-me",
              },
              {
                text: "Gujarati Restaurant Near Me",
                link: "https://www.swiggy.com/gujarati-restaurants-near-me",
              },
              {
                text: "Thai Restaurant Near Me",
                link: "https://www.swiggy.com/thai-restaurants-near-me",
              },
              {
                text: "Pizzas Restaurant Near Me",
                link: "https://www.swiggy.com/pizzas-restaurants-near-me",
              },
              {
                text: "Asian Restaurant Near Me",
                link: "https://www.swiggy.com/asian-restaurants-near-me",
              },
              {
                text: "Cafe Restaurant Near Me",
                link: "https://www.swiggy.com/cafe-restaurants-near-me",
              },
              {
                text: "Continental Restaurant Near Me",
                link: "https://www.swiggy.com/continental-restaurants-near-me",
              },
              {
                text: "Mexican Restaurant Near Me",
                link: "https://www.swiggy.com/mexican-restaurants-near-me",
              },
              {
                text: "Mughlai Restaurant Near Me",
                link: "https://www.swiggy.com/mughlai-restaurants-near-me",
              },
              {
                text: "Sushi Restaurant Near Me",
                link: "https://www.swiggy.com/sushi-restaurants-near-me",
              },
              {
                text: "Mangalorean Restaurant Near Me",
                link: "https://www.swiggy.com/mangalorean-restaurants-near-me",
              },
              {
                text: "Tibetan Restaurant Near Me",
                link: "https://www.swiggy.com/tibetan-restaurants-near-me",
              },
              {
                text: "Barbecue Restaurant Near Me",
                link: "https://www.swiggy.com/barbecue-restaurants-near-me",
              },
              {
                text: "Maharashtrian Restaurant Near Me",
                link: "https://www.swiggy.com/maharashtrian-restaurants-near-me",
              },
              {
                text: "Nepalese Restaurant Near Me",
                link: "https://www.swiggy.com/nepalese-restaurants-near-me",
              },
              {
                text: "Rajasthani Restaurant Near Me",
                link: "https://www.swiggy.com/rajasthani-restaurants-near-me",
              },
              {
                text: "Turkish Restaurant Near Me",
                link: "https://www.swiggy.com/turkish-restaurants-near-me",
              },
            ],
            id: "restaurant_near_me_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            title: "Explore Every Restaurants Near Me",
            brands: [
              {
                text: "Explore Restaurants Near Me",
                link: "https://www.swiggy.com/restaurants-near-me",
              },
              {
                text: "Explore Top Rated Restaurants Near Me",
                link: "https://www.swiggy.com/best-restaurants-near-me",
              },
            ],
            id: "restaurant_near_me_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.seo.widgets.v1.AppInstallLinks",
            title: "For better experience,download the Swiggy app now",
            androidAppImage: "portal/m/play_store.png",
            androidAppLink:
              "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader",
            iosAppImage: "portal/m/app_store.png",
            iosAppLink:
              "https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage",
            id: "app_install_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.FooterContent",
            cities: [
              {
                text: "Bangalore",
                link: "https://www.swiggy.com/city/bangalore",
              },
              {
                text: "Gurgaon",
                link: "https://www.swiggy.com/city/gurgaon",
              },
              {
                text: "Hyderabad",
                link: "https://www.swiggy.com/city/hyderabad",
              },
              {
                text: "Delhi",
                link: "https://www.swiggy.com/city/delhi",
              },
              {
                text: "Mumbai",
                link: "https://www.swiggy.com/city/mumbai",
              },
              {
                text: "Pune",
                link: "https://www.swiggy.com/city/pune",
              },
              {
                text: "Kolkata",
                link: "https://www.swiggy.com/city/kolkata",
              },
              {
                text: "Chennai",
                link: "https://www.swiggy.com/city/chennai",
              },
              {
                text: "Ahmedabad",
                link: "https://www.swiggy.com/city/ahmedabad",
              },
              {
                text: "Chandigarh",
                link: "https://www.swiggy.com/city/chandigarh",
              },
              {
                text: "Jaipur",
                link: "https://www.swiggy.com/city/jaipur",
              },
              {
                text: "Kochi",
                link: "https://www.swiggy.com/city/kochi",
              },
              {
                text: "Coimbatore",
                link: "https://www.swiggy.com/city/coimbatore",
              },
              {
                text: "Lucknow",
                link: "https://www.swiggy.com/city/lucknow",
              },
              {
                text: "Nagpur",
                link: "https://www.swiggy.com/city/nagpur",
              },
              {
                text: "Vadodara",
                link: "https://www.swiggy.com/city/vadodara",
              },
              {
                text: "Indore",
                link: "https://www.swiggy.com/city/indore",
              },
              {
                text: "Guwahati",
                link: "https://www.swiggy.com/city/guwahati",
              },
              {
                text: "Vizag",
                link: "https://www.swiggy.com/city/vizag",
              },
              {
                text: "Surat",
                link: "https://www.swiggy.com/city/surat",
              },
              {
                text: "Dehradun",
                link: "https://www.swiggy.com/city/dehradun",
              },
              {
                text: "Noida",
                link: "https://www.swiggy.com/city/noida",
              },
              {
                text: "Ludhiana",
                link: "https://www.swiggy.com/city/ludhiana",
              },
              {
                text: "Trichy",
                link: "https://www.swiggy.com/city/trichy",
              },
              {
                text: "Vijayawada",
                link: "https://www.swiggy.com/city/vijayawada",
              },
              {
                text: "Kanpur",
                link: "https://www.swiggy.com/city/kanpur",
              },
              {
                text: "Mysore",
                link: "https://www.swiggy.com/city/mysore",
              },
              {
                text: "Nashik",
                link: "https://www.swiggy.com/city/nashik",
              },
              {
                text: "Udaipur",
                link: "https://www.swiggy.com/city/udaipur",
              },
              {
                text: "Pondicherry",
                link: "https://www.swiggy.com/city/pondicherry",
              },
              {
                text: "Agra",
                link: "https://www.swiggy.com/city/agra",
              },
              {
                text: "Aurangabad",
                link: "https://www.swiggy.com/city/aurangabad",
              },
              {
                text: "Jalandhar",
                link: "https://www.swiggy.com/city/jalandhar",
              },
              {
                text: "Kota",
                link: "https://www.swiggy.com/city/kota",
              },
              {
                text: "Madurai",
                link: "https://www.swiggy.com/city/madurai",
              },
              {
                text: "Allahabad",
                link: "https://www.swiggy.com/city/allahabad",
              },
              {
                text: "Manipal",
                link: "https://www.swiggy.com/city/manipal",
              },
              {
                text: "Amritsar",
                link: "https://www.swiggy.com/city/amritsar",
              },
              {
                text: "Bareilly",
                link: "https://www.swiggy.com/city/bareilly",
              },
              {
                text: "Meerut",
                link: "https://www.swiggy.com/city/meerut",
              },
              {
                text: "Bhopal",
                link: "https://www.swiggy.com/city/bhopal",
              },
              {
                text: "Ooty",
                link: "https://www.swiggy.com/city/ooty",
              },
              {
                text: "Bhubaneswar",
                link: "https://www.swiggy.com/city/bhubaneswar",
              },
              {
                text: "Raipur",
                link: "https://www.swiggy.com/city/raipur",
              },
              {
                text: "Bikaner",
                link: "https://www.swiggy.com/city/bikaner",
              },
              {
                text: "Rajkot",
                link: "https://www.swiggy.com/city/rajkot",
              },
              {
                text: "Kozhikode",
                link: "https://www.swiggy.com/city/kozhikode",
              },
              {
                text: "Central Goa",
                link: "https://www.swiggy.com/city/central-goa",
              },
              {
                text: "Sirsa",
                link: "https://www.swiggy.com/city/sirsa",
              },
              {
                text: "Gwalior",
                link: "https://www.swiggy.com/city/gwalior",
              },
              {
                text: "Thrissur",
                link: "https://www.swiggy.com/city/thrissur",
              },
              {
                text: "Kharagpur",
                link: "https://www.swiggy.com/city/kharagpur",
              },
              {
                text: "Tirupati",
                link: "https://www.swiggy.com/city/tirupati",
              },
              {
                text: "Tirupur",
                link: "https://www.swiggy.com/city/tirupur",
              },
              {
                text: "Vellore",
                link: "https://www.swiggy.com/city/vellore",
              },
              {
                text: "Thiruvananthapuram",
                link: "https://www.swiggy.com/city/thiruvananthapuram",
              },
              {
                text: "Warangal",
                link: "https://www.swiggy.com/city/warangal",
              },
              {
                text: "Varanasi",
                link: "https://www.swiggy.com/city/varanasi",
              },
              {
                text: "Mangaluru",
                link: "https://www.swiggy.com/city/mangaluru",
              },
              {
                text: "Patna",
                link: "https://www.swiggy.com/city/patna",
              },
              {
                text: "Ranchi",
                link: "https://www.swiggy.com/city/ranchi",
              },
              {
                text: "Faridabad",
                link: "https://www.swiggy.com/city/faridabad",
              },
              {
                text: "Guntur",
                link: "https://www.swiggy.com/city/guntur",
              },
              {
                text: "Ujjain",
                link: "https://www.swiggy.com/city/ujjain",
              },
              {
                text: "Patiala",
                link: "https://www.swiggy.com/city/patiala",
              },
              {
                text: "Karnal",
                link: "https://www.swiggy.com/city/karnal",
              },
              {
                text: "Kakinada",
                link: "https://www.swiggy.com/city/kakinada",
              },
              {
                text: "Rajahmundry",
                link: "https://www.swiggy.com/city/rajahmundry",
              },
              {
                text: "Bilaspur",
                link: "https://www.swiggy.com/city/bilaspur",
              },
              {
                text: "Bhilai",
                link: "https://www.swiggy.com/city/bhilai",
              },
              {
                text: "Anand",
                link: "https://www.swiggy.com/city/anand",
              },
              {
                text: "Bhavnagar",
                link: "https://www.swiggy.com/city/bhavnagar",
              },
              {
                text: "Jammu",
                link: "https://www.swiggy.com/city/jammu",
              },
              {
                text: "Muktsar",
                link: "https://www.swiggy.com/city/muktsar",
              },
              {
                text: "Panipat",
                link: "https://www.swiggy.com/city/panipat",
              },
              {
                text: "Jamshedpur",
                link: "https://www.swiggy.com/city/jamshedpur",
              },
              {
                text: "Dhanbad",
                link: "https://www.swiggy.com/city/dhanbad",
              },
              {
                text: "Bokaro",
                link: "https://www.swiggy.com/city/bokaro",
              },
              {
                text: "Hubli",
                link: "https://www.swiggy.com/city/hubli",
              },
              {
                text: "Belgaum",
                link: "https://www.swiggy.com/city/belgaum",
              },
              {
                text: "Jabalpur",
                link: "https://www.swiggy.com/city/jabalpur",
              },
              {
                text: "Kolhapur",
                link: "https://www.swiggy.com/city/kolhapur",
              },
              {
                text: "Solapur",
                link: "https://www.swiggy.com/city/solapur",
              },
              {
                text: "Shillong",
                link: "https://www.swiggy.com/city/shillong",
              },
              {
                text: "Cuttack",
                link: "https://www.swiggy.com/city/cuttack",
              },
              {
                text: "Aligarh",
                link: "https://www.swiggy.com/city/aligarh",
              },
              {
                text: "Salem",
                link: "https://www.swiggy.com/city/salem",
              },
              {
                text: "Agartala",
                link: "https://www.swiggy.com/city/agartala",
              },
              {
                text: "Jodhpur",
                link: "https://www.swiggy.com/city/jodhpur",
              },
              {
                text: "Ajmer",
                link: "https://www.swiggy.com/city/ajmer",
              },
              {
                text: "Jhansi",
                link: "https://www.swiggy.com/city/jhansi",
              },
              {
                text: "Gorakhpur",
                link: "https://www.swiggy.com/city/gorakhpur",
              },
              {
                text: "Thanjavur",
                link: "https://www.swiggy.com/city/thanjavur",
              },
              {
                text: "Erode",
                link: "https://www.swiggy.com/city/erode",
              },
              {
                text: "Nellore",
                link: "https://www.swiggy.com/city/nellore",
              },
              {
                text: "Rourkela",
                link: "https://www.swiggy.com/city/rourkela",
              },
              {
                text: "Anantapur",
                link: "https://www.swiggy.com/city/anantapur",
              },
              {
                text: "Kurnool",
                link: "https://www.swiggy.com/city/kurnool",
              },
              {
                text: "Ahmednagar",
                link: "https://www.swiggy.com/city/ahmednagar",
              },
              {
                text: "Phagwara",
                link: "https://www.swiggy.com/city/phagwara",
              },
              {
                text: "Ambala",
                link: "https://www.swiggy.com/city/ambala",
              },
              {
                text: "Ballari",
                link: "https://www.swiggy.com/city/ballari",
              },
              {
                text: "Saharanpur",
                link: "https://www.swiggy.com/city/saharanpur",
              },
              {
                text: "Tirunelveli",
                link: "https://www.swiggy.com/city/tirunelveli",
              },
              {
                text: "Bathinda",
                link: "https://www.swiggy.com/city/bathinda",
              },
              {
                text: "Mathura",
                link: "https://www.swiggy.com/city/mathura",
              },
              {
                text: "Haridwar",
                link: "https://www.swiggy.com/city/haridwar",
              },
              {
                text: "Ratnagiri",
                link: "https://www.swiggy.com/city/ratnagiri",
              },
              {
                text: "Sangli",
                link: "https://www.swiggy.com/city/sangli",
              },
              {
                text: "Amravati",
                link: "https://www.swiggy.com/city/amravati",
              },
              {
                text: "Rishikesh",
                link: "https://www.swiggy.com/city/rishikesh",
              },
              {
                text: "Nagercoil",
                link: "https://www.swiggy.com/city/nagercoil",
              },
              {
                text: "KanyaKumari",
                link: "https://www.swiggy.com/city/kanyakumari",
              },
              {
                text: "Kadapa",
                link: "https://www.swiggy.com/city/kadapa",
              },
              {
                text: "Nizamabad",
                link: "https://www.swiggy.com/city/nizamabad",
              },
              {
                text: "Shivamogga",
                link: "https://www.swiggy.com/city/shivamogga",
              },
              {
                text: "Davanagere",
                link: "https://www.swiggy.com/city/davanagere",
              },
              {
                text: "Roorkee",
                link: "https://www.swiggy.com/city/roorkee",
              },
              {
                text: "Nanded",
                link: "https://www.swiggy.com/city/nanded",
              },
              {
                text: "Rewa",
                link: "https://www.swiggy.com/city/rewa",
              },
              {
                text: "Satna",
                link: "https://www.swiggy.com/city/satna",
              },
              {
                text: "Shimla",
                link: "https://www.swiggy.com/city/shimla",
              },
              {
                text: "Muzaffarpur",
                link: "https://www.swiggy.com/city/muzaffarpur",
              },
              {
                text: "Valsad",
                link: "https://www.swiggy.com/city/valsad",
              },
              {
                text: "Vapi",
                link: "https://www.swiggy.com/city/vapi",
              },
              {
                text: "Chhapra",
                link: "https://www.swiggy.com/city/chhapra",
              },
              {
                text: "Dharamshala",
                link: "https://www.swiggy.com/city/dharamshala",
              },
              {
                text: "Kollam",
                link: "https://www.swiggy.com/city/kollam",
              },
              {
                text: "Silchar",
                link: "https://www.swiggy.com/city/silchar",
              },
              {
                text: "Alappuzha",
                link: "https://www.swiggy.com/city/alappuzha",
              },
              {
                text: "Sonipat",
                link: "https://www.swiggy.com/city/sonipat",
              },
              {
                text: "Rohtak",
                link: "https://www.swiggy.com/city/rohtak",
              },
              {
                text: "Mehsana",
                link: "https://www.swiggy.com/city/mehsana",
              },
              {
                text: "Kullu",
                link: "https://www.swiggy.com/city/kullu",
              },
              {
                text: "Dhule",
                link: "https://www.swiggy.com/city/dhule",
              },
              {
                text: "Dharwad",
                link: "https://www.swiggy.com/city/dharwad",
              },
              {
                text: "Latur",
                link: "https://www.swiggy.com/city/latur",
              },
              {
                text: "Vizianagaram",
                link: "https://www.swiggy.com/city/vizianagaram",
              },
              {
                text: "Khammam",
                link: "https://www.swiggy.com/city/khammam",
              },
              {
                text: "Hampi",
                link: "https://www.swiggy.com/city/hampi",
              },
              {
                text: "Nainital",
                link: "https://www.swiggy.com/city/nainital",
              },
              {
                text: "Akola",
                link: "https://www.swiggy.com/city/akola",
              },
              {
                text: "Kalaburagi",
                link: "https://www.swiggy.com/city/kalaburagi",
              },
              {
                text: "Gaya",
                link: "https://www.swiggy.com/city/gaya",
              },
              {
                text: "Muzaffarnagar",
                link: "https://www.swiggy.com/city/muzaffarnagar",
              },
              {
                text: "Dewas",
                link: "https://www.swiggy.com/city/dewas",
              },
              {
                text: "Korba",
                link: "https://www.swiggy.com/city/korba",
              },
              {
                text: "Mussoorie",
                link: "https://www.swiggy.com/city/mussoorie",
              },
              {
                text: "Jalgaon",
                link: "https://www.swiggy.com/city/jalgaon",
              },
              {
                text: "Yamuna Nagar",
                link: "https://www.swiggy.com/city/yamuna-nagar",
              },
              {
                text: "Bhagalpur",
                link: "https://www.swiggy.com/city/bhagalpur",
              },
              {
                text: "Hapur",
                link: "https://www.swiggy.com/city/hapur",
              },
              {
                text: "Morena",
                link: "https://www.swiggy.com/city/morena",
              },
              {
                text: "Hassan",
                link: "https://www.swiggy.com/city/hassan",
              },
              {
                text: "Hisar",
                link: "https://www.swiggy.com/city/hisar",
              },
              {
                text: "Godhra",
                link: "https://www.swiggy.com/city/godhra",
              },
              {
                text: "Kolar ",
                link: "https://www.swiggy.com/city/kolar",
              },
              {
                text: "Rampur",
                link: "https://www.swiggy.com/city/rampur",
              },
              {
                text: "Sitapur",
                link: "https://www.swiggy.com/city/sitapur",
              },
              {
                text: "Etawah",
                link: "https://www.swiggy.com/city/etawah",
              },
              {
                text: "Porbandar",
                link: "https://www.swiggy.com/city/porbandar",
              },
              {
                text: "Nadiad",
                link: "https://www.swiggy.com/city/nadiad",
              },
              {
                text: "Sagar",
                link: "https://www.swiggy.com/city/sagar",
              },
              {
                text: "Morbi",
                link: "https://www.swiggy.com/city/morbi",
              },
              {
                text: "Chhindwara",
                link: "https://www.swiggy.com/city/chhindwara",
              },
              {
                text: "Tumakuru",
                link: "https://www.swiggy.com/city/tumakuru",
              },
              {
                text: "Singrauli",
                link: "https://www.swiggy.com/city/singrauli",
              },
              {
                text: "Thoothukudi",
                link: "https://www.swiggy.com/city/thoothukudi",
              },
              {
                text: "Katni",
                link: "https://www.swiggy.com/city/katni",
              },
              {
                text: "Khandwa",
                link: "https://www.swiggy.com/city/khandwa",
              },
              {
                text: "Eluru",
                link: "https://www.swiggy.com/city/eluru",
              },
              {
                text: "Malappuram",
                link: "https://www.swiggy.com/city/malappuram",
              },
              {
                text: "Dibrugarh",
                link: "https://www.swiggy.com/city/dibrugarh",
              },
              {
                text: "Deoghar",
                link: "https://www.swiggy.com/city/deoghar",
              },
              {
                text: "Khanna",
                link: "https://www.swiggy.com/city/khanna",
              },
              {
                text: "Bidar",
                link: "https://www.swiggy.com/city/bidar",
              },
              {
                text: "Anantnag",
                link: "https://www.swiggy.com/city/anantnag",
              },
              {
                text: "Madikeri",
                link: "https://www.swiggy.com/city/madikeri",
              },
              {
                text: "Haldwani",
                link: "https://www.swiggy.com/city/haldwani",
              },
              {
                text: "Panchkula",
                link: "https://www.swiggy.com/city/panchkula",
              },
              {
                text: "Farrukhabad",
                link: "https://www.swiggy.com/city/farrukhabad",
              },
              {
                text: "Malegaon",
                link: "https://www.swiggy.com/city/malegaon",
              },
              {
                text: "Dindigul",
                link: "https://www.swiggy.com/city/dindigul",
              },
              {
                text: "Shahjahanpur",
                link: "https://www.swiggy.com/city/shahjahanpur",
              },
              {
                text: "Beed",
                link: "https://www.swiggy.com/city/beed",
              },
              {
                text: "Junagadh",
                link: "https://www.swiggy.com/city/junagadh",
              },
              {
                text: "Asansol",
                link: "https://www.swiggy.com/city/asansol",
              },
              {
                text: "Beawar",
                link: "https://www.swiggy.com/city/beawar",
              },
              {
                text: "Kishangarh",
                link: "https://www.swiggy.com/city/kishangarh",
              },
              {
                text: "Budhwal",
                link: "https://www.swiggy.com/city/budhwal",
              },
              {
                text: "Parbhani",
                link: "https://www.swiggy.com/city/parbhani",
              },
              {
                text: "Gondia",
                link: "https://www.swiggy.com/city/gondia",
              },
              {
                text: "Ichalkaranji",
                link: "https://www.swiggy.com/city/ichalkaranji",
              },
              {
                text: "Jalna",
                link: "https://www.swiggy.com/city/jalna",
              },
              {
                text: "Yavatmal",
                link: "https://www.swiggy.com/city/yavatmal",
              },
              {
                text: "Shivpuri",
                link: "https://www.swiggy.com/city/shivpuri",
              },
              {
                text: "Moga",
                link: "https://www.swiggy.com/city/moga",
              },
              {
                text: "Abohar",
                link: "https://www.swiggy.com/city/abohar",
              },
              {
                text: "Adoni",
                link: "https://www.swiggy.com/city/adoni",
              },
              {
                text: "Madanapalle",
                link: "https://www.swiggy.com/city/madanapalle",
              },
              {
                text: "Tiruvannamalai",
                link: "https://www.swiggy.com/city/tiruvannamalai",
              },
              {
                text: "Satara",
                link: "https://www.swiggy.com/city/satara",
              },
              {
                text: "Ambur",
                link: "https://www.swiggy.com/city/ambur",
              },
              {
                text: "Karimnagar",
                link: "https://www.swiggy.com/city/karimnagar",
              },
              {
                text: "Ratlam",
                link: "https://www.swiggy.com/city/ratlam",
              },
              {
                text: "Moradabad",
                link: "https://www.swiggy.com/city/moradabad",
              },
              {
                text: "Machilipatnam",
                link: "https://www.swiggy.com/city/machilipatnam",
              },
              {
                text: "Ongole",
                link: "https://www.swiggy.com/city/ongole",
              },
              {
                text: "Kottayam",
                link: "https://www.swiggy.com/city/kottayam",
              },
              {
                text: "Darbhanga",
                link: "https://www.swiggy.com/city/darbhanga",
              },
              {
                text: "Kurukshetra",
                link: "https://www.swiggy.com/city/kurukshetra",
              },
              {
                text: "Unnao",
                link: "https://www.swiggy.com/city/unnao",
              },
              {
                text: "Bulandshahr",
                link: "https://www.swiggy.com/city/bulandshahr",
              },
              {
                text: "Durgapur",
                link: "https://www.swiggy.com/city/durgapur",
              },
              {
                text: "Siliguri",
                link: "https://www.swiggy.com/city/siliguri",
              },
              {
                text: "Pali",
                link: "https://www.swiggy.com/city/pali",
              },
              {
                text: "Tadepalligudem",
                link: "https://www.swiggy.com/city/tadepalligudem",
              },
              {
                text: "Ramagundam",
                link: "https://www.swiggy.com/city/ramagundam",
              },
              {
                text: "Mahbubnagar",
                link: "https://www.swiggy.com/city/mahbubnagar",
              },
              {
                text: "Bhiwani",
                link: "https://www.swiggy.com/city/bhiwani",
              },
              {
                text: "Cuddalore",
                link: "https://www.swiggy.com/city/cuddalore",
              },
              {
                text: "Kaithal",
                link: "https://www.swiggy.com/city/kaithal",
              },
              {
                text: "Jagtial",
                link: "https://www.swiggy.com/city/jagtial",
              },
              {
                text: "Palakkad",
                link: "https://www.swiggy.com/city/palakkad",
              },
              {
                text: "Guna",
                link: "https://www.swiggy.com/city/guna",
              },
              {
                text: "Kumbakonam",
                link: "https://www.swiggy.com/city/kumbakonam",
              },
              {
                text: "Maunath Bhanjan",
                link: "https://www.swiggy.com/city/maunath-bhanjan",
              },
              {
                text: "Baripada",
                link: "https://www.swiggy.com/city/baripada",
              },
              {
                text: "Orai",
                link: "https://www.swiggy.com/city/orai",
              },
              {
                text: "Bhadrak",
                link: "https://www.swiggy.com/city/bhadrak",
              },
              {
                text: "Batala",
                link: "https://www.swiggy.com/city/batala",
              },
              {
                text: "Firozpur",
                link: "https://www.swiggy.com/city/firozpur",
              },
              {
                text: "Barnala",
                link: "https://www.swiggy.com/city/barnala",
              },
              {
                text: "Raigarh",
                link: "https://www.swiggy.com/city/raigarh",
              },
              {
                text: "Nagaon",
                link: "https://www.swiggy.com/city/nagaon",
              },
              {
                text: "Mainpuri",
                link: "https://www.swiggy.com/city/mainpuri",
              },
              {
                text: "Balurghat",
                link: "https://www.swiggy.com/city/balurghat",
              },
              {
                text: "Giridih",
                link: "https://www.swiggy.com/city/giridih",
              },
              {
                text: "Ghazipur",
                link: "https://www.swiggy.com/city/ghazipur",
              },
              {
                text: "Jagdalpur",
                link: "https://www.swiggy.com/city/jagdalpur",
              },
              {
                text: "Vidisha",
                link: "https://www.swiggy.com/city/vidisha",
              },
              {
                text: "Dimapur",
                link: "https://www.swiggy.com/city/dimapur",
              },
              {
                text: "Shikohabad",
                link: "https://www.swiggy.com/city/shikohabad",
              },
              {
                text: "Imphal",
                link: "https://www.swiggy.com/city/imphal",
              },
              {
                text: "Lakhimpur",
                link: "https://www.swiggy.com/city/lakhimpur",
              },
              {
                text: "Rudrapur",
                link: "https://www.swiggy.com/city/rudrapur",
              },
              {
                text: "Ambikapur",
                link: "https://www.swiggy.com/city/ambikapur",
              },
              {
                text: "Damoh",
                link: "https://www.swiggy.com/city/damoh",
              },
              {
                text: "Rae Bareli",
                link: "https://www.swiggy.com/city/rae-bareli",
              },
              {
                text: "Tinsukia",
                link: "https://www.swiggy.com/city/tinsukia",
              },
              {
                text: "Rajapalayam",
                link: "https://www.swiggy.com/city/rajapalayam",
              },
              {
                text: "Rajnandgaon",
                link: "https://www.swiggy.com/city/rajnandgaon",
              },
              {
                text: "Kashipur",
                link: "https://www.swiggy.com/city/kashipur",
              },
              {
                text: "Ranibennur",
                link: "https://www.swiggy.com/city/ranibennur",
              },
              {
                text: "Burhanpur",
                link: "https://www.swiggy.com/city/burhanpur",
              },
              {
                text: "Bhadravati",
                link: "https://www.swiggy.com/city/bhadravati",
              },
              {
                text: "Chittoor",
                link: "https://www.swiggy.com/city/chittoor",
              },
              {
                text: "Pudukkottai",
                link: "https://www.swiggy.com/city/pudukkottai",
              },
              {
                text: "Hardoi",
                link: "https://www.swiggy.com/city/hardoi",
              },
              {
                text: "Basti",
                link: "https://www.swiggy.com/city/basti",
              },
              {
                text: "Karaikkudi",
                link: "https://www.swiggy.com/city/karaikkudi",
              },
              {
                text: "Lalitpur",
                link: "https://www.swiggy.com/city/lalitpur",
              },
              {
                text: "Hospet",
                link: "https://www.swiggy.com/city/hospet",
              },
              {
                text: "Budaun",
                link: "https://www.swiggy.com/city/budaun",
              },
              {
                text: "Neemuch",
                link: "https://www.swiggy.com/city/neemuch",
              },
              {
                text: "Pilibhit",
                link: "https://www.swiggy.com/city/pilibhit",
              },
              {
                text: "Amroha",
                link: "https://www.swiggy.com/city/amroha",
              },
              {
                text: "Barshi",
                link: "https://www.swiggy.com/city/barshi",
              },
              {
                text: "Sri Ganganagar",
                link: "https://www.swiggy.com/city/sri-ganganagar",
              },
              {
                text: "Wardha",
                link: "https://www.swiggy.com/city/wardha",
              },
              {
                text: "Sehore",
                link: "https://www.swiggy.com/city/sehore",
              },
              {
                text: "Bhimavaram",
                link: "https://www.swiggy.com/city/bhimavaram",
              },
              {
                text: "Hanumangarh",
                link: "https://www.swiggy.com/city/hanumangarh",
              },
              {
                text: "Pathankot",
                link: "https://www.swiggy.com/city/pathankot",
              },
              {
                text: "Puri",
                link: "https://www.swiggy.com/city/puri",
              },
              {
                text: "Fatehpur",
                link: "https://www.swiggy.com/city/fatehpur",
              },
              {
                text: "Surendranagar Dudhrej",
                link: "https://www.swiggy.com/city/surendranagar-dudhrej",
              },
              {
                text: "Jamnagar",
                link: "https://www.swiggy.com/city/jamnagar",
              },
              {
                text: "Bhuj",
                link: "https://www.swiggy.com/city/bhuj",
              },
              {
                text: "Gandhidham",
                link: "https://www.swiggy.com/city/gandhidham",
              },
              {
                text: "Bharuch",
                link: "https://www.swiggy.com/city/bharuch",
              },
              {
                text: "Navsari",
                link: "https://www.swiggy.com/city/navsari",
              },
              {
                text: "Amreli",
                link: "https://www.swiggy.com/city/amreli",
              },
              {
                text: "Palanpur",
                link: "https://www.swiggy.com/city/palanpur",
              },
              {
                text: "Bhilwara",
                link: "https://www.swiggy.com/city/bhilwara",
              },
              {
                text: "Suratgarh",
                link: "https://www.swiggy.com/city/suratgarh",
              },
              {
                text: "Sikar",
                link: "https://www.swiggy.com/city/sikar",
              },
              {
                text: "Churu",
                link: "https://www.swiggy.com/city/churu",
              },
              {
                text: "Alwar",
                link: "https://www.swiggy.com/city/alwar",
              },
              {
                text: "Bhiwadi",
                link: "https://www.swiggy.com/city/bhiwadi",
              },
              {
                text: "Bharatpur",
                link: "https://www.swiggy.com/city/bharatpur",
              },
              {
                text: "Mount Abu",
                link: "https://www.swiggy.com/city/mount-abu",
              },
              {
                text: "Bundi",
                link: "https://www.swiggy.com/city/bundi",
              },
              {
                text: "Sawai Madhopur",
                link: "https://www.swiggy.com/city/sawai-madhopur",
              },
              {
                text: "Purulia",
                link: "https://www.swiggy.com/city/purulia",
              },
              {
                text: "Bardhaman",
                link: "https://www.swiggy.com/city/bardhaman",
              },
              {
                text: "Raniganj",
                link: "https://www.swiggy.com/city/raniganj",
              },
              {
                text: "Darjeeling",
                link: "https://www.swiggy.com/city/darjeeling",
              },
              {
                text: "Jalpaiguri",
                link: "https://www.swiggy.com/city/jalpaiguri",
              },
              {
                text: "Chittorgarh",
                link: "https://www.swiggy.com/city/chittorgarh",
              },
              {
                text: "Dholpur",
                link: "https://www.swiggy.com/city/dholpur",
              },
              {
                text: "Uluberia",
                link: "https://www.swiggy.com/city/uluberia",
              },
              {
                text: "Nabadwip",
                link: "https://www.swiggy.com/city/nabadwip",
              },
              {
                text: "Bongaon",
                link: "https://www.swiggy.com/city/bongaon",
              },
              {
                text: "Kanchrapara",
                link: "https://www.swiggy.com/city/kanchrapara",
              },
              {
                text: "Bankura",
                link: "https://www.swiggy.com/city/bankura",
              },
              {
                text: "Habra",
                link: "https://www.swiggy.com/city/habra",
              },
              {
                text: "Firozabad",
                link: "https://www.swiggy.com/city/firozabad",
              },
              {
                text: "Nalgonda",
                link: "https://www.swiggy.com/city/nalgonda",
              },
              {
                text: "Chandrapur",
                link: "https://www.swiggy.com/city/chandrapur",
              },
              {
                text: "Bijapur",
                link: "https://www.swiggy.com/city/bijapur",
              },
              {
                text: "Bhusawal",
                link: "https://www.swiggy.com/city/bhusawal",
              },
              {
                text: "Raichur",
                link: "https://www.swiggy.com/city/raichur",
              },
              {
                text: "Bahraich",
                link: "https://www.swiggy.com/city/bahraich",
              },
              {
                text: "Azamgarh",
                link: "https://www.swiggy.com/city/azamgarh",
              },
              {
                text: "Bahadurgarh",
                link: "https://www.swiggy.com/city/bahadurgarh",
              },
              {
                text: "Jind",
                link: "https://www.swiggy.com/city/jind",
              },
              {
                text: "Rewari",
                link: "https://www.swiggy.com/city/rewari",
              },
              {
                text: "Palwal",
                link: "https://www.swiggy.com/city/palwal",
              },
              {
                text: "Hathras",
                link: "https://www.swiggy.com/city/hathras",
              },
              {
                text: "Sambalpur",
                link: "https://www.swiggy.com/city/sambalpur",
              },
              {
                text: "Banda",
                link: "https://www.swiggy.com/city/banda",
              },
              {
                text: "Hoshiarpur",
                link: "https://www.swiggy.com/city/hoshiarpur",
              },
              {
                text: "Faridkot",
                link: "https://www.swiggy.com/city/faridkot",
              },
              {
                text: "Mandsaur",
                link: "https://www.swiggy.com/city/mandsaur",
              },
              {
                text: "Suryapet",
                link: "https://www.swiggy.com/city/suryapet",
              },
              {
                text: "Adilabad",
                link: "https://www.swiggy.com/city/adilabad",
              },
              {
                text: "Narasaraopet",
                link: "https://www.swiggy.com/city/narasaraopet",
              },
              {
                text: "Faizabad",
                link: "https://www.swiggy.com/city/faizabad",
              },
              {
                text: "Tadpatri",
                link: "https://www.swiggy.com/city/tadpatri",
              },
              {
                text: "Gonda",
                link: "https://www.swiggy.com/city/gonda",
              },
              {
                text: "Mughalsarai",
                link: "https://www.swiggy.com/city/mughalsarai",
              },
              {
                text: "Medinipur",
                link: "https://www.swiggy.com/city/medinipur",
              },
              {
                text: "Nagda",
                link: "https://www.swiggy.com/city/nagda",
              },
              {
                text: "Chilakaluripet",
                link: "https://www.swiggy.com/city/chilakaluripet",
              },
              {
                text: "Hindupur",
                link: "https://www.swiggy.com/city/hindupur",
              },
              {
                text: "Kasganj",
                link: "https://www.swiggy.com/city/kasganj",
              },
              {
                text: "Raiganj",
                link: "https://www.swiggy.com/city/raiganj",
              },
              {
                text: "Deoria City",
                link: "https://www.swiggy.com/city/deoria-city",
              },
              {
                text: "Sultanpur",
                link: "https://www.swiggy.com/city/sultanpur",
              },
              {
                text: "Shamli",
                link: "https://www.swiggy.com/city/shamli",
              },
              {
                text: "Krishnanagar",
                link: "https://www.swiggy.com/city/krishnanagar",
              },
              {
                text: "Ballia",
                link: "https://www.swiggy.com/city/ballia",
              },
              {
                text: "Guntakal",
                link: "https://www.swiggy.com/city/guntakal",
              },
              {
                text: "Miryalaguda",
                link: "https://www.swiggy.com/city/miryalaguda",
              },
              {
                text: "Etah",
                link: "https://www.swiggy.com/city/etah",
              },
              {
                text: "Berhampore",
                link: "https://www.swiggy.com/city/berhampore",
              },
              {
                text: "Gudivada",
                link: "https://www.swiggy.com/city/gudivada",
              },
              {
                text: "Haldia",
                link: "https://www.swiggy.com/city/haldia",
              },
              {
                text: "Santipur",
                link: "https://www.swiggy.com/city/santipur",
              },
              {
                text: "Basirhat",
                link: "https://www.swiggy.com/city/basirhat",
              },
              {
                text: "Seoni",
                link: "https://www.swiggy.com/city/seoni",
              },
              {
                text: "Udgir",
                link: "https://www.swiggy.com/city/udgir",
              },
              {
                text: "Proddatur",
                link: "https://www.swiggy.com/city/proddatur",
              },
              {
                text: "Nagapattinam",
                link: "https://www.swiggy.com/city/nagapattinam",
              },
              {
                text: "Chikmagalur",
                link: "https://www.swiggy.com/city/chikmagalur",
              },
              {
                text: "Chandausi",
                link: "https://www.swiggy.com/city/chandausi",
              },
              {
                text: "Bhind",
                link: "https://www.swiggy.com/city/bhind",
              },
              {
                text: "Mandya",
                link: "https://www.swiggy.com/city/mandya",
              },
              {
                text: "Bagalkot",
                link: "https://www.swiggy.com/city/bagalkot",
              },
              {
                text: "Nandurbar",
                link: "https://www.swiggy.com/city/nandurbar",
              },
              {
                text: "Chitradurga",
                link: "https://www.swiggy.com/city/chitradurga",
              },
              {
                text: "Osmanabad",
                link: "https://www.swiggy.com/city/osmanabad",
              },
              {
                text: "Modinagar",
                link: "https://www.swiggy.com/city/modinagar",
              },
              {
                text: "Gadag-Betigeri",
                link: "https://www.swiggy.com/city/gadag-betigeri",
              },
              {
                text: "Hoshangabad",
                link: "https://www.swiggy.com/city/hoshangabad",
              },
              {
                text: "Jaunpur",
                link: "https://www.swiggy.com/city/jaunpur",
              },
              {
                text: "Khurja",
                link: "https://www.swiggy.com/city/khurja",
              },
              {
                text: "Port Blair",
                link: "https://www.swiggy.com/city/port-blair",
              },
              {
                text: "Jorhat",
                link: "https://www.swiggy.com/city/jorhat",
              },
              {
                text: "Nandyal",
                link: "https://www.swiggy.com/city/nandyal",
              },
              {
                text: "Biharsharif",
                link: "https://www.swiggy.com/city/biharsharif",
              },
              {
                text: "Buxar",
                link: "https://www.swiggy.com/city/buxar",
              },
              {
                text: "Siwan",
                link: "https://www.swiggy.com/city/siwan",
              },
              {
                text: "Dehri",
                link: "https://www.swiggy.com/city/dehri",
              },
              {
                text: "Bettiah",
                link: "https://www.swiggy.com/city/bettiah",
              },
              {
                text: "Kishanganj",
                link: "https://www.swiggy.com/city/kishanganj",
              },
              {
                text: "Saharsa",
                link: "https://www.swiggy.com/city/saharsa",
              },
              {
                text: "Hajipur",
                link: "https://www.swiggy.com/city/hajipur",
              },
              {
                text: "Motihari",
                link: "https://www.swiggy.com/city/motihari",
              },
              {
                text: "Sasaram",
                link: "https://www.swiggy.com/city/sasaram",
              },
              {
                text: "Munger",
                link: "https://www.swiggy.com/city/munger",
              },
              {
                text: "Katihar",
                link: "https://www.swiggy.com/city/katihar",
              },
              {
                text: "Arrah",
                link: "https://www.swiggy.com/city/arrah",
              },
              {
                text: "Srikakulam",
                link: "https://www.swiggy.com/city/srikakulam",
              },
              {
                text: "Begusarai",
                link: "https://www.swiggy.com/city/begusarai",
              },
              {
                text: "Neyveli",
                link: "https://www.swiggy.com/city/neyveli",
              },
              {
                text: "Waidhan",
                link: "https://www.swiggy.com/city/waidhan",
              },
              {
                text: "Markapur",
                link: "https://www.swiggy.com/city/markapur",
              },
              {
                text: "Chikkaballapur",
                link: "https://www.swiggy.com/city/chikkaballapur",
              },
              {
                text: "Bhatkal",
                link: "https://www.swiggy.com/city/bhatkal",
              },
              {
                text: "Gokak",
                link: "https://www.swiggy.com/city/gokak",
              },
              {
                text: "Itarsi",
                link: "https://www.swiggy.com/city/itarsi",
              },
              {
                text: "Dabra",
                link: "https://www.swiggy.com/city/dabra",
              },
              {
                text: "Dhar",
                link: "https://www.swiggy.com/city/dhar",
              },
              {
                text: "Chalisgaon",
                link: "https://www.swiggy.com/city/chalisgaon",
              },
              {
                text: "Thiruvallur",
                link: "https://www.swiggy.com/city/thiruvallur",
              },
              {
                text: "Namakkal",
                link: "https://www.swiggy.com/city/namakkal",
              },
              {
                text: "Dharmapuri",
                link: "https://www.swiggy.com/city/dharmapuri",
              },
              {
                text: "Bhandara",
                link: "https://www.swiggy.com/city/bhandara",
              },
              {
                text: "Virudhunagar",
                link: "https://www.swiggy.com/city/virudhunagar",
              },
              {
                text: "Siddipet",
                link: "https://www.swiggy.com/city/siddipet",
              },
              {
                text: "Gadwal",
                link: "https://www.swiggy.com/city/gadwal",
              },
              {
                text: "Bodhan-Rural",
                link: "https://www.swiggy.com/city/bodhan-rural",
              },
              {
                text: "Kamareddy",
                link: "https://www.swiggy.com/city/kamareddy",
              },
              {
                text: "Jhunjhunu",
                link: "https://www.swiggy.com/city/jhunjhunu",
              },
              {
                text: "Kapurthala",
                link: "https://www.swiggy.com/city/kapurthala",
              },
              {
                text: "Sangrur",
                link: "https://www.swiggy.com/city/sangrur",
              },
              {
                text: "Gurdaspur",
                link: "https://www.swiggy.com/city/gurdaspur",
              },
              {
                text: "Ramgarh",
                link: "https://www.swiggy.com/city/ramgarh",
              },
              {
                text: "Bantwal",
                link: "https://www.swiggy.com/city/bantwal",
              },
              {
                text: "Doddaballapura",
                link: "https://www.swiggy.com/city/doddaballapura",
              },
              {
                text: "Buldana",
                link: "https://www.swiggy.com/city/buldana",
              },
              {
                text: "Karad",
                link: "https://www.swiggy.com/city/karad",
              },
              {
                text: "Krishnagiri",
                link: "https://www.swiggy.com/city/krishnagiri",
              },
              {
                text: "Tiptur",
                link: "https://www.swiggy.com/city/tiptur",
              },
              {
                text: "Bhadrachalam",
                link: "https://www.swiggy.com/city/bhadrachalam",
              },
              {
                text: "Mancherial",
                link: "https://www.swiggy.com/city/mancherial",
              },
              {
                text: "Balrampur",
                link: "https://www.swiggy.com/city/balrampur",
              },
              {
                text: "Bharabanki",
                link: "https://www.swiggy.com/city/bharabanki",
              },
              {
                text: "Malout",
                link: "https://www.swiggy.com/city/malout",
              },
              {
                text: "Fatehgarh Sahib",
                link: "https://www.swiggy.com/city/fatehgarh-sahib",
              },
              {
                text: "Ropar",
                link: "https://www.swiggy.com/city/ropar",
              },
              {
                text: "Nangal",
                link: "https://www.swiggy.com/city/nangal",
              },
              {
                text: "Narnaul",
                link: "https://www.swiggy.com/city/narnaul",
              },
              {
                text: "Naraingarh",
                link: "https://www.swiggy.com/city/naraingarh",
              },
              {
                text: "Himmatnagar",
                link: "https://www.swiggy.com/city/himmatnagar",
              },
              {
                text: "Dausa",
                link: "https://www.swiggy.com/city/dausa",
              },
              {
                text: "Jahanabad",
                link: "https://www.swiggy.com/city/jahanabad",
              },
              {
                text: "Samastipur",
                link: "https://www.swiggy.com/city/samastipur",
              },
              {
                text: "Purnea",
                link: "https://www.swiggy.com/city/purnea",
              },
              {
                text: "Berhampur",
                link: "https://www.swiggy.com/city/berhampur",
              },
              {
                text: "Malda",
                link: "https://www.swiggy.com/city/malda",
              },
              {
                text: "Tuni",
                link: "https://www.swiggy.com/city/tuni",
              },
              {
                text: "Puttur",
                link: "https://www.swiggy.com/city/puttur",
              },
              {
                text: "Rayachoty",
                link: "https://www.swiggy.com/city/rayachoty",
              },
              {
                text: "Medak",
                link: "https://www.swiggy.com/city/medak",
              },
              {
                text: "Nirmal",
                link: "https://www.swiggy.com/city/nirmal",
              },
              {
                text: "Mirzapur",
                link: "https://www.swiggy.com/city/mirzapur",
              },
              {
                text: "Tanuku",
                link: "https://www.swiggy.com/city/tanuku",
              },
              {
                text: "Dahod",
                link: "https://www.swiggy.com/city/dahod",
              },
              {
                text: "Barmer",
                link: "https://www.swiggy.com/city/barmer",
              },
              {
                text: "Gangapur City",
                link: "https://www.swiggy.com/city/gangapur-city",
              },
              {
                text: "Mandi Gobindgarh",
                link: "https://www.swiggy.com/city/mandi-gobindgarh",
              },
              {
                text: "Tarn Taran Sahib",
                link: "https://www.swiggy.com/city/tarn-taran-sahib",
              },
              {
                text: "Nakodar",
                link: "https://www.swiggy.com/city/nakodar",
              },
              {
                text: "Ankleshwar",
                link: "https://www.swiggy.com/city/ankleshwar",
              },
              {
                text: "Vyara",
                link: "https://www.swiggy.com/city/vyara",
              },
              {
                text: "Bardoli",
                link: "https://www.swiggy.com/city/bardoli",
              },
              {
                text: "Halol",
                link: "https://www.swiggy.com/city/halol",
              },
              {
                text: "Bijnor",
                link: "https://www.swiggy.com/city/bijnor",
              },
              {
                text: "Sawantwadi",
                link: "https://www.swiggy.com/city/sawantwadi",
              },
              {
                text: "Shrirampur",
                link: "https://www.swiggy.com/city/shrirampur",
              },
              {
                text: "Sangamner",
                link: "https://www.swiggy.com/city/sangamner",
              },
              {
                text: "Baramati",
                link: "https://www.swiggy.com/city/baramati",
              },
              {
                text: "Betul",
                link: "https://www.swiggy.com/city/betul",
              },
              {
                text: "Chhatarpur",
                link: "https://www.swiggy.com/city/chhatarpur",
              },
              {
                text: "Datia",
                link: "https://www.swiggy.com/city/datia",
              },
              {
                text: "Balaghat",
                link: "https://www.swiggy.com/city/balaghat",
              },
              {
                text: "Sivakasi",
                link: "https://www.swiggy.com/city/sivakasi",
              },
              {
                text: "Viluppuram",
                link: "https://www.swiggy.com/city/viluppuram",
              },
              {
                text: "Ramanathapuram",
                link: "https://www.swiggy.com/city/ramanathapuram",
              },
              {
                text: "Sirsi",
                link: "https://www.swiggy.com/city/sirsi",
              },
              {
                text: "Kodaikanal",
                link: "https://www.swiggy.com/city/kodaikanal",
              },
              {
                text: "Theni",
                link: "https://www.swiggy.com/city/theni",
              },
              {
                text: "Karur",
                link: "https://www.swiggy.com/city/karur",
              },
              {
                text: "Karwar",
                link: "https://www.swiggy.com/city/karwar",
              },
              {
                text: "Sindhanur",
                link: "https://www.swiggy.com/city/sindhanur",
              },
              {
                text: "Kannur",
                link: "https://www.swiggy.com/city/kannur",
              },
              {
                text: "Noida 1",
                link: "https://www.swiggy.com/city/noida-1",
              },
              {
                text: "Karunagappaly",
                link: "https://www.swiggy.com/city/karunagappaly",
              },
              {
                text: "Thiruvalla",
                link: "https://www.swiggy.com/city/thiruvalla",
              },
              {
                text: "Thodupuzha",
                link: "https://www.swiggy.com/city/thodupuzha",
              },
              {
                text: "Kadiri",
                link: "https://www.swiggy.com/city/kadiri",
              },
              {
                text: "Kavali",
                link: "https://www.swiggy.com/city/kavali",
              },
              {
                text: "Tezpur",
                link: "https://www.swiggy.com/city/tezpur",
              },
              {
                text: "Kayamkulam",
                link: "https://www.swiggy.com/city/kayamkulam",
              },
              {
                text: "Kottarakkara",
                link: "https://www.swiggy.com/city/kottarakkara",
              },
              {
                text: "Mandi Dabwali",
                link: "https://www.swiggy.com/city/mandi-dabwali",
              },
              {
                text: "Fatehabad",
                link: "https://www.swiggy.com/city/fatehabad",
              },
              {
                text: "Jagraon",
                link: "https://www.swiggy.com/city/jagraon",
              },
              {
                text: "Mansa",
                link: "https://www.swiggy.com/city/mansa",
              },
              {
                text: "Pinjore City",
                link: "https://www.swiggy.com/city/pinjore-city",
              },
              {
                text: "Fazilka",
                link: "https://www.swiggy.com/city/fazilka",
              },
              {
                text: "Baddi",
                link: "https://www.swiggy.com/city/baddi",
              },
              {
                text: "Solan",
                link: "https://www.swiggy.com/city/solan",
              },
              {
                text: "Daltonganj",
                link: "https://www.swiggy.com/city/daltonganj",
              },
              {
                text: "Balangir",
                link: "https://www.swiggy.com/city/balangir",
              },
              {
                text: "Paonta Sahib",
                link: "https://www.swiggy.com/city/paonta-sahib",
              },
              {
                text: "Kothagudem",
                link: "https://www.swiggy.com/city/kothagudem",
              },
              {
                text: "Hansi",
                link: "https://www.swiggy.com/city/hansi",
              },
              {
                text: "Aurangabad_Bihar",
                link: "https://www.swiggy.com/city/aurangabadbihar",
              },
              {
                text: "Charkhi Dadri",
                link: "https://www.swiggy.com/city/charkhi-dadri",
              },
              {
                text: "Gopalganj",
                link: "https://www.swiggy.com/city/gopalganj",
              },
              {
                text: "Jharsuguda",
                link: "https://www.swiggy.com/city/jharsuguda",
              },
              {
                text: "Tohana",
                link: "https://www.swiggy.com/city/tohana",
              },
              {
                text: "Jhalawar",
                link: "https://www.swiggy.com/city/jhalawar",
              },
              {
                text: "Sivasagar",
                link: "https://www.swiggy.com/city/sivasagar",
              },
              {
                text: "Bagdogra",
                link: "https://www.swiggy.com/city/bagdogra",
              },
              {
                text: "Angul",
                link: "https://www.swiggy.com/city/angul",
              },
              {
                text: "Kendrapada",
                link: "https://www.swiggy.com/city/kendrapada",
              },
              {
                text: "Mallapuram (Do not Use)",
                link: "https://www.swiggy.com/city/mallapuram-do-not-use",
              },
              {
                text: "Veraval",
                link: "https://www.swiggy.com/city/veraval",
              },
              {
                text: "Daman",
                link: "https://www.swiggy.com/city/daman",
              },
              {
                text: "Chiplun",
                link: "https://www.swiggy.com/city/chiplun",
              },
              {
                text: "Silvassa",
                link: "https://www.swiggy.com/city/silvassa",
              },
              {
                text: "Bapatla&Chirala",
                link: "https://www.swiggy.com/city/bapatla-and-chirala",
              },
              {
                text: "Lonavla",
                link: "https://www.swiggy.com/city/lonavla",
              },
              {
                text: "Bongaigaon",
                link: "https://www.swiggy.com/city/bongaigaon",
              },
              {
                text: "Golaghat",
                link: "https://www.swiggy.com/city/golaghat",
              },
              {
                text: "Duliajan",
                link: "https://www.swiggy.com/city/duliajan",
              },
              {
                text: "Ramnagar",
                link: "https://www.swiggy.com/city/ramnagar",
              },
              {
                text: "Bolpur",
                link: "https://www.swiggy.com/city/bolpur",
              },
              {
                text: "Madhubani",
                link: "https://www.swiggy.com/city/madhubani",
              },
              {
                text: "Balasore",
                link: "https://www.swiggy.com/city/balasore",
              },
              {
                text: "Palampur",
                link: "https://www.swiggy.com/city/palampur",
              },
              {
                text: "Kotdwar",
                link: "https://www.swiggy.com/city/kotdwar",
              },
              {
                text: "Koppal",
                link: "https://www.swiggy.com/city/koppal",
              },
              {
                text: "Chikhli",
                link: "https://www.swiggy.com/city/chikhli",
              },
              {
                text: "Dahanu",
                link: "https://www.swiggy.com/city/dahanu",
              },
              {
                text: "Itanagar",
                link: "https://www.swiggy.com/city/itanagar",
              },
              {
                text: "Rangpo",
                link: "https://www.swiggy.com/city/rangpo",
              },
              {
                text: "Aizawl",
                link: "https://www.swiggy.com/city/aizawl",
              },
              {
                text: "Gangtok",
                link: "https://www.swiggy.com/city/gangtok",
              },
              {
                text: "Mayiladuthurai",
                link: "https://www.swiggy.com/city/mayiladuthurai",
              },
              {
                text: "Kannauj",
                link: "https://www.swiggy.com/city/kannauj",
              },
              {
                text: "Cooch Behar",
                link: "https://www.swiggy.com/city/cooch-behar",
              },
              {
                text: "Jaigaon",
                link: "https://www.swiggy.com/city/jaigaon",
              },
              {
                text: "Palani",
                link: "https://www.swiggy.com/city/palani",
              },
              {
                text: "Bilimora",
                link: "https://www.swiggy.com/city/bilimora",
              },
              {
                text: "Udhampur",
                link: "https://www.swiggy.com/city/udhampur",
              },
              {
                text: "Boisar",
                link: "https://www.swiggy.com/city/boisar",
              },
              {
                text: "Kohima",
                link: "https://www.swiggy.com/city/kohima",
              },
              {
                text: "Naharlagun",
                link: "https://www.swiggy.com/city/naharlagun",
              },
              {
                text: "Dumka",
                link: "https://www.swiggy.com/city/dumka",
              },
              {
                text: "Rajsamand",
                link: "https://www.swiggy.com/city/rajsamand",
              },
              {
                text: "Gauriganj",
                link: "https://www.swiggy.com/city/gauriganj",
              },
              {
                text: "Bodinayakanur",
                link: "https://www.swiggy.com/city/bodinayakanur",
              },
              {
                text: "Bhawanipatna",
                link: "https://www.swiggy.com/city/bhawanipatna",
              },
              {
                text: "Baran",
                link: "https://www.swiggy.com/city/baran",
              },
              {
                text: "Narsinghpur",
                link: "https://www.swiggy.com/city/narsinghpur",
              },
              {
                text: "Uran Islampur",
                link: "https://www.swiggy.com/city/uran-islampur",
              },
              {
                text: "Kovilpatti",
                link: "https://www.swiggy.com/city/kovilpatti",
              },
              {
                text: "Kasaragod",
                link: "https://www.swiggy.com/city/kasaragod",
              },
              {
                text: "Pusad",
                link: "https://www.swiggy.com/city/pusad",
              },
              {
                text: "Kendujhar",
                link: "https://www.swiggy.com/city/kendujhar",
              },
              {
                text: "Manali",
                link: "https://www.swiggy.com/city/manali",
              },
              {
                text: "Diu",
                link: "https://www.swiggy.com/city/diu",
              },
              {
                text: "Khamgaon",
                link: "https://www.swiggy.com/city/khamgaon",
              },
              {
                text: "Ramanagara",
                link: "https://www.swiggy.com/city/ramanagara",
              },
              {
                text: "Alipurduar",
                link: "https://www.swiggy.com/city/alipurduar",
              },
              {
                text: "Almora",
                link: "https://www.swiggy.com/city/almora",
              },
              {
                text: "Jhargram",
                link: "https://www.swiggy.com/city/jhargram",
              },
              {
                text: "Arambagh",
                link: "https://www.swiggy.com/city/arambagh",
              },
              {
                text: "Bhadohi",
                link: "https://www.swiggy.com/city/bhadohi",
              },
              {
                text: "Tenkasi",
                link: "https://www.swiggy.com/city/tenkasi",
              },
              {
                text: "Srivilliputhur",
                link: "https://www.swiggy.com/city/srivilliputhur",
              },
              {
                text: "Chidambaram",
                link: "https://www.swiggy.com/city/chidambaram",
              },
              {
                text: "Rajgarh",
                link: "https://www.swiggy.com/city/rajgarh",
              },
              {
                text: "Pratapgarh",
                link: "https://www.swiggy.com/city/pratapgarh",
              },
              {
                text: "Washim",
                link: "https://www.swiggy.com/city/washim",
              },
              {
                text: "Mandi HP",
                link: "https://www.swiggy.com/city/mandi-hp",
              },
              {
                text: "Ranaghat",
                link: "https://www.swiggy.com/city/ranaghat",
              },
              {
                text: "Raghunathpur",
                link: "https://www.swiggy.com/city/raghunathpur",
              },
              {
                text: "Suri",
                link: "https://www.swiggy.com/city/suri",
              },
              {
                text: "Kadayanallur",
                link: "https://www.swiggy.com/city/kadayanallur",
              },
              {
                text: "Thiruvarur",
                link: "https://www.swiggy.com/city/thiruvarur",
              },
              {
                text: "Ranaghat-WB",
                link: "https://www.swiggy.com/city/ranaghat-wb",
              },
              {
                text: "Idukki",
                link: "https://www.swiggy.com/city/idukki",
              },
              {
                text: "Wayanad",
                link: "https://www.swiggy.com/city/wayanad",
              },
              {
                text: "Perambalur",
                link: "https://www.swiggy.com/city/perambalur",
              },
              {
                text: "Paramakudi",
                link: "https://www.swiggy.com/city/paramakudi",
              },
              {
                text: "Khopoli",
                link: "https://www.swiggy.com/city/khopoli",
              },
              {
                text: "Bela Pratapgarh",
                link: "https://www.swiggy.com/city/bela-pratapgarh",
              },
              {
                text: "Mahoba",
                link: "https://www.swiggy.com/city/mahoba",
              },
              {
                text: "Sitamarhi",
                link: "https://www.swiggy.com/city/sitamarhi",
              },
              {
                text: "Chakdaha",
                link: "https://www.swiggy.com/city/chakdaha",
              },
              {
                text: "Khalilabad",
                link: "https://www.swiggy.com/city/khalilabad",
              },
              {
                text: "Pattukkottai",
                link: "https://www.swiggy.com/city/pattukkottai",
              },
              {
                text: "Tindivanam",
                link: "https://www.swiggy.com/city/tindivanam",
              },
              {
                text: "Tiruttani",
                link: "https://www.swiggy.com/city/tiruttani",
              },
              {
                text: "Gangarampur",
                link: "https://www.swiggy.com/city/gangarampur",
              },
              {
                text: "Dharapuram",
                link: "https://www.swiggy.com/city/dharapuram",
              },
              {
                text: "Arakkonam",
                link: "https://www.swiggy.com/city/arakkonam",
              },
              {
                text: "Sirkali",
                link: "https://www.swiggy.com/city/sirkali",
              },
              {
                text: "Aruppukottai",
                link: "https://www.swiggy.com/city/aruppukottai",
              },
              {
                text: "Mettupalayam",
                link: "https://www.swiggy.com/city/mettupalayam",
              },
              {
                text: "Digboi",
                link: "https://www.swiggy.com/city/digboi",
              },
              {
                text: "Biswanath Chariali",
                link: "https://www.swiggy.com/city/biswanath-chariali",
              },
              {
                text: "Nalbari",
                link: "https://www.swiggy.com/city/nalbari",
              },
              {
                text: "Shirdi city",
                link: "https://www.swiggy.com/city/shirdi-city",
              },
              {
                text: "Mukerian",
                link: "https://www.swiggy.com/city/mukerian",
              },
              {
                text: "Hosur",
                link: "https://www.swiggy.com/city/hosur",
              },
              {
                text: "Palakollu",
                link: "https://www.swiggy.com/city/palakollu",
              },
              {
                text: "Amalapuram",
                link: "https://www.swiggy.com/city/amalapuram",
              },
              {
                text: "Ravulapalem",
                link: "https://www.swiggy.com/city/ravulapalem",
              },
              {
                text: "Narsipatnam",
                link: "https://www.swiggy.com/city/narsipatnam",
              },
              {
                text: "Barh",
                link: "https://www.swiggy.com/city/barh",
              },
              {
                text: "Palghar",
                link: "https://www.swiggy.com/city/palghar",
              },
              {
                text: "Shahdol",
                link: "https://www.swiggy.com/city/shahdol",
              },
              {
                text: "Kushalnagar",
                link: "https://www.swiggy.com/city/kushalnagar",
              },
              {
                text: "Dungarpur",
                link: "https://www.swiggy.com/city/dungarpur",
              },
              {
                text: "Chaibasa",
                link: "https://www.swiggy.com/city/chaibasa",
              },
              {
                text: "Haveri",
                link: "https://www.swiggy.com/city/haveri",
              },
              {
                text: "Karaikal",
                link: "https://www.swiggy.com/city/karaikal",
              },
              {
                text: "Jjajjar",
                link: "https://www.swiggy.com/city/jjajjar",
              },
              {
                text: "Kokrajhar",
                link: "https://www.swiggy.com/city/kokrajhar",
              },
              {
                text: "Rangia",
                link: "https://www.swiggy.com/city/rangia",
              },
              {
                text: "Hamirpur",
                link: "https://www.swiggy.com/city/hamirpur",
              },
              {
                text: "Una",
                link: "https://www.swiggy.com/city/una",
              },
              {
                text: "Sulthan Bathery",
                link: "https://www.swiggy.com/city/sulthan-bathery",
              },
              {
                text: "Rayagada",
                link: "https://www.swiggy.com/city/rayagada",
              },
              {
                text: "Paradeep",
                link: "https://www.swiggy.com/city/paradeep",
              },
              {
                text: "Mandapeta",
                link: "https://www.swiggy.com/city/mandapeta",
              },
              {
                text: "Jamui",
                link: "https://www.swiggy.com/city/jamui",
              },
              {
                text: "Pilkhuwa",
                link: "https://www.swiggy.com/city/pilkhuwa",
              },
              {
                text: "Parvathipuram",
                link: "https://www.swiggy.com/city/parvathipuram",
              },
              {
                text: "Ambajogai",
                link: "https://www.swiggy.com/city/ambajogai",
              },
              {
                text: "Araria",
                link: "https://www.swiggy.com/city/araria",
              },
              {
                text: "North Lakhimpur",
                link: "https://www.swiggy.com/city/north-lakhimpur",
              },
              {
                text: "Rajampet",
                link: "https://www.swiggy.com/city/rajampet",
              },
              {
                text: "Udumalaipettai",
                link: "https://www.swiggy.com/city/udumalaipettai",
              },
              {
                text: "Tirupattur",
                link: "https://www.swiggy.com/city/tirupattur",
              },
              {
                text: "Hojai",
                link: "https://www.swiggy.com/city/hojai",
              },
              {
                text: "Khagaria",
                link: "https://www.swiggy.com/city/khagaria",
              },
              {
                text: "Dasuya",
                link: "https://www.swiggy.com/city/dasuya",
              },
              {
                text: "Gudur",
                link: "https://www.swiggy.com/city/gudur",
              },
              {
                text: "Sullurpeta",
                link: "https://www.swiggy.com/city/sullurpeta",
              },
              {
                text: "Piler",
                link: "https://www.swiggy.com/city/piler",
              },
              {
                text: "SankaranKoil",
                link: "https://www.swiggy.com/city/sankarankoil",
              },
              {
                text: "Nabha",
                link: "https://www.swiggy.com/city/nabha",
              },
              {
                text: "LPU - Phagwara",
                link: "https://www.swiggy.com/city/lpu-phagwara",
              },
              {
                text: "Jangipur",
                link: "https://www.swiggy.com/city/jangipur",
              },
              {
                text: "Roha",
                link: "https://www.swiggy.com/city/roha",
              },
              {
                text: "Maharajganj",
                link: "https://www.swiggy.com/city/maharajganj",
              },
              {
                text: "Kallakurichi",
                link: "https://www.swiggy.com/city/kallakurichi",
              },
              {
                text: "Kalimpong",
                link: "https://www.swiggy.com/city/kalimpong",
              },
              {
                text: "Sundernagar",
                link: "https://www.swiggy.com/city/sundernagar",
              },
              {
                text: "Nawada",
                link: "https://www.swiggy.com/city/nawada",
              },
              {
                text: "Forbesganj",
                link: "https://www.swiggy.com/city/forbesganj",
              },
              {
                text: "Mokameh Khas",
                link: "https://www.swiggy.com/city/mokameh-khas",
              },
              {
                text: "Bazpur",
                link: "https://www.swiggy.com/city/bazpur",
              },
              {
                text: "Lakhisarai",
                link: "https://www.swiggy.com/city/lakhisarai",
              },
              {
                text: "Rameswaram",
                link: "https://www.swiggy.com/city/rameswaram",
              },
              {
                text: "Sahjanwa",
                link: "https://www.swiggy.com/city/sahjanwa",
              },
              {
                text: "Siddharthnagar",
                link: "https://www.swiggy.com/city/siddharthnagar",
              },
              {
                text: "Nanjangud",
                link: "https://www.swiggy.com/city/nanjangud",
              },
              {
                text: "Chamarajanagar",
                link: "https://www.swiggy.com/city/chamarajanagar",
              },
              {
                text: "Kurali",
                link: "https://www.swiggy.com/city/kurali",
              },
              {
                text: "Sundar Nagar",
                link: "https://www.swiggy.com/city/sundar-nagar",
              },
              {
                text: "Bobbili",
                link: "https://www.swiggy.com/city/bobbili",
              },
              {
                text: "Jangaon",
                link: "https://www.swiggy.com/city/jangaon",
              },
              {
                text: "Banswara",
                link: "https://www.swiggy.com/city/banswara",
              },
              {
                text: "Sundergarh",
                link: "https://www.swiggy.com/city/sundergarh",
              },
              {
                text: "Godda",
                link: "https://www.swiggy.com/city/godda",
              },
              {
                text: "Madhupur",
                link: "https://www.swiggy.com/city/madhupur",
              },
              {
                text: "Katwa",
                link: "https://www.swiggy.com/city/katwa",
              },
              {
                text: "Dhupguri",
                link: "https://www.swiggy.com/city/dhupguri",
              },
              {
                text: "Contai",
                link: "https://www.swiggy.com/city/contai",
              },
              {
                text: "Baramulla",
                link: "https://www.swiggy.com/city/baramulla",
              },
              {
                text: "Kangeyam",
                link: "https://www.swiggy.com/city/kangeyam",
              },
              {
                text: "Naugachia",
                link: "https://www.swiggy.com/city/naugachia",
              },
              {
                text: "Madhepura",
                link: "https://www.swiggy.com/city/madhepura",
              },
              {
                text: "Jamkhambhaliya",
                link: "https://www.swiggy.com/city/jamkhambhaliya",
              },
              {
                text: "Mundra",
                link: "https://www.swiggy.com/city/mundra",
              },
              {
                text: "Patan",
                link: "https://www.swiggy.com/city/patan",
              },
              {
                text: "Mahuva",
                link: "https://www.swiggy.com/city/mahuva",
              },
              {
                text: "Attur",
                link: "https://www.swiggy.com/city/attur",
              },
              {
                text: "Pen",
                link: "https://www.swiggy.com/city/pen",
              },
              {
                text: "Mandla",
                link: "https://www.swiggy.com/city/mandla",
              },
              {
                text: "Sidhi",
                link: "https://www.swiggy.com/city/sidhi",
              },
              {
                text: "Lakshadweep",
                link: "https://www.swiggy.com/city/lakshadweep",
              },
              {
                text: "Chitrakoot",
                link: "https://www.swiggy.com/city/chitrakoot",
              },
              {
                text: "Rajam",
                link: "https://www.swiggy.com/city/rajam",
              },
              {
                text: "Nippani",
                link: "https://www.swiggy.com/city/nippani",
              },
              {
                text: "Sankeshwar",
                link: "https://www.swiggy.com/city/sankeshwar",
              },
              {
                text: "Chikkodi",
                link: "https://www.swiggy.com/city/chikkodi",
              },
              {
                text: "Modasa",
                link: "https://www.swiggy.com/city/modasa",
              },
              {
                text: "Bavla",
                link: "https://www.swiggy.com/city/bavla",
              },
              {
                text: "Puttur_AP",
                link: "https://www.swiggy.com/city/puttur-ap",
              },
              {
                text: "Sinnar",
                link: "https://www.swiggy.com/city/sinnar",
              },
              {
                text: "singur",
                link: "https://www.swiggy.com/city/singur",
              },
              {
                text: "Nelamangala",
                link: "https://www.swiggy.com/city/nelamangala",
              },
              {
                text: "Srinagar Uttarakhand",
                link: "https://www.swiggy.com/city/srinagar-uttarakhand",
              },
              {
                text: "Dhampur",
                link: "https://www.swiggy.com/city/dhampur",
              },
            ],
            id: "footer_content",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.MetaContext",
            citySlug: "vizag",
            lat: "17.67740",
            lng: "83.20360",
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
            gandalfRequest:
              '{"sortAttribute":"relevance","isFiltered":false,"queryId":"seo-data-3095bb46-45db-412b-b55f-e424d990b589","seoParams":{"apiName":"FoodHomePage","brandId":"","seoUrl":"www.swiggy.com","pageType":"FOOD_HOME_PAGE","businessLine":"FOOD"}}',
            id: "meta_data",
            metaInfo: {
              pageType: "FOOD_HOME_PAGE",
              pageTitle:
                "Order Food Online from India's Best Food Delivery Service | Swiggy",
              pageMetaDescription:
                "Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, Delhi and more. Order Pizzas, Biryanis, from Swiggy.",
              pageKeywords:
                "Food delivery, Online food order, Online food dleivery",
            },
            screenType: "filteredCollection",
            seoParams: {
              apiName: "FoodHomePage",
              seoUrl: "www.swiggy.com",
              pageType: "FOOD_HOME_PAGE",
              businessLine: "FOOD",
            },
            pageContext: {
              citySlug: "vizag",
              cityName: "Vizag",
              pageType: "FOOD_HOME_PAGE",
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    cacheExpiryTime: 240,
    nextFetch: 1,
  },
  tid: "b4990dce-1cce-4e70-a413-e6bd74349b4e",
  sid: "qya5e4e52b2-3207-46e6-a61d-aab0124c8",
  deviceId: "26961404-cd6a-ba28-7de3-bb8b88e8969c",
  csrfToken: "A04ABcIbWnYq-hGECV2Sw4UobEitOmiJq3D-6jkY",
};
