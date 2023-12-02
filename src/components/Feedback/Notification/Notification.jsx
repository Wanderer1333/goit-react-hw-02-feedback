export const Notification = ({ message }) => (
  <h2
    style={{
      textAlign: 'center',
      margin: 8,
      padding: '12px 16px',
      borderRadius: 4,
      backgroundColor: 'gray',
      color: 'white',
    }}
  >
    {message}
  </h2>
);
