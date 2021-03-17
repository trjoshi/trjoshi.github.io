package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import model.DbConnection;
import model.Dictionary;
import com.google.gson.*;

//@WebServlet("/dictServlet")
public class dictServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private DbConnection dbcon;

	public dictServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void init() throws ServletException {
		dbcon = new DbConnection("jdbc:mysql://localhost:3306/entries", "root", "root@1234");
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		// response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		PrintWriter writer = response.getWriter();
		String jsonPostRequest = request.getParameter("jsonPostRequest");

		String result = jsonPostRequest.substring(9, jsonPostRequest.indexOf("}") - 1);

//		String word = "";
		String wordType = "";
		String definition = "";
		String returnString = "";
		int i = 0;
		Hashtable<Integer, String> returnData = new Hashtable<>();
		try {

			List<Dictionary> dictionaries = dbcon.listAll(result);
			for (Dictionary dictionary : dictionaries) {
				i++;
				// word = dictionary.getWord();
				wordType = dictionary.getWordType();
				definition = dictionary.getDefinition();
				returnString = i + "(" + wordType + ")" + " :: " + definition + "\n" + "\n";
				returnData.put(i, returnString);
				// System.out.println(word + "\n" + wordType + "\n" + definition);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		// System.out.println(returnData);
		Gson gson = new Gson();
		String jsonData = gson.toJson(returnData);
		System.out.println(returnData);
		 System.out.println(jsonData);
		System.out.println(jsonData.toString());
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(jsonData);

	}

}
