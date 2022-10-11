<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" import="java.util.*, java.text.*"%>
    
    <%!
    public String pegaMes(int mes){
    	String mesRetorno = "";
    	switch(mes){
    	case 1:
    		mesRetorno = "Janeiro";
    		break;
     	case 2:
    		mesRetorno = "Fervereiro";
    		break;
     	case 3:
    		mesRetorno = "Março";
    		break;
     	case 4:
    		mesRetorno = "Abril";
    		break;
     	case 5:
    		mesRetorno = "Maio";
    		break;
     	case 6:
    		mesRetorno = "Junho";
    		break;
     	case 7:
    		mesRetorno = "Julho";
    		break;
     	case 8:
    		mesRetorno = "Agosto";
    		break;
     	case 9:
    		mesRetorno = "Setembro";
    		break;
     	case 10:
    		mesRetorno = "Outubro";
    		break;
     	case 11:
    		mesRetorno = "Novembro";
    		break;
     	case 12:
    		mesRetorno = "Dezembro";
    		break;
    	
    	}
    	
    	return "mesRetorno";
    }
    
    %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>SystemaWeb</title>
</head>
<body>
    <h1>Dia e Mes</h1>
    <br>
    <%
      int mesdoano = Integer.parseInt((new SimpleDateFormat("MM")).format(new Date()));
    
    %>
    Estamos no mes: <%= pegaMes(mesdoano) %>
    
</body>
</html>