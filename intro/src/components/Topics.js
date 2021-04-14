import {
    Link,
    Route,
  } from 'react-router-dom'




// function Topic ({ match }) {
//     return <h3>{match.params.topicId}</h3>
//}

function Topic (props) {
    return <h3>{props.match.params.topicId}</h3>
}

// agregando accesorio match a las urls que proporciona React
function Topics ({ match }) {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li> 
                <Link to={`${match.url}/topics`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>Props vs State</Link>
            </li>
        </ul>
        <hr />
        <Route path={`${match.path}/:topicId`} component={Topic} />


        {/* <Route path={`${match.path}/:topicId`} render={() => {
            return <Topic />
        }} /> */}

        <Route exact path={match.path}  render={() => {
            return <h3>Please select a topic</h3>
        }} />


      </div>
    );
  }
  
  export default Topics
  