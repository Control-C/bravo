let model;

// Show loading spinner and text
document.getElementById('loading').style.display = 'block';

// Load the QnA model and hide the spinner once loaded
qna.load().then(loadedModel => {
  model = loadedModel;
  console.log("Model loaded successfully.");
  document.getElementById('loading').style.display = 'none'; // Hide spinner
  document.getElementById('getAnswersButton').style.display = 'inline'; // Show button
});


function processText() {
  const passage = document.getElementById('box1').value;

  // Ask questions and process answers
  askQuestion('What is the full name of the person', passage).then(() => {
    askQuestion('Where is the street', passage);
  });
}

// function askQuestion(question, passage) {
//     const resultsDiv = document.getElementById('results');
//     resultsDiv.innerHTML = "Finding answers...";

//     if (model && passage) {
//         return model.findAnswers(question, passage).then(answers => {
//             resultsDiv.innerHTML = ''; // Clear previous results

//             if (answers.length > 1) {
//                 const answer = answers[1]; // Always take the 2nd answer (index 1)
//                 const key = question.includes('full name')
//                     ? 'Person_Name_id1'
//                     : 'Street_Name_id2';
//                 const value = answer.text;

//                 // Store the answer in local storage
//                 localStorage.setItem(key, value);


//                 resultsDiv.innerHTML = `<strong>Answer:</strong> ${answer.text} <br> <strong>Score:</strong> ${answer.score.toFixed(2)}`;
//             } else {
//                 resultsDiv.innerHTML = 'Less than 2 answers found.';
//             }
//         });
//     } else {
//         resultsDiv.innerHTML = "Please ensure the model is loaded, and both question and passage are provided.";
//     }
// }

function askQuestion(question, passage) {
  // Define resultsDiv by selecting the appropriate element from the DOM
  const resultsDiv = document.getElementById('results'); // Replace 'results' with the correct ID of your results container

  if (model && passage) {
    return model.findAnswers(question, passage).then(answers => {
      resultsDiv.innerHTML = ''; // Clear previous results

      if (answers.length > 1) {
        const answer = answers[1]; // Always take the 2nd answer (index 1)
        const key = question.includes('full name')
          ? 'Person_Name_id1'
          : 'Street_Name_id2';
        const value = answer.text;

        // Store the answer in local storage
        localStorage.setItem(key, value);

        // Get the current text in box1
        let resultText = document.getElementById('box1').value;

        // Create a regular expression to find the value and replace it with the key
        const regex = new RegExp(value, 'gi');

        // Replace matches with the key and update box1
        resultText = resultText.replace(regex, match => {
          // Store the matched text in localStorage before replacing
          localStorage.setItem(key, match);
          return key; // Replace the match with the key
        });

        // Update the text in box1
        document.getElementById('box1').value = resultText;

        resultsDiv.innerHTML = `<strong>Answer:</strong> ${answer.text} <br> <strong>Score:</strong> ${answer.score.toFixed(2)}`;
      } else {
        resultsDiv.innerHTML = 'Less than 2 answers found.';
      }
    });
  } else {
    resultsDiv.innerHTML = "Please ensure the model is loaded, and both question and passage are provided.";
  }
}




// save GDPR data on local side of user machine 

const verSion = "Madebygemini v1";
localStorage.setItem('version', verSion);

