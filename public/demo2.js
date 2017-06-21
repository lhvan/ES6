class Note extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      num: 10
    };
    this.add = this.add.bind(this);
  }
  add(){
    this.setState({
      num: ++this.state.num
    })
  }
  render(){
    return(
      <div>
        <p>{this.props.txt}</p>
        <p>Students : {this.state.num}</p>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}
Note.defaultProps = {
  txt: "Le hong van subject"
}


ReactDOM.render(
  <div>
    <Note />
    <Note txt="NodeJs" />
  </div>
  , document.getElementById('root')
);
