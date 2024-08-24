package com.test.BackendEduConsultancy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class BackendEduConsultancyApplication extends SpringBootServletInitializer {
	
	private static Class applicationClass = BackendEduConsultancyApplication.class;

	public static void main(String[] args) {
		SpringApplication.run(BackendEduConsultancyApplication.class, args);
	}
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(applicationClass);
	}

}
