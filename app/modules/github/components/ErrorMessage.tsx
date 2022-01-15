export interface ErrorBoundaryProps {
  error: Error;
}

export const ErrorMessage = ({ error }: ErrorBoundaryProps) => (
  <div>
    <h1>ErrorBoundary</h1>
    <p>{error.message}</p>
  </div>
);