// Function to generate a hash from a string
function hashString(str) {
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

// Function to generate a session ID based on date and a hash
function generateSessionID() {
  // Get the current date and time
  const now = new Date();
  const dateString = now.toISOString();

  // Generate a hash from the date string
  const hash = hashString(dateString);

  // Combine date and hash to create a session ID
  const sessionID = `${dateString}_${hash}`;

  // Store the session ID in localStorage
  localStorage.setItem('sessionID', sessionID);

  console.log('Generated Session ID:', sessionID);
  return sessionID;
}

// Call the function to generate and store the session ID
generateSessionID();

/////////

// Add some local ML TensorFlow.js. *( ore demo working of NodeJs need to be isntalled on machien )
// npm install @google/generative-ai
// npm i @tensorflow-models/universal-sentence-encoder





//////////
// // JSON data
const jsonData = {
  "gdpr_items": [
    {
      "id": 1,
      "item": "Persona_id1",
      "description": "Name individual.",
      "look_for": "testVi"
    },

    {
      "id": 2,
      "item": "Persona_id2",
      "description": "Name individual.",
      "look_for": "testPaul"
    },
    {
      "id": 3,
      "item": "Date_of_Birth_id3",
      "description": "The birth date of an individual.",
      "look_for": "\\b\\d{2}[./-]\\d{2}[./-]\\d{4}\\b"
    },
    {
      "id": 4,
      "item": "Email_ID4",
      "description": "Email address of an individual.",
      "look_for": "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
    },
    {
      "id": 5,
      "item": "Phone_Number_ID5",
      "description": "Telephone number of an individual.",
      "look_for": "\\b\\d{3}[-.]?\\d{3}[-.]?\\d{4}\\b"
    },
    {
      "id": 6,
      "item": "Social Security Number",
      "description": "National identification number or social security number.",
      "look_for": "\\b\\d{3}[-.]?\\d{2}[-.]?\\d{4}\\b"
    },
    {
      "id": 7,
      "item": "IP_Address_ID7",
      "description": "Internet Protocol (IP) address.",
      "look_for": "\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b"
    },
    {
      "id": 8,
      "item": "Location_Data_ID8",
      "description": "Geographical location information.",
      "look_for": "\\b\\d{1,3}\\.\\d+[, ]+\\d{1,3}\\.\\d+\\b"
    },
    {
      "id": 9,
      "item": "Financial_Information_ID9",
      "description": "Bank account numbers, credit card information, etc.",
      "look_for": "\\b\\d{4}[-.]?\\d{4}[-.]?\\d{4}[-.]?\\d{4}\\b"
    },
    {
      "id": 17,
      "item": "Company Name",
      "description": "The name of a company.",
      "look_for": "[A-Z][a-zA-Z]+( [A-Z][a-zA-Z]+)* Inc|LLC|Corp|Ltd"
    },
    {
      "id": 18,
      "item": "Company Address",
      "description": "The address of a company.",
      "look_for": "[0-9]+ [A-Za-z ]+, [A-Za-z ]+, [A-Za-z ]+ [0-9]{5}"
    },
    {
      "id": 20,
      "item": "Sales Data",
      "description": "Information about sales, including sales figures and customer purchase history.",
      "look_for": "sales|revenue|customer purchase|transaction history"
    },
    {
      "id": 21,
      "item": "Pricing_Information_ID21e",
      "description": "Details about product or service pricing.",
      "look_for": "€"
    }

  ]
};

// Function to fetch JSON data from json.php
async function fetchJsonData() {
  try {
    const response = await fetch('json.php'); // Replace 'json.php' with the correct path if necessary
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const jsonData = await response.json();
    console.log('Fetched JSON Data:', jsonData);
    return jsonData;
  } catch (error) {
    console.error('Failed to fetch JSON data:', error);
    return null;
  }
}

// Example usage
fetchJsonData().then(data => {
  if (data) {
    // Process the data here
    //  processJsonData(data);


  }
});



function highlightText() {
  const inputText = document.getElementById('box1').value;
  const markers = jsonData.gdpr_items;

  let highlightedText = inputText;
  markers.forEach(item => {
    const regex = new RegExp(item.look_for, 'gi');
    highlightedText = highlightedText.replace(regex, match => `<span class="highlight">${match}</span>`);
  });

  document.getElementById('box2').innerHTML = highlightedText;
}


function replaceText() {
  const inputText = document.getElementById('box1').value;
  const markers = jsonData.gdpr_items;

  let resultText = inputText;

  markers.forEach(item => {
    const regex = new RegExp(item.look_for, 'gi');

    // Store matches in localStorage before replacing them
    resultText = resultText.replace(regex, match => {
      localStorage.setItem(item.item, match);
      return item.item; // Return the item to replace in the text
    });
  });

  document.getElementById('box3').value = resultText;
}

function back() {
  const inputText = document.getElementById('box4').value;
  const markers = jsonData.gdpr_items;

  let resultText = inputText;
  markers.forEach(item => {
    const regex = new RegExp(item.item, 'gi');
    resultText = resultText.replace(regex, item.look_for);
  });

  document.getElementById('box5').value = resultText;
}



function send2api() {
  // var inputText3 =  document.getElementById('box3').value ;
  // var resultTextbox3-prmpt =   document.getElementById('box3-prmpt').value;

  //  alert(" <prompt>" + document.getElementById('box3-prmpt').value + "</prompt>/n " + document.getElementById('box3').value);

  // Capture the prompt and text
  const promptValue = document.getElementById('box3-prmpt').value;
  const textValue = document.getElementById('box3').value;

  // Construct the string to send
  const dataPrompt = `<prompt>${promptValue}</prompt>\n${textValue}`;

  // Encode the string for the URL
  const encodedX = encodeURIComponent(dataPrompt);



  // Construct the API URL
  const apiUrl = `https://qqmber.com/api/ai/send_promt.php?prompt=${encodedX}&key=AIzaSyBbe6JaCczeYbEfHKKelATPKzwbu2BLNZw`;

  // Send the request using fetch
  fetch(apiUrl)
    .then(response => response.json()) // Assuming the API returns JSON
    .then(data => {
      console.log('API Response:', data);
      // Extract the text from the response
      const candidates = data.candidates;
      if (candidates && candidates.length > 0) {
        const textContent = candidates[0].content.parts[0].text;
        document.getElementById('box4').value = textContent;
      } else {
        document.getElementById('box4').value = "No text found in the response.";
      }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('box4').value = "An error occurred. Check the console for details.";
    });

}



////////////////////////////////////////////////////

// Function to get localStorage values and create a JSON object
function getLocalStorageAsJSON() {
  const localStorageData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    localStorageData[key] = value;
  }
  return localStorageData;

}

// Function to replace markers in text using values from localStorage
function replaceMarkers() {


  const inputText = document.getElementById('box4').value;
  console.log('Original Text from box4:', inputText);

  const localStorageData = getLocalStorageAsJSON();
  console.log('LocalStorage Data:', localStorageData);

  let resultText = inputText;

  // Iterate over each key-value pair in localStorage
  Object.keys(localStorageData).forEach(key => {
    const value = localStorageData[key];
    // Escape special characters in the key
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // console.log('Processing Key:', key, 'Escaped Key:', escapedKey);

    // Create regex to match the key with optional punctuation like '.', ',', etc.
    const regex = new RegExp(`\\b${escapedKey}\\b[.,]*`, 'gi');
    console.log('Regex Pattern:', regex);

    // Replace occurrences of the key with its corresponding value
    resultText = resultText.replace(regex, match => {
      //    console.log('Found Match:', match, 'Replacing with:', value);
      return value;
    });
  });

  // console.log('Processed Text:', resultText);

  // Display the result in box5
  document.getElementById('box5').value = resultText;
}

function share() {

  const inputText = document.getElementById('box5').value;

  alert(inputText);

}