const frameworks = [
    {
            "gender": "female",
            "name": {
              "title": "Miss",
              "first": "Jennie",
              "last": "Nichols"
            },
            "location": {
              "street": {
                "number": 8929,
                "name": "Valwood Pkwy",
              },
              "city": "Billings",
              "state": "Michigan",
              "country": "United States",
              "postcode": "63104",
              "coordinates": {
                "latitude": "-69.8246",
                "longitude": "134.8719"
              },
              "antecedentes": {
                "offset": "+9:30",
                "description": "Adelaide, Darwin"
              }
            },
            "email": "jennie.nichols@example.com",
            "login": {
              "a1": "Año 1992",
              "a2": "Año 2010",
              "a3": "Año 2012",
              "a4": "Año 2014",
              "a5": "Año 2020",
              "a6": "Año 2022",
              "sha256": "Lorem ipsum  saepe necessitatibus eaque qui iusto, blanditiis voluptatem ."
            },
            "dob": {
              "date": "1992-03-08T15:13:16.688Z",
              "age": 30
            },
            "registered": {
              "date": "2007-07-09T05:51:59.390Z",
              "age": 14
            },
            "phone": "(272) 790-0888",
            "cell": "(489) 330-2385",
            "id": {
              "name": "SSN",
              "value": "405-88-3636"
            },
            "picture": {
              "large": "https://randomuser.me/api/portraits/men/75.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
            },
            "nat": "US"
          }
    ];
    var html = " ";
    frameworks.forEach (e => {
        html +="<div> <div><h1>"+e.name.title+ " "+ e.name.first + " " +e.name.last +" </h1> </div> </div>"
    })
    names.innerHTML = html
    
    var html = " ";
    frameworks.forEach (e => {
        html +="<div> <div><h3> "+e.phone+ " </h3> </div> </div>"
        html +="<div> <div><h3> "+ e.cell + " </h3> </div> </div>"
        html +="<div> <div><h3> "+e.email+ " </h3> </div> </div>"
    })
    banner_tex1.innerHTML = html

    var html3 = " ";
    frameworks.forEach (e => {
        html3 +="<div class= 'child' > <div class= 'content'><h2>"+e.login.a1 +" </h2> <p>"+e.login.sha256 +"</p></div> </div>"
        html3 +="<div class= 'child' > <div class= 'content'><h2>"+e.login.a2+ "  </h2> <p> "+e.login.sha256+ " </p></div> </div>"
        html3 +="<div class= 'child' > <div class= 'content'><h2>"+e.login.a3+ " </h2> <p> "+e.login.sha256+ "  </p></div> </div>"
        html3 +="<div class= 'child' > <div class= 'content'><h2>"+e.login.a4+ " </h2> <p> "+e.login.sha256+ "  </p></div> </div>"
        html3 +="<div class= 'child' > <div class= 'content'><h2>"+e.login.a5+ " </h2> <p> "+e.login.sha256+ "  </p></div> </div>"
        html3 +="<div class= 'child' > <div class= 'content'><h2>"+e.login.a6+ " </h2> <p> "+e.login.sha256+ "  </p></div> </div>"
    })
    timeline.innerHTML = html3

    function contratar (nombre,mail){
      console.log ("hola soy" + nombre + " " + mail);
      var botton = document.getElementsByClassName("botton_empezar");
      alert("hola soy," + " " + nombre + " " + ",muchas gracias por querer contratar mis servicios para esto por favor contactar por via mail al" + " " + mail)
    }

    //botton up scroll
    document.getElementById("button-up").addEventListener("click", scrollUp);

    function scrollUp(){
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 15));
      }
    }