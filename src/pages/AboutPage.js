import React from "react";
import { Link } from "react-router-dom";
import Button from "../shared/Button";
import Card from "../shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>
          This is a React App to leave afeedback for a project or a service.
        </p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">
            <Button version="primary" isDisabled={false} >
                Back To Home
            </Button>
          </Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
