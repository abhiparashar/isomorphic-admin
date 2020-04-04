# ---
# to: app/<%= contractName %>.js
# ---
# import React, { Component } from 'react';
# import {useDispatch, useSelector} from 'react-redux';

# import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
# import LayoutContent from '@iso/components/utility/layoutContent';
# import {Divider, Collapse } from "antd";
# import MFCPInterface from "../../../components/MFCP/MFCP/mfcp_interface";

# const { Panel } = Collapse;
# const inputs = JSON.parse(localStorage.getItem("MFCPinputs"));

# function callback(key) {
# }

# function fetchAddress( name , type ){
#     let ret;
#     if ( type === 'PUT'){
#         let deployedContract = JSON.parse(localStorage.getItem("deployedList"));
#         deployedContract.map(function (i) {
#             if( i.name === name ){
#                 ret = i.address
#             }
#         }.bind(this))
#         return ret;
#     }else if( type === 'derived'){
#         let url = window.location.href;
#         url = url.split("?");
#         url = url[1].split("&");
#         url.map(function(i,j ){
#             let i1 = i.split('=');
#             if(i1[0] ==='address'){
#                 ret = i1[1];
#             }
#         }.bind(this))
#         return ret;
#     }
# }

# export default function <%= contractNameCC %>() {
#     const moduleName = "<%= module %>";
#     const contractName = '<%= contractName %>';
#     const contractType = '<%= contractType %>';
#     const address = fetchAddress(contractName , contractType);
#     const input = inputs[moduleName][contractType][contractName]
#     return (
#         <LayoutContentWrapper >
#             <LayoutContent>
#                 <h2><%= contractNameCC %></h2>
#                 <Divider/>
#                 <Collapse defaultActiveKey={[0]} onChange={callback}>
#                     {
#                         input.map(function (i,j) {
#                             return (
#                                 <Panel header={i.name} key={j}>
#                                     <MFCPInterface module={moduleName} contractName={contractName} contractType={contractType} address={address} functionName={i.name} functionType={i.type} Fields={i.inputs}/>
#                                 </Panel>
#                                 )
#                         })
#                     }
#                 </Collapse>
#             </LayoutContent>
#         </LayoutContentWrapper>
#     );
# }


