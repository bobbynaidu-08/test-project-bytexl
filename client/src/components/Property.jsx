import{ useState } from "react";
function Property(props){
    const[like,setlike]=useState(0);
    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.rating}</p>
            <h3>❤️{like}</h3>
            <button onClick={()=>setlike(like+1)}>Like</button>
        </div>
    );
}
export default Property