<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Curso JSP</title>
</head>
<body>
<h1>JAVA JSP</h1>

<%
 out.print("SYSTEM");

%>


<form action="ServletLogin" method="post">
<input name="login" type="text">
<input name="senha" type="password">


<input type="submit" value="Enviar">

</form>
</body>
</html>