import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import User from './user/User';
import Admin from './admin/Admin'
import CreatePost from './user/landing/create-post/CreatePost';
import Explore from './admin/landing/explore/Explore';
import ImageUpload from './ImageUpload/ImageUpload';
import ResultDetail from './admin/results/ResultDetails';
<<<<<<< HEAD
import MyPosts from './user/landing/my-posts/MyPosts';
=======
import Search from './admin/landing/search/Search';
>>>>>>> master

class App extends Component {

 render() {
   return (
     <Router>
       <div>
         {/* ==== User routes below ==== */}
         <Route path="/user" exact render={() => <User />} />
         <Route path="/user/createPost" exact render={() => <CreatePost />} />
         <Route path="/user/myposts" exact render={() => <MyPosts/>} />
         {/* ==== Admin routes below ==== */}
         <Route path="/admin" exact render={() => <Admin />}/>
         <Route path="/admin/explore" exact render={() => <Explore />} />
         <Route path="/admin/search" exact render={() => <Search />} />
         <Route path="/admin/resultdetails/:id" exact render={({match}) => <ResultDetail match={match} />} />
          <Route path="/imageUpload" exact render={() => <ImageUpload/>}/>
       </div>
     </Router>
   );
 }
}
export default App;