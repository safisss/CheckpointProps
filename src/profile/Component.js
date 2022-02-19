 
import React from 'react';
import propTypes from 'prop-types';

const Component = props => {
  return (
    <div style={{color:"purple", backgroundColor:"pink", textAlign:"center"}}>
        <h1 onClick={props.handleName(props.FullName)}> My FullName is : {props.FullName}  </h1>
        <hr />

        <h1> My Bio : {props.Bio} </h1>
        <hr />
       
        <h1> My Profession is : {props.Profession} </h1>
        <hr />
       
        
        <div> 
            <h1> My children data is : <br/> {props.children} </h1>
            {props.im}
            {/* default Props */} 
            </div> 
          
    </div>
  );
}

export default Component;
 
Component.defaultProps = {
    im : 'Loading'
}

Component.propTypes = {
    FullName : propTypes.string, Bio: propTypes.string, Profession: propTypes.string
}
