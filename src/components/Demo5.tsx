import Form from '@rjsf/core';
import { RJSFSchema, UiSchema, WidgetProps, RegistryWidgetsType } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

const MyCustomWidget = (props: WidgetProps) => {
  return (
    <input
      type='text'
      className='custom'
      value={props.value}
      required={props.required}
      onChange={(event) => props.onChange(event.target.value)}
    />
  );
};

const widgets: RegistryWidgetsType = {
  myCustomWidget: MyCustomWidget,
};

const schema: RJSFSchema = {
  type: 'string',
};

const uiSchema: UiSchema = {
  'ui:widget': 'myCustomWidget',
};

const Demo5 = () => {
  return <Form schema={schema} uiSchema={uiSchema} validator={validator} widgets={widgets} />;
};
export default Demo5;
