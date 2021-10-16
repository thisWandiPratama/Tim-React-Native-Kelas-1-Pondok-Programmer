const RegisterSocial = require("./RegisterSocial")
// @ponicode
describe("empty", () => {
    let inst

    beforeEach(() => {
        inst = new RegisterSocial.RegisterSocial()
    })

    test("0", () => {
        let callFunction = () => {
            inst.empty()
        }
    
        expect(callFunction).not.toThrow()
    })
})
