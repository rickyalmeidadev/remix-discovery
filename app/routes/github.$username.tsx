import {
  ActionFunction,
  ErrorBoundaryComponent,
  LoaderFunction,
  redirect,
  useLoaderData,
} from 'remix';
import invariant from 'tiny-invariant';
import {
  ErrorMessage,
  getUserByUsername,
  Profile,
  Search,
  User,
} from '~/modules/github';

export interface LoaderData {
  user: User;
}

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.username, 'username is required');

  const user = await getUserByUsername(params.username);

  return { user };
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const username = form.get('username');

  return redirect(`/github/${username}`);
};

const Github = () => {
  const { user } = useLoaderData<LoaderData>();

  return (
    <>
      <Search />
      <Profile user={user} />
    </>
  );
};

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorMessage error={error} />
);

export default Github;
