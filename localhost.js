function redirectTo(portNumber) {
  portNumber = portNumber ? ":"+portNumber : "";
  path = window.location.pathname;
  index = window.location.href.indexOf("?");
  params = index > -1 ? window.location.href.substring(index) : "";
  newLocation = "http://localhost"+portNumber+path+params;
  window.location.replace(newLocation);
}
