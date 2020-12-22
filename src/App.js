import './App.css';
import Content from "./components/Content_folder/content.jsx";
import Header from "./components/Header_folder/Header.jsx";
import Navbar from "./components/Nav_folder/Nav.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music_folder/Music";
import News from "./components/News_folde/News";
import Settings from "./components/Settings_folder/Settings"
import {BrowserRouter, Route} from "react-router-dom";




function App(props) {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            {/*       <Content />*/}
            <div class='app-wrapper-content'>
                <Route path='/dialogs' render={ () => <Dialogs Messagess={props.state.DialogComp.Messagess}
                                                               DialogData={props.state.DialogComp.DialogData}/>}/>
                <Route path='/content' render={ () => <Content PostItems={props.state.PostComp.PostItems}
                                                               AddPost={props.AddPost}
                                                               textValue={props.state.PostComp.Textvalue}
                                                               UpdateText={props.UpdateText}/>}/>
                <Route path='/music' render={ () => <Music/>}/>
                <Route path='/news' render= { () => <News NewsItems={props.state.NewsComp.NewsItems}/>}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
        </BrowserRouter>
    );

}

export default App;
