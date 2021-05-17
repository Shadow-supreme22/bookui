import { Component } from "react";
import { Link } from "react-router-dom";
import '../book.css';
class BlockBook extends Component{
    constructor(props){
        super(props);
        this.state={
            books:[],
            searchedBooks: [],
            netBooks:[],
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
        fetch('https://shadowvj.pythonanywhere.com/api/bookdatas/')
        .then((response)=>response.json())
        .then((data)=>{
            this.setState({books:data});
            var result=data.filter(obj=>obj.category=="blockchain");
            this.setState({netBooks:result})
        })
        .catch((error)=>{
            console.log(error);
        })

    }



    render(){
        const {books,netBooks}=this.state;
        
        return(
            <div>
                <div className='container-fluid'>
                    <div class='row'>
                    <div className="col-sm-3" style={{border:'2px solid black',width:'400px',height:'400px',padding: '30px',margin:'10px'}}>
                      <h4>Search Books</h4>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(event) => {
                  this.searchBooks(event);
                }}/>
          
            <div></div>
            <div className="col-md-12 search-results" >
          
              {this.state.searchedBooks.map((book, index) => (
                <Link key={book.id} to={"/onebook/" + book.id}>
                  <div className="result">
                    <ul> <li><strong style={{"backgroundColor":'white',}} >{book.bookname}</strong></li></ul>
                   
                    {/* style={{"backgroundRepeat":"no-repeat","fontSize":"16px",}} */}
                  </div>
                </Link>
              ))}
            </div>
            <hr></hr>
            <div>
              <h4>By category:-</h4>
              <Link to='/networking'>#Networking</Link>|<a href='/ux'>#UI/UX</a>|<a href='/database'>#Database</a><br></br>
              <a href='/ai'>#AI</a>|<a href='/blockchain'>#Blockchain</a>|<a href='/cloud'>#Cloud</a><br></br>
              <a href='/hardware'>#Hardware</a>|<a href='/programming'>#Programming</a>|<a href='/other'>#Others</a>
</div>            
        </div>
        <div class="col-lg-6">

                <div class="container">
                <hr></hr>    
                <h3 class="h3" style={{fontFamily:'fantasy',fontWeight:'bolder',fontSize:'30px'}} >Book Shelf</h3>
    <hr></hr>
    <div class="row">
    
    {netBooks.map(
                    book=>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid" key={book.id}>
                <div class="product-image">
                  
                        <img class="pic-1" src={book.screenshot}/>
                      
                </div>
              
                <div class="product-content">
                    <h3  style={{fontweight:'bold',fontsize:'50px'}}>{book.bookname}</h3>
                    
                    <a class="add-to-cart" href=""><Link to={"/onebook/" + book.id} className="btn btn-primary"> View</Link>
</a>
                </div>
            </div>
        </div>
        )}
        
        
    </div>
</div>
</div>
</div>
</div>

            </div>
        );
        }
    }

    

export default BlockBook;
