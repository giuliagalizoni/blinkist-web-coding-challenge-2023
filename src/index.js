import './styles.css';
import { trackPageview, trackEvent } from './analytics-api.js';

const control = document.getElementById('control');
const test = document.getElementById('test');
const signUpLink = document.getElementById('sign-up-link');

// Randomly assigning control variant or test variant and storing it in localStorage to guarantee that the user always sees the same variation even if the page is closed or reloaded
if (!window.localStorage.getItem('abStorage')) {
  if (Math.random() >= 0.5) {
    window.localStorage.setItem('abStorage', 'control');
  } else {
    window.localStorage.setItem('abStorage', 'test');
  }
}

// Hiding elements depending on the variation stored
if (window.localStorage.abStorage === 'control') {
  test.classList.add('hide');
} else if (localStorage.abStorage === 'test') {
  control.classList.add('hide');
}

// Counting the number of views and storing it in localStorage to keep track even when the page is reloaded
const countViews = () => {
  let myStorage = window.localStorage,
    pageCount;
  window.addEventListener('load', function () {
    // Creating the property pageCount and setting it to 1 if it doesn't exist yet
    if (!myStorage.getItem('pageCount')) {
      myStorage.setItem('pageCount', 1);
    } else {
      // Adding 1 to pageCount everytime the page is loaded
      pageCount = myStorage.getItem('pageCount');
      pageCount++;
      myStorage.setItem('pageCount', pageCount);
    }
  });
};

// Counting the number of clicks, considering that only one click per user should be stored
const countClicks = () => {
  let myStorage = window.localStorage,
    clickCount;
  signUpLink.addEventListener('click', () => {
    // Adding 1 to clickCount on click only if "clicked" is false
    if (!localStorage.clicked) {
      clickCount = myStorage.getItem('clickCount');
      clickCount++;
      myStorage.setItem('clickCount', clickCount);
    }
    // Setiing clicked to true on click
    myStorage.setItem('clicked', true);
  });
};

countViews();
countClicks();

// Tracking Page View
trackPageview(
  `URL: ${document.URL}, AB-test: ${window.localStorage.getItem(
    'abStorage'
  )}, numberOfViews: ${window.localStorage.getItem('pageCount')}`
);

// Tracking Event
trackEvent(
  `Event: "click", URL: ${document.URL}, clicks: ${
    window.localStorage.getItem('clickCount')
      ? window.localStorage.getItem('clickCount')
      : 0
  }`
);
