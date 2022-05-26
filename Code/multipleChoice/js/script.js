const STORE = {
    questions: {   
     "Phishing emails": [
      {
       question: "You have recently contacted your bank to help with an issue. The first sentence of the email shows that it is illegitimate. Why is this?",
       code: `Hello customer, Thank yuo for contact the Bank to help with your issue.`,
       answers: [
        "You did not contact the bank",
        "The email contains grammatical and spelling errors",
        "Banks are not allowed to contact customers through email",
        "The email is not a scam, spelling mistakes can happen even with automated replies"
       ],
       correctAnswer: "The email contains grammatical and spelling errors"
      },{
       question: "Which of the following options are common in a phishing email?",
       code: ``,
       answers: [
        "The sender is unknown",
        "Strange links to fill out form",
        "Sense of urgency",
        "All of the options are common in a phishing email"
       ],
       correctAnswer: "All of the options are common in a phishing email"
      },{
       question: "You withdrew money from your PayPal account. Strangely, you have received four (4) different email confirmation of this from four (4) different emails. Which of the following email is more likely to be the legitimate sender",
       code: ``,
       answers: [
        "service@paypal.co.uk",
        "moneywithdrew.paypal@gmail.com",
        "paypalservice@yahoo.co.uk",
        "service@paypla.com"
       ],
       correctAnswer: "service@paypal.co.uk"
      },{
       question: "You were just sent an invoice to check if the payment method you used to buy your brand new phone matches your card details. Do you",
       code: ``,
       answers: [
        "Send your details to the sender to prove that it matches the invoice",
        "Forward the email to your friend and ask them to check for you",
        "Ignore the email as you have high beliefs that it is a scam",
        "Ask the sender what else they need"
       ],
       correctAnswer: "Ignore the email as you have high beliefs that it is a scam"
      },{
       question: "You received an email about an unusual sign-in activity from a location far from you. What should be your first course of action?",
       code: ``,
       answers: [
        "Change your password on your account",
        "Report the unusual activity to customer service",
        "Create a new account",
        "Look at your sign-in activities in the past"
       ],
       correctAnswer: "Change your password on your account"
      }
     ],
     "General knowledge": [
        {
         question: "What is 'Phishing?'",
         code: ``,
         answers: [
          "The activity of trying to catch a fish",
          "A Virtual Private Network",
          "A programming language",
          "A social engineering attack to gain personal information"
         ],
         correctAnswer: "A social engineering attack to gain personal information"
        },{
         question: "Smishing and general email phishing only differs through",
         code: ``,
         answers: [
          "The method of communication",
          "The content in the message",
          "The victim that was chosen",
          "None of the available options"
         ],
         correctAnswer: "The method of communication"
        },{
         question: "Which of the following can be seen in a phishing email?",
         code: ``,
         answers: [
          "Links to verify your information",
          "Addresses you by a different name",
          "Asks for credit/debit card numbers",
          "All of the options available"
         ],
         correctAnswer: "All of the options available"
        },{
         question: "What makes for a weak password?",
         code: ``,
         answers: [
          "Words not in the dictionary, random numerical order",
          "Simple words, information about you and pets' names",
          "Mixing uppercase and lowercase letters with special characters",
          "None of the options makes for a weak password"
         ],
         correctAnswer: "Simple words, information about you and pets' names"
        },{
         question: "Which of the following risks apply to using public WIFI?",
         code: ``,
         answers: [
          "Creates an opportunity for criminals to intercept information",
          "There are fake WIFI networks available to the public",
          "Inadequate security measures",
          "Injection of malware can occur to users of the public WIFI",
          "All of the risks apply to using a public WIFI network"
         ],
         correctAnswer: "All of the risks apply to using a public WIFI network"
        }
       ],
       "Spear phishing": [
        {
         question: "Spear phishing is known to be targeted. What information can be used by a cyber criminal?",
         code: ``,
         answers: [
          "Name, mobile number, date of birth",
          "National Insurance number, place of employment, job role",
          "Email address and social media user names",
          "Cyber criminals can use any information that is available to them therefore all of the listed information can be used"
         ],
         correctAnswer: "Cyber criminals can use any information that is available to them therefore all of the listed information can be used"
        },{
         question: "Which communication method is spear phishing more present in?",
         code: ``,
         answers: [
          "Email",
          "Text messages",
          "Phone calls",
          "Direct messages"
         ],
         correctAnswer: "Email"
        },{
         question: "Which phishing technique has a higher open percentage from the rest?",
         code: ``,
         answers: [
          "Spear",
          "Smishing",
          "Vishing",
          "Angler"
         ],
         correctAnswer: "Spear"
        },{
         question: "Spear phishing is ",
         code: ``,
         answers: [
          "Sent to one person or small group of people like the finance department",
          "Spammed to hundreds or thousands of people",
          "Includes a generic greeting",
          "Generally delivered via malicious links and/or attachments"
         ],
         correctAnswer: "Sent to one person or small group of people like the finance department"
        },{
         question: "What other phishing type is closely related to spear phishing?",
         code: ``,
         answers: [
          "Whaling/CEO fraud",
          "Angling ",
          "Smishing",
          "Vishing"
         ],
         correctAnswer: "Whaling/CEO fraud"
        }
       ],
       "Mitigation techniques": [
        {
         question: "What does 'SSL' stand for?",
         code: ``,
         answers: [
          "Secure Sockets Layer",
          "Secure State Line",
          "Solid Secure System",
          "Security State Layer"
         ],
         correctAnswer: "Secure Sockets Layer"
        },{
         question: "What does an SSL Certificate do?",
         code: ``,
         answers: [
          "An SSL Certificate ensures that any data passed from the browser of your computer to the server of the website is secure",
          "An SSL Certificate ensures that your password is always encrypted when you type it in by blanking it out or turning it into asterisks (****)",
          "An SSL Certificate is handed to an employee of a company to show that they have done basic training against phishing",
          "An SSL Certificate ensures that a website is protected from any sorts of phishing method"
         ],
         correctAnswer: "An SSL Certificate ensures that any data passed from the browser of your computer to the server of the website is secure"
        },{
         question: "Which of the following is a property of a firewall?",
         code: ``,
         answers: [
          "Firewalls are effective at preventing external attacks",
          "Firewalls acts as a shield between your computer and an attacker",
          "Firewalls can be installed both on your computer and browser",
          "All of three are properties of a firewall"
         ],
         correctAnswer: "All of three are properties of a firewall"
        },{
         question: "Which of the following should NOT you consider when changing your password",
         code: ``,
         answers: [
          "Making sure they are similar to other passwords for convenience",
          "Making sure that the password includes numbers and special characters",
          "To regularly change your passwords on each website and service that you use"
         ],
         correctAnswer: "Making sure they are similar to other passwords for convenience"
        },{
         question: "Installing a firewall is enough to prevent phishing attacks from happening",
         code: ``,
         answers: [
          "Yes, firewalls are sophisticated tools that can prevent all types of phishing",
          "No, firewalls are not enough to prevent phishing and other security methods should be used instead",
          "No, firewalls should not be used AT ALL against phishing as they are not useful in this type of social engineering attack",
          "Firewalls should be used alongside other security measures to ensure that you are protected as mucha as possible"
         ],
         correctAnswer: "Firewalls should be used alongside other security measures to ensure that you are protected as mucha as possible"
        }
       ],
       "Whaling/CEO fraud": [
        {
         question: "CEO fraud also targets...",
         code: ``,
         answers: [
          "Receptionists",
          "Managers",
          "Cleaners",
          "Interns"
         ],
         correctAnswer: "Managers"
        },{
         question: "Which phishing  best describes the following scenario?",
         code: `A senior executive of a company reports that they have received a suspicious email concerning a sensitive client. The email was sent from a domain they do not recognise and is asking for clarification of details`,
         answers: [
          "Whaling/CEO fraud",
          "Spear phishing",
          "High-level fraud",
          "Angler phishing"
         ],
         correctAnswer: "Whaling/CEO fraud"
        },{
         question: "Whaling/CEO fraud is a step up from...",
         code: ``,
         answers: [
          "Spear phishing",
          "Waterholing",
          "Sharking",
          "Vishing"
         ],
         correctAnswer: "Spear phishing"
        },{
         question: "In CEO Fraud, the scammer to be a...",
         code: ``,
         answers: [
          "lower-level employee attempting to deceive a higher-level employee",
          "higher-level employee attempting to deceive a lower-level employee"
         ],
         correctAnswer: "higher-level employee attempting to deceive a lower-level employee"
        }
       ],
       "Phishing characteristics": [
        {
         question: "The most common type of phishing and a sophisticated version of email phishing that targets a specific victim",
         code: ``,
         answers: [
          "Spear phishing",
          "Angler phishing",
          "Whaling/CEO Fraud",
          "Smishing and Vishing"
         ],
         correctAnswer: "Spear phishing"
        },{
         question: "Uses text messages and/or phone calls to lure victims to giving out information or money",
         code: ``,
         answers: [
          "Smishing and Vishing",
          "Angling",
          "Angler",
          "Whaling"
         ],
         correctAnswer: "Smishing and Vishing"
        },{
         question: "The targets are NOT lower-level employees but rather higher-level ones",
         code: ``,
         answers: [
          "Whaling/CEO Fraud",
          "Smishing and Vishing",
          "Sharking",
          "Spear phishing"
         ],
         correctAnswer: "Whaling/CEO Fraud"
        },{
         question: "A new phishing vector that often uses social media platforms",
         code: ``,
         answers: [
          "Angler phishing",
          "CEO Fraud",
          "Vishing",
          "Fishing"
         ],
         correctAnswer: "Angler phishing"
        },{
         question: "Cyber criminals will regsiter a domain that looks legitimate and start attacking through a method of communication",
         code: ``,
         answers: [
          "Email phishing",
          "Smishing",
          "Sharking",
          "Vishing"
         ],
         correctAnswer: "Email phishing"
        }
       ],
       "General social engineering": [
        {
         question: "Social Engineering rely on",
         code: ``,
         answers: [
          "Human error",
          "System error",
          "Technical error",
          "None of the options"
         ],
         correctAnswer: "Human error"
        },{
         question: "What is the main countermeasure to social engineering?",
         code: ``,
         answers: [
          "User awareness",
          "Anti-virus",
          "IT department"
         ],
         correctAnswer: "User awareness"
        },{
         question: "Which of the following organisations are commonly spoofed?",
         code: ``,
         answers: [
          "Google",
          "Apple",
          "PayPal",
          "All of the organisations listed are commonly spoofed"
         ],
         correctAnswer: "All of the organisations listed are commonly spoofed"
        },{
         question: "What is the most common phishing method used by cyber attackers and criminals?",
         code: ``,
         answers: [
          "Smishing and Vishing",
          "Spear phishing",
          "Whaling/CEO fraud",
          "Waterholing"
         ],
         correctAnswer: "Spear phishing"
        },{
         question: "The difference between impersonating and masquerading is...",
         code: ``,
         answers: [
          "One is more active, the other is more passive",
          "The victims differ",
          "There are no difference",
          "Impersonating takes a lot longer to carry out"
         ],
         correctAnswer: "One is more active, the other is more passive"
        }
       ],
       "Smishing and Vishing": [
        {
         question: "You get a text message from a vendor who asks you to click on a link to renew your password so that you can log in to its website. You should",
         code: ``,
         answers: [
          "Reply to the text to confirm that you really need to renew your password",
          "Call the vendor, using a phone number you know to be correct, to confirm that the request is real",
          "Click on the link. If it takes you to the vendor’s website, then you’ll know it’s not a scam",
          "Forward the message to a friend and ask them to see if it's legit"
         ],
         correctAnswer: "Call the vendor, using a phone number you know to be correct, to confirm that the request is real"
        },{
         question: "In simple terms, what is Smishing?",
         code: ``,
         answers: [
          "Social engineering via SMS text messages",
          "Phishing through phone calls",
          "A phishing type that uses the voicemail feature",
          "A text from a person's bank"
         ],
         correctAnswer: "Social engineering via SMS text messages"
        },{
         question: "In simple terms, what is Vishing?",
         code: ``,
         answers: [
          "A type of social engineering phising attack the utilises phone calls to gain access to information and/or money",
          "A phishing scam through text messages",
          "An email sent with a voice note"
         ],
         correctAnswer: "A type of social engineering phising attack the utilises phone calls to gain access to information and/or money"
        },{
         question: "Cyber criminals often pretend to be these to carry out smishing and vishing attacks",
         code: ``,
         answers: [
          "A bank",
          "A friend",
          "Your Dcotor",
          "All of them"
         ],
         correctAnswer: "All of them"
        }
       ],
       "Phishing types": [
        {
         question: "Which of the following is NOT a type of phishing?",
         code: ``,
         answers: [
          "HTTPS phishing",
          "Email phishing",
          "Water Hole phishing",
          "Swording"
         ],
         correctAnswer: ""
        },{
         question: "Which of the following is NOT a type of phishing?",
         code: ``,
         answers: [
          "Evil Twin phishing",
          "CEO Fraud",
          "Pop-up phishing",
          "Sharking"
         ],
         correctAnswer: ""
        },{
         question: "Which of the following is NOT a type of phishing?",
         code: ``,
         answers: [
          "Clone phishing",
          "Angler phishing",
          "Whaling",
          "Angling"
         ],
         correctAnswer: ""
        }
       ],
       "Identification": [
        {
         question: "You can identify a phishing email by looking at the...",
         code: ``,
         answers: [
          "domain the email address holds",
          "time and date the email was sent"
         ],
         correctAnswer: "domain the email address holds"
        },{
         question: "Phishing emails are...",
         code: ``,
         answers: [
          "poorly written with spelling and grammatical errors",
          "only sent on weekends",
          "never sent more than once",
          "always sent in masses"
         ],
         correctAnswer: "poorly written with spelling and grammatical errors"
        },{
         question: "What may you be able to find in a phishing email?",
         code: ``,
         answers: [
          "Malicious attachments",
          "A fake customer service number",
          "A real hyperlink to a website/social media accounts",
          "All of the listed options can be found in a phishing email"
         ],
         correctAnswer: "All of the listed options can be found in a phishing email"
        },{
         question: "Phishing emails tend to...",
         code: ``,
         answers: [
          "create a sense of urgency",
          "have emoticons to make sure that it stays with current trends",
          "include a picture of the CEO of the company they are trying to impersonate"
         ],
         correctAnswer: "create a sense of urgency"
        },{
         question: "_______ is a sign of a phishing email",
         code: ``,
         answers: [
          "Too good to be true",
          "A logo of the company they are trying to impersonate",
          "A date"
         ],
         correctAnswer: "Too good to be true"
        }
       ]
      }
     };
   
   
   // Creates the quiz. Create a model for the app's state
   function makeQuiz(){
       // Creating an object to store the app's state when beginning the quiz
       return {
           // Gathering a random question out of the available questions for each category
           questions: helpers.getRandomQuestions(STORE),
           // Boolean for if the quiz is in progress or not
           midQuiz: false,
           // Array of correct/incorrect answers to use for the  progress bar
           progress: {
               progressBar: [],
               incorrectCategories: []
           },
           // Boolean to determine if the end state should display or not
           completed: false,
           // Monitoring which question we are currently on
           currentQuestion: 0,
           // Keeps track of total correct answers
           correctAnswers: 0,
           // Keeps current selected answer
           currentAnswer: "",
           // Keeps track of % completed
           percCorrect: 0
       }
   }
   
   // Applies fadeOut animation and sets the "stage" for DOM text and/or element changes
   function $fade(appState){
   
       // Completed state of the app
       if(appState.completed){
           
           // Fixed fade out behaviour (not choppy)
           $.when($('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(500))
               .done(function(){
   
                   // Display results of the quiz to user
                   $showResults(appState);
                   $('.results-wrapper').hide().removeClass('hide');
                   $('.question-answer-wrapper, .results-wrapper').fadeIn(500);
           });
   
       // Initial start of app
       } else if(appState.midQuiz === false){
   
           // Set a flag that the app has begun
           appState.midQuiz = true;
           // Fixed fade out behaviour (not choppy)
           $.when($('.question-answer-wrapper, .question-wrapper, .code, .answer-wrapper, .start-quiz, .quit-quiz, .results-wrapper, .progress, .progress-bar').fadeOut(500))
               .done(function(){
                   // Removes progress from last execution
                   helpers.updateProgressBar(appState);
                   $('.progress-count').html('1 / 10');
                   $('.progress-perc').html('');
                   // Removes previous result
                   $('.failures').remove();
                   // New environment for the quiz
                   $updateQuestion(appState);
                   $('progress-bar').empty();
                   $('progress-fill').html('Progress: <span class="progress-count">1 / 10</span><span class="progress-perc"></span>');
                   $('.question-answer-wrapper, .answer-wrapper').removeClass('begin');
                   $('.submit-btn, .progress, .progress-bar').removeClass('hide');
                   $('.progress, .progress-bar').hide();
                   $('.question-answer-wrapper, .question-wrapper, .answer-wrapper, .progress, .progress-bar').fadeIn(500);
                   if(!$('.code').hasClass('hide')){$('.code').fadeIn(500)};
           });
   
       // App in the middle of execution
       } else if(appState.midQuiz){
           $.when($('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(500))
               .done(function(){
                   $updateQuestion(appState);
                   $('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeIn(500);
           });
       }
   }
   
   // Results with feedback depending on score
   function $showResults(appState){
       if(appState.correctAnswers === 100){
           let endMsg = `You got ${appState.percCorrect}% of the questions correct!
           You aced the quiz but that doesn't mean there's nothing else to learn. Head over to the 'Extra' tab to see what else you can learn!`;
       } else {
           $('.answer-btn').remove();
           let endMsg = `You got ${appState.percCorrect}% correct!`
           let endFeedback = ``;
           if(appState.progress.incorrectCategories.length === 0){
               endFeedback = `You got every question right! Well done!`;
           } else {
               endFeedback = `You may want to study up on the following categories:`;
           }

           $('.quiz-end-score').html(endMsg);
           let $failList = $('<ul class="failures"></ul>');
           appState.progress.incorrectCategories.map((cat => {
               $failList.append("<li class='category'>" + cat + "</li>");
           }));
           $('.quiz-end-feedback-p').html(endFeedback);
           $('.quiz-end-categories').append($failList);
           $('.results-wrapper').removeClass('hide').css('display', 'flex');
           $('.question-answer-wrapper, .results-wrapper, .quiz-end-feedback, .quiz-end-score, .retry-btn').css('display', 'flex').fadeIn(500);		
       }
   
   }
   
   // Update the question, code, answers, buttons in the DOM while we're in a faded out state
   function $updateQuestion(appState){
       $('.answer-btn').remove();
   
       // Update the question and code text with the current question
       $('.question').html(appState.questions[appState.currentQuestion].question);
   

       if(appState.questions[appState.currentQuestion].code == ``){
           $('.code').addClass('hide');
       } else {
           $('.code').removeClass('hide');
           $('.code').html(`<pre>${appState.questions[appState.currentQuestion].code}</pre>`);
       }
       
       // Change continue back to submit
       $('.continue-btn')
           .val("Submit")
           .removeClass('continue-btn')
           .addClass('submit-btn')
           .prop('disabled', true);
   
       // Add in available answers for the question
       let $answers = [];
   
       // Adding the answers to a temporary array
       for(let i=0; i<appState.questions[appState.currentQuestion].answers.length; i++){
   
           // Add current question answers to an array
           let $answer = $('<button class="answer-btn" type="button"></button>');
           $answer.html(appState.questions[appState.currentQuestion].answers[i]);
           $answers.push($answer);
       }
   
       // Shuffles the answers so that each execuation will show them in a different order
       helpers.shuffleAnswers($answers)
   
       // Push answers to the DOM
       $answers.forEach((answer) => {
           $('.answer-wrapper').prepend(answer);
       });
   }
   
   // Simple class and enable/disable of DOM selection when answer is selected
   function selectAnswer(answer){
       $('.answer-btn').removeClass('selected');
       answer.addClass('selected');
       $('.submit-btn').prop('disabled', false);
   }
   
   // Answer is selected and submitted
   // Push a feedback state
   function submitAnswer(appState){
   
       // This will return true or false based on their answer
       let correct;
   
       // Adds styles to the answers to show if their answer was correct or not
       $('.answer-btn').each(function () {
           if($(this).html() === appState.questions[appState.currentQuestion].correctAnswer){
               $(this).addClass('pass');
               // If the answer given is correct and selected
               if($(this).hasClass('selected')){
                   correct = "pass";
                   appState.correctAnswers++;
                   appState.questions[appState.currentQuestion];
               }
   
           // Handle correct answer if selected answer is incorrect
           } else if ($(this).hasClass('selected')){
               $(this).addClass('fail dim-answer');
               correct = "fail";
               appState.progress.incorrectCategories.push(appState.questions[appState.currentQuestion].category);
   
           // Dim the other answers to make the correct one more prevalent
           } else {
               $(this).addClass('dim-answer');
           }
       });
   
       // Add a progress bar indicator 
       appState.progress.progressBar.push(`<div class="progress-indicator ${correct}"></div>`);
       
       // Update % correct 
       appState.percCorrect = parseFloat(appState.correctAnswers / (appState.currentQuestion + 1) * 100).toFixed();
   
       // Update current question against total quiz length
       $('.progress-count').html(`
           ${appState.currentQuestion + 1} / ${appState.questions.length}
       `);
   
       // Updates current % of correct answer
       $('.progress-perc').html(`
            // ${(appState.percCorrect)}% Correct
       `)
   
       // Change submit back to continue after answering
       $('.submit-btn')
           .val("Continue")
           .removeClass('submit-btn')
           .addClass('continue-btn')
   
       // Disable selecting anopther answer
       $('.answer-btn').prop("disabled", true);
   
       // Update progress bar DOM
       helpers.updateProgressBar(appState);
   
       // Continue to next question
       appState.currentQuestion++;
   
       // Verify if we're done or not
       if(appState.currentQuestion === appState.questions.length){
           appState.completed = true;
       }
       
   }
   
   // Simple algorithms to modify data that doesn't use individual functions
   let helpers = {
       // Pick a random question from the available ones
       pickRandomQ: function(obj,section){
           return Math.floor(Math.random() * obj.questions[section].length);		
       },
       // Pick a random question from every category
       getRandomQuestions: function(obj){
           let questions = [];
           let categories = Object.keys(obj.questions);
           categories.forEach((cat) => {
               let randomQ = this.pickRandomQ(obj,cat);
               let question = obj.questions[cat][randomQ];
               question.category = cat;
               questions.push(question);
           });
           return questions;
       },
       // Shuffle the answers so they don't appear in the same order
       shuffleAnswers: function(arr){
           for (var i = arr.length - 1; i > 0; i--) {
               var j = Math.floor(Math.random() * (i + 1));
               var temp = arr[i];
               arr[i] = arr[j];
               arr[j] = temp;
           }
       },
       // Update progress bar DOM element
       updateProgressBar: function(appState){
           $('.progress-bar').empty();
           appState.progress.progressBar.forEach((progInd => {
               $('.progress-bar').append(progInd);
           }))
       }
   }
   
   // Start
   $(function(){
   
       // Prevents refresh 
       $('.answer-wrapper').on('submit', function(e){
           e.preventDefault();
       });
   
       // Temporary storage for when app is running
       let quizData;
   
       // Start quiz
       $('.start-quiz, .retry-btn').on('click', function(){
           quizData = makeQuiz();
           $fade(quizData);
       });
   
       // Select an answer
       $('.question-answer-wrapper').on('click', '.answer-btn', function(){
           selectAnswer($(this));
       })
   
       // Submit answer to display whether answer is right or wrong and advance q counter
       $('.question-answer-wrapper').on('click', '.submit-btn', function(e){
           submitAnswer(quizData);
       });
   
       // Submit your answer to display feedback and advance question counter
       $('.question-answer-wrapper').on('click', '.continue-btn', function(){
           $fade(quizData);
       });
   
   })
   