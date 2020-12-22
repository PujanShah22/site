(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(7),r=t.n(i),o=(t(13),t(1)),s=t(2),c=t(4),m=t(3),u=t(5),h=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("img",{className:"mobile-img",src:"images/profilepic.png",alt:""}),l.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),p=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.png",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",{style:{color:"white"}},e.aboutme))))}}]),a}(n.Component),d=(t(15),function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",{style:{color:"rgb(120,120,120)"}},e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Technical Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h4",null,"Front-End"),l.a.createElement("div",null,l.a.createElement("ul",{className:"skills"},e.skills.frontEnd.map(function(e){return l.a.createElement("div",{style:{background:"linear-gradient(to right, #191654,#43C6AC)",alignContent:"center"},className:"front-end-item",key:e},e)}))),l.a.createElement("h4",null,"Back-End"),l.a.createElement("div",null,l.a.createElement("ul",{className:"skills"},e.skills.backEnd.map(function(e){return l.a.createElement("div",{style:{background:"linear-gradient(to right, #833AB4,#ec6ead  )",alignContent:"center"},className:"front-end-item",key:e},e)}))),l.a.createElement("h4",null,"Databases"),l.a.createElement("div",null,l.a.createElement("ul",{className:"skills"},e.skills.database.map(function(e){return l.a.createElement("div",{style:{background:"linear-gradient(to right,  #FF5F6D,#FF5F6D,#fcb045)",alignContent:"center"},className:"front-end-item",key:e},e)})),l.a.createElement("h4",null,"Payment Gateways"),l.a.createElement("div",null,l.a.createElement("ul",{className:"skills"},e.skills.payment.map(function(e){return l.a.createElement("div",{style:{background:"linear-gradient(to right,  #185a9d,#43cea2)",alignContent:"center"},className:"front-end-item",key:e},e)}))),l.a.createElement("h4",null,"Others"),l.a.createElement("div",null,l.a.createElement("ul",{className:"skills"},e.skills.others.map(function(e){return l.a.createElement("div",{style:{background:"linear-gradient(to right,  #00223e,#ffa17f)",alignContent:"center"},className:"front-end-item",key:e},e)})))))))}}]),a}(n.Component)),E=(n.Component,function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{style:{background:"rgba(0,0,0,0.7)"}},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,e.description),l.a.createElement("cite",null,e.name)))}))))," ")," ")," "),"  ")}}]),a}(n.Component)),f=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row "},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead",style:{color:"white"}},"Feel free to contact me for any work or suggestions on below"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"LinkedIn :"," "+e.linkedinId),l.a.createElement("h4",null,"Email : pujanshah22@gmail.com"),l.a.createElement("h4",null,"Phone No : +91-7383350424")))))}}]),a}(n.Component),g=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),v={imagebaseurl:"https://pujanshah22.github.io/site",name:"Pujan Shah",role:"React Native and MERN Stack Developer",linkedinId:"https://www.linkedin.com/in/pujan07",skypeid:"skype:pujanshahcena?chat",roleDescription:" I like to play with mathematical formulas to develop a better product along with learning about new technologies or simply play chess in my free time.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/pujan07",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/pujanshah22",className:"fa fa-github"}],aboutme:"I am currently working as an expert React Native and MERN Stack Developer. I like to dive deeper into future technologies. I take the challenges with the belief that everything is possible and you're the only one who can do this. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.",address:"India",website:"https://pujanshah22.github.io/site",education:[{UniversityName:"SAL Institute of Technology and Engineering Research",specialization:"Computer Engineering",MonthOfPassing:"2013 - ",YearOfPassing:"2017"},{UniversityName:"Vijayanager School - GSEB",specialization:"Science A group",MonthOfPassing:"",YearOfPassing:"2013"}],work:[{CompanyName:"Razorpay",specialization:"Software Engineer",MonthOfLeaving:"Oct 2020 - ",YearOfLeaving:"Present",Achievements:"First time, I have joined Product based company and I can say it's best experience of my career so far. I have a zone of smart people who are always active for deep conversations. I got a chance to experience responsibity of real customers and that's what helping me to build quality product."},{CompanyName:"Technostacks InfoTech Pvt Ltd",specialization:"React Native & MERN Stack Developer",MonthOfLeaving:"Sep 2018 - ",YearOfLeaving:"Oct 2020",Achievements:"I was leading the team of React Native along with working on React Native, React JS and Node JS projects. I also handled client communication and requirements gathering for projects. I got a chance to work for an onsite project in ex-Google Developers's company. "},{CompanyName:"Praxinfo",specialization:"React Native & Native Android Developer",MonthOfLeaving:"Apr 2017 - ",YearOfLeaving:"Sep 2018",Achievements:"I was a junior developer in Praxinfo but never felt like junior. Here, I always got a chance to share my point of view on the requirement. As a team, we got so many achievements in challenging projects."},{CompanyName:"Tops Technology",specialization:"Android Trainee",MonthOfLeaving:"June 2016 - ",YearOfLeaving:"Mar 2017",Achievements:"I was working here as an android trainee. I made my basics powerful in this company. Along with training, my senior team helped me to learn php for the backend."}],skillsDescription:"Your skills here",skills:{frontEnd:["React Native","React JS","JSX","Javascript","TypeScript","Hooks","ECMAScript","CSS","SASS","Redux","Redux-Saga","Redux-Thunk","BootStrap","React-Navigation","XML","Native Android","iOS","java"],backEnd:["Node JS","Express JS","Mongoose","Heroku","AWS","Firebase","GraphQL"],database:["MongoDB","NoSQL","MySQL","Firebase Cloud Firestore","Real Time Database","AWS","SQLite","Realm"],payment:["Stripe","Cahsfree","Razorpay","Bluesnap","Paypal"],others:["Augmented Reality","AWS-IoT","MQTT","BLE","WIFI Connection","Smart-Config","Socket IO","Image Recognition"]},portfolio:[{name:"project1",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"},{name:"project2",description:"mobileapp",imgurl:"images/portfolio/project.jpg"},{name:"project3",description:"mobileapp",imgurl:"images/portfolio/project2.png"},{name:"project4",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"}],testimonials:[{description:"Pujan finds a way to weather any storm with a smile. No matter how complex the problem is, he always comes up with a brilliant and cost-effective solution. He is a truly remarkable individual.",name:"Mentor"},{description:"'Age is just a number' is a suitable quote for him. He has gained so much knowledge in a very young age. I've had the opportunity of knowing Pujan for the past. Broad-minded Developer - his exceptional work flow, skills, ingenuity and knowledge of change requests made the project a dream. Loyal, insightful and independent. He showed a high level of React native technical skills and was a valuable contributor to our projects. Pujan possesses a winning combination of solid tech skills and business sense, I learned a great deal from him. I certainly would recommend him as React Native Developer.",name:"Senior colleague"}]},b=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{resumeData:v}),l.a.createElement(p,{resumeData:v}),l.a.createElement(d,{resumeData:v}),l.a.createElement(E,{resumeData:v}),l.a.createElement(f,{resumeData:v}),l.a.createElement(g,{resumeData:v}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.65eab791.chunk.js.map