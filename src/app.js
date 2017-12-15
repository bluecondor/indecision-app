console.log('App.js is running');

// JSX - JavaScript XML

var app = {
  title: 'Firs React App',
  subtitle: 'with Andrew Mead'
}

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Petru',
  age: 33,
  location: 'Iasi'
}

var userName = 'Mike';
var userAge = 27;
var userLocation = 'Chicago';

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {userAge}</p>
    <p>Location: {userLocation}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);