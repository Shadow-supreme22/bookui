import { Component } from "react";
import { Link } from "react-router-dom";
import './book.css';

class Bookone extends Component{
    constructor(props){
        super(props);
        this.state={
            books:[],
            searchedBooks: [],
        }

    }

    searchBooks = (event) => {
        let searchedValue = event.target.value;
    
        if (searchedValue.length !== 0) {
          let searchedBooks = this.state.books.filter((book) => {
            return (
              book.bookname.toLowerCase().includes(searchedValue.toLowerCase()) 
            );
          });
    
          this.setState({ searchedBooks: searchedBooks });
        } else {
          this.setState({ searchedBooks: [] });
        }
      };
    componentDidMount=()=>{
        fetch('https://shadowvj.pythonanywhere.com/api/bookdatas/'+this.props.match.params.id)
        .then((response)=>response.json())
        .then((data)=>{
            this.setState({books:data})
        })
        .catch((error)=>{
            console.log(error);
        })

    }

    render(){
        const {books}=this.state;

        return(
            <div>
                <div className='container-fluid'>
                    <div class='row'>
                        
                    <div className="col-sm-3.5" >
                    <div class="card" style={{boxShadow:'0 4px 8px 0 rgba(0,0,0,0,0.2)',transition:'0.3s',borderRadius:'5px'}} key={books.id}>
  <img src={books.screenshot} alt="Avatar" style={{width:'50rem'}}/>
  
</div>
                    
        </div>
        <div class="col-lg-6">
          <hr></hr>
          <h1 style={{fontFamily:'fantasy'}}>{books.bookname}</h1>
          <hr></hr>
          <h4>Author:- {books.author}</h4>
          <hr></hr>
          <h3>Description:-</h3>
          <p>{books.description}</p>
          <hr></hr>
          <button class="btn" style={{backgroundColor:'dodgerblue'}} ><a href={books.bookfile} target="_blank" download style={{color:'wheat'}}> Download</a></button>
                
        
        
        
    
</div>
</div>
</div>

            </div>
        );
        }
    }

    

export default Bookone;
