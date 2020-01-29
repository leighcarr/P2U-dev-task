// Global
app.global = {
    init: function(){ // Load all global functions here
        console.log("load global functions");
        app.global.loadHeader();
    },
    loadHeader: function(){ // Some specific function
        console.log("loadHeader()");
    }
}

function myFunction() {
  document.getElementById("greeting_heading").textContent = "Paragraph changed!";
  document.getElementById("greeting_intro").textContent = "Paragraph changed!";
}

// Run the global stuff
app.global.init();

