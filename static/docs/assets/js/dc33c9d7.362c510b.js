"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,f=m["".concat(l,".").concat(h)]||m[h]||c[h]||i;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"PHP"},p=void 0,o={unversionedId:"services/web/php",id:"services/web/php",title:"PHP",description:"death, the OCF webserver, currently runs PHP 7.0 with the following",source:"@site/docs/services/web/php.md",sourceDirName:"services/web",slug:"/services/web/php",permalink:"/docs/services/web/php",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/services/web/php.md",tags:[],version:"current",frontMatter:{title:"PHP"},sidebar:"tutorialSidebar",previous:{title:"Jekyll",permalink:"/docs/services/web/jekyll"},next:{title:"Ruby on Rails",permalink:"/docs/services/web/rails"}},l={},s=[{value:"Custom PHP settings",id:"custom-php-settings",level:2},{value:"Example <code>.user.ini</code> file",id:"example-userini-file",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"death"),", the OCF webserver, currently runs PHP 7.0 with the following\nnon-standard packages installed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.apcu.php"},"APCu")," (opcode caching)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.bc.php"},"BC Math")," (arbitrary precision math)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.bzip2.php"},"Bzip2")," (compression library)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.curl.php"},"cURL")," (networking library)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.dba.php"},"DBA")," (database connector)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.image.php"},"GD")," (graphics library)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.mbstring.php"},"MB String")," (string encoding)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.mcrypt.php"},"Mcrypt")," (cryptography library)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.mysqli.php"},"MySQL")," (database connector)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.sqlite.php"},"SQLite")," (database connector)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.soap.php"},"SOAP")," (messaging protocol library)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.xml.php"},"XML")," (markup parsing library)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.zip.php"},"ZIP")," (compression library)")),(0,a.kt)("p",null,"For a full list of available modules, run ",(0,a.kt)("inlineCode",{parentName:"p"},"phpinfo()")," from a PHP script.\nPlase ",(0,a.kt)("a",{parentName:"p",href:"/docs/contact"},"contact us")," if you are missing a module that you need\ninstalled to get your application running."),(0,a.kt)("h2",{id:"custom-php-settings"},"Custom PHP settings"),(0,a.kt)("p",null,"If the default PHP settings are problematic for your site (for example, if you\nrequire larger than normal file uploads), you can customize the PHP settings\nused by creating ",(0,a.kt)("a",{parentName:"p",href:"https://secure.php.net/manual/en/configuration.file.per-user.php"},"a ",(0,a.kt)("inlineCode",{parentName:"a"},".user.ini")," file")," inside your web root."),(0,a.kt)("p",null,"In order to maintain compatibility with the OCF's PHP settings, we highly\nrecommend ",(0,a.kt)("em",{parentName:"p"},"not")," copying an entire ",(0,a.kt)("inlineCode",{parentName:"p"},"php.ini"),"*"," or ",(0,a.kt)("inlineCode",{parentName:"p"},".user.ini")," file from the web\nor from another server. Instead, we advise you to create an empty ",(0,a.kt)("inlineCode",{parentName:"p"},".user.ini"),"\nand add only the settings you wish to change."),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},".user.ini")," filename should be used, as our webserver will not look\nfor (per-user) ",(0,a.kt)("inlineCode",{parentName:"p"},"php.ini")," files."),(0,a.kt)("h3",{id:"example-userini-file"},"Example ",(0,a.kt)("inlineCode",{parentName:"h3"},".user.ini")," file"),(0,a.kt)("p",null,"The following file, located at ",(0,a.kt)("inlineCode",{parentName:"p"},"~/public_html/.user.ini"),", is an example of a\ngood ",(0,a.kt)("inlineCode",{parentName:"p"},".user.ini")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"; raise max upload and POST sizes\nupload_max_filesize = 32M\npost_max_size = 32M\n\n; raise maximum number of input variables\nmax_input_vars = 20000\n")))}c.isMDXComponent=!0}}]);