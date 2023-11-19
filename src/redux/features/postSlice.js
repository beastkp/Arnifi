import { createSlice} from "@reduxjs/toolkit";

const posts = [
  {
    username: "john_doe",
    postUrl:
      "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: "120",
    comments: 25,
    profileUrl:
      "https://i.pinimg.com/736x/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
    time: "3 days ago",
    caption: "Describe this art in one line!!!",
  },
  {
    username: "sarah_smith",
    postUrl:
      "https://www.kcrw.com/news/shows/press-play-with-madeleine-brand/tech-job-cuts-scientology-trials-ev-random-novel/@@images/rectangular_image/page-header?v=1668558373.12",
    likes: 80,
    comments: 15,
    profileUrl:
      "https://r2.starryai.com/results/1005156662/01ea57ea-66bd-4bed-a467-11bbdedb43ea.webp",
    time: "1 days ago",
    caption: "My Idol .",
  },
  {
    username: "alex_jones",
    postUrl:
      "https://as2.ftcdn.net/v2/jpg/02/42/52/27/1000_F_242522709_ZhoDmO1L1PHkL6yvVVNutSBGsk1Ob7m0.jpg",
    likes: 150,
    comments: 30,
    profileUrl: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
    time: "10 days ago",
    caption: "Lost at sea, found in tranquility. 🌊🚤 #SeaEscape",
  },
  {
    username: "emily_martin",
    postUrl:
      "https://as1.ftcdn.net/v2/jpg/06/70/25/18/1000_F_670251827_2isc69VP4Gur97l9oGXFPksSUqbpsA7G.jpg",
    likes: 200,
    comments: 40,
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo1wFPY-KJ6VaUDpRpPFwRSfdqC6OLJjfP8u3hKOGM&s",
    time: "5 days ago",
    caption: "Adventures await! 🌄 #AdventureTime #ExploreMore",
  },
  {
    username: "chris_wilson",
    postUrl:
      "https://as1.ftcdn.net/v2/jpg/06/67/02/30/1000_F_667023041_iBzCfT8NW96CP8lbfx2IId6qUwsWGlAt.jpg",
    likes: 90,
    comments: 18,
    profileUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9sZCUyMG1hbiUyMGhhcHB5fGVufDB8fDB8fHww",
    time: "7 days ago",
    caption: "Chasing dreams and making memories. ✨ #Dreamer #Memories",
  },
  {
    username: "laura_jackson",
    postUrl:
      "https://as1.ftcdn.net/v2/jpg/00/91/25/14/1000_F_91251491_Ag8YDXDjOoHkBnIUu5eeroWLD2of9CU9.jpg",
    likes: 110,
    comments: 22,
    profileUrl: "https://example.com/profile/laura_jackson.jpg",
    time: "8 days ago",
  },
  {
    username: "david_smith",
    postUrl:
      "https://as1.ftcdn.net/v2/jpg/02/87/90/92/1000_F_287909239_K8bMpb0M9oUyOI8zrdqpKPQnIlC73WfD.jpg",
    likes: 180,
    comments: 35,
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSInRctnwsWgbUnffJAZcDjg3bw3eqNfQDdKGfQTLc&s",
    time: "7 days ago",
    caption: "Capturing the beauty of the moment. 📸 #PhotographyLove",
  },
  {
    username: "olivia_miller",
    postUrl:
      "https://as1.ftcdn.net/v2/jpg/02/31/28/68/1000_F_231286877_EmPbB8z2wnO4xZMOvuqyp3H2VzZQvOOz.jpg",
    likes: 250,
    comments: 50,
    profileUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    time: "8 days ago",
    caption: "Exploring the wonders of nature. 🍃 #NatureLover",
  },
  {
    username: "william_brown",
    postUrl:
      "https://as2.ftcdn.net/v2/jpg/06/78/09/79/1000_F_678097943_NlT90fmHVBtxumg8ywj3psBJO1feSKgr.jpg",
    likes: 130,
    comments: 27,
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWkA3X9cdGn3tggpvy_hnWe0QmRZW-DjwHw",
    time: "8 days ago",
    caption: "Sunset views and peaceful moments. 🌅 #Sunset #Peaceful",
  },
  {
    username: "natalie_taylor",
    postUrl:
      "https://as1.ftcdn.net/v2/jpg/05/20/94/96/1000_F_520949697_A516WGpnTNxDzTrcnqRXGJLwTsAOjBQE.jpg",
    likes: 300,
    comments: 60,
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz3CHeYb6AVpEH1AgUdlK20Kr3z6sUSAQjCw",
    time: "5 days ago",
  },
  {
    username: "michael_clark",
    postUrl:
      "https://as2.ftcdn.net/v2/jpg/02/00/18/63/1000_F_200186355_7nr90ZprwamoaQu8d2aJt63AO1VOCQdA.jpg",
    likes: 150,
    comments: 28,
    profileUrl:
      "https://img.freepik.com/free-photo/emotional-young-male-with-blue-shirt-standing-gate-with-slight-smile-his-face_181624-27994.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699660800&semt=ais",
    time: "6 days ago",
    caption:
      "Creating liquid masterpieces for the spirited souls. 🍹🎨 #DrinkArt",
  },
  {
    username: "emma_white",
    postUrl:
      "https://www.doubledtrailers.com/assets/images/random%20horse%20facts%20shareable.png",
    likes: 220,
    comments: 45,
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgtHcWBvV-932MBcvgRQ8yIGvV2XcNfUXlu3D5b11lW9PidQITDfrrQm4FB-nMUbyBUMw",
    time: "3 days ago",
    caption: "Exploring nature's beauty. 🌿 #Nature #Adventure",
  },
  {
    username: "ryan_cooper",
    postUrl:
      "https://as2.ftcdn.net/v2/jpg/00/25/60/11/1000_F_25601142_onomHL7NVvrtntSxWjNeFxJln5vDU8A8.jpg",
    likes: 170,
    comments: 32,
    profileUrl:
      "https://image1.masterfile.com/getImage/NjAwLTAxNjA2MjEwZW4uMDAwMDAwMDA=AHfKuL/600-01606210en_Masterfile.jpg",
    time: "6 days ago",
    caption: "Sunshine and smiles. ☀️😊 #HappyDays",
  },
  {
    username: "jessica_hall",
    postUrl:
      "https://as1.ftcdn.net/v2/jpg/01/02/85/24/1000_F_102852489_kcqR4mDpm1KYWyAfI3tiQ5jBU7dVclbD.jpg",
    likes: 120,
    comments: 24,
    profileUrl:
      "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzT3o1RDJSQU1JSXx8ZW58MHx8fHx8&w=1000&q=80",
    time: "6 days ago",
    caption: "City vibes and coffee breaks. ☕🏙️ #CityLife #CoffeeLover",
  },
  {
    username: "daniel_smith",
    postUrl:
      "https://as1.ftcdn.net/v2/jpg/06/22/29/64/1000_F_622296490_CUvY0HeKMuybjWZDo3p3QdvBB1Mew3Iy.jpg",
    likes: 260,
    comments: 55,
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu0A2jgdrl742CxZBGif9VD8CwYO_d6sObsuCQ3PbZSWSDOG417GYAogJkpJ1TZWWnw4k",
    time: "1 days ago",
  },
];

const initialState = {
    posts:posts
}