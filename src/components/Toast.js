// Toast Notification Component
function Toast({ notification }) {
  if (!notification) return null;

  return (
    <div
      className={`fixed top-20 right-4 p-3 rounded-lg shadow-lg transition-transform duration-300 z-50 ${
        notification.type === "add" ? "bg-green-500" : "bg-red-500"
      } text-white`}
      style={{ zIndex: 9999 }}
    >
      {notification.message}
    </div>
  );
}

export default Toast;
