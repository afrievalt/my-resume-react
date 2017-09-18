/*global it expect*/
import { getAllIds } from "./select-employment-history"

const employmentHistory_byId  = {
	"dlss": {
		"dates": "Feb. 2017 - Jun. 2017",
		"title": "React JavaScript Software Engineer",
		"name": "Dohmen Life Science Services",
		"description": "Implement the most complex parts of the system based on minimal requirements. Quickly flushed out requirements and designed responsive screens for warehouse staff to quickly process their work.  Created reusable controls for screen composability.  Advised coworkers on react / redux and ES6 best practices.  Implemented immutable reducers and impotent selectors using true TDD.  Created visual studio code code snippets to improve development speed and accuracy.  Updated webpack to simplify module importing.",
		"skills": "JavaScript, React, Redux, Typescript, es6, babble, webpack, thunks, async await, Less, css, responsive web, BEM, VS 2017, .Net, C#, signalr, agile, git",
		"img": "https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/6/005/081/1e3/0b7065e.png",
		"endDate": 201706
	},
	"nm": {
		"dates": "Feb. 2013 - Jan. 2017",
		"title": "Frontend architect and Sr. Developer",
		"name": "Northwestern Mutual",
		"description": "We traveled to our Seattle office to design an add-on to Posting+. Working closely with that office, we were able to rapidly breakdown a complex and confusing process. After building different workflows, we were able to respond to feedback and quickly deliver a solution. New FRs now require less training and have less compliance issues increasing FR retention. All FRs are able to service more clients by spending less time on paper work.",
		"img": "https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/8/005/0b0/3a8/2739923.png",
		"skills": "Ionic, jQuery, knockout, moment, require, jasmine, grunt, node, phone gap, squire, Agile, Asp.net web api, C#, MS Dynamics, web-essentials, resharper, vs 2013, tfs, iPhone, android",
		"endDate": 201701
	},
	"hd": {
		"dates": "Aug. 2012 - Feb. 2013",
		"title": "Senior Software Engineer",
		"name": "Hanson Dodge Creative",
		"description": "Hanson Dodge Creative has been assisting brands to reach new audiences, embrace emerging technologies and distinguish themselves as market leaders. As a scrum team member, I have created international components for both marketing and e-commerce websites that work with CMS",
		"img": "https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAUNAAAAJDQ1ZDM2NTY4LTM0N2YtNGM2Mi1iN2JmLTQyYzc5ODQ3ODAxZA.png",
		"skills": "Sitecore CMS, javascript, jsLint, jQuery, SOLID, C#, .Net 3.5, ASP.NET MVC, SQL server, LINQ, Visual Studio 2010, CSS3, L10n / I18n",
		"endDate": 201302
	},
	"jci": {
		"dates": "Jul. 2010 - Apr 2012",
		"title": "Sr. Software Engineer",
		"name": "Johnson Controls",
		"description": "Worked on a portal web application that allows buildings to run more efficient. As a member of JCI’s first scrum team I helped create the definition of done. Designed and developed dashboard management system involving drag and drop. Implemented user controls and jquery plugins used across multiple applications",
		"img": "https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/2/000/05e/074/080b1e3.png",
		"skills": "C#, .Net 3.5, WCF, ASP.NET, MVC/MVP, SQL server, LINQ, DNN, TDD, unit tests with rhino mocks,  Visual Studio 2010, Resharper 6, Postsharp , Xss library, Scrum, IOC, YUI, YQL, Modernizer, jQuery, jQuery UI, jQuery plugins, YUI, YQL, Modernizer",
		"endDate": 201204
	},
	"lf": {
		"dates": "Sep. 2008 - Jul. 2009",
		"title": "Usability Specialist",
		"name": "Life Photos",
		"description": "Designed user interface. Created UI test scenarios and administered usability testing with Morae. Redesigned time consuming process reducing cost of interaction by 70%. Created screen mock ups and use cases. Conducted paper-prototypes, card sorts and personas to help discover optimal option order for product creation. Created silverlight prototype to test different methods to rapidly tagging photos. Synet Media hosts several photo sharing and print service web sites.",
		"skills": "GUI, Morea Silverlight, ASP.NET, C#, Photoshop, Visual Studio, Expression Blend, Use Cases, Paper-prototyping",
		"img": "https://media.licdn.com/mpr/mpr/shrink_100_100/p/5/005/04a/031/1414336.png",
		"endDate": 200907
	},
	"qti": {
		"dates": "Oct. 2007 - Apr. 2008, Feb. 2005 - Apr. 2005, Dec 1998 - Jun 2001",
		"title": "Senior Software Engineer",
		"name": "QuadTech",
		"description": "Designed several Active X controls used across multiple applications that work well with touch screens. Designed and developed user interface for the register guidance system and ribbon control system using Visual C++ and MFC. Designed and implemented a system for exchanging data between the ActiveX controls and the job object. The system is similar to MFC's DDX functions, but also facilitates displaying and modifying data when multiple towers are selected with both similar and mixed attributes.",
		"img": "https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAPrAAAAJDY4OTY5ZGQzLWM0NzMtNDhmNy1iMzE3LTBkMjFlOGMwOTNkOA.png",
		"skills": "Visual C++, Active X",
		"endDate": 200804
	},
	"en": {
		"dates": "May 2007 - Oct. 2007",
		"title": "Web Developer",
		"name": "Home Depot through Edgenet",
		"skills": "HTML, CSS, JavaScript ASP.NET, C#",
		"description": "Developed portions of the front end of an advertising registry utilizing AJAX. Integrated SQL Reporting Services to maintain the look and feel of the web applications. Modified and utilized stored procedures in MS-SQL. Extensive cross browser cascading style sheet work for many sites. Implemented JavaScript to enhance usability on content editor. Big Hammer Data provides visual guided selling and content solutions to leading retailers and suppliers in the home goods industry including Home Depot and Better Homes and Gardens.",
		"img": "https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAW3AAAAJDdhZmZhM2I1LTY3YzAtNDc5Yi05MzQxLWZjNjIwZjk3OTBiNQ.png",
		"endDate": 200710
	},
	"dc": {
		"dates": "Mar. 2006 - May 2007",
		"name": "Dart Chart Systems",
		"title": "Senior Software Engineer",
		"endDate": 200705,      
		"skills": "HTML, CSS, JavaScript ASP.NET, C#",
		"description": "Designed and developed the front end of a medical records collection system. Utilizing AJAX technologies, nurses and nursing assistants can submit numerous patient forms without waiting for the browser to refresh or server processing. Deployed site to web farm. Aided project manager in creating and assigning tasks for other developers. Helped business analyst create an easy to use and easy to learn user interface. Mentored other developers.",
		"img": "https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/3/000/04b/3a6/2132f79.png"
	}
}
  

