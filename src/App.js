


import React,{useEffect} from 'react'
import {BrowserRouter} from 'react-router-dom'
import './compoent/static/css/main.css'
import './compoent/static/css/docs.css'


import _Navbar from './compoent/navbar'
import Footer from './compoent/footer'
function App() {



return (
<BrowserRouter>
<>
<_Navbar/>
<Footer/>
</>
</BrowserRouter>
);
}

export default App;
