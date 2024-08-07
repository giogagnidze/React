import profilePic from "./assets/giorgi.jpg"

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="" />
            <h2>TheCodeCrafter</h2>
            <p>I'm Web developer</p>
        </div>
    );
}


export default Card