import React from "react";
import form from "../../assets/form.png";

const AlumniForm = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 ">
      <div className="flex w-2/3 bg-purple-500 p-8 rounded-lg  space-x-8 items-center">
        <img
          src={form}
          alt="Form Illustration"
          className="w-1/2 h-auto rounded-lg"
        />
        <div className="w-full max-w-md p-8 space-y-6 rounded-xl bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
          <h1 className="text-2xl  font-bold text-center">
            Enter Alumni Details Here..!
          </h1>
          <form noValidate="" action="" className="space-y-6">
            <div className="space-y-1 text-sm">
              <label
                htmlFor="name"
                className="block text-gray-400 dark:text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="email"
                className="block text-gray-400 dark:text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="DOB"
                className="block text-gray-400 dark:text-gray-600"
              >
                DOB
              </label>
              <input
                type="text"
                name="DOB"
                id="DOB"
                placeholder="Date Of Birth"
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="MobileNumber"
                className="block text-gray-400 dark:text-gray-600"
              >
                Mobile Number
              </label>
              <input
                type="number"
                name="MobileNumber"
                id="MobileNumber"
                placeholder="Mobile Number"
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="City"
                className="block text-gray-400 dark:text-gray-600"
              >
                City
              </label>
              <input
                type="text"
                name="City"
                id="City"
                placeholder="City"
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
              />
            </div>
            <button className="block w-full p-3 text-center rounded-sm text-gray-900 dark:text-gray-50 bg-purple-600 dark:bg-purple-600">
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AlumniForm;
