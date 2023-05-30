import { useState, useEffect } from "react";
import Wrapper from "../Wrapper";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const purchaseCreate = () => {
  return (
    <>
      <Wrapper>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  placeholder="date"
                >
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  placeholder="Invoice No."
                >
                  Invoice No.
                </label>
                <input
                  id="invoice_no"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  placeholder="Supplier"
                >
                  Supplier
                </label>
                <select
                  name="role_id"
                  className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold"
                  onChange={(event) => {
                    getRoleId(event.target.value);
                  }}
                >
                  {roles.map((role: Role) => {
                    return (
                      <option key={role.id} value={role.id}>
                        {role.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  placeholder="passwordConfirmation"
                >
                  Password Confirmation
                </label>
                <input
                  id="passwordConfirmation"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Save
              </button>
            </div>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default purchaseCreate;
