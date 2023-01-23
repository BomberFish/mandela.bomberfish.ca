// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3.0
console.log("Hello, World!");

document.querySelector("#dlscreen").className = "";

function showDownload() {
  console.log("Showing downloads panel")
  document.querySelector("#dlscreen").className = "show";
}

function hideDownload() {
  console.log("Hiding downloads panel")
  document.querySelector("#dlscreen").className = "";
}
// @license-end