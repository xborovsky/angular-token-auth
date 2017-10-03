package cz.marek_b.token.authenticator.endpoint;

import cz.marek_b.token.authenticator.security.Secured;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("test")
public class TestEndpoint {

    @GET
    @Path("secured")
    @Secured
    @Produces(MediaType.APPLICATION_JSON)
    public String secured() {
        return "secured";
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("non-secured")
    public String nonSecured() {
        return "non-secured";
    }

}
