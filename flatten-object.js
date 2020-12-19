const data = {
  stories: [
    {
      id: 1,
      errors: ['Story do not start with a user message'],
      messages: [
        {
          id: 1,
          conditions: [
            {
              errors: ['Context is not set'],
            },
          ],
          errors: ['Context variable has no value', 'Cannot execute action'],
          user_message_intent: {
            id: 1,
            errors: ['Intent has less than 5 phrases'],
            context_variables: [
              {
                name: 'name',
                errors: ['Invalid data_type: dummy', 'Categorical context has no values'],
              },
            ],
          },
          bot_message_action: {
            id: 1,
            context_variables: [
              {
                name: 'name',
                errors: [],
              },
            ],
            errors: [
              'Invalid query',
              'Invalid API call: ...',
              'Invalid parameters: ...',
              'Invalid method',
              'invalid URL',
            ],
            sql_query: {
              errors: ['Could not run query'],
            },
          },
          bot_message_response: {
            id: 1,
            errors: ['There are less than 5 phrases', 'There is an empty phrase'],
            context_variables: [
              {
                name: 'name',
                errors: [],
              },
            ],
          },
        },
      ],
    },
  ],
}

const flattenObject = (obj, prevKey = '', prevResult = {}) => {
  let result = prevResult
  for (let [key, value] of Object.entries(obj)) {
    const combinedKey = prevKey ? `${prevKey}.${key}` : `${key}`
    if (typeof value === 'object') {
      flattenObject(value, combinedKey, prevResult)
    } else {
      result[combinedKey] = value
    }
  }
  return result
}

console.log(JSON.stringify(flattenObject(data), null, 4))
