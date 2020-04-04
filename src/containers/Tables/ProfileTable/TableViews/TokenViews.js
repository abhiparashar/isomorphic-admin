import React from "react";
import TableWrapper, { CustomizedTableWrapper } from "../AntTables.styles";
import Switch from "@iso/components/uielements/switch";
import Form from "@iso/components/uielements/form";
import Swagger from "./Swagger";

const FormItem = Form.Item;

const expandedRowRender = () => <Swagger url="http://13.235.229.191:3006/docs/json" />;

export default function (props) {
    const [state, setState] = React.useState({
        bordered: undefined,
        //loading: undefined,
        //pagination: true,
        size: "default",
        expandedRowRender,
    });

    // function renderSwitch(option) {
    //   const checked = state[option.key] !== undefined;
    //   const onChange = () => {
    //     if (!checked) {
    //       setState({ [option.key]: option.defaultValue });
    //     } else {
    //       setState({ [option.key]: undefined });
    //     }
    //   };
    //   return (
    //     <FormItem label={option.title} key={option.key}>
    //       <Switch checked={checked} onChange={onChange} />
    //     </FormItem>
    //   );
    // }
    return (
        <CustomizedTableWrapper className='isoCustomizedTableWrapper'>
            <div className='isoCustomizedTableControlBar'>
                {/* <Form layout='inline'>
          {toggleOptions.map(option => renderSwitch(option))}
        </Form> */}
            </div>
            <TableWrapper
                {...state}
                columns={props.tableInfo.columns}
                dataSource={props.dataList.getAll()}
                className='isoCustomizedTable'>
                <Swagger />
            </TableWrapper>
        </CustomizedTableWrapper>
    );
}
