package cz.marek_b.token.authenticator.service;

import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import javax.ejb.Stateless;

@Stateless
public class UserServiceImpl implements UserService {

    private final Map<String, Date> tokens = new HashMap<>();

    @Override
    public boolean authenticate(String username, String password) {
        return "test".equals(password);
    }

    @Override
    public String generateToken() {
        Random random = new SecureRandom();
        String token = new BigInteger(130, random).toString(32);

        tokens.put(token, new Date(System.currentTimeMillis() + 60*60*1000));

        return token;
    }

    @Override
    public boolean validateToken(String token) {
        return token != null && tokens.containsKey(token) && tokens.get(token).before(new Date());
    }

}
