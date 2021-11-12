let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../index');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Base Express Test Unit', () => {
    /*
      * Test the /GET route
      */
    describe('/GET test', () => {
        it('it should GET test server', (done) => {
            chai.request(server)
                .get('/test')
                .end((err, res) => {
                    res.should.have.status(200);
                    var response = res.body
                    response.rc.should.be.eql('00');
                    done();
                });
        });
    });

});