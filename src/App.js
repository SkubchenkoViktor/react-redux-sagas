import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {NoMatch} from './containers/NoMatch';
import {Layout} from './components/Layout.jsx';
import {NavigationBar} from './components/NavigationBar.jsx';
import "./css/common.css"
import TypesPage from "./containers/TypesPage";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import {LINKS, getPlaces} from "./repo/LocalRepository";
import BriefPage from "./containers/BriefPage";
import FullPage from "./containers/FullPage";
import MapPage from "./containers/MapPage";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <NavigationBar/>
                    {/*<Jumbotron />*/}
                    <div className="bg">
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md={5}>
                                    <Layout>
                                        <Switch>
                                            <Route path="/places/:id" component={FullPage}/>

                                            <Route exact path="/" component={TypesPage}/>
                                            {
                                                LINKS.map(link => {
                                                    const path = `/${link}`
                                                    return <Route path={path} component={BriefPage}/>
                                                })
                                            }

                                            <Route component={NoMatch}/>
                                        </Switch>
                                    </Layout>
                                </MDBCol>

                                <MDBCol md={2}/>

                                <MDBCol md={5}>
                                    <MapPage />
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;