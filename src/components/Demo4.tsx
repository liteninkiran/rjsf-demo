import Form from '@rjsf/core';
import { RJSFSchema, UiSchema, WidgetProps } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

const schema: RJSFSchema = {
  type: 'string',
};

const uiSchema: UiSchema = {
  'ui:widget': (props: WidgetProps) => {
    return (
      <input
        type="text"
        className="custom"
        value={props.value}
        required={props.required}
        onChange={(event) => props.onChange(event.target.value)}
      />
    );
  },
};

const Demo4 = () => {
  return <Form schema={schema} uiSchema={uiSchema} validator={validator} />;
};
export default Demo4;
