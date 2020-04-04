import React from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


const Swagger = () =>{
  return (
    <div>
      <SwaggerUI url="http://13.235.229.191:3001/docs/json" />
      <SwaggerUI url="http://13.235.229.191:3000/docs/json" />
      <SwaggerUI url="http://13.235.229.191:3006/docs/json" />
      <SwaggerUI url="http://13.235.229.191:3004/docs/json" />
      <SwaggerUI url="http://13.235.229.191:3007/docs/json" />
    </div>
  );
}

export default Swagger;