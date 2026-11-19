package com.example.UserManagementProject.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.UserManagementProject.entity.Employee;
import com.example.UserManagementProject.service.EmployeeService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
@RequestMapping("/api/employees")
public class UserController {
	
	private final EmployeeService employeeService;
	
	@PostMapping
	public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee)
	{
	 Employee employye = employeeService.addEmployye(employee);
	 return new ResponseEntity<Employee>(employye,HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<Employee>> getEmployees()
	{
		 return new ResponseEntity<List<Employee>>(employeeService.allEmployees(),HttpStatus.CREATED);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id)
	{
		return new ResponseEntity<Employee>(employeeService.getEmploeeById(id),HttpStatus.OK);
	}
	@PutMapping("{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee employee)
	{
		Employee existingEmployee = employeeService.getEmploeeById(id);
		existingEmployee.setFirstName(employee.getFirstName());
		existingEmployee.setLastName(employee.getLastName());
		existingEmployee.setEmail(employee.getEmail());
		
		return new ResponseEntity<Employee>(employeeService.addEmployye(existingEmployee),HttpStatus.OK);
	}

	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable Long id)
	{
		employeeService.deleteEmployee(id);
		return new ResponseEntity<String>("Employee deleted successfully",HttpStatus.OK);
	}

}
