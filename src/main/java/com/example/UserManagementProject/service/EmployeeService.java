package com.example.UserManagementProject.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.UserManagementProject.entity.Employee;
import com.example.UserManagementProject.repository.EmployeeRepo;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmployeeService {
	
	private final EmployeeRepo employeeRepo;
	
	public Employee addEmployye(Employee employee)
	{
		return employeeRepo.saveAndFlush(employee);
	}
	public List<Employee> allEmployees()
	{
		return employeeRepo.findAll();
	}
    public Employee  getEmploeeById(Long id)
    {
    	return employeeRepo.findById(id).orElseThrow(()-> new RuntimeException("Employee not found with id: "+id));
    }
    public void deleteEmployee(Long id)
	{
		employeeRepo.deleteById(id);
	}
}
