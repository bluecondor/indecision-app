const appRoot = document.getElementById('app');
let showDetails = false;

const toggler = () => {
  showDetails = !showDetails;
  render();
};

const render = () => {
  const content = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggler}>{!showDetails ? "Show details" : "Hide details"}</button>
      {showDetails && <p>Hey. These are some details you can now see.</p>}
    </div>
  );

  ReactDOM.render(content, appRoot);
};

render();