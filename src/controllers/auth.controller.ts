import { Request, Response } from "express";
import { config } from "../configs";

import {
  failureResponse,
  getAxiosConfig,
  getTokenInHeaders,
  successResponse,
} from "../utils";
import axios from "axios";

export const verifyLogin = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const accessToken = getTokenInHeaders(req);
    if (!accessToken) {
      return failureResponse({
        res,
        status: 401,
        message: "TOKEN_MISING_OR_INVALID",
      });
    }
    const response = await axios.get(
      `${config.BACK_ACCOUNT_URL}/auth/me`,
      getAxiosConfig(req)
    );
    return successResponse({ res, data: { ...response.data } });
  } catch (error) {
    return failureResponse({ res });
  }
};

export const logout = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response = await axios.get(
      `${config.BACK_ACCOUNT_URL}/auth/logout`,
      getAxiosConfig(req)
    );
    return successResponse({ res, data: { ...response.data } });
  } catch (error) {
    return failureResponse({ res });
  }
};
