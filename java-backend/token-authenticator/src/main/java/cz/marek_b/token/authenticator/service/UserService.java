package cz.marek_b.token.authenticator.service;

public interface UserService {

    boolean authenticate(String username, String password);

    String generateToken();

    boolean validateToken(String token);

}
