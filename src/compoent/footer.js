


import React,{useRef,memo} from 'react'
import tw__sm from './static/images/tw__sm.svg'
import styled from 'styled-components'

const Div_f=styled.div`
font-size: 18px;
color: #dedede;
letter-spacing: 1px;
display: flex;

div{
    color: #6c757d;
    margin-top: 6px;
    margin-right: 1rem;
}
img{
    width: 30px;
}

`


function Footer() {
const _link_Github_profile=useRef('https://github.com/AnasAlkouz1')

return (
<>
<div className='f_f_g_647533753'>
<div className='_di_c_r_r_r_7544722'>
I-Find.js <span>Creator</span> 
<a className='a_f_t_5355322' href={_link_Github_profile}>Anas Alkouz</a>
<span>,</span>
</div>
<Div_f>
<div>Best Regards And Enjoy</div>
<img src={tw__sm}/>
</Div_f>

</div>

</>
)
}

export default memo(Footer)