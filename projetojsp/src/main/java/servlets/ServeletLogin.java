package servlets;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@WebServlet("/ServletLogin")
public class ServeletLogin extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String idade;
	private String nome;
       

    public ServeletLogin() {
        super();
       
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	 
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	 
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		 
	
		
		System.out.println(request.getParameter(nome));
		System.out.println(request.getParameter(idade));
	}

}
