function HelpBoard() {
    return (
        <div>
            <div class = "genHelp">
            <center>
                <HelpTask img="https://researchleap.com/wp-content/uploads/2020/04/GettyImages-595349163-5b35665e46e0fb003707199d.jpg" name="Mathematics" />
                <HelpTask img="https://i0.wp.com/governmentph.com/wp-content/uploads/2017/11/DepEd-Teachers-Salary-Grade-SSL-Third-Tranche-2018.jpg?fit=1024%2C576&ssl=1" name="History" />
                <HelpTask img="http://www.wherewhatwhen.com/img/images/teacher.jpg" name="English" />
                <HelpTask img="https://content.govdelivery.com/attachments/fancy_images/VADOE/2020/06/3489901/young-aa-teacher_original.jpg" name="Science" />
            </center>
            </div>

        </div >   
    );
}


function HelpTask(props) {
    return (
        <div>
            <img src={props.img} />
            <h3>{props.name}</h3>
            <button>Ask for help?</button>
        </div>
    );
}

export default HelpBoard;