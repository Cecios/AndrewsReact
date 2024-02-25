import { nanoid } from 'nanoid';
import arrayNavLinks from '../../data/arrayLinks.js'
import './links.css';

const Links = ()=>{
    return (
        <>
            <ul className='links'>
            {arrayNavLinks.map((element) => {
                    return (
                        <li key={nanoid()}><a href="#">{element}</a></li>
                    )
                })}

            </ul>
        </>
    )
}
export default Links;

