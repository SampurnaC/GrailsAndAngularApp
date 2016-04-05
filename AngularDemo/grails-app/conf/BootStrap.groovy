import com.angularDemo.Mail

class BootStrap {

    def init = { servletContext ->
        new Mail(mailFrom: 'sam@sam.com', mailTo: 'bpn@bpn.com', subject: 'test', body: 'this is a test message', sentAt: new Date()).save()

    }
    def destroy = {
    }
}
