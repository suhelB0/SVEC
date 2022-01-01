### Front-end technologies

- html
- css
- javascript
- bootstrap framework
- angular framework
- reackjs

### Backend technologies

- node.js
	- express.js
	- nodemoon
	- cors
	- dotenv
- PHP
- c#
- java
- python

### Databases

- mongoDb
- Mysql
- SQLite
- Firebase
- postgressql
- oracle

### git
	- git init
	- git add filename
	- git add filname1 filename5 filname100
	- git add . or git add --all
	- git status
	- Do git configuration (set name and email)
	- commit data with commit message
	- push the code into Github


### HTML version 5

- Hyper Text markup language
- semantic elements 
	- header
	- section
	- artical
	- aside
	- footer
	- table

- Block level element
	- headings h1 to h6
	- paragraph 
	- div
	- all semantic elements
	- Text will start from new line

- inline elements
	- span
	- image
	- a
	- nav
	- form
	- input
	- test area
	- legend
	- sup
	- sub
	
task :
- audio
- video
- canvas
- progress
- datalist
- meter
- select

### CSS

CSS full form Cascading Sytle Sheets
- Three ways
	- Inline
	- Internal
	- External
- Syntax of CSS

...
selector {
	css properties
}

### selectors
+ simple selectors
    - universal selector(*)
	- by element name
	- grouping selector(,)
	- class selector(.)
	- id selector(#)

+ Combinators
	+ Decendent selector( )
	+ Child selector(>)
	+ adjacent sibling selector(+)
	+ General sibling selectors(~)
+ pseudo class selector 
+ pseudo element selector
+ Attribute selector

### Box model

+ margin
+ border
+ padding
	- padding:10px foe all adjacent sides
	- padding;10px 30px ()
+ width
- 1 rem=16px

### Responce web design


### Flex-box

+ display
	- none
	- inline
	- block
	- inline-block
+ align-content
+ align-self
+ align-item
+ position
	- static
	- relative
	- absolute
	- fixed
	- sticky

- display
	- flex
		- flex-wrap
		- justify-content
		- flex-direction
		- flex-flow

### Booststrap 4.6

- it is CSS framework




- module (collection of functions and classes)
- package (collection of modules)
- library (collection of packages)
- framworks (collection of library)
+ module --> Package --> library --> Framework

+ Types of modes
	- offline
	- online
		- CDN links

+ background-color - bg
+ text-white

+ margin in Boostrap (m-*(0-5))
	- 0 --> 0rem
	- 1 --> 0.25rem (4px)
	- 2 --> 0.5rem (8px)'
	- 3 --> 1rem (16px)
	- 4 --> 1.5rem (24px)
	- 5 --> 3rem (48px)
	- ml-5 (margin-left)
    - mt (margin top)
	- m (margin in all directions)
	- mb (margin bottom)
	- mr (margin right)
+ padding (padding-left --> pl-5)

+ colors
	- primary
	- secondary
	- info
	- succes
	- warining
	- danger
	- light
	- dark
	- white

+ we can use colors classes for
	- Buttons (btn btn-primary)
	- text (text-white)
	- background (bg-secondary)
	- alerts (alert alert-primary)

+ Grid System
	- col-sm-12 (Syntax 12 is no.of col)
	- sm (small devices)
	- md (medium devices)
	- lg (large devices)
	- xl (Extra large devices)

+ modal 
+ Table


### JavaScript

+ In 1995 'Brenden Eich' introduced JavaScript (ES-262)			
+ JavaScript loosly touple and dynamic language 
+ It is a text based programing language and we can use in client- side and serverside (Node.js) for dynamic web applicatons
- ECMA-Script (ES-version name) organization
	- let & const
	- map()
	- arrow function
	- classes
+ datatypes
	- Number
	- BigInt (2^53-1)
	- String 
	- Boolean
	- Undefine
	- Null
	- Object
	- Array
+ variables 
	- var,let & const
	- Scope
		- fuction level --> var
		- block level --> let & const
	- Redefine --> let,var
	- Redeclare --> var
+ 'typeof()'
+ Object

...
 {
	 name:"kalyan"
 }
 ...

 + Array

 ### Alerts
  + To generate notification
	- alert
	- prompt(to take input from user)
	- confirm
+ console statements
	- `console.log()`
	- `console.warn()`
	- `console.info()`
	- `console.error()`

+ spread operater
	- To change array elements from one array to another
...
	...VariableName
...

+ Rest parameter
	+ To handle fuction parameter

...
	...parameter
...

+ Destructuring of Array and objects

+ Functions
	- function with functionName
	...

	function demo(){
		return x+y
	}
	demo()
	...
	- Anonymous function

+ for-in
	- To get index values of an array
+ for-of
	- To get elements in an array

+ forEach()
+ map()

### DOM

	- Docunent object model
	- document
	- History
	- window
	- navigator
+ DOM methods
	- `getElementId()`
	- `getElementByClassName`
	- `querySelector`
	- `innerText`
	- `textContent`
	- `append`
	- `appendChild`
	- `innerHTML`
	- `setAttribute()`
	- `classlist`
	- `style`
	- `src`

### JSON
+ JavaScript object Notation
	- To exchange information between application and server

...
{
	"name":"Muhammed Suhel Shaik",
	"salary":"8 LPA",
	"Designation":"Junior Developer",
	"mobile":9177195408
}
...

+ Ajax call or Promises (fetch API) or axios


### ReactJS

### ReactJs Features

+ It is a Library
+ it follows components based Architecture
	- Function component
	- Class component
	- pure Component
	- Higher Order Component
+ It provides virtual DOM
+ It provides JSx (JavaScript and XML)
+ Unidirectional data flow
+ Single page applications


+ Props
	- to press data from one component to another component we will use props
	- props are immutable 
+ Uninon Bank (Fuctional)
	 - AndhraBank (Functional)
	 - CorporationBank (Class)


+ Status

- In react to maintain information we will use States 
- We can maintain states 
...
constructor(){
	super();
	this.state={

	}
}
...

- To update the state information in class component use `setState()` method

+ To update the information in class component we have to follow component life cycle methods
	- `componentWillReceiveProps()`
	- `componentWillMount()`
	- `componentDidMount()`
	- `componentShouldMount()`
	- `componentWillUpdate()`
	- `componentDidUpdate()`
	- `componentWillUnmount()`
	
### Hooks
+ From react 16.8 Hooks are introduced

- Parent - Child1 --> Child2 --> Child3

- `useState()`
- `useEffect()`
- `useMemo()`
- `useRef()`
- `useContext()`

### List Rendering


### Event handling & Form Handling

- `onChange`
- `onSubmit`
- `preventDefault`

### Routong in React

+ To navigate (Route) from one component to another
	- install reqact-router-dom package by using
	`npm install react-router-dom`
	- `BrowserRouter`
	- `Routes`
	- `Route`
	- `link`
	- `element`
	- `path`
	                          

+ Project Environment Setup
	- [DonloadNodeJS](https://nodejs.org/en/download/)
	- [DowmloadVisualStudioCode](https://code.visualstudio.com/download)
	- install nodejs and check versions of `node` and `npm`
		- `node-v`
		- `npm-v`
	- `webpack` and `babel`
	- `create-react-app`
		- `npm install create-react-app`
			- `create-react-app projectname`
		- `npx create-react-app appname`

+ index.html
+ index.js
+ App.js
	+ IndexPage
		- nav.js
		- body.js
		- footer.js
	+	 home.js
		- nav	
		- body
		- footer
	+ Login.js
	+ Register
	+ About
	+ contact


### Animation

	
### Refernce links

- [contract checker](https://webaim.org/resources/contrastchecker/?bcolor=ebeff3&fcolor=434956)

- [color code](https://htmlcolorcodes.com/)
- [SVG icon]