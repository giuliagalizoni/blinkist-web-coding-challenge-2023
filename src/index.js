import './styles.css';
import { trackPageview, trackEvent } from './analytics-api.js';

const control = document.getElementById('control');
const variation = document.getElementById('variation');
const signUpLink = document.getElementById('sign-up-link');

// Randomly assign and storage control or test variant
if (!localStorage.abStorage) {
  if (Math.random() >= 0.5) {
    window.localStorage.abStorage = 'control';
  } else {
    window.localStorage.abStorage = 'variant';
  }
}

// Show or hide elements depending on abStorage
if (window.localStorage.abStorage === 'control') {
  variation.classList.add('hide');
  // control.classList.add("show");
} else if (localStorage.abStorage === 'variant') {
  control.classList.add('hide');
  // variation.classList.add("show");
}

const countViews = () => {
  let myStorage = window.localStorage,
    pageCount;
  window.addEventListener('load', function () {
    if (!myStorage.getItem('pageCount')) {
      myStorage.setItem('pageCount', 1);
    } else {
      pageCount = myStorage.getItem('pageCount');
      pageCount++;
      myStorage.setItem('pageCount', pageCount);
    }
  });
};

const countClicks = () => {
  let myStorage = window.localStorage,
    clickCount;
  signUpLink.addEventListener('click', () => {
    if (!localStorage.clicked) {
      myStorage.setItem('clickCount', 1);
    }
    localStorage.setItem('clicked', true);
  });
  return clickCount;
};

countViews();
countClicks();

// Tracking Page View
trackPageview(
  `URL: ${document.URL}, AB-test: ${window.localStorage.getItem(
    'abStorage'
  )}, numberOfViews: ${window.localStorage.getItem('pageCount')}`
);

trackEvent(
  `Event: "click", URL: ${document.URL}, clicks: ${window.localStorage.getItem(
    'clickCount'
  )}`
);
