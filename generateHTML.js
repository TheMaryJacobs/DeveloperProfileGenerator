const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

// function generateHTML(data) {
//   return 
let html =`<!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=Bebas+Neue|Comfortaa&display=swap" rel="stylesheet">
        <title>GitHub Profile</title>
        <style>
            @page {
              margin: 0;
            }
           *,
           *::after,
           *::before {
           box-sizing: border-box;
           }
           html, body {
           padding: 0;
           margin: 0;
           }
           html, body, .wrapper {
           height: 100%;
           }
           .wrapper {
           background-color: salmon;
           padding-top: 100px;
           }
           body {
           background-color: white;
           -webkit-print-color-adjust: exact !important;
           font-family: 'Comfortaa', sans-serif;
           }
           main {
           background-color: #E9EDEE;
           height: auto;
           padding-top: 30px;
           }
           h1, h2, h3, h4, h5, h6 {
           font-family: 'Bebas Neue', serif;
           margin: 0;
           }
           h1 {
           font-size: 3em;
           }
           h2 {
           font-size: 2.5em;
           }
           h3 {
           font-size: 2em;
           }
           h4 {
           font-size: 1.5em;
           }
           h5 {
           font-size: 1.3em;
           }
           h6 {
           font-size: 1.2em;
           }
           .photo-header {
           position: relative;
           margin: 0 auto;
           margin-bottom: -50px;
           display: flex;
           justify-content: center;
           flex-wrap: wrap;
           background-color: salmon;
           color: black;
           padding: 10px;
           width: 95%;
           border-radius: 6px;
           }
           .photo-header img {
           width: 250px;
           height: 250px;
           border-radius: 50%;
           object-fit: cover;
           margin-top: -75px;
           border: 6px solid black;
           box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
           }
           .photo-header h1, .photo-header h2 {
           width: 100%;
           text-align: center;
           }
           .photo-header h1 {
           margin-top: 10px;
           }
           .links-nav {
           width: 100%;
           text-align: center;
           padding: 20px 0;
           font-size: 1.1em;
           }
           .nav-link {
           display: inline-block;
           margin: 5px 10px;
           }
           .workExp-date {
           font-style: italic;
           font-size: .7em;
           text-align: right;
           margin-top: 10px;
           }
           .container {
           padding: 50px;
           padding-left: 100px;
           padding-right: 100px;
           }
  
           .row {
             display: flex;
             flex-wrap: wrap;
             justify-content: space-between;
             margin-top: 20px;
             margin-bottom: 20px;
           }
  
           .card {
             padding: 20px;
             border-radius: 6px;
             background-color: b;
             color: white;
             margin: 20px;
           }
           
           .col {
           flex: 1;
           text-align: center;
           }
  
           a, a:hover {
           text-decoration: none;
           color: inherit;
           font-weight: bold;
           }
  
           @media print { 
            body { 
              zoom: .75; 
            } 
           }
        </style>
            <body>
  
                  <div class="wrapper">
                       <div class="photo-header">
                         <img id="profileimage" class="photo-header img" src ="${feedback.avatar}">
                         <h1 class= "photo-header h1">Hi!</h1>
                         <h1 class ="photo-header h1" id = "username">My name is ${feedback.name}</h1>
                  </div>
                  <div class = "links-nav">
                      <a href= "" class = "link-nav"></a>
                      <a href = "${feedback.profile}" id = "profilelink" class = "nav-link"></a>
                 </div>
                  
                  <div class="container">
                      <div class="row">
                        <div class="col">
                          <h2 class="" id="bio">$${feedback.bio}</h2>
                        </div>
                      </div>
                  </div>
                  
                  <div class = "container">
                    <div class = "row">
                        <div class = "col">
                          <div class = "card">
                            <h1>Public Repos</h1>
                            <h1>${feedback.repos}</h1>
                          </div>
                      </div>
                      <div class = "col">
                        <div class = "card">
                          <h1>Followers</h1>
                          <h1>${feedback.followers}</h1>
                        </div>
                      </div>
                    </div>
                    <div class = "row">
                      <div class = "col">
                        <div class = "card">
                          <h1>Following</h1>
                          <h1>${feedback.following}</h1>
                        </div>
                      </div>
                        <div class = "col">
                          <div class = "card">
                            <h1>GitHub Stars</h1>
                            <h1>${feedback.stars}</h1>
                          </div>
                      </div>
                    </div>
                  </div>
          </div>
                
                  <script src = "index.js"></script>
                  <script type="text/javascript" src="generateHTML.js"></script>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js" integrity="sha256-S1J4GVHHDMiirir9qsXWc8ZWw74PHHafpsHp5PXtjTs=" crossorigin="anonymous"></script>
                  </body>
                  </html>`


