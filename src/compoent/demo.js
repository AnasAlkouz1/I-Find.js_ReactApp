



import React,{useEffect} from 'react'
import {_f_all,_f} from './static/js/find_app';
export default function Demo() {
useEffect(()=>{
document.title='Demo'

const __rendom_text=[
'1000 Hallo From Germany',
'Phone Number is 000810021996',
'Germany is Beautiful visit It',
'The area of the Earth is 510   100       000 K     m',
'465475645355643',
]

const __response_e=[
'This Text Does not contain Number',
'This Text Does not contain Characters',
'This Text Does not contain Text',
]


const __cheng_content_ex=function(){
const __n=Math.floor(Math.random() * __rendom_text.length  )
let _t=__rendom_text[__n]
let __t=_f_all._all(_t)
document.querySelector('.txt647533').innerHTML=__t[0];
const _t_nn=document.querySelector('._r644742')
const _t_tt=document.querySelector('._r644743')
const _t_sl=document.querySelector('._r644744')
const _t_gl=document.querySelector('._r644745')

const _t_RAS=document.querySelector('._r644746')
const _t_RMO=document.querySelector('._r644747')
if(__t[1]==null){
_t_nn.classList.add('_r464356_cce')
_t_nn.innerHTML=__response_e[0]
}else{
_t_nn.classList.remove('_r464356_cce')
_t_nn.innerHTML=__t[1]
}
if(__t[2]==null){
_t_tt.classList.add('_r464356_cce')
_t_tt.innerHTML=__response_e[1]
}else{
_t_tt.classList.remove('_r464356_cce')
_t_tt.innerHTML=__t[2]
}



if(__t[6]==null){
_t_sl.classList.add('_r464356_cce')
_t_sl.innerHTML=__response_e[1]
}else{
_t_sl.classList.remove('_r464356_cce')
_t_sl.innerHTML=__t[6]
}
if(__t[7]==null){
_t_gl.classList.add('_r464356_cce')
_t_gl.innerHTML=__response_e[1]
}else{
_t_gl.classList.remove('_r464356_cce')
_t_gl.innerHTML=__t[7]
}


if(__t[5]==null){
_t_RAS.classList.add('_r464356_cce')
_t_RAS.innerHTML=__response_e[2]
}else{
_t_RAS.classList.remove('_r464356_cce')
_t_RAS.innerHTML=__t[5]
}
if(__t[4]==null){
_t_RMO.classList.add('_r464356_cce')
_t_RMO.innerHTML=__response_e[2]
}else{
_t_RMO.classList.remove('_r464356_cce')
_t_RMO.innerHTML=__t[4]
}





}
__cheng_content_ex()
let _btn=document.querySelector('._div_v_5376437522_rrT');
_btn.addEventListener('click',__cheng_content_ex)









},[])


return (


        <div className='__con_v0'>
        
        
        
        <div className='_con_v0_cc_v0'>
        <div className='ref755852'>
        <div className='ref476433893'>Separate the texts from the numbers and the characters and distances with<span className='_span_5356722'>I-Find.Js</span></div>
        
        
        
        <div className='ref7557532tt'>Demo</div>
        </div>
        <div className='ref755853'>
        <div className='ref_f_559754468'>
        <div className='txt647533'></div>
        <div className='ref_css_p_t_in635733'>
        <div className='txt_r_c_6475334'>The Nummber:<span className='span_c_f_rt5436 _r644742'></span></div>
        <div className='txt_r_c_6475334'>The Characters:<span className='span_c_f_rt5436 _r644743'></span></div>
        <div className='txt_r_c_6475334'>Small Letters:<span className='span_c_f_rt5436 _r644744'></span></div>
        <div className='txt_r_c_6475334'>Big Letters:<span className='span_c_f_rt5436 _r644745'></span></div>
        <div className='txt_r_c_6475334'>Remove More Than Spaces:<span className='span_c_f_rt5436 _r644746'></span></div>
        <div className='txt_r_c_6475334'>Remove All Spaces:<span className='span_c_f_rt5436 _r644747'></span></div>
        </div>
        
        
        
        </div>
        
        
        
        </div>
        <div className='_div_v_5376437522_rrT'>Rendom Text</div>
        
        
        
        </div>
        
        
        
        </div>
        
        
        
)
}
