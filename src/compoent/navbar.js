


import React,{useState} from 'react'
import GitHubIcon from '../compoent/static/images/github-outline-fill.svg'
import GitHubIcon_ww from '../compoent/static/images/github-outline-fill_ww.svg'
import {NavLink,Routes,Route } from 'react-router-dom'
import Docs from './docs'
import Demo from './demo'
let _github_l_link='https://github.com/AnasAlkouz1/I-Find.js';
function _Navbar_content() {
const [hover,Sethover]=useState(true)


return (
<div className='_nav'>
<div className='_r5325'><span>I-Find</span><span className='_span_f_5645453742'>.</span><span className='_span_f_564545374'>Js</span></div>
<div className='_r76548'>
<NavLink to='/' className={({isActive})=> isActive ? '_r_c76548 r_c_86543843 _exa' : '_r_c76548 _exa'} >Demo</NavLink>
<NavLink to='/docs' className={({isActive})=> isActive ? '_r_c76548 r_c_86543843 _doc' : '_r_c76548 _doc'}>Docs</NavLink>
<a href={_github_l_link} className='_a_l_t6576322' onMouseEnter={()=>Sethover(!hover) } onMouseLeave={()=>Sethover(!hover) }><img src={hover ? GitHubIcon : GitHubIcon_ww } className='_icon_b' id='_img52672'/></a>
</div>
</div>
)
}

export default function _Navbar() {
return (
<>
<_Navbar_content/>
<Routes>
<Route path='/' element={<Demo/>}/>
<Route path='/docs' element={<Docs/>}/>
</Routes>
</>
)
}