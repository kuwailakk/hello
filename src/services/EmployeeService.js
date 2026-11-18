import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

export const ListEmployees = () =>{
    return axios.get(REST_API_BASE_URL);
}

export const CreateEmployee = (employee) => {
    return axios.post(REST_API_BASE_URL, employee);
}

export const GetEmployeeById = (id) => {
    return axios.get(`${REST_API_BASE_URL}/${id}`);
}

export const UpdateEmployee = (id, employee) => {
    return axios.put(`${REST_API_BASE_URL}/${id}`, employee);
}

export const DeleteEmployee = (id) => {
    return axios.delete(`${REST_API_BASE_URL}/${id}`);
}