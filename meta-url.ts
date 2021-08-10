console.log(import.meta.url); // file:///C:/AngryChaired/definitive-js/meta-url.ts

console.log(new URL('node_modules', import.meta.url));
/* 
URL {
  href: "file:///C:/AngryChaired/definitive-js/node_modules",
  origin: "null",
  protocol: "file:",
  username: "",
  password: "",
  host: "",
  hostname: "",
  port: "",
  pathname: "/C:/AngryChaired/definitive-js/node_modules",
  hash: "",
  search: ""
}

*/
