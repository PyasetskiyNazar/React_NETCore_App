# React_NETCore_App
This is a full stack web application from scratch using Microsoft SQL server for the database, .NET Core Web API for the backend, and React JS for the front end.
First create the database tables required for our app.
We need two tables for our app.
One to store department details and another one to store employee details.

CREATE TABLE [dbo].[Department](
	[DepartmentId] [int] IDENTITY(1,1),
	[DepartmentName] [nvarchar](500)
)

CREATE TABLE [dbo].[Employee](
	[EmployeeId] [int] IDENTITY(1,1) ,
	[EmployeeName] [nvarchar](500) ,
	[Department] [nvarchar](500) ,
	[DateOfJoining] [datetime] ,
	[PhotoFileName] [nvarchar](500) 
)

The WebApplication1 folder is a back-end and  the UI/my-app folder - frontend
