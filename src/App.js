import './App.css';
import Content from "./components/Content_folder/content.jsx";
import Header from "./components/Header_folder/Header.jsx";
import Navbar from "./components/Nav_folder/Nav.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music_folder/Music";
import News from "./components/News_folde/News";
import Settings from "./components/Settings_folder/Settings"
import {BrowserRouter, Route} from "react-router-dom";
import store from "./redux/state";




function App(props) {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            {/*       <Content />*/}
            <div class='app-wrapper-content'>
                <Route path='/dialogs' render={ () => <Dialogs store={props.store}/>}/>
                <Route path='/content' render={ () => <Content PostItems={props.state.PostComp.PostItems}
                                                               dispatch={props.dispatch}
                                                               textValue={props.state.PostComp.Textvalue}
                                                               />}/>
                <Route path='/music' render={ () => <Music/>}/>
                <Route path='/news' render= { () => <News NewsItems={props.state.NewsComp.NewsItems}/>}/>
                <Route path='/settings' component={Settings}/>
                {/*slozhno pizda*/}
            </div>
        </div>
        </BrowserRouter>
    );

}

export default App;
