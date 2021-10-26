import reducer from "./auth";
import * as actionType from "../actions/actionTypes";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      loading: false,
      localId: null,
      idToken: null,
      error: null,
      authRedirectPath: "/",
    });
  });

  it("should store token up login", () => {
    expect(
      reducer(
        {
          loading: false,
          localId: null,
          idToken: null,
          error: null,
          authRedirectPath: "/",
        },
        {
          type: actionType.AUTH_SUCCESS,
          idToken: "some-token",
          localId: "some-local-id",
        }
      )
    ).toEqual({
      loading: false,
      localId: "some-local-id",
      idToken: "some-token",
      error: null,
      authRedirectPath: "/",
    });
  });
});
