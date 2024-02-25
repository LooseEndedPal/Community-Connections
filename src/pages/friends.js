import users from "../users.js"

function Friends(props){
    return(
        <div>
            <h3>Your Friends</h3>
            {users.map((item, index)=>{
               return <div key = {index}><FriendComponent obj = {item} /></div> 
            })}
            <br />
            <SearchFriends />
        </div>
    );
}

function SearchFriends(){
    return(
        <div>
            <h3>Friends that match your interest</h3>
            <div>
                <img src ={users[0].picture}/>
                <h4>{users[0].fname} {users[0].lname}</h4>
            </div>

            <div>
                <img src ={users[2].picture}/>
                <h4>{users[2].fname} {users[2].lname}</h4>
            </div>
            <div>
                <img src ={users[3].picture}/>
                <h4>{users[3].fname} {users[3].lname}</h4>
            </div>
            <div>
                <img src ={users[4].picture}/>
                <h4>{users[4].fname} {users[4].lname}</h4>
            </div>
            <div>
                <img src ={users[5].picture}/>
                <h4>{users[5].fname} {users[5].lname}</h4>
            </div>
        </div>
    );
}

function FriendComponent(props){
    return(
        <div>
            <img src={props.obj.picture} />
            <h4>{props.obj.fname} {props.obj.lname}</h4>
        </div>
    );
}



export default Friends;