import './App.css';
const App1 = () => {
  const handleClick = () => {
    alert("Message from Javascript alert!");
    console.log("Message to developer");
  }
  return (
    <div>
     <button onClick={() => handleClick()}>Submit</button>
    
    </div>
  );    
}
export default App1;