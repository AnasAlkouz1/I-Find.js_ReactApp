


import React,{useEffect,useRef,useState} from 'react'

import CopyCode_Icon_ss from './static/images/copy__c.svg' 
import CopyCode_Icon from './static/images/clipboard.svg' 
export default function Docs() {

const Link=useRef('<script type="text/javascript" src="/dist/_ifind.js"></script>')
const min_Link=useRef('<script  type="text/javascript" src="/dist/_ifind.min.js"></script>')
const [_link_c,SetLink_c]=useState(false)
const [_link_c_min,SetLink_c_min]=useState(false)

// const Block={display:''}

useEffect(()=>{
document.title='Docs'
},[])


useEffect(()=>{
setTimeout(function(){
SetLink_c(false)
},800)


},[_link_c])


useEffect(()=>{

setTimeout(function(){
SetLink_c_min(false)
},800)


},[_link_c_min])


const _copysrcLink=(_n)=>{
if(_n==1){
SetLink_c(true)
navigator.clipboard.writeText(Link.current)
}else{
SetLink_c_min(true) 
navigator.clipboard.writeText(min_Link.current)
}


}




    return (

<div className='_d_d_docsre0'>
<div className='ref755852'>
<div className='ref7557532tt'>Docs</div>

<div className='div_v_6437422_z'>
<div className='div_ref_f_t_rss'>How To Using I-Find.Js</div>
<div className='ref_t_5743743'>In a Browser:</div>

<div className='m_s_code_f'>
<div className='_div_t_u_u58534 f_46321'>
Include it on your page
</div>
<div className='div_r_r_g_r_r6533'>
<pre className='pre_c_i'>
<code className="_c563355">




<span className='scr'><span className='b5' >&lt;</span>script</span>
<span className='t_s'> type<span className='b3'>=</span><span className='_fs'>"<span></span>text<span>/</span><span>javascript</span>"</span></span>
<span className='t_s'> src<span className='b3'>=</span><span className='_fs'>"<span>/</span>dist<span>/</span><span>_ifind.js</span>"</span></span>
<span className='b5'>></span>
<span className='scr'><span  className='b5'>&lt;</span><span>/</span>script<span className='ml4 b5'>> </span></span>
</code>
</pre>
<div className='_d_i_c865756432 d_mt653372'>
<img src={CopyCode_Icon_ss} alt="_copy_si" style={_link_c==true ?  {display:'inline'} : {display:'none'} } />
<img src={CopyCode_Icon} alt="Code_Copy" onClick={()=>_copysrcLink(1)}/>
</div>  
</div>


<div className='div_r_r_g_r_r6533'>
<pre className='pre_c_i'>
<div className='_d_5375337'><span>///</span>Or</div>
<code className="_c563355">



<span className='scr'><span className='b5' >&lt;</span>script</span>
<span className='t_s'> type<span className='b3'>=</span><span className='_fs'>"<span></span>text<span>/</span><span>javascript</span>"</span></span>
<span className='t_s'> src<span className='b3'>=</span><span className='_fs'>"<span>/</span>dist<span>/</span><span>_ifind.min.js</span>"</span></span>
<span className='b5'>></span>
<span className='scr'><span  className='b5'>&lt;</span><span>/</span>script<span className='ml4 b5'>> </span></span>
</code>
</pre>
<div className='_d_i_c865756432 d_mt653373'>
<img src={CopyCode_Icon_ss} alt="_copy_si" style={_link_c_min==true ? {display:'inline'} : {display:'none'} } />
<img src={CopyCode_Icon} alt='Code_Copy' onClick={()=>_copysrcLink(2)}/>
</div>

</div>




<div className='div_r_r_g_r_r6533'>
<pre className='pre_c_i'>
<code className="_c563355 _flex_c _mb75433">



<span className='scr'><span className='b5' >&lt;</span>script <span className='t_s'>type<span className='b3'>=</span><span className='_fs'>"<span></span>text<span>/</span><span>javascript</span>"</span></span><span className='b5'>></span></span>
<span className='_mb7526'>
<span className='_f_c_d6533 _df'>
<span>console</span>
<span>.</span>
<span>log</span>
<span>(</span>
<span>_find</span>
<span>.</span>
<span>_fn</span>
<span>(</span>
<span>"2000 Hallo From Germany"</span>
<span>)</span>
<span>)</span>  
</span>
</span>


<span className='_s_p_r_6448532'><span>///</span><span>Output</span> <span>2000</span></span>

<span className='scr'><span  className='b5'>&lt;</span><span>/</span>script<span className='ml4 b5'>> </span></span>
</code>
</pre>




</div>




</div>


</div>

<div className='div_v_6437422_z'>
<div className="div_ref_f_t_rss">Here is a List of the I-find.js Methods Available:</div>
<div className='ref_t_5743746'>
<div className='_t_t56422'>_fn</div>This method takes the numbers out of the text and then return the extracted number !! in case there is no number in the text that 
<span className='_r_cc'>return</span> <span className='_n_cc'>null,</span>
</div>
<div className='m_s_code_f'>
<div className='_div_t_u_u588744'>

<pre className='pre_c_i'>
<code className="_c5636883">

<span className='_span_s_t_s_t'>
    <span>_find</span>
    <span>.</span>
    <span>_fn</span>  
    <span>(</span>   
    <span>string</span>   
    <span>)</span>  
</span>
<span className='m6375322'><span>///</span>Examples</span>
<span className="_mb7526">
<span className="_f_c_d6533 _df">
<span>console</span>
<span>.</span>
<span>log</span>
<span>(</span>
<span>_find</span>
<span>.</span>
<span>_fn</span>
<span>(</span>
<span>"2000 Hallo From Germany"</span>
<span>)</span>
<span>)</span>  
</span>
</span>
<span className="_s_p_r_64485763"><span>///</span><span>Output</span> <span>2000</span></span>

</code>
</pre>





</div>




</div>

<div className='ref_t_5743746'>
<div className='_t_t56422'>_ft</div>This method takes the numbers from the text and return the text from the non-numbers  !!! in case there no characters in the text that
<span className='_r_cc'>return</span> <span className='_n_cc'>null,</span>

</div>
<div className='m_s_code_f'>
<div className='_div_t_u_u588744'>

<pre className='pre_c_i'>
<code className="_c5636883">

<span className='_span_s_t_s_t'>
<span>_find</span>
<span>.</span>
<span>_ft</span>  
<span>(</span>   
<span>string</span>   
<span>)</span>  
</span>
<span className='m6375322'><span>///</span>Examples</span>
<span className="_mb7526">
<span className="_f_c_d6533 _df">
<span>console</span>
<span>.</span>
<span>log</span>
<span>(</span>
<span>_find</span>
<span>.</span>
<span>_ft</span>
<span>(</span>
<span>"2000 Hallo From Germany"</span>
<span>)</span>
<span>)</span>  
</span>
</span>
<span className="_s_p_r_64485763"><span>///</span><span>Output</span> <span>Hallo From Germany</span></span>

</code>
</pre>





</div>




</div>



<div className='ref_t_5743746'>
<div className='_t_t56422'>_ftn</div>This method separates the numbers from the text and vice versa,and return Array
[<span className='_r_c422'> the original text,characters extracted, numbers extracted </span>]
!!! in case there no characters or numbers  in the text that 
<span className='_r_cc'>return</span> <span className='_n_cc'>null,</span>

</div>
<div className='m_s_code_f'>
<div className='_div_t_u_u588744'>

<pre className='pre_c_i'>
<code className="_c5636883">

<span className='_span_s_t_s_t'>
<span>_find</span>
<span>.</span>
<span>_ftn</span>  
<span>(</span>   
<span>string</span>   
<span>)</span>  
</span>
<span className='m6375322'><span>///</span>Examples</span>
<span className="_mb7526">
<span className="_f_c_d6533 _df">
<span>console</span>
<span>.</span>
<span>log</span>
<span>(</span>
<span>_find</span>
<span>.</span>
<span>_ftn</span>
<span>(</span>
<span>"2000 Hallo From Germany"</span>
<span>)</span>
<span>)</span>  
</span>
</span>
<span className="_s_p_r_64485763">
<span>///</span>
<span>Output</span> 
<span>["2000 Hallo From Germany",

 "Hallo From Germany",

  2000 ]</span>


</span>

<span className='m6375322'><span>///</span>Another Examples</span>
<span className="_mb7526">
<span className="_f_c_d6533 _df">
<span>console</span>
<span>.</span>
<span>log</span>
<span>(</span>
<span>_find</span>
<span>.</span>
<span>_ftn</span>
<span>(</span>
<span>"Hallo From Germany"</span>
<span>)</span>
<span>)</span>  
</span>
</span>
<span className="_s_p_r_64485763">
<span>///</span>
<span>Output</span> 
<span>["Hallo From Germany",

 "Hallo From Germany",

  <span className="_s_r_n_z_67433">null</span> ]</span>


</span>



</code>
</pre>





</div>




</div>


<div className='ref_t_5743746'>
<div className='_t_t56422'>_r_all_s</div>
<div className='r547432'>This method removing all spaces from text,</div>
</div>
<div className='m_s_code_f'>
<div className='_div_t_u_u588744'>

<pre className='pre_c_i'>
<code className="_c5636883">

<span className='_span_s_t_s_t'>
<span>_find</span>
<span>.</span>
<span>_r_all_s</span>  
<span>(</span>   
<span>string</span>   
<span>)</span>  
</span>
<span className='m6375322'><span>///</span>Examples</span>
<span className="_mb7526">
<span className="_f_c_d6533 _df">
<span>console</span>
<span>.</span>
<span>log</span>
<span>(</span>
<span>_find</span>
<span>.</span>
<span>_r_all_s</span>
<span>(</span>
<span>"2000 Hallo From Germany"</span>
<span>)</span>
<span>)</span>  
</span>
</span>
<span className="_s_p_r_64485763"><span>///</span><span>Output</span> <span>2000HalloFromGermany</span></span>

</code>
</pre>





</div>




</div>


<div className='ref_t_5743746'>
<div className='_t_t56422'>_r_m_s</div>
<div className='r547432'>This method removes repeated spaces and makes only space available in the text,</div>
</div>
<div className='m_s_code_f'>
<div className='_div_t_u_u588744'>

<pre className='pre_c_i'>
<code className="_c5636883">

<span className='_span_s_t_s_t'>
<span>_find</span>
<span>.</span>
<span>_r_m_s</span>  
<span>(</span>   
<span>string</span>   
<span>)</span>  
</span>
<span className='m6375322'><span>///</span>Examples</span>
<span className="_mb7526">
<span className="_f_c_d6533 _df">
<span>console</span>
<span>.</span>
<span>log</span>
<span>(</span>
<span>_find</span>
<span>.</span>
<span>_r_m_s</span>
<span>(</span>
<span>"2000   Hallo      From       Germany"</span>
<span>)</span>
<span>)</span>  
</span>
</span>
<span className="_s_p_r_64485763"><span>///</span><span>Output</span> <span>2000 Hallo From Germany</span></span>

</code>
</pre>





</div>




</div>



<div className='ref_t_5743746'>
<div className='_t_t56422'>_fsl</div>
<div className='r547432'>
This method is extract small characters from the text. In case there no small characters that
<span className="_r_cc">return</span>
<span className="_n_cc">null,</span>
</div>

</div>
<div className='m_s_code_f'>
<div className='_div_t_u_u588744'>

<pre className='pre_c_i'>
<code className="_c5636883">

<span className='_span_s_t_s_t'>
<span>_find</span>
<span>.</span>
<span>_fsl</span>  
<span>(</span>   
<span>string</span>   
<span>)</span>  
</span>
<span className='m6375322'><span>///</span>Examples</span>
<span className="_mb7526">
<span className="_f_c_d6533 _df">
<span>console</span>
<span>.</span>
<span>log</span>
<span>(</span>
<span>_find</span>
<span>.</span>
<span>_fsl</span>
<span>(</span>
<span>"2000 Hallo From Germany"</span>
<span>)</span>
<span>)</span>  
</span>
</span>
<span className="_s_p_r_64485763"><span>///</span><span>Output</span> <span>alloromermany</span></span>

</code>
</pre>





</div>




</div>

<div className='ref_t_5743746'>
<div className='_t_t56422'>_fcl</div>
<div>
This method is extract capital characters from the text. In case there no capital characters that 
<span className="_r_cc">return</span>
<span className="_n_cc">null,</span>
</div>

</div>
<div className='m_s_code_f'>
<div className='_div_t_u_u588744'>

<pre className='pre_c_i'>
<code className="_c5636883">

<span className='_span_s_t_s_t'>
<span>_find</span>
<span>.</span>
<span>_fcl</span>  
<span>(</span>   
<span>string</span>   
<span>)</span>  
</span>
<span className='m6375322'><span>///</span>Examples</span>
<span className="_mb7526">
<span className="_f_c_d6533 _df">
<span>console</span>
<span>.</span>
<span>log</span>
<span>(</span>
<span>_find</span>
<span>.</span>
<span>_fcl</span>
<span>(</span>
<span>"2000 Hallo From Germany"</span>
<span>)</span>
<span>)</span>  
</span>
</span>
<span className="_s_p_r_64485763"><span>///</span><span>Output</span> <span>HFG</span></span>

</code>
</pre>





</div>




</div>



</div>



</div>



</div>

    
    )
}
