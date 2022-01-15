import { Form, useTransition } from 'remix';

export const Search = () => {
  const { state } = useTransition();

  return (
    <Form method="post">
      <input
        type="text"
        name="username"
        placeholder="Search Github"
        disabled={state === 'submitting'}
      />
      <button type="submit" disabled={state === 'submitting'}>
        Search
      </button>
    </Form>
  );
};
