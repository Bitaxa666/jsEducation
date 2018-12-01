// function Blog(body, date) {
// 	this.body = body;
// 	this.date = date;

// 	this.toString = function() {
// 		return "[" + (this.date.getMonth()+1) + "/" + this.date.getDate() + "/" +
// 			this.date.getFullYear() + "] " + this.body;
// 	};

// 	this.toHTML = function(highlight) {
// 		var blogHTML = "";
// 		blogHTML += highlight ? "<p style=background-color:#d2dff4>" : "<p>";

// 		blogHTML +="<strong>" + (this.date.getMonth()+1) + "/" + this.date.getDate() + "/" +
// 			this.date.getFullYear() + "</strong><br />" + this.body + "</p>";

// 		return blogHTML;
// 	};
// 	this.containsText = function(text) {
// 		return (this.body.toLowerCase().indexOf(text.toLowerCase()) != -1);
// 	};
// }

var blog = [new Blog("GOt the new cube I ordered..", new Date("08/14/2018")),
			new Blog("Solved the new cube but ofcourse..", new Date("08/19/2018")),
			new Blog("Managed to get a headache toiling..", new Date("08/16/2018")),
			new Blog("Managed new news", new Date("08/27/2018"), "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/p200x200/45474974_1384063911729934_2078027584372736000_n.jpg?_nc_cat=111&_nc_ht=scontent-waw1-1.xx&oh=87c2f2fa8a13b17bd9f4957bf17df964&oe=5C6D95FD"),
			new Blog("Found a 7*7*7 cube for sale..", new Date("08/23/2018"))];

// Global array of blog entries
//var blog = new Array();
Date.prototype.shortFormat = function(){
	return (this.getMonth()+1) + "/" + this.getDate() + "/" +
		this.getFullYear();
};
//wait https://raw.githubusercontent.com/KJlmfe/-Head-First-JavaScript-/master/ch12/wait.gif

//show the list of blog
function showBlog(numEntries) {
	//Function that sort all blogs
	blog.sort(function(blog1, blog2) {
		return blog2.date - blog1.date;
	});
	//New sorted 
	blog.sort(Blog.blogSorter);
	//Выбираем число записей что бы его показать
	if(!numEntries)
		numEntries = blog.length;
	//Цикл показа записей
	var i = 0, blogListHTML = "";
	while (i < blog.length && i < numEntries) {
		blogListHTML += blog[i].toHTML(i%2==0);
		i++;
	}
		//HTML блога на странице
	document.getElementById("blog").innerHTML = blogListHTML;
}

function searchBlog(){
	var searchText = document.getElementById("searchtext").value;
	for(var i = 0; i < blog.length;i++){
		if(blog[i].containsText(searchText)){
			alert(blog[i]);
			break;
		}
	}
	//Если строка не обнаружена
	if(i == blog.length)
		alert("Sorry, there are no blog entries containing the search text")
}	
//Отображаем случайную запись
function randomBlog() {
	var i = Math.floor(Math.random() * blog.length);
	alert(blog[i]);
}

//***With class
//как это создаетс только одна копия. так как для каждого и так создается свои методы для реализации обьекта?????
function Blog(body, date, image) {
	this.body = body;
	this.date = date;
	this.image = image;
	//this.signature = "Puzzler Ruby"; - чем бы отличалась такая реализация
}
//как это свойства классов и разница между свойствами обьекта созданых через  как выше через this.
Blog.prototype.signature = "Puzzler Ruby";
	// Blog.prototype.signature = "by" + getText(xmlData.getElementByTagName("author")[0]);
//возвращаем строковое представление записи блога
Blog.prototype.toString = function() {
	return "[" + (this.date.getMonth()+1) + "/" + this.date.getDate() + "/" +
			this.date.getFullYear() + "] " + this.body;
};
Blog.prototype.toHTML = function(highlight) {
	var blogHTML = "";
	blogHTML += highlight ? "<p style=background-color:#d2dff4>" : "<p>";
	if(this.image) {
		blogHTML += "<div style=background-color:#d2dff4>" + "<strong>" + this.date.shortFormat() + 
		"</strong><br /><table><tr><td><image src = '" + this.image +
		"'/></td><td style = 'vertical-align:top'>" + this.body + "</td></tr></table><em>" +
		this.signature + "</em></p></div>";
	} else {
		blogHTML += "<strong>" + this.date.shortFormat() + "</strong><br />" + this.body + 
		"<br /><em>" + this.signature + "</em></p>";
	}
	// blogHTML += highlight ? "<p style=background-color:#d2dff4>" : "<p>";

	// blogHTML +="<strong>" + (this.date.getMonth()+1) + "/" + this.date.getDate() + "/" +
	// 	this.date.getFullYear() + "</strong><br />" + this.body + "<br /><em>" + this.signature +
	// 	"</em></p>";
	return blogHTML;	
};
Blog.prototype.containsText = function(text) {
	return (this.body.toLowerCase().indexOf(text.toLowerCase()) != -1);
};
Blog.blogSorter = function(blog1, blog2) {
	return blog2.date - blog1.date;
};

//var ajaxReq = new AjaxRequest();
// AjaxRequest.prototype.send = function (type, url, handler, postDataType, postData) {
// 	if(this.request != null) {
// 		//удаление предыдущих значений
// 		this.request.abort();

