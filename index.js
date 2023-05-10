
let score =0; 
let wicket =0; 
 let ballwise = []; 
  let hit=0; 
   let inputRef = React.createRef(); 

  function Score(){
    
      return (
         
        <>
        <div>
        <button onClick={()=>{
            addScore(0); 
        }}> 0 </button>    
        <button onClick = {()=>{    // to call the paremterized function inside jsx embedd it in inlne function 
            addScore(1); 
        }}> 1 </button>               
        <button onClick={()=>{
            addScore(2); 
        }}> 2 </button>
        <button onClick={()=>{
            addScore(3); 
        }}> 3 </button>
        <button onClick={()=>{
            addScore(4); 
        }}> 4 </button>
        <button onClick={()=>{
            addScore(5); 
        }}> 5 </button>
        <button onClick={()=>{
            addScore(6); 
        }}> 6 </button>
        <button onClick={addWicket}>  wicket </button>  
        

     </div>

        </>
     )
  }

 function App(){
 


   


    return (<>
    <h1>Score Keeper </h1>
    <h2> Score: {score} / {wicket}</h2>
    <Score/>
     {/* <Result/> */}
      <br></br>
     <Form/>
      <hr></hr>
       <div>
         {ballwise.map((num, index)=><p key={index}>{num}</p>)}
       </div>
      
     
    

       
      
    
    </>)
 }

   function addScore(num){
     hit = num; 
     
          root.render(<App/>); 
   
     }
    
    function addWicket(){
            hit = "W"; 
            root.render(<App/>); 
             
         
     
    }
     

      function submit(e){
         e.preventDefault(); 
       
          if(hit=="W"){
             wicket++; 
          }else{
             score+=hit; 
          }
          ballwise.unshift(<span>{`${hit}, ${inputRef.current.value}`}</span>); 
          hit =0 ; 
          inputRef.current.value = ""; 
         
         root.render(<App/>)
      }
    
      function Form(){
         return (
             <>
             <form onSubmit={submit}>
                <input type="text" value={hit}></input>
                <input type="text" placeholder= "Add commment here" ref={inputRef}></input>
                <input type="submit"></input>
             </form>
             </>
         )

      }
          
            
           
              
        
         
      
    
 const root = ReactDOM.createRoot(document.getElementById("root")); 
 root.render(<App/>); 
 
 
