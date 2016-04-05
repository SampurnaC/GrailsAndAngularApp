package com.angularDemo

import grails.transaction.Transactional

@Transactional
class MailService {

    def serviceMethod() {

    }
    def create(def mailDto) {
        def mail1 = new Mail(mailFrom: mailDto.mailFrom, mailTo: mailDto.mailTo, subject: mailDto.subject, body: mailDto.body, sentAt: new Date())
        mail1.save()
    }
    def getAllMail(){
        Mail.findAll()
    }
    }

