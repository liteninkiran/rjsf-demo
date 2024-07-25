import Form from '@rjsf/bootstrap-4';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

const Demo2 = () => {
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
export default Demo2;

const schema: RJSFSchema = {
  title: 'A registration form',
  description: 'A simple form example.',
  type: 'object',
  required: ['firstName', 'lastName'],
  properties: {
    firstName: {
      type: 'string',
      title: 'First name',
      // default: 'Chuck',
    },
    lastName: {
      type: 'string',
      title: 'Last name',
    },
    age: {
      type: 'integer',
      title: 'Age',
    },
    bio: {
      type: 'string',
      title: 'Bio',
    },
    password: {
      type: 'string',
      title: 'Password',
      minLength: 3,
    },
    telephone: {
      type: 'string',
      title: 'Telephone',
      minLength: 10,
    },
  },
};

const uiSchema = {
  firstName: {
    'ui:autofocus': true,
    'ui:placeholder': 'Enter you first name',
    'ui:autocomplete': 'family-name',
    'ui:enableMarkdownInDescription': true,
    'ui:description': 'Make text **bold** or *italic*.',
  },
  lastName: {
    'ui:autocomplete': 'given-name',
    'ui:placeholder': 'Enter you last name',
    'ui:enableMarkdownInDescription': true,
    'ui:description': 'Make things **bold** or *italic*.',
  },
  age: {
    'ui:widget': 'updown',
    'ui:title': 'Age of person',
    'ui:description': '(earth year)',
  },
  bio: {
    'ui:widget': 'textarea',
  },
  password: {
    'ui:widget': 'password',
    'ui:help': 'Hint: Make it strong!',
  },
  telephone: {
    'ui:options': {
      inputType: 'tel',
    },
  },
};

const formData = {
  // lastName: 'Norris',
  // age: 75,
  // bio: 'Roundhouse kicking asses since 1940',
  // password: 'noneed',
  // telephone: '1-800-KICKASS',
};
