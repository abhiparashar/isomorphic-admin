import React from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


const Swagger = (props) =>{
  return (
    <div>
      <SwaggerUI url={props.url} />
    </div>
  );
}

export default Swagger;