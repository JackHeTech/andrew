/*
    SIMPLY CHANGE THE TEXT INSIDE THE DIV TAG IN ORDER TO UPDATE THE SITE WITH NEW INFORMATION

    We update / add new events here. 
*/

fetch('https://api-andrew.herokuapp.com/getdata')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        alert("could not load data")
        return;
      }

    //   Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        render(data)
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
    alert("could not load data")
  });


function goTo() {
  alert("go to")
}

function Event(props) {
  console.log(props.videoUrl)
  return (
      <div className="col-sm-6 col-md-6 col-lg-6" data-aos="fade" data-aos-delay="100" style = {{float:"left"}}>
        <a href= {props.videoUrl} className="work-thumb" target = "_blank" onclick = "goTo()">
          <div className="work-text">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </div>
          <img src={props.imageUrl} alt="Image" className="img-fluid"></img>
        </a>
      </div>
  )
}
 
function ContainerForEvents(props) {
    return (
        <div>
            {props.listOfEvents.map((event) => {
                return (
                    <Event title = {event.title} description = {event.description} imageUrl = {event.imageUrl} videoUrl = {event.videoUrl} />
                )
            })}
        </div>
    )
}

const render = (data) => {
    const ALL_UPCOMING_EVENTS = data.projects
    ReactDOM.render(<ContainerForEvents listOfEvents = {ALL_UPCOMING_EVENTS}/>, document.getElementById("events"))
}
