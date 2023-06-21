package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//import io.cucumber.junit.CucumberOptions;
//import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"C:\\QA\\SeleniumWorkSpace\\CucumberFreeCRMProject\\src\\test\\java\\features\\contacts.feature"},//the path of the feature files
		glue={"stepdefinations"}, //step Defination Package Name
		format={"pretty","html:test-output", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},
		monochrome = true, //display the console output in a proper readable format
		strict = true, //It will check if any step is not defined in step defination file
		dryRun = false // To check the mapping is proper between feature file and step def file
		)

public class TestRunner {

}
