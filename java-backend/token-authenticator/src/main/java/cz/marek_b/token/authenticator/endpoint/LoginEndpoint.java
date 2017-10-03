package cz.marek_b.token.authenticator.endpoint;

import cz.marek_b.token.authenticator.service.UserService;
import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

@Path("login")
public class LoginEndpoint {

    @EJB
    private UserService userService;

    @POST
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces(MediaType.APPLICATION_JSON)
    public Response authenticate(@FormParam("username") String username,
            @FormParam("password") String password) {
        if (userService.authenticate(username, password)) {
            return Response.ok(userService.generateToken()).build();
        } else {
            return Response.status(Status.UNAUTHORIZED).build();
        }
    }

}
