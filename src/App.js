import logo from './logo.svg';
import './App.css';
import { useStatevalue } from './ccontext/stateProvider';

function App() {
  const [{user},dispatch]=useStatevalue();
  return (
    <div className="flex  flex-col justify-center items-center w-full h-screen font-bold text-slate-900 bg-slate-400 ">
  <p>Hello template</p>
  <button className='bg-white p-2' onClick={()=>{
    dispatch({
      type: 'User',
      user: "Ahmad"
    })
  }}>Update Redux Value</button>
  <button>Update Value:{user.toString()}</button>
    </div>
  );
}

export default App;
