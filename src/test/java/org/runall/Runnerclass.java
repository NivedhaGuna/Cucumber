package org.runall;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.utilities.JVMReports;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\FeatureFile", glue = "org.steps",
dryRun = false, monochrome = true, snippets = SnippetType.CAMELCASE,
plugin = {"html:target\\Reports",
		  "junit:target\\Reports\\foodee.xml",
		  "json:target\\Reports\\food.json"})

public class Runnerclass extends JVMReports {

	@AfterClass
	public static void callReport() {
		
		generateJvmReport(System.getProperty("user.dir")+"target\\Reports\\food.json");

	}
}
