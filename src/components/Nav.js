import { Link } from "react-router-dom";

const Nav =  () => {

    const Links = [
        {
            text:"Home",
            to:"/"
        },

        {
            text:"Starred",
            to:"/Starred"
        }
    ]

    return(
        <div>
           <ul>
            {
              Links.map(item =>   <li key={item.to}> 
               <Link to ={item.text} > {item.text} </Link>
              
               </li>)
            }
            
           </ul>
        </div>
    )


}

export default Nav;