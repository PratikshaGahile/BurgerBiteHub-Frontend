import React from "react"; 
import {AiFillInstagram ,AiFillGithub,AiFillLinkedin} from "react-icons/ai";
const Footer =()=>{
return (
    <footer> 
        <div> 
            <h2>MBA Burger Wala</h2> 

            <p> we Are trying to view the best taste possible . </p> 
            <br/> 

            <em> We give the attension to genuine feedback . </em>

            <strong> All right recevied @mbaburgerwala </strong>
        </div> 
        <aside> 
            <h4>Follw us </h4>  

            <a href=" https://www.instagram.com/pratu_gahile/"> 
            <AiFillInstagram/>
            </a> 

            <a href="https://github.com/PratikshaGahile "> 
            <AiFillGithub/>   
            </a> 
            
            <a href=" https://www.linkedin.com/feed/">
            <AiFillLinkedin/>
            </a> 


        </aside>
    </footer>
);

}
export default  Footer; 
