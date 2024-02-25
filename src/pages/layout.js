import {Link} from 'react-router-dom';

function Layout(){

    return(
        <div>
            <img src='Logo.jpg' alt='logo'/>
            <nav>
                <span class = "nav"><Link to = '/'>Home</Link></span>
                <span class = "nav"><Link to = '/CommunityEvents'>Community Events</Link></span>
                <span class = "nav"><Link to = '/HelpBoard'>Help Board</Link></span>
                <span class = "nav"><Link to = '/Friends'>Friends</Link></span>
                <span class = "nav"><Link to = '/Profile'>Profile</Link></span>
            </nav>
        </div>
    );
}

export default Layout;