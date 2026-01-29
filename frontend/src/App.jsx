import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Hooks from './Hooks/Hooks'
import Counter from './components/Counter'
import  {Route,Routes} from 'react-router-dom'
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import UseEffectApi from './Hooks/UseEffectApi'
import UseRef from './Hooks/UseRef'
import UseCallBack from './Hooks/UseCallback'
import Login from './Auth/Login'
import Signedup from './Auth/Signedup'
import UseMemo from './Hooks/Usememo'
import UseReducer from './Hooks/UseReducer'
const element=<h1>Hello</h1>
const App = () => {
  return (
    <>
    <h1>Hello</h1>
    <Navbar/>
    
   <Routes>
    <Route path='/' element={<Home name="A.pooja"/>}/>
    <Route path='/about' element={<About name="A.pooja" age={25} dept="Cyber Security"/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/contact'element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signedup' element={<Signedup/>}/>
    <Route path='/hook' element={<Hooks/>}>
    <Route path='useState'element={<UseState/>}/>
    <Route path='useEffect' element={<UseEffect/>}/>
    <Route path='useEffectApi' element={<UseEffectApi/>}/>
    <Route path='useRef' element={<UseRef/>}/>
    <Route path='useReducer' element={<UseReducer/>}/>
    <Route path='useMemo' element={<UseMemo/>}/>
    <Route path='useCallBack' element={<UseCallBack/>}/>
    </Route>
   </Routes>
   </>
  )
}
export default App