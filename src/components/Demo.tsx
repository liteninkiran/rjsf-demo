import Form from '@rjsf/core';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

const Demo = () => {
  function transformErrors(errors: any, uiSchema: any) {
    return errors.map((error: any) => {
      if (error.name === 'pattern') {
        error.message = 'Only digits are allowed';
      }
      return error;
    });
  }

  const schema: RJSFSchema = {
    type: 'object',
    properties: {
      onlyNumbersString: { type: 'string', pattern: '^\\d*$' },
    },
  };

  return (
    <Form
      schema={schema}
      validator={validator}
      transformErrors={transformErrors}
    />
  );
};
export default Demo;
