import React from 'react';
import TruckerRegisterForm from '../components/auth/TruckerRegisterForm';

const TruckerRegisterPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-extrabold text-gray-900">
          TruckLoading App
        </h1>
        <h2 className="mt-2 text-center text-sm text-gray-600">
          Create your trucker account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <TruckerRegisterForm />
      </div>
    </div>
  );
};

export default TruckerRegisterPage; 