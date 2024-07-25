import Form from '@rjsf/core';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

const Demo = () => {
  function transformErrors(errors: any, uiSchema: any) {
    return errors.map((error: any) => {
      if (error.name === 'pattern') {
        error.message = 'Only digits are allowed';
      }
      if (error.name === 'minLength') {
        error.message = 'Minimum length is 5';
      }
      return error;
    });
  }

  const schema: RJSFSchema = {
    type: 'object',
    properties: {
      onlyNumbersString: { type: 'string', pattern: '^\\d*$' },
      otherString: { type: 'string', minLength: 5 },
    },
  };

  return (
    <Form
      schema={schema}
      validator={validator}
      transformErrors={transformErrors}
      noHtml5Validate={true}
      liveValidate={true}
    />
  );
};
export default Demo;
