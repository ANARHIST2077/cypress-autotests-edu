import { Page } from "../pages/Page"
describe('сайт с API', () => {
  it('проверка апи', () => {
    cy.fixture('data').then((data) => {
      const page = new Page()
      
      page.visit(data.urlAPI)
      
      cy.intercept('GET','**api*', {
        statusCode: 200,
        body:{
          "results": [
              {
                  "gender": "female",
                  "name": {
                      "title": "TEST",
                      "first": "TESTOV",
                      "last": "TESTOVICH"
                  },
                  "location": {
                      "street": {
                          "number": 4629,
                          "name": "Groveland Terrace"
                      },
                      "city": "Sunshine Coast",
                      "state": "Northern Territory",
                      "country": "Australia",
                      "postcode": 6024,
                      "coordinates": {
                          "latitude": "-89.6761",
                          "longitude": "34.0044"
                      },
                      "timezone": {
                          "offset": "-6:00",
                          "description": "Central Time (US & Canada), Mexico City"
                      }
                  },
                  "email": "katie.olson@example.com",
                  "login": {
                      "uuid": "8af375c5-d12f-4982-bed8-cef222651eea",
                      "username": "orangerabbit939",
                      "password": "sliver",
                      "salt": "fl8KHjT4",
                      "md5": "3471e106eb473686e651ad90aa8b04de",
                      "sha1": "fc3e94f9d336b03d18df76bed8252ab3580bb98c",
                      "sha256": "a16c2a8c58c9349a77916e4aed3eca095b0bd57eea9667660710aac8736a3966"
                  },
                  "dob": {
                      "date": "1999-02-01T12:35:49.372Z",
                      "age": 27
                  },
                  "registered": {
                      "date": "2004-12-09T02:50:07.103Z",
                      "age": 21
                  },
                  "phone": "01-3308-8662",
                  "cell": "0446-681-244",
                  "id": {
                      "name": "TFN",
                      "value": "224474639"
                  },
                  "picture": {
                      "large": "https://randomuser.me/api/portraits/women/14.jpg",
                      "medium": "https://randomuser.me/api/portraits/med/women/14.jpg",
                      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/14.jpg"
                  },
                  "nat": "AU"
              }
          ],
          "info": {
              "seed": "1755cba743099a20",
              "results": 1,
              "page": 1,
              "version": "1.4"
          }
      }
      }).as('mockedAPI')
      page.clickBtnSignalMySite()
      cy.wait('@mockedAPI').then((res) => {
        expect(res.response.body.results[0].name).to.deep.include({
          title:'TEST',
          first:'TESTOV',
          last:'TESTOVICH'
        })
      })
    })
  })
})