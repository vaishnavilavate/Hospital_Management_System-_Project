package com.app.config;

import java.util.Arrays;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.app.filters.JWTRequestFilter;

@EnableWebSecurity
@Configuration
public class WebSecurityConfig {

    @Autowired
    private JWTRequestFilter filter;

    // Password encoder
    @Bean
    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
            .cors()                         // ✅ enable CORS
            .and()
            .csrf().disable()               // ✅ disable CSRF
            .exceptionHandling()
            .authenticationEntryPoint((request, response, ex) -> {
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, ex.getMessage());
            })
            .and()
            .authorizeRequests()

            // Swagger
            .antMatchers(
                "/v3/api-docs/**",
                "/swagger-ui/**",
                "/swagger-resources/**",
                "/webjars/**",
                "/swagger-ui.html"
            ).permitAll()

            // Public APIs
            .antMatchers("/patient/registerPatient").permitAll()
            .antMatchers("/admin/getAllSpecialization").permitAll()
            .antMatchers("/patient/getDoctorsBySpecialization/**").permitAll()
            .antMatchers("/", "/login", "/register").permitAll()
            .antMatchers("/login").permitAll()

            // Roles
            .antMatchers("/admin/**").hasRole("ADMIN")
            .antMatchers("/patient/**").hasRole("PATIENT")
            .antMatchers("/doctor/**").hasRole("DOCTOR")
            .antMatchers("/receptionist/**").hasRole("RECEPTIONIST")

            // CORS preflight
            .antMatchers(HttpMethod.OPTIONS).permitAll()

            .anyRequest().authenticated()
            .and()
            .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    // ✅ THIS MUST BE INSIDE THE CLASS
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();

        config.setAllowedOrigins(Arrays.asList(
            "https://hospital-management-system-project-13.onrender.com"
        ));

        config.setAllowedMethods(Arrays.asList(
            "GET", "POST", "PUT", "DELETE", "OPTIONS"
        ));

        config.setAllowedHeaders(Arrays.asList("*"));
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source =
                new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        return source;
    }

    @Bean
    public AuthenticationManager authenticatonMgr(AuthenticationConfiguration config)
            throws Exception {
        return config.getAuthenticationManager();
    }
}


