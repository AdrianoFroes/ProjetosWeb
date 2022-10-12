package br.com.softblue.loucademia.application.uti;

public class validation {
	
	 public static void assertNotEmpty(Object obj) {
		 if(obj instanceof String) {
			 String s = (String)obj;
			 if(StringUtils.isEmpty(s)) {
				 throw new ValidationException("O texto não pode ser nulo");
				 
			 }
		 }
		 
		 if(obj == null) {
			 throw new ValidationException("Valor não pode ser nulo");
		 }
		 
	 }

}
