import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Book from "./book.js";
import Bookone from "./oneBook";
import './sidebar.css';
import Search from "./Searchbook";
import NetBook from "./category/networkingbook";
import OtherBook from "./category/otherbooks";
import ProBook from "./category/programmingbooks";
import UxBook from "./category/Uibooks";
import AiBook from "./category/aibooks";
import BlockBook from "./category/blockchainbooks";
import CloudBook from "./category/cloudbooks";
import DataBook from "./category/databasebooks";
import HardBook from "./category/hardwarebooks";







export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.username = localStorage.getItem("userName");
    this.state = {
      books: [],
      searchedBooks: [],
    };
  }

 



  componentDidMount = () => {
    // fethching all the users

    fetch("https://shadowvj.pythonanywhere.com/api/bookdatas/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ books: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  

  logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authStatus");
    localStorage.removeItem("userID");
    this.props.history.replace("/login");
  };


  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md  navbar-dark bg-primary" style={{color:'wheat'}}>
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" style={{fontFamily:"fantasy",fontSize:"35px",fontWeight:"bold"}}>
              Ebook Archive
            </Link>
            
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  
                </li>
                
              </ul>
              {/* <Link to="/search" className="navbar-brand" style={{fontFamily:"fantasy",fontSize:"35px",fontWeight:"bold"}}>
              Search
            </Link> */}
             
            
            </div>
            
              
                
                

          </div>
          <button type="button" class="btn btn-default btn-sm" onClick={() => {
                      this.logout();
                    }}>
          <span class="glyphicon glyphicon-log-out"></span> Log out
        </button>
        
          <div>
            
          
          
            </div>
            
        </nav>
      



        

        <Switch>
          <Route path="/" exact component={Book} />
          <Route path="/search" exact component={Search} />
          <Route path="/networking" exact component={NetBook} />
          <Route path="/ai" exact component={AiBook} />
          <Route path="/blockchain" exact component={BlockBook} />
          <Route path="/hardware" exact component={HardBook} />
          <Route path="/programming" exact component={ProBook} />
          <Route path="/cloud" exact component={CloudBook} />
          <Route path="/other" exact component={OtherBook} />
          <Route path="/database" exact component={DataBook} />
          <Route path="/ux" exact component={UxBook} />
          <Route path="/onebook/:id" exact component={Bookone} />
        </Switch>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>

      </div>
    );
  }
}
