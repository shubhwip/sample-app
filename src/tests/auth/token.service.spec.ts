/* eslint-disable import/no-unresolved */
//@ts-ignore
import { TokenServiceBase } from "../../auth/base/token.service.base";
import {
  INVALID_USERNAME_ERROR,
  INVALID_PASSWORD_ERROR,
  //@ts-ignore
} from "../../auth/constants";

describe("Testing the TokenServiceBase", () => {
  let tokenServiceBase: TokenServiceBase;
  beforeEach(() => {
    tokenServiceBase = new TokenServiceBase();
  });
  describe("Testing the BasicTokenService.createToken()", () => {
    it("should create valid token for given username and password", async () => {
      //@ts-ignore
      const tokenPayload: ITokenPayload = {
        username: "admin",
        password: "admin",
      };
      expect(await tokenServiceBase.createToken(tokenPayload)).toBe(
        "YWRtaW46YWRtaW4="
      );
    });
    it("should reject when username missing", () => {
      //@ts-ignore
      const tokenPayload: ITokenPayload = {
        password: "admin",
        id: "1",
      };
      const result = tokenServiceBase.createToken(tokenPayload);
      return expect(result).rejects.toBe(INVALID_USERNAME_ERROR);
    });
    it("should reject when password missing", () => {
      //@ts-ignore
      const tokenPayload: ITokenPayload = {
        username: "admin",
        id: "1",
      };
      const result = tokenServiceBase.createToken(tokenPayload);
      return expect(result).rejects.toBe(INVALID_PASSWORD_ERROR);
    });
  });
});
