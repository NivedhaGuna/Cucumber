package org.utilities;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReports {

	public static void generateJvmReport(String jsonPath) {
		File f = new File(System.getProperty("user.dir")+"\\target\\Reports\\Foodee");
		Configuration con = new Configuration(f, "Foodee Project");
		con.addClassifications("Browser Name", "Firefox");
		con.addClassifications("Browser version", "117");
		con.addClassifications("Os", "Windows11");
		con.addClassifications("Sprint", "101");
		con.addClassifications("Time zone", "IST");
		
		List<String> li = new ArrayList<String>();
	
		ReportBuilder r = new ReportBuilder(li, con);
		r.generateReports();
	}
}