it("getAllIds - with sortBy: endDate", () => {
	// Arrange
	const state = {
		employmentHistory_byId,
		sortBy: "endDate",
		filter: ""
	}
  
	// Act
	const result = getAllIds(state)
  
	// Assert
	expect(result).toEqual(["dlss", "nm", "hd", "jci", "lf", "qti", "en", "dc"])
})

it("getAllIds - with sortBy: name", () => {
	// Arrange
	const state = {
		employmentHistory_byId,
		sortBy: "name",
		filter: ""
	}
  
	// Act
	const result = getAllIds(state)
  
	// Assert
	expect(result).toEqual(["dc", "dlss", "hd", "en", "jci", "lf", "nm", "qti"])
})


it("getAllIds - with sortBy: title", () => {
	// Arrange
	const state = {
		employmentHistory_byId,
		sortBy: "title",
		filter: ""
	}
  
	// Act
	const result = getAllIds(state)
  
	// Assert
	expect(result).toEqual(["nm", "dlss", "hd", "qti", "dc", "jci", "lf", "en"])
})

it("getAllIds - with filter: western", () => {
	// Arrange
	const state = {
		employmentHistory_byId,
		sortBy: "title",
		filter: "west"
	}
  
	// Act
	const result = getAllIds(state)
  
	// Assert
	expect(result).toEqual(["nm"])
})