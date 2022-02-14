/**
 * Put any code that needs to run after the page has loaded
 * (i.e., after all the content has been rendered) inside this event handler.
 */
window.addEventListener("load", function() {

  document.body.style.backgroundColor = "lightblue";

  var button = document.querySelector("#button-with-press-message");
  button.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightgreen";
  });

  // var myCodeMirror = CodeMirror(document.body, {
  //   mode: "javascript"
  // });
  var codeEditorTextarea = document.querySelector("#code-editor-textarea");
  var myCodeMirror = CodeMirror.fromTextArea(codeEditorTextarea, {
    mode: "javascript",
  });

  /*
   * Step 1: query for an element on the page...
   */
  var codeEditorHandle = document.querySelector("#code-editor-container");
  var codeEditorContainer = document.querySelector("#code-editor-container");
  /*
   * Step 2: add interactivity via event handlers.
   */
  codeEditorHandle.addEventListener("dragend", function(event) {
    console.log(event);
    codeEditorContainer.style.top = event.pageY;
    codeEditorContainer.style.left = event.pageX;
  });
});
