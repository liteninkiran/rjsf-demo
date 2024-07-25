import Form from '@rjsf/bootstrap-4';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

const Demo3 = () => {
  return (
    <Form
      formData={formData}
      schema={schema}
      uiSchema={uiSchema}
      validator={validator}
      noHtml5Validate={true}
      liveValidate={true}
    />
  );
};
export default Demo3;

const schema: RJSFSchema = {
  title: 'Contextualized errors',
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
      title: 'First name',
      minLength: 8,
      pattern: '\\d+',
    },
    active: {
      type: 'boolean',
      title: 'Active',
    },
    skills: {
      type: 'array',
      items: {
        type: 'string',
        minLength: 5,
      },
    },
    multipleChoicesList: {
      type: 'array',
      title: 'Pick max two items',
      uniqueItems: true,
      maxItems: 2,
      items: {
        type: 'string',
        enum: ['foo', 'bar', 'fuzz'],
      },
    },
  },
};

const uiSchema = {}

const formData = {
  // firstName: 'Chuck',
  // active: 'wrong',
  // skills: ['karate', 'budo', 'aikido'],
  // multipleChoicesList: ['foo', 'bar', 'fuzz'],
};
