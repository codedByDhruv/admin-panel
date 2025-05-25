import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>
      <Button type="primary" onClick={() => navigate("/")}>
        Back to Dashboard
      </Button>
    </div>
  );
};

export default NotFound;
