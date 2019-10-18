import React, { Component, Suspense, lazy } from 'react'
import Navbar from './components/Navbar';
import { Route, Switch, withRouter, Redirect} from 'react-router-dom';
import TopLoader from './components/childs/FallBackLoader';
import LoadingBar from "react-top-loading-bar";


// all lazy load component
const Home = lazy(()=> import('./components/Home'));
const About = lazy(()=> import('./components/About'));
const Contact = lazy(()=> import('./components/Contact'));
const Posts = lazy(()=> import('./components/Posts'));
const Post = lazy(()=> import('./components/Post'));


class RootRoute extends Component {
    state = {
        loadingBarProgress:20
    }
    onLoaderFinished(){
        this.setState({
            loadingBarProgress: 0
        });
    }
  

    fallbackMounteIncrement(unmounted){
       if(this.state.loadingBarProgress < 70 && !unmounted){
        console.log(unmounted)
          this.setState({
                loadingBarProgress: this.state.loadingBarProgress + 3
          });
       }else{
            this.setState({
               loadingBarProgress: 100
           }); 
       }
    }

    render() {
        return (
            <div>
             <Navbar/>
             <LoadingBar
                progress={this.state.loadingBarProgress}
                height={4}
                color="#B39DDB"
                onLoaderFinished={() => this.onLoaderFinished()}
              />
             <Suspense fallback={
                 <TopLoader progressHandle = {this.fallbackMounteIncrement.bind(this)}  />
                }>
                <Switch>
                    <Redirect  from="/" exact to="/home" />
                    <Route path="/home" render={(props)=>{
                        return <Home {...props} />
                    }} />
                    <Route path="/posts" strict exact render={(props)=>{
                        return <Posts {...props} />
                    }} />
                    <Route path="/posts/:id" render={(props)=>{
                        return <Post {...props} />
                    }} />

                    <Route path="/contact" render={(props)=>{
                        return <Contact {...props} />
                    }} />
                    <Route path="/about" render={(props)=>{
                        return <About {...props} />
                    }} />

                    <Route path="*">
                      <h2>404.Page Not Found</h2>
                    </Route>
                </Switch>
              </Suspense>
            </div>
        )
    }
}

export default withRouter(RootRoute);