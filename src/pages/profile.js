import { useState } from "react";

function Profile(props) {

    const [setting, setSetting] = useState(false);

    const showHobbiesHandler = () => {
        return <SetHobbies user={props.user} setUser={props.setUser} setSetting={setSetting} />
    }
    return (
        <div>
            <center>
            <img src={props.user[0].picture}/>
            <div class="infoo">
                <h2>{props.user[0].fname} {props.user[0].lname}</h2>
                <h4>Email: {props.user[0].email}</h4>
                <h6>Hobbies: {props.user[0].hobbies.map((item, index) => (
                    <span key={index}>{item}, </span>
                ))}
                </h6>
                <button onClick={() => setSetting(true)}>Add hobbies?</button>
                {setting == true ? showHobbiesHandler() : null}
            </div>
            </center>
        </div>
    );
}

function SetHobbies(props) {

    const hobbies = ["Gardening", "Sports", "Art", "Knitting", "Dance", "Writing", "Acting", "Drawing", "Dancing", "Cooking"]

    const addHobby = (hobby) => {
        const newHobbies = [...props.user[0].hobbies, hobby]
        props.setUser({ ...props.user, hobbies: newHobbies })
        console.log("Hobby added")
    }

    return (
        <div>
            {hobbies.map((hobby, index) => {
                return <div key={index}><Button addHobby={addHobby} hobby={hobby} /></div>
            })}
            <button onClick={() => props.setSetting(false)}>Stop adding</button>
        </div>
    );
}

function Button(props) {
    return (
        <div>
            <button onClick={() => props.addHobby(props.hobby)}>{props.hobby}</button>
        </div>
    );
}


export default Profile;
