package com.angularDemo

import grails.converters.JSON

import javax.servlet.http.HttpServletRequest
import javax.ws.rs.Consumes
import javax.ws.rs.GET
import javax.ws.rs.POST
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.core.Context

@Path('/api/mail')
@Produces(['application/xml', 'application/json'])
class MailResource {

    def mailService

    @GET
    @Produces('text/plain')
    String getMailRepresentation() {
        'MailResource'
    }

    @GET
    @Path('/getAllMail')
    def readAllMail(){
        mailService.getAllMail()
    }

    @POST
    @Path('/createMail')
    @Consumes(['application/json'])
    def create(@Context HttpServletRequest request){
        def params = JSON.parse request
        mailService.create(params)
    }


}
