import "./MainContent.css"

function MainContent() {
    return(
        <main className="main">
            <h1 className="main-title">Fun facts about React</h1>
            <ul className="main-fact">
                <li>Was first created in 2013</li>
                <li>was Originally created by Jordan</li>
                <li>Has well over 100k stars</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise app including mobile apps</li>
            </ul>
        </main>
    );
}

export default MainContent;