/* eslint-disable react/prop-types */
export default function Button({ children, type, dispatch, disable }) {
  return (
    <button onClick={() => dispatch({ type: type })} disabled={disable}>
      {children}
    </button>
  );
}