// 		//добавим параметр dummy для переписывания кэша браузера
// 		url += "?dummy=" + new Date().getTime();
// 		try{
// 			this.request.onreadystatechange = handler;
// 			this.request.open(type, url, true);
// 			if(type.toLowerCase() == "get") {
// 				//send GET request
// 				this.request.send(null);
// 			} else {
// 				//send POST method
// 				this.request.setRequestHandler("Content-Type", postDataType);
// 				this.request.send(postData);
// 			}
// 		} catch (e) {
// 			alert("Ajax error communicating with the server.n" + "Details: " + e)
// 		}
// 	}
// }

// function handlerRequest() {
// 	if(ajaxReq.getReadyState() == 4 && ajaxReq.getStatus() == 200) {
// 		//result is saved
// 		var xmlData = ajaxReq.getResponseXML().getElementByTagName("blog")[0];

// 		Blog.prototype.signature = "by" + getText(xmlData.getElementByTagName("author")[0]);

// 		var entries = xmlData.getElementByTagName("entry");
// 		for (var i = 0; i< entries.length; i++) {
// 			blog.push(new Blog(getText(entries[i].getElementByTagName("body")[0]),
// 				new Date(getText(entries[i].getElementByTagName("date")[0])),
// 				getText(entries[i].getElementByTagName("image")[0])));
// 		}
// 		 // Enable the blog buttons
//           document.getElementById("search").disabled = false;
//           document.getElementById("showall").disabled = false;
//           document.getElementById("viewrandom").disabled = false;

// 		showBlog(5);
// 	}
// }
 // // Global array of blog entries
 //  var blog = new Array();
 //  // Global Ajax request
 //  var ajaxReq = new AjaxRequest();
 //  // Load the blog from an XML doc on the server using Ajax
 //  function loadBlog() {
 //    document.getElementById("blog").innerHTML = "<img src='wait.gif' alt='Loading...' />";
 //    ajaxReq.send("GET", "blog.xml", handleRequest);
 //  }
// Load the blog from an XML doc on the server using Ajax
  function loadBlog() {
    document.getElementById("blog").innerHTML = "<img src='https://raw.githubusercontent.com/KJlmfe/-Head-First-JavaScript-/master/ch12/wait.gif' alt='Loading...' />";
    //ajaxReq.send("GET", "blog.xml", handlerRequest);
    ajaxReq.send("GET", "blog.xml", function() {
    	 if (ajaxReq.getReadyState() == 4 && ajaxReq.getStatus() == 200) {
          // Store the XML response data
          var xmlData = ajaxReq.getResponseXML().getElementsByTagName("blog")[0];
          // Set the blog-wide signature
          Blog.prototype.signature = "by " + getText(xmlData.getElementsByTagName("author")[0]);
          // Create the array of Blog entry objects
          var entries = xmlData.getElementsByTagName("entry");
          for (var i = 0; i < entries.length; i++) {
            // Create the blog entry
            blog.push(new Blog(getText(entries[i].getElementsByTagName("body")[0]),
              new Date(getText(entries[i].getElementsByTagName("date")[0])),
              getText(entries[i].getElementsByTagName("image")[0])));
          }
          // Enable the blog buttons
          document.getElementById("search").disabled = false;
          document.getElementById("showall").disabled = false;
          document.getElementById("viewrandom").disabled = false;
          // Show the blog
          showBlog(5);
        }
    });
  }

// ajaxReq.send("GET", "blog.xml", handlerRequest);
// Handle the Ajax request
      // function handleRequest() {
      //   if (ajaxReq.getReadyState() == 4 && ajaxReq.getStatus() == 200) {
      //     // Store the XML response data
      //     var xmlData = ajaxReq.getResponseXML().getElementsByTagName("blog")[0];
      //     // Set the blog-wide signature
      //     Blog.prototype.signature = "by " + getText(xmlData.getElementsByTagName("author")[0]);
      //     // Create the array of Blog entry objects
      //     var entries = xmlData.getElementsByTagName("entry");
      //     for (var i = 0; i < entries.length; i++) {
      //       // Create the blog entry
      //       blog.push(new Blog(getText(entries[i].getElementsByTagName("body")[0]),
      //         new Date(getText(entries[i].getElementsByTagName("date")[0])),
      //         getText(entries[i].getElementsByTagName("image")[0])));
      //     }
      //     // Enable the blog buttons
      //     document.getElementById("search").disabled = false;
      //     document.getElementById("showall").disabled = false;
      //     document.getElementById("viewrandom").disabled = false;
      //     // Show the blog
      //     showBlog(5);
      //   }
      // }


// // Get the text content of an HTML element
//   function getText(elem) {
//     var text = "";
//     if (elem) {
//       if (elem.childNodes) {
//         for (var i = 0; i < elem.childNodes.length; i++) {
//           var child = elem.childNodes[i];
//           if (child.nodeValue)
//             text += child.nodeValue;
//           else {
//             if (child.childNodes[0])
//               if (child.childNodes[0].nodeValue)
//                 text += child.childNodes[0].nodeValue;
//           }
//         }
//       }
//     }
//     return text;
//   }
