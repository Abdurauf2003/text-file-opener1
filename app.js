window.addEventListener('DOMContentLoaded', function() {
    // File path to the text file
    var filePath = './file.html';
  
    // Create an XMLHttpRequest object
    var xhr = new XMLHttpRequest();
  
    // Set the response type to text
    xhr.responseType = 'text';
  
    // Open a GET request to the file path
    xhr.open('GET', filePath, true);
  
    // When the request is successful
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Get the file content
        var fileContent = xhr.responseText;
  
        // Display the file content
        var fileContentElement = document.getElementById('file-content');
        fileContentElement.textContent = fileContent;
  
        // Copy button click event handler
        var copyBtn = document.querySelector('.copy-btn');
        copyBtn.addEventListener('click', function() {
          // Create a range to select the file content
          var range = document.createRange();
          range.selectNodeContents(fileContentElement);
  
          // Clear any existing selection
          window.getSelection().removeAllRanges();
  
          // Add the range to the selection
          window.getSelection().addRange(range);
  
          try {
            // Execute the copy command
            var successful = document.execCommand('copy');
            var message = successful ? 'Copied!' : 'Copy failed!';
            console.log(message);
          } catch (err) {
            console.log('Unable to copy');
          }
  
          // Clear the selection
          window.getSelection().removeAllRanges();
        });
      }
    };
  
    // Send the request
    xhr.send();
  });
  